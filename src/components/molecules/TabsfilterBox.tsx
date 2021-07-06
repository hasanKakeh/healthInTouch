import Tabs from "@material-ui/core/Tabs";
import { FilterTab } from "../atoms/navTab";
import { useState } from "react";
import { Paper } from "@material-ui/core";

export interface TabsFilterProps {
  items: Array<{ label: string }>;
  value:number;
  setValue:(newValue:any)=>void;
}

const TabsFilter: React.FC<TabsFilterProps> = ({ items,value,setValue }) => {
 // const [value, setValue] = useState(0);
  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  return (
  <Paper elevation={3} square>  
    <Tabs centered value={value} onChange={handleChange}>
      {items.map((item) => (
        <FilterTab key={item.label} label={item.label} />
      ))}
    </Tabs>
    </Paper>
  );
};

export default TabsFilter;
