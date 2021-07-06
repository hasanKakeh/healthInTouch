import { SearchTextField } from "../atoms/textFields";
import { CloseButtonIcon, SearchButtonIcon } from "./../atoms/buttons";
import styled from "styled-components";
import { InputAdornment } from "@material-ui/core";
import React, { useState } from "react";

export interface SearchBoxProps {
  value?: string;
  updateValue: (e: any) => void;
}

const SearchBox: React.FC<SearchBoxProps> = ({ updateValue }) => {
  const [localValue, updateLocalvalue] = useState("");
  const onClickSearch = (e: any) => {
    updateValue(localValue);
  };
  const onClickClose = () => {
    updateValue("");
    updateLocalvalue("");
  };
  const onChange = (e: any) => {
    console.log(e.currentTarget.value);
    updateLocalvalue(e.currentTarget.value);
  };

  return (
    <WrapDiv>
      <SearchTextField
        value={localValue}
        onChange={onChange}
        endAdornment={
          <InputAdornment position="end">
            {localValue && <CloseButtonIcon onClick={onClickClose} />}
            {localValue && <div>|</div>}
            <SearchButtonIcon onClick={onClickSearch} />
          </InputAdornment>
        }
      />
    </WrapDiv>
  );
};

const WrapDiv: React.FC = styled.div`
  border: 1px solid;
  border-radius: 24px;
  max-hieght: 32px;
  padding: 6px 0px 6px 16px;
`;

export default SearchBox;
