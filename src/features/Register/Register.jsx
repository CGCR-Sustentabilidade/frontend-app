import React, { useState } from "react";
import {
    BackgroundDiv,
    Form,
    Text,
    SubTitle,
    Title,
    ErrorMessage,
} from "./Register.styled"; // Certifique-se de importar os estilos apropriados
import { Input } from "../../components/Input/Input";
import Button from "../../components/Button/Button";

const Register = () => {
    const [formData, setFormData] = useState({
        email: "",
        confirmEmail: "",
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

    const validateEmail = (email) => {
        const emailRegex = /^\S+@\S+\.\S+$/;
        return emailRegex.test(email);
    };

    const validateForm = () => {
        const errors = {};

        if (!formData.email) {
            errors.email = "Campo de e-mail é obrigatório";
        } else if (!validateEmail(formData.email)) {
            errors.email = "Formato de e-mail inválido";
        }

        if (formData.email !== formData.confirmEmail) {
            errors.confirmEmail = "Os emails não coincidem";
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
            // Faça o registro do usuário
        }
    };

    return (
        <BackgroundDiv>
            <Form onSubmit={handleSubmit}>
                <Title>CGCR</Title>
                <SubTitle>Registro</SubTitle>
                <Text>Preencha os campos abaixo para criar uma conta.</Text>
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
                    type="text"
                    name="confirmEmail"
                    placeholder="Confirme seu e-mail"
                    label="Confirme o E-mail:"
                    value={formData.confirmEmail}
                    onChange={handleInputChange}
                />
                {formErrors.confirmEmail && (
                    <ErrorMessage className="error-message">
                        {formErrors.confirmEmail}
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
                <Button title="Registrar" type="submit" id="Form" />
                {/* Adicione outros elementos conforme necessário */}
            </Form>
        </BackgroundDiv>
    );
};

export default Register;