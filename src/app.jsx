const root = document.getElementById('root');
import Task from './task/task.js';
import Sidebar from './sidebar.js';
import Navbar from './nav.js';
import TaskList from './task/taskList.js';
const tasksData = [
        {
            _id: 1,
            title: 'Fix web cho vantuongthanh',
            description: 'Fix menu và mobile',
            owner: {
                fullName: 'Truong Ngoc Quy',
                position: 'Leader',
                username: 'quytn.vinabits',
                password: '',
                bio: '',
                avatar: '',
                company: {
                    title: 'Vinabits',
                    address: '',
                },
                role: {
                    code: 'dev',
                    caption: 'Developer',
                }
                
            },
            reward: {
                score: 30,
                title: 'fix web khach hang',

            },
            dateEnd: new Date('2017-05-23'),
            priority: {
                order: 1,
                caption: 'Normal',
            }
        },
        {
            _id: 2,
            title: 'Design web vinaphone',
            description: 'Design giao diện mobile và desktop',
            owner: {
                fullName: 'Nguyen Thi Hien',
                position: 'Leader',
                username: 'hiennt.vinabits',
                password: '',
                bio: '',
                avatar: '',
                company: {
                    title: 'Vinabits',
                    address: '',
                },
                role: {
                    code: 'design',
                    caption: 'Designer',
                }
                
            },
            reward: {
                score: 30,
                title: 'fix web khach hang',

            },
            dateEnd: null,
            priority: {
                order: 1,
                caption: 'Normal',
            }
        }
];

class App extends React.Component  {
    constructor() {
        super();
        this.completeTask = this.completeTask.bind(this);
        
        var taskArray = tasksData.map( data => new Task(data) );
        this.state = { tasks: taskArray };
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
        
        var tasks = this.state.tasks;
        var completeTask = tasks.filter( t => t._id == task._id )[0];
        completeTask.complete();
        this.setState({tasks: tasks});
        
    }
}

ReactDOM.render(<App />, root);
