import { Container } from "@material-ui/core";
import styled from "styled-components";

export interface SearchTemplateProps {
    filterBox:any;
    searchBox:any;
    selectedBox:any;
    listCards:any;
}

const SearchTemplate: React.SFC<SearchTemplateProps> = ({searchBox,selectedBox,filterBox,listCards}) => {
  return (
    <Container maxWidth="xl">
      <Container maxWidth="sm">
        <div
          style={{
            marginTop: 32,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <BoxDiv >{searchBox}</BoxDiv>
          <BoxDiv style={{ marginTop: 64 }} >{selectedBox}</BoxDiv>
        </div>
      </Container>

      <div style={{ display: "flex", position: "relative" }}>
        <div
          style={{
            backgroundColor: "#A9D2F4",
            position: "absolute",
            maxWidth: 255,
            padding:"16px  12px 60px 12px",
          
          }}
        >{filterBox}</div>
        <Container maxWidth="sm">
         {listCards}
        </Container>
      </div>
    </Container>
  );
};
const Div = styled.div`
  background-color: #cfe8fc;
  height: 100vh;
  margin-top: 12px;
`;

const BoxDiv = styled.div`
 
  width: 100%;
  
`;
export default SearchTemplate;
