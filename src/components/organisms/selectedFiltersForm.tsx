import styled from "styled-components";
import PrimaryLabel, { TitleLabel } from "../atoms/label";
import SelectBox from "../molecules/SelectBox";
import Button, { mButtonProps } from "./../atoms/buttons";
import { SelectBoxProps } from "./../molecules/SelectBox";
import { useState } from "react";

export interface SelectedFilterFormProps {
  propsB1: any;
  propsB2: any;
  propsB3: any;
  updateValue: any;
}

const SelectedFilterForm: React.FC<SelectedFilterFormProps> = ({
  propsB1,
  propsB2,
  propsB3,

  updateValue,
}) => {
  const [localValue, updateLocalValue] = useState(
    {} as { filter1?: number; filter2?: number; filter3?: number }
  );
  const onChange = (valueIndex: string, n: number) => {
    console.log({ [valueIndex]: n });
    const x = { ...localValue, [valueIndex]: n } as {
      filter1?: number;
      filter2?: number;
      filter3?: number;
    };
    console.log(x);
    updateLocalValue(x);
  };
  const onClear = () => {
    updateValue({});
  };
  const onSubmit = () => {
    updateValue(localValue);
  };

  return (
    <Div>
      <PrimaryLabel text="Filters Specific to the Tab Currently Open" />
      <SelectBox
        text="Filter1"
        value={localValue.filter1}
        onChange={(e) => onChange("filter1", e.target.value)}
        {...propsB1}
      />
      <SelectBox
        text="Filter2"
        value={localValue.filter2}
        onChange={(e) => onChange("filter2", e.target.value)}
        {...propsB2}
      />
      <SelectBox
        text="Filter3"
        value={localValue.filter3}
        onChange={(e) => onChange("filter3", e.target.value)}
        {...propsB3}
      />

      <WrapButton>
        <Button
          variant="outlined"
          onClick={onClear}
          color="primary"
          title="Clear"
          style={{ marginRight: "16px", backgroundColor: "#fff" }}
        />
        <Button
          title="Submit"
          onClick={onSubmit}
          type="submit"
          color="primary"
        />
      </WrapButton>
    </Div>
  );
};
const Div = styled.div``;
const WrapButton = styled.div`
  margin-top: 100px;
  display: flex;
  justify-content: center;
`;
export default SelectedFilterForm;
