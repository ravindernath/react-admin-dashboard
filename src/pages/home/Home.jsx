
import Chart from "../../components/chart/Chart";
import Featured from "../../components/featured/Featured";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import List from "../../components/table/Table";
import Widget from "../../components/widget/Widget";
import "./home.scss"

const Home = () => {
    return(
        <div className="home">
            <Sidebar />
            <div className="homecontainer">
                <Navbar />
                <div className="widgets">
                    <Widget type="user" />
                    <Widget type="order"/>
                    <Widget type="earning"/>
                    <Widget type="balance"/>
                </div>
                <div className="charts">
                    <Featured />
                    <Chart aspect={3.5/1} title="Last 6 Month (Revenue)" />
                </div>
                <div className="listContainer">
                    <div className="listTitle">Latest Transaction</div>
                    <List />
                </div>
            </div>
        </div>
    )
} 

export default Home;