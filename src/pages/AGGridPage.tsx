import React, { useState } from 'react';
import { AgGridReact } from 'ag-grid-react';

import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import AgGrid from '../components/AgGrid';

const rowData = [
  { make: 'Toyota', model: 'Celica', price: 35000 },
  { make: 'Ford', model: 'Mondeo', price: 32000 },
  { make: 'Porsche', model: 'Boxter', price: 72000 },
  { make: 'Porsche', model: 'Cayman', price: 78000 },
  { make: 'Porsche', model: '911', price: 135000 },
  { make: 'Toyota', model: 'Supra', price: 45000 },
  { make: 'Nissan', model: 'GT-R', price: 80000 },
  { make: 'BMW', model: 'M3', price: 60500 },
  { make: 'BMW', model: 'M5', price: 70500 },
  { make: 'BMW', model: 'M6', price: 110000 },
  { make: 'Audi', model: 'S4', price: 55000 },
  { make: 'Audi', model: 'S5', price: 68000 },
  { make: 'Audi', model: 'S6', price: 95000 },
  { make: 'Audi', model: 'S7', price: 130000 },
  { make: 'Audi', model: 'S8', price: 145000 },
  { make: 'Mercedes-Benz', model: 'E-Class', price: 55000 },
  { make: 'Mercedes-Benz', model: 'S-Class', price: 90000 },
  { make: 'Mercedes-Benz', model: 'CLS-Class', price: 70000 },
  { make: 'Mercedes-Benz', model: 'C-Class', price: 45000 },
  { make: 'Mercedes-Benz', model: 'GLK-Class', price: 55000 },
];
 
const columnDefs = [
  { 
    headername: "Make",
    field: 'make'
  },
  {
    headername: "Model",
    field: 'model' 
  },
  { 
    headername: "Price",
    field: 'price' 
  }
]

export default function AGGridPage() {
  
  return (
    <AgGrid
      rowData={rowData}
      columnDefs={columnDefs}
    >
    </AgGrid>
   );
};