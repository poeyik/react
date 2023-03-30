import { Link } from "react-router-dom";


export default function MainPage() {

    return(
        <div style={{ display: 'flex', flexDirection: "column" }}>
            <Link to={"/aggird"}>AGGird</Link>
            <Link to={"/leaflet"}>지도</Link>
            <Link to={"/terminal"}>Terminal</Link>
            <Link to={"/crud"}>CRUD</Link>
        </div>
    )
}