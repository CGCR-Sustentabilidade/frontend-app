import { BackgroundDiv, Form } from "./Login.styled";
import {Input} from '../../components/Input/Input';
import Button from '../../components/Button/Button';

const Login = () => {
  return (
    <BackgroundDiv>
      <Form>
        <h1>CGCR</h1>
        <p>Login</p>
        <span>Digete seu usuário e senha para acessar sua conta.</span>
        <Input type='text' placeholder={"Digite seu e-mail"} label={'E-mail:'} />
        <Input type='password' placeholder={"Digite sua senha"} label={"Senha:"}/>
        <Button title={"Entrar"} type="submit" id="Form" />
      </Form>
    </BackgroundDiv>
  );
};

export default Login;
