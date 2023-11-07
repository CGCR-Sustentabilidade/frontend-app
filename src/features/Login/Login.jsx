import React, { useState } from "react";
import {
  BackgroundDiv,
  Form,
  Text,
  SubTitle,
  Title,
  ErrorMessage,
} from "./Login.styled";
import { Input } from "../../components/Input/Input";
import Button from "../../components/Button/Button";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [formErrors, setFormErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    setFormErrors({
      ...formErrors,
      [name]: "", 
    });
  };

  const validateForm = () => {
    const errors = {};

    if (!formData.email) {
      errors.email = "Campo de email é obrigatório";
    }

    if (!formData.password) {
      errors.password = "Campo de senha é obrigatório";
    }

    setFormErrors(errors);

    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      // Faz o login e vai pra home
    }
  };

  return (
    <BackgroundDiv>
      <Form onSubmit={handleSubmit}>
        <Title>CGCR</Title>
        <SubTitle>Login</SubTitle>
        <Text>Digite seu usuário e senha para acessar sua conta.</Text>
        <Input
          type="text"
          name="email"
          placeholder="Digite seu e-mail"
          label="E-mail:"
          value={formData.email}
          onChange={handleInputChange}
        />
        {formErrors.email && (
          <ErrorMessage className="error-message">
            {formErrors.email}
          </ErrorMessage>
        )}
        <Input
          type="password"
          name="password"
          placeholder="Digite sua senha"
          label="Senha:"
          value={formData.password}
          onChange={handleInputChange}
        />
        {formErrors.password && (
          <ErrorMessage className="error-message">
            {formErrors.password}
          </ErrorMessage>
        )}
        <Button title="Entrar" type="submit" id="Form" />
        <Text>Esqueceu sua senha? <a href="">Redefinir senha</a></Text>
      </Form>
    </BackgroundDiv>
  );
};

export default Login;
