import styled from "styled-components";
import { LabelSubTitle } from "../atoms/label";
import SelectFilter from "../atoms/select";

export interface SelectBoxProps {
  value: any;
  options: any;
  onChange?: (e: any) => void;
  text: string;
}

const SelectBox: React.FC<SelectBoxProps> = ({
  options,
  value,
  onChange,
  text,
}) => {
  return (
    <Div>
      <LabelSubTitle text={text} style={{ marginBottom: 8 }} />
      <SelectFilter
        value={value || ""}
        onChange={onChange}
        fullWidth
        variant="outlined"
        options={options}
      />
    </Div>
  );
};

const Div = styled.div`
  margin: 12px;
`;
export default SelectBox;
