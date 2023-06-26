import { Tab, Tabs } from "@mui/material";

export default function ContentTabs({ tabList }: any) {
  
  
  return(
    <Tabs>
      {tabList.map((tab: any) => (
        <Tab label={tab}></Tab>
      ))}
    </Tabs>
  )
}