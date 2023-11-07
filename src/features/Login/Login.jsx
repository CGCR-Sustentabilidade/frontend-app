import { BackgroundDiv, Form, Text, SubTitle, Title } from "./Login.styled";
import {Input} from '../../components/Input/Input';
import Button from '../../components/Button/Button';

const Login = () => {
  return (
    <BackgroundDiv>
      <Form>
        <Title>CGCR</Title>
        <SubTitle>Login</SubTitle>
        <Text>Digete seu usuário e senha para acessar sua conta.</Text>
        <Input type='text' placeholder={"Digite seu e-mail"} label={'E-mail:'} />
        <Input type='password' placeholder={"Digite sua senha"} label={"Senha:"}/>
        <Button title={"Entrar"} type="submit" id="Form" />
      </Form>
    </BackgroundDiv>
  );
};

export default Login;
