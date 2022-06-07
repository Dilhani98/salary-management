import * as React from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';


const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'firstName', headerName: 'First name', width: 130 },
  { field: 'lastName', headerName: 'Last name', width: 130 },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 90,
  },
  {
    field: 'position',
    headerName: 'Position',
    width: 90,
  },

  {
    field: 'basic salary',
    headerName: 'Basic salary',
    type: 'currency',
    width: 90,
  },

  {
    field: 'allowances',
    headerName: 'Allowances',
    type: 'currency',
    width: 90,
  },

  {
    field: 'gross Salary',
    headerName: 'Gross salary',
    type: 'currency',
    width: 90,
  },

  {
    field: 'deduction',
    headerName: 'Deduction',
    type: 'currency',
    width: 90,
  },

  {
    field: 'net salary',
    headerName: 'Net salary',
    type: 'currency',
    width: 90,
  },
];

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];

export default function Salary() {
  return (
      <>
      <h2 style={{backgroundColor: "lightblue"}}>View Salary Report</h2>
      <label >Select Department</label>
          <select>
             <option value="project manager">Project Manager</option>
             <option value="HR">HR</option>
             <option value="supervisor">Supervisor</option>
             <option value="salary manager">Salary Manager</option>
             </select> 

             <label >Select Month</label>
             <input type="date" data-date-inline-picker="true" />
    
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
    </>
  );
}
