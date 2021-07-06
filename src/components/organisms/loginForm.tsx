import { ButtonSubmit } from "../atoms/buttons";
import LoginHeader from "../molecules/loginHeader";
import LoginInput from "../molecules/loginInputs";
import styled from "styled-components";
import Container from "@material-ui/core/Container";
export interface LoginFormProps {}

const LoginForm: React.FC<LoginFormProps> = () => {

  return (
    <Div>
      <LoginHeader />
      <LoginInput />
     
    </Div>
  );
};

const Div: React.FC = styled.div`
  text-align: center;
 
 
`;

export default LoginForm;
