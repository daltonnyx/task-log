import UserDropdown from '../user/userDropdown.js';
export default class TaskForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {users: [], task: props.task };
        this.onTitleChange = this.onTitleChange.bind(this);
        this.onOwnerChange = this.onOwnerChange.bind(this);
        this.onDescriptionChange = this.onDescriptionChange.bind(this);
    }

    componentDidMount() {
        fetch("/user/list", {
            method: "GET"
        }).then( res => res.json() )
        .then( data => { 
            this.setState({users: data, task: this.props.task});
            jQuery('select[name="owner"]').material_select();
        } );
    }

    onTitleChange(e) {
        let task = this.state.task || {  };
        task.title = e.target.value;
        this.setState({ users: this.state.users, task: task });
    }

    onOwnerChange(e) {

    }

    onDescriptionChange(e) {
        let task = this.state.task || {  };
        task.description = e.target.innerText;
        this.setState( { users: this.state.users, task:task } );
    }
    
    render() {
        return ( 
            <div id="task-form" className="modal modal-fixed-footer">
                <div className="modal-content">
                  <form id="task">
                      <h4><input type="text" onChange={this.onTitleChange} value={ this.state.task ? this.state.task.title : "New Task" } /></h4>
                      <UserDropdown change={this.onOwnerChange} users={this.state.users} />
                      <div className="input-field s12">
                          <textarea value={ this.state.task ? this.state.task.description : ""  } onChange={this.onDescriptionChange} id="description" name="description" className="materialize-textarea" />
                             
                          <label>Description</label>
                      </div>
                  </form>
                </div>
                <div className="modal-footer">
                  <a href="#!" className="modal-action modal-close waves-effect waves-green btn">{ this.state.task ? "Update" : "Create" }</a>
              </div>
            </div>
        );
    }
}
