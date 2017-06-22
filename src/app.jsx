const root = document.getElementById('root');

//import Sidebar from './sidebar.js';

class App extends React.Component  {
    render() {
        return (
            <div id="app">
                <header>
                    <Navbar />
                    <Sidebar />
                </header>
                <main>
                    <div className="section currentTask">
                        Current Tasks go here
                    </div>
                    <div className="section tasklog">
                        Monthly Tasklog goes here
                    </div>
                </main>
            </div>
        );
    }
}

ReactDOM.render(<App />, root);
