import TaskCard from './taskCard.js';
import TaskAdd  from './taskAdd.js';
const TaskList = props => {
    const tasks = props.tasks.map(task => <TaskCard key={task._id} task={task} completeTask={props.completeTask} />);
    return (
        <ul className="task-list">
            {tasks}
            <li className="task-add">
                <TaskAdd />
            </li>
        </ul>
    );
};

export {TaskList as default};
