import React, {ChangeEvent, Component} from "react";
import "./contentBox.scss"
import Emploee from "../../models/Emploee";
import Emploees from "../Emploee/Emploees";

type ContentBoxProps = {
    contentClass: string,
    header: string,
    list: Emploee[] | null,
    handleCheck(e: ChangeEvent<HTMLInputElement>, item: Emploee): void,
    //employee: Map<string, Emploee[]>
}

class ContentBox extends Component<ContentBoxProps>{

    render() {
        return (
            <div className={this.props.contentClass}>
                <div>
                    <h5>{this.props.header}</h5>
                    {this.props.list &&  this.props.list.length ? this.props.list.map(emploee => <Emploees key={emploee.id} item={emploee} handleCheck={this.props.handleCheck}/>) : <span>...</span>}
                </div>
            </div>
        );
    }
}

export default ContentBox;