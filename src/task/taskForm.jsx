import UserDropdown from '../user/userDropdown.js';
import RewardPick from '../reward/rewardPick.js';
export default class TaskForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {users: [], task: props.task, rewards: [] };
        this.onTitleChange = this.onTitleChange.bind(this);
        this.onOwnerChange = this.onOwnerChange.bind(this);
        this.onDescriptionChange = this.onDescriptionChange.bind(this);
    }

    componentDidMount() {
        this.loadUsers().loadRewards();
    }

    loadUsers() {
        fetch("/user/list", {
            method: "GET"
        }).then( res => res.json() )
        .then( data => { 
            let newState = this.state;
            newState.users = data;
            this.setState(newState);
            jQuery('select[name="owner"]').material_select();
        } );
        return this;
        
    }

    loadRewards() {
        fetch("/reward/list", {
            method: "GET"
        }).then( res => res.json() )
        .then( data => {
            let newState = this.state;
            newState.rewards = data;
            this.setState(newState);
            jQuery('select[name="reward"]').material_select(this.onRewardChange.bind(this));
        });
        return this;
    }

    onTitleChange(e) {
        this.updateTask({title: e.target.value});
    }
    updateTask(obj) {
        let task = this.state.task || {  };
        for (const prop in obj) {
            task[prop] = obj[prop];
        }
        let newState = this.state;
        newState.task = task;
        this.setState(newState);
    }

    onOwnerChange(e) {
        
    }

    onDescriptionChange(e) {
        this.updateTask({ description: e.target.value })
    }

    onRewardChange(e) {
        const rewardDropdown = document.querySelector('[name="reward"]');
        var selectedItem = rewardDropdown.children[rewardDropdown.selectedIndex];
        console.log(selectedItem);
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
                      <RewardPick change={this.onRewardChange} rewards={this.state.rewards} />
                  </form>
                </div>
                <div className="modal-footer">
                  <a href="#!" className="modal-action modal-close waves-effect waves-green btn">{ this.state.task ? "Update" : "Create" }</a>
              </div>
            </div>
        );
    }
}
