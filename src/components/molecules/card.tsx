import { CardActions, CardContent, CardMedia } from "@material-ui/core";
import MuiCard from "@material-ui/core/Card";
import { useContext, useState } from "react";

import styled from "styled-components";
import PrimaryLabel from "../atoms/label";
import { CardLabel, LabelSubTitle } from "../atoms/label";
import { LikeContext } from "../Pages/searchPage";
import { FavoriteButtonIcon } from "./../atoms/buttons";

export interface CardProps {
  marginTop?: number;
  title: string;
  description: string;
  likeNumber: number;
  id:number;

}

const Card: React.FC<CardProps> = ({
  marginTop,
  title,
  description,
  likeNumber,id,
  
  
}) => {
  const updateLike=useContext(LikeContext);
  const [isClicked, setIsClicked] = useState(false);
  //const [like,updateLike]=useState(likeNumber)
  const onClick = () => {
    if (!isClicked) {
      setIsClicked(true);
      updateLike(id,likeNumber + 1);
    }
    else{
      setIsClicked(false);
      updateLike(id,likeNumber - 1);
    }
  };
  return (
    <MuiCard style={{ width: "100%", marginTop }}>
      <CardMedia
        children={
          <ImageDiv>
            <svg width="100" height="110" viewBox="0 0 130 141">
              <path
                id="Path_3"
                data-name="Path 3"
                d="M65,11.556c17.333,0,19.5,0,26,.722a33.5,33.5,0,0,1,12.278,2.167,25.364,25.364,0,0,1,12.278,12.278A33.5,33.5,0,0,1,117.722,39c0,6.5.722,8.667.722,26s0,19.5-.722,26a33.5,33.5,0,0,1-2.167,12.278,25.364,25.364,0,0,1-12.278,12.278A33.5,33.5,0,0,1,91,117.722c-6.5,0-8.667.722-26,.722s-19.5,0-26-.722a33.5,33.5,0,0,1-12.278-2.167,25.364,25.364,0,0,1-12.278-12.278A33.5,33.5,0,0,1,12.278,91c0-6.5-.722-8.667-.722-26s0-19.5.722-26a33.5,33.5,0,0,1,2.167-12.278A25.939,25.939,0,0,1,19.5,19.5a12.211,12.211,0,0,1,7.222-5.056A33.5,33.5,0,0,1,39,12.278c6.5-.722,8.667-.722,26-.722M65,0C47.667,0,44.778,0,38.278.722A44.587,44.587,0,0,0,22.389,3.611a28.273,28.273,0,0,0-11.556,7.222A28.273,28.273,0,0,0,3.611,22.389C1.444,26.722.722,31.056.722,38.278,0,44.778,0,47.667,0,65S0,85.222.722,91.722a44.587,44.587,0,0,0,2.889,15.889,28.273,28.273,0,0,0,7.222,11.556,28.273,28.273,0,0,0,11.556,7.222,44.587,44.587,0,0,0,15.889,2.889C44.778,130,47.667,130,65,130s20.222,0,26.722-.722a44.587,44.587,0,0,0,15.889-2.889,30.3,30.3,0,0,0,18.778-18.778,44.587,44.587,0,0,0,2.889-15.889c0-7.222.722-9.389.722-26.722s0-20.222-.722-26.722a44.587,44.587,0,0,0-2.889-15.889,28.273,28.273,0,0,0-7.222-11.556,28.273,28.273,0,0,0-11.556-7.222A44.587,44.587,0,0,0,91.722.722C85.222,0,82.333,0,65,0m0,31.778A32.687,32.687,0,0,0,31.778,65,33.222,33.222,0,1,0,65,31.778m0,54.889A21.28,21.28,0,0,1,43.333,65,21.28,21.28,0,0,1,65,43.333,21.28,21.28,0,0,1,86.667,65,21.28,21.28,0,0,1,65,86.667M99.667,22.389a7.944,7.944,0,1,0,7.944,7.944,8.015,8.015,0,0,0-7.944-7.944"
                fill="#fff"
                fillRule="evenodd"
              />
            </svg>
          </ImageDiv>
        }
      />
      <CardContent>
        <PrimaryLabel text={title} />
        <CardLabel style={{ height: 40, maxHeight: 40 }} text={description} />
      </CardContent>
      <CardActions disableSpacing>
        <FavoriteButtonIcon isClicked={isClicked} onClick={onClick} />
        <LabelSubTitle text={likeNumber.toString()} />
      </CardActions>
    </MuiCard>
  );
};
const ImageDiv = styled.div`
  background-color: ${({theme}) => theme.colors.primary.primary1};
  display: flex;
  justify-content: center;
  align-items: center;
  width: 550px;
  min-height: 280px;
`;

export default Card;
