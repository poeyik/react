import ContentTemplate from "../components/ContentTemplate";
import ContentTabs from "../components/ContentTabs";
import ContentTabPanel from "../components/ContentTabPanel";
import ContentDetail from "../components/ContentDetail";
import { useState } from "react";
import { Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material";
import CustomDialog from "../components/CustomDialog";

function InnoTemplate() {
  const [ isOpen, setIsOpen ] = useState(false);
  const [ currentTab, setCurrentTab ] = useState<"Deployment"|"Service"|"Job"|"CronJob"|"Pod"|"StatefulSet"|"DaemonSet">("Deployment");

  const openCreateDeployment = () => {
    setIsOpen(true);
  }
  const closeCreateDeployment = () => {
    setIsOpen(false);
  }

  const columnDefs = [
    {
      headerName: "HPA 이름",
      field: "name",
      filter: true,
    },
    {
      headerName: "프로젝트",
      field: "project",
      filter: true,
    },
    {
      headerName: "클러스터",
      field: "cluster",
      filter: true,
    },
    {
      headerName: "상태",
      field: "ready",
      filter: true,
    },
  ]

  const rowData = [
    {
      name: "coredns",
      cluster: "onpremise(dongjak)",
      project: "kube-system",
      ready: "2/2"
    }
  ]

  const buttons = [
    {
      name: "생성",
      actionFn: () => {openCreateDeployment()}
    },
    {
      name: "삭제",
      actionFn: () => {console.log("삭제")}
    }
  ]
  
  switch (currentTab) {
    case "Deployment":
      
      break;
    case "Service":

      break;
    default:
      break;
  }

  return(
    <div>
      <CustomDialog open={isOpen} onClose={closeCreateDeployment} title={"Create Deployment"}>
        안녕하세요
      </CustomDialog>
      <ContentTemplate>
        <ContentTabs tabList={['Deployment', 'Pod']}></ContentTabs>
        <ContentTabPanel columnDefs={columnDefs} rowData={rowData} buttonList={buttons}></ContentTabPanel>
        <ContentDetail></ContentDetail>
      </ContentTemplate>
    </div>
  )
}

export default InnoTemplate;

const setting = [
  {

  }
]