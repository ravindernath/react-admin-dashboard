import "./navbar.scss";
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import FullscreenExitIcon from '@mui/icons-material/FullscreenExit';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext } from "react";


const Navbar = () => {
  
  const {dispatch} = useContext(DarkModeContext)

  return (
    <div className="navbar">
        <div className="wrapper">
            <div className="search">
              <input type="text" placeholder="Search..." />
              <SearchIcon />
            </div>
            <div className="items">
              <div className="item">
                <LanguageIcon className="icon" />
                English
              </div>
              <div className="item">
                <DarkModeOutlinedIcon className="icon"  onClick={() => dispatch({type:"TOGGLE"})}/>
              </div>
              <div className="item">
                <FullscreenExitIcon className="icon" />
              </div>
              <div className="item">
                <NotificationsNoneIcon className="icon" />
                <div className="counter">1</div>
              </div>
              <div className="item">
                <ChatBubbleOutlineIcon className="icon" />
                <div className="counter">2</div>
              </div>
              <div className="item">
                <FormatListBulletedIcon className="icon" />
              </div>
              <div className="item">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-BFO1-9_B8owATZcfnZc6FwA8GJjr-RMwHg&usqp=CAU" 
                alt="" className="avatar" />
              </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar
