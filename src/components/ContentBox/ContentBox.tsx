import React, {Component} from "react";
import "./contentBox.scss"

type ContentBoxProps = {
    contentClass: string,
    header: string
}

class ContentBox extends Component<ContentBoxProps>{
    render() {
        return (
            <div className={this.props.contentClass}>
                <h5>{this.props.header}</h5>
                <h5>{this.props.header}</h5>
                <h5>{this.props.header}</h5>
                <h5>{this.props.header}</h5>
                <h5>{this.props.header}</h5>
                <h5>{this.props.header}</h5>
                <h5>{this.props.header}</h5>
            </div>
        );
    }
}

export default ContentBox;