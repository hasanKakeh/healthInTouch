import AppBar from "@material-ui/core/AppBar";
import { UserButtonIcon } from "../atoms/buttons";
import NavItems from "../molecules/navItems";
import Toolbar from "@material-ui/core/Toolbar";
import LabelSubTitle from "./../atoms/label";
import  Typography  from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
export interface NavBarProps {}

const NavBar: React.FC<NavBarProps> = () => {
  return (
    <AppBar position="static">
      <Toolbar variant="dense" style={{ justifyContent: "space-between" }}> 
      <div style={{width:109}}>
        <UserButtonIcon to="/login" />
        </div>
        <NavItems
          items={[
            { value: 1, label: "Messaging", link: "/test" },
            { value: 2, label: "Groups", link: "" },
            { value: 3, label: "Health Care Providers", link: "" },
            { value: 4, label: "Discover", link: "" },
            { value: 5, label: "Feed", link: "" },
          ]}
        />
        <LabelSubTitle text="Health in touch"  ></LabelSubTitle>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
