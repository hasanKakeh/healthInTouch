import { List } from "@material-ui/core";
import styled from "styled-components";
import Card from "../molecules/card";

export interface ListCardsProps {
    items:Array<{id:number,title:string,description:string,likeNum:number}>;
   // updateLike:(e:any,x:any)=>void;
}
 
const ListCards: React.FC<ListCardsProps> = ({items}) => {
    return ( 
    <Div>
    <List>
        {items.map((item,index)=>{return(<Card id={item.id} title={item.title} description={item.description}  likeNumber={item.likeNum} key={index} marginTop={12}></Card>)})}
    </List> </Div>);
}
const Div=styled.div`
width:100%;
display:flex;
justify-content:center;
`;
 
export default ListCards;