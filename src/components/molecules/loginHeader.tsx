import { LabelProps, LabelSubTitle, TitleLabel } from "../atoms/label";
import styled from "styled-components";

export interface LoginHeaderProps {}

const LoginHeader: React.FC<LoginHeaderProps> = () => {
  return (
    <Wrapdiv>
      <TitleLabel text="Login" />
      <WrapSubTitle>
        <LabelSubTitle text="Please Enter Your Email & Password " />
      </WrapSubTitle>
    </Wrapdiv>
  );
};

const Wrapdiv: React.FC = styled.div`
  text-align: center;
  margin: 60px 0;
`;

const WrapSubTitle: React.FC = styled.div`margin-top:5px`;

export default LoginHeader;
