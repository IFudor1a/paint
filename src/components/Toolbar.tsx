import React, {Component} from 'react';
import "../styles/Toolbar.scss";

type ToolbarState = {

};
class Toolbar extends Component<{}, ToolbarState> {
    render() {
        return (
            <div className="toolbar">
                 <button className="toolbar__btn brush"></button>
                 <button className="toolbar__btn square"></button>
                 <button className="toolbar__btn circle"></button>
                 <button className="toolbar__btn eraser"></button>
                 <button className="toolbar__btn line"></button>
                 <input type="color" className="toolbar__btn color"></input>
                 <button className="toolbar__btn undo"></button>
                 <button className="toolbar__btn redo"></button>
                 <button className="toolbar__btn save"></button>
            </div>
        );
    }
}

export default Toolbar;