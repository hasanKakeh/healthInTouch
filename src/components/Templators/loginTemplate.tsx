import { Container } from "@material-ui/core";
import styled from "styled-components";

export interface LoginTemplateProps {
    children?:any;
}
 
const LoginTemplate: React.FC<LoginTemplateProps> = ({children}) => {
    return (<Container maxWidth="sm">
        <Div>{children}</Div>
    </Container>  );
}
 const Div=styled.div`
 margin-top:60px ;
 padding:0 86px;`;
export default LoginTemplate;