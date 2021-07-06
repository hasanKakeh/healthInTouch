import {
   TextField,
  OutlinedTextFieldProps,
} from "@material-ui/core";
import MenuItem from '@material-ui/core/MenuItem';
export interface SelectFilterProps extends OutlinedTextFieldProps {
  options: Array<{ value: any; label: string }>;
}

const SelectFilter: React.FC<SelectFilterProps> = (props) => {
  const { options, ...rest } = props;
  return (
      
    <TextField
      select
      SelectProps={{
        variant: "standard",
        style:{backgroundColor:"#fff"},
      }} 
       
      color="primary"
      size="small"
      {...rest}
    > 
      {options.map((item) => (
        <MenuItem key={item.value}  value={item.value}>{item.label}</MenuItem>
      ))}
    </TextField>
  );
};

export default SelectFilter;
