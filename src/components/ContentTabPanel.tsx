import AgGrid from "./AgGrid";
import { Button } from "@mui/material";

export default function ContentTabPanel({ columnDefs, rowData, buttonList }: any) {

  const renderButtonLine = (button: any) => {
    if (button.name==="생성") {
      return(<>
        <Button onClick={button.actionFn}>생성</Button>
      </>)
    }
    if (button.name==="삭제"){
      return(
        <Button onClick={button.actionFn}>삭제</Button>
      )
    }
  }

  return(
    <>
      {buttonList.map((button: any) => (
        renderButtonLine(button)
      ))}
      <AgGrid
        columnDefs={columnDefs}
        rowData={rowData}
      ></AgGrid>
    </>
  )
}