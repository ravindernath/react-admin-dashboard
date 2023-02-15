import "./datatable.scss"
import { DataGrid } from '@mui/x-data-grid';
import { userColumns, userRows } from "../../datatablesource";

const Datatable = () => {

    const actionCloumn = [
        {
            field: "action",
            headerName: "Action",
            width: 300,
            renderCell: () => {
                return(
                    <div className="cellAction">
                        <div className="viewButton">View</div>
                        <div className="deleteButton">Delete</div>
                    </div>
                )
            }
        }
    ];

  return (
    <div className="datatable">
        <DataGrid
            rows={userRows}
            columns={userColumns.concat(actionCloumn)}
            pageSize={9}
            rowsPerPageOptions={[5]}
            checkboxSelection
        />
    </div>
  )
}

export default Datatable
