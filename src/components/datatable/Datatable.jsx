import "./datatable.scss"
import { DataGrid } from '@mui/x-data-grid';
import { userColumns, userRows } from "../../datatablesource";
import { Link } from "react-router-dom";

const Datatable = () => {

    const actionCloumn = [
        {
            field: "action",
            headerName: "Action",
            width: 250,
            renderCell: () => {
                return(
                    <div className="cellAction">
                        <Link to="/users/test" style={{textDecoration:"none"}}>  
                            <div className="viewButton">View</div>
                        </Link>
                        <Link to="/" style={{textDecoration:"none"}}>  
                            <div className="deleteButton">Delete</div>
                        </Link>
                    </div>
                )
            }
        }
    ];

  return (
    <div className="datatable">
        <div className="datatableTitle">
            Add New User            
            <Link to="/users/new" style={{textDecoration:"none"}} className="link">     
                Add New 
            </Link>
        </div>
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
