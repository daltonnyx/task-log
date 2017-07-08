const RewardPick = (props) => (
    <div className="input-field s12">
        <select onChange={props.change} name="reward">
            { props.rewards.map( reward => 
                <option key={reward._id} value={reward.score}>{reward.title}</option>
            ) }
        </select>
        <label>Score</label>
    </div>
);

export { RewardPick as default };
