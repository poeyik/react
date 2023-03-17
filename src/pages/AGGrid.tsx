import React, { useState } from 'react';
import { AgGridReact } from 'ag-grid-react';

import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

export default function AGGrid() {
  const [rowData] = useState([
    {make: "Toyota", model: "Celica", price: 35000},
    {make: "Ford", model: "Mondeo", price: 32000},
    {make: "Porsche", model: "Boxster", price: 72000}
  ]);
   
  const [columnDefs] = useState([
    { field: 'make' },
    { field: 'model' },
    { field: 'price' }
  ])

  return (
    <div className="ag-theme-alpine" style={{height: 400, width: 600}}>
      <AgGridReact
        rowData={rowData}
        columnDefs={columnDefs}
        overlayNoRowsTemplate={'<span class="ag-overlay-loading-center">No Data</span>'}
        overlayLoadingTemplate={'<span style="padding: 10px; border: 2px solid #444; background: lightgoldenrodyellow;">Data Loading...</span>'}
      >
      </AgGridReact>
    </div>
   );
};