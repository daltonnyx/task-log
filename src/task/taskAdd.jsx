const taskAddClick = evt => { 
    evt.preventDefault();
    jQuery('#task-form').modal('open') 
};
const TaskAdd = props => {
    return (
        <div className="task-add">
            <a data-target="task-form" onClick={taskAddClick}>
                <i className="material-icons">add</i>
            </a>    
        </div>
    );
};

export {TaskAdd as default};
