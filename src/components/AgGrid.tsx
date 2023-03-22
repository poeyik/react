import { AgGridReact } from "ag-grid-react";
import { useState } from "react";

export default function AgGrid(props: any) {
	const [ gridApi, setGridApi ] = useState<any>(null);
	const [ gridColumnApi, setGridColumnApi ] = useState(null);
	const [ rowData, setRowData ] = useState(props.rowData);

	const gridOptions = {
		pagination: true,
		paginationPageSize: 5,
	}

	const onGridReady = (params: any) => {
		params.api.sizeColumnsToFit();
		setGridApi(params.api);
		setGridColumnApi(params.columnApi);
	}

	const onPaginationChanged = () => {
		const currentPage = gridApi.paginationGetCurrentPage();
		const pageSize = gridApi.paginationGetPageSize();
		const startIndex = currentPage * pageSize;
		const endIndex = (currentPage + 1) * pageSize;
		setRowData(props.rowData.slice(startIndex, endIndex));
	}
  
	return(
		<div className="ag-theme-alpine" style={{height: 400, width: 600}}>
			<AgGridReact
				gridOptions={gridOptions}
				onGridReady={onGridReady}
				onPaginationChanged={onPaginationChanged}
				rowData={rowData}
				columnDefs={props.columnDefs}
				overlayNoRowsTemplate={'<span class="ag-overlay-loading-center">No Data</span>'}
				overlayLoadingTemplate={'<span style="padding: 10px; border: 2px solid #444; background: lightgoldenrodyellow;">Data Loading...</span>'}
			>
			</AgGridReact>
		</div>
	)
}