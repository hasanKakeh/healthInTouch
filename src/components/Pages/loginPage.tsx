import LoginForm from "../organisms/loginForm";
import LoginTemplate from "../Templators/loginTemplate";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
export interface LoginPageProps {}

const LoginPage: React.FC<LoginPageProps> = () => {
  return (
    <LoginTemplate>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar
        newestOnTop={false}
        style={{marginTop:40}}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      ></ToastContainer>
      <LoginForm />
    </LoginTemplate>
  );
};

export default LoginPage;
