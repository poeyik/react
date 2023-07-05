import { Link } from "react-router-dom";

export default function MainPage() {

    return(
        <div style={{ display: 'flex', flexDirection: "column" }}>
            <Link to={"/aggrid"}>AGGird</Link>
            <Link to={"/leaflet"}>지도</Link>
            <Link to={"/terminal"}>Terminal</Link>
            <Link to={"/crud"}>CRUD</Link>
            <Link to={"/dnd"}>DragAndDrop</Link>
            <Link to={"/todo"}>Todo</Link>
            <Link to={"/tree"}>TreeView</Link>
            <Link to={"/inno-template"}>InnoTemplate</Link>
        </div>
    )
}