import { InputAdornment, InputBase } from "@material-ui/core";
import { InputBaseProps } from "@material-ui/core/InputBase";
import MuiTextField from "@material-ui/core/TextField";
import { Close, Done } from "@material-ui/icons";
import { ChangeEvent } from "react";

export interface TextFieldProps {
  type: string;
  variant?: string;
  size?: string;
  error?: boolean;
  right?: boolean;
  value: string;
  errorText?: string;
  style?:any;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}
const TextField: React.FC<TextFieldProps> = ({
  error,
  value,
  type,
  onChange,
  style,
  errorText,
  right,
}) => {
  return (
    <MuiTextField
      variant="outlined"
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            {error && <Close color="error" />}
            {right && <Done />}
          </InputAdornment>
        ),
      }}
style={style}
      helperText={errorText}
      error={error}
      onChange={onChange}
      fullWidth
      value={value}
      type={type}
      size="small"
    />
  );
};

// export const styledText:React.FC<TextFieldProps>=styled((props)=><TextField {...props}/>)({
// });

export const SearchTextField: React.FC<InputBaseProps> = (props) => (
  <InputBase placeholder="Search"
 fullWidth
   {...props} />
);





 

export default TextField;
