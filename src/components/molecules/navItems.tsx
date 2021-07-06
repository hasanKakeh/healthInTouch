import { makeStyles, Theme } from "@material-ui/core";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import NavTab from "../atoms/navTab";

export interface NavItemsProps {
  items: Array<{ value: any; label: string; link: string }>;
}
const WrapTap = styled.div`
  max-width: 300px;
`;
const NavItems: React.FC<NavItemsProps> = ({ items }) => {
  const [value, setValue] = useState(2);
  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    console.log(newValue);

    setValue(newValue);
  };

  return (
    <Tabs value={value} style={{paddingLeft:30}} onChange={handleChange} centered>
      {items.map((item, i) => (
        <NavTab
          value={item.value}
          label={item.label}
          wrapped
          key={item.label}
          component={Link}
          to={item.link}
          
        />
      ))}
    </Tabs>
  );
};

export default NavItems;
