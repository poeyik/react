import { useState } from "react";
import { Tab, Tabs } from "@mui/material";

export default function ContentTabs({ tabList }: any) {
  const [ value, setValue ] = useState(0);

  const handleChange = (e: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  }

  return(
    <Tabs value={value} onChange={handleChange}>
      {tabList.map((tab: any) => (
        <Tab label={tab}></Tab>
      ))}
    </Tabs>
  )
}