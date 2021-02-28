import React, {Component} from "react";
import "./mainBox.scss"
import SecondaryBox from "../SecondaryBox/SecondaryBox";

class MainBox extends Component{
    render() {
        return (
            <div className={"main-box"}>
                <SecondaryBox widthClass={"big-box"}/>
                <SecondaryBox widthClass={"small-box"}/>
            </div>
        );
    }
}

export default MainBox;