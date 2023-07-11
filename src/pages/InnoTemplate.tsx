import ContentTemplate from "../components/ContentTemplate";
import ContentTabs from "../components/ContentTabs";
import ContentTabPanel from "../components/ContentTabPanel";
import ContentDetail from "../components/ContentDetail";
import { useState } from "react";
import PopUp from "../components/PopUp";

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

  const popupButtons = [
    {name: "생성", actionFn: ()=>{}}, 
    {name: "취소", actionFn: closeCreateDeployment}
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
      <PopUp open={isOpen} onClose={closeCreateDeployment} title={"Create Deployment"} explain={"설명"} buttons={popupButtons}>
        내용
      </PopUp>
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