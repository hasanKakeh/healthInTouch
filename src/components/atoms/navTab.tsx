import { Link, LinkProps, NavLink, NavLinkProps } from "react-router-dom";
import Tab, { TabProps } from "@material-ui/core/Tab";

import { ButtonBaseProps, styled } from "@material-ui/core";

export interface NavTapProps extends TabProps {
  component: any;
  to: any;
}
const CustomTab = styled(Tab)({
  textTransform: "capitalize", minWidth: "80px ",color:"#fff"
})as typeof Tab;

const NavTab: React.FC<NavTapProps> = (props) => {
  const { component, to, ...rest } = props;
  return (
    <Tab
      style={{ textTransform: "capitalize", minWidth: "80px " ,color:"#fff"}}
      component={component}
      to={to}
      {...rest}
    />
  );
};
export const FilterTab: React.FC<TabProps> = (props) => {
  return (
    <Tab
      style={{ textTransform: "capitalize", minWidth: "130px " }}
      {...props}
    />
  );
};

export default NavTab;
