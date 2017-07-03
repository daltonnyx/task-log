export default class TaskForm extends React.Component {
    constructor() {
        super();
    } 
    render() {
        return ( 
            <div id="task-form" className="modal modal-fixed-footer">
                <div className="modal-content">
                  <h4>Modal Header</h4>
                  <p>A bunch of text</p>
                </div>
                <div className="modal-footer">
                  <a href="#!" className="modal-action modal-close waves-effect waves-green btn-flat">OK</a>
                </div>
            </div>
        );
    }
}
