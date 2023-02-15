import "./new.scss"
import Sidebar from '../../components/sidebar/Sidebar';
import Nevbar from '../../components/navbar/Navbar';
import DriveFolderUploadOutlinedIcon from '@mui/icons-material/DriveFolderUploadOutlined';

const New = () => {
  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Nevbar />
        <div className="top">
          <h1>Add New User</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png" alt="" />
          </div>
          <div className="right">
            <form>
              <div className="formInput">
                <label htmlFor="file">
                  Image:<DriveFolderUploadOutlinedIcon className="icon" />
                </label>
                <input type="file" id="file" style={{display:"none"}} />
              </div>
              <div className="formInput">
                <label>Username</label>
                <input type="text" placeholder="username" />
              </div>
              <div className="formInput">
                <label>Name and Surname</label>
                <input type="text" placeholder="Name and surname" />
              </div>
              
              <div className="formInput">
                <label>Email</label>
                <input type="email" placeholder="user@gmail.com" />
              </div>
              
              <div className="formInput">
                <label>Phone</label>
                <input type="text" placeholder="Phone" />
              </div>
              
              <div className="formInput">
                <label>Password</label>
                <input type="password" />
              </div>
              
              <div className="formInput">
                <label>Address</label>
                <input type="text" placeholder="Address" />
              </div>
              <div className="formInput">
                <label>Country</label>
                <input type="text" placeholder="Country" />
              </div>
              <button>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default New
