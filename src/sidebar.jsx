export default class Sidebar extends React.Component {
    render() {
        return (
            <ul id="main-nav" className="side-nav">
                <li>
                    <div className="user-view">
                        <div className="background">
                            <img src="./assets/images/office.jpg" />
                        </div>
                        <a href="#"><img className="circle" src="./assets/images/yuna.jpg" /></a>
                        <a href="#"><span className="white-text name">Dalton Nyx</span></a>
                        <a href="#"><span className="white-text email">quytn@vinabits.com.vn</span></a>
                    </div>
                </li>
                <li><a href="#"><i className="material-icons">dashboard</i> Dashboard</a></li>
                <li><a href="#"><i className="material-icons">assignment</i> Tasks</a></li>
                <li><div className="divider"></div></li>
                <li><a href="#"><i className="material-icons">trending_up</i> Reports</a></li>
            </ul>
        );
    }
}
