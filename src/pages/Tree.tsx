import { TreeView, TreeItem, treeItemClasses } from "@mui/lab";
import { styled } from "@mui/material";
import '../App.css'

const StyledTreeItem = styled(TreeItem)(({ theme }) => ({
  color: 'gray',
  [`& .${treeItemClasses.content}`]: {
    backgroundColor: '#25304b',
    fontWeight: theme.typography.fontWeightMedium,
    
    '&.Mui-expanded': {
      fontWeight: theme.typography.fontWeightRegular
    },
    '&:hover': {
      color: 'white',
      backgroundColor: '#0090ff',
    },
    '&.Mui-focused, &.Mui-selected, &.Mui-selected.Mui-focused': {
      backgroundColor: 'inherit',
      color: 'inherit'
    },
  },
  [`& .${treeItemClasses.group}`]: {
    marginLeft: 0,
    [`& .${treeItemClasses.content}`]: {
      paddingLeft: theme.spacing(1),
    },
  },
}))



const styledLabel = (labelName: string) => (
  <div className="treeitem-label">{labelName}</div>
)

export default function Tree() {
	return(
    <TreeView>
      <StyledTreeItem nodeId="1" label="통합 대시보드"></StyledTreeItem>
      <StyledTreeItem nodeId="2" label="플랫폼">
        <StyledTreeItem nodeId="3" label={"대시보드"}></StyledTreeItem>
        <StyledTreeItem nodeId="4" label="엣지존"></StyledTreeItem>
        <StyledTreeItem nodeId="5" label="클라우드존"></StyledTreeItem>
      </StyledTreeItem>
      <StyledTreeItem nodeId="6" label="인프라">
        <StyledTreeItem nodeId="7" label="네트워크"></StyledTreeItem>
        <StyledTreeItem nodeId="8" label="스토리지클래스">
          <StyledTreeItem nodeId="9" label="대시보드"></StyledTreeItem>
          <StyledTreeItem nodeId="10" label="스토리지클래스"></StyledTreeItem>
        </StyledTreeItem>
      </StyledTreeItem>
      <StyledTreeItem nodeId="11" label="서비스">
        <StyledTreeItem nodeId="12" label="워크스페이스"></StyledTreeItem>
        <StyledTreeItem nodeId="13" label="프로젝트"></StyledTreeItem>
        <StyledTreeItem nodeId="14" label="템플릿"></StyledTreeItem>
      </StyledTreeItem>
      <StyledTreeItem nodeId="15" label="사용자"></StyledTreeItem>
      <StyledTreeItem nodeId="16" label="모니터링"></StyledTreeItem>
      <StyledTreeItem nodeId="17" label="시스템 환경설정"></StyledTreeItem>
      <StyledTreeItem nodeId="18" label="인증"></StyledTreeItem>
    </TreeView>
	)
}