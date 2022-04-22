import React from "react";
import { GridElements } from "../../App";
import { v4 as uuidv4 } from "uuid";
import {
  DataGrid,
  GridToolbar,
  GridRowsProp,
  GridColDef,
  GridToolbarContainer,
  GridToolbarExport,
  GridValueFormatterParams,
  GridValueGetterParams
} from "@mui/x-data-grid";
// export interface GridItemsProps {
//   items: { id: string; name: string }[];
// }

const GridItems: React.FC<GridElements> = (props) => {
  const [pageSize, setPageSize] = React.useState<number>(5);

  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", flex: 1 },
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
    <div style={{ height: 500, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={pageSize}
        rowsPerPageOptions={[5, 10, 20]}
        onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
        disableSelectionOnClick
        getRowId={uuidv4}
      />
      <>{console.log(rows)}</>
    </div>
  );
};

export default GridItems;
