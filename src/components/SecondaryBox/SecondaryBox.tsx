import React, {Component} from "react";
import "./secondaryBox.scss"
import ContentBox from "../ContentBox/ContentBox";

type SecondaryBoxProps = {
    widthClass: string
}

const arr_EN = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

class SecondaryBox extends Component<SecondaryBoxProps>{
    render() {
        return (
            <div className={this.props.widthClass}>
                {this.props.widthClass === "big-box" ?
                arr_EN.map(letter => <ContentBox contentClass={"big-content-box"} header={letter}/>) :
                <ContentBox contentClass={"small-content-box"} header={"month"}/>}
            </div>
        );
    }
}

export default SecondaryBox;