const root = document.getElementById('root');
import Task from './task/task.js';
import Sidebar from './sidebar.js';
import Navbar from './nav.js';
import TaskList from './task/taskList.js';

class App extends React.Component  {
    constructor() {
        super();
        this.completeTask = this.completeTask.bind(this);
        
        this.state = { tasks: [] };
    }

    componentDidMount() {
        fetch("/task/list",{
            method: "GET"
        }).then(response => {
            console.log(response);
            return response.json();
        }).then(data => {
            this.setState({tasks: data});
        })
    }

    render() { 
        const tasks = this.state.tasks;
        return (
            <div id="app">
                <header>
                    <Navbar />
                    <Sidebar />
                </header>
                <main>
                    <div className="section currentTask">
                        <TaskList completeTask={this.completeTask} tasks={tasks} />
                    </div>
                    <div className="section tasklog">
                        Monthly Tasklog goes here
                    </div>
                </main>
            </div>
        );
    }

    completeTask(task) {
               
    }
}

ReactDOM.render(<App />, root);
