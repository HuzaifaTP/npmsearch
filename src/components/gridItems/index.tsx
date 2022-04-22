import React from "react";
import { GridElements } from "../../Main";
import { v4 as uuidv4 } from "uuid";
import {DataGrid,GridToolbar,GridColDef,GridValueGetterParams} from "@mui/x-data-grid";
import useStyles from "./DataGridStyling"


const GridItems: React.FC<GridElements> = (props) => {
  const [pageSize, setPageSize] = React.useState<number>(10);


  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", flex:1},
    { field: "package_name", headerName: "Package Name", flex: 1 },
    { field: "author", headerName: "Author", flex: 1 },
    { field: "last_updated", headerName: "Last Updated",type:"date", flex: 1,
    // valueGetter for filtering
    valueGetter: (params: GridValueGetterParams) => {
      return new Date(params.value)
    }}
  ];

  const rows = props.items.map((item, index) => ({
    id: index,
    package_name: item.package.name, 
    author: item.package.author ? item.package.author.name : "Author Unknown",
    last_updated: new Date(item.package.date).toISOString()
  }));

  return (
    <div style={{ height: 550, width: "60%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        className={useStyles().root}
        components={{Toolbar: GridToolbar}}
        pageSize={pageSize}
        rowsPerPageOptions={[10,20,30]}
        onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
        disableSelectionOnClick
        // autoPageSize={true}
        getRowId={uuidv4}
        sx={{
          border: 2,
          borderColor: "primary.light",
          "& .MuiDataGrid-cell:hover": {
            color: "primary.main"
          }
        }}
      />
      <>{console.log(rows)}</>
    </div>
  );
};

export default GridItems;
