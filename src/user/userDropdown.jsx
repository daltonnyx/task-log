const UserDropdown = props => {
    return (
    <div className="input-field col s12">
        <select onChange={props.change} name="owner">
            { props.users.map( user => 
                <option key={user._id} value={user._id}>{user.fullName}</option>
            ) } 
        </select>
        <label>Owner</label>
    </div>  
    );
}

export {UserDropdown as default};
