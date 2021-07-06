import { IconButtonProps } from "@material-ui/core";
import { Close, Done } from "@material-ui/icons";
import Search from '@material-ui/icons/Search';
export interface IconProps {
    
}
 
const Icon: React.FC<IconProps> = () => {
    return (null);
}

export const SearchIcon:React.FC=()=><Search />
 
export const CloseIcon:React.FC=()=><Close/>
export const DoneIcon:React.FC=()=><Done/>

export default Icon;