export default class TaskCard extends React.Component {
    constructor() {
        super();
        this.complete = this.complete.bind(this);
    }
    complete() {
        this.props.completeTask(this.props.task);
    }
    render() {
        return (
        <li data-taskId={this.props._id}>
            <div className={this.props.task.dateEnd ? 'task-card done' : 'task-card'}>
                <div className="score" onClick={this.complete}>
                    <span className="task-done">
                        <svg fill="#000000" height="120" viewBox="0 0 24 24" width="120" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 0h24v24H0z" fill="none"/>
                            <path id="tick-mark" d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/>
                        </svg>
                    </span>
                    <span className="taskScore">
                        {this.props.task.reward.score}
                    </span>
                </div>
                <div className="task-content">
                    <span className="task-title">{this.props.task.title}<i className="material-icons right">more_vert</i></span>
                    <p>{this.props.task.description}</p>
                </div>
            </div>
        </li>
        );
    }
}

