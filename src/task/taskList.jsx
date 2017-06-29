import TaskCard from './taskCard.js';
const TaskList = props => {
    const tasks = props.tasks.map(task => <TaskCard key={task._id} task={task} completeTask={props.completeTask} />);
    return (
        <ul className="task-list">
            {tasks}
        </ul>
    );
};

export {TaskList as default};
