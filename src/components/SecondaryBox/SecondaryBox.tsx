import React, {ChangeEvent, Component} from "react";
import "./secondaryBox.scss"
import ContentBox from "../ContentBox/ContentBox";
import Emploee from "../../models/Emploee";

type SecondaryBoxProps = {
    widthClass: string,
    items: Emploee[] | null,
    checkedItems: Map<string, Emploee[]>,
    handleCheck(e: ChangeEvent<HTMLInputElement>, item: Emploee): void,
}

const arr_EN = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

class SecondaryBox extends Component<SecondaryBoxProps>{

    render() {
        const {items, checkedItems} = this.props;
        return (
            <div className={this.props.widthClass}>
                {this.props.widthClass === "big-box" ?
                arr_EN.map(letter => {
                    let arr = items && items.filter(item => item.lastName.charAt(0) === letter)
                    return <ContentBox key={letter} contentClass={"big-content-box"} header={letter} list={arr} handleCheck={this.props.handleCheck}/>
                }) :
                    Array.from(checkedItems.entries()).map(([key, value]) => {
                        return <ContentBox key={key} contentClass={"small-content-box"} header={key} list={value} handleCheck={this.props.handleCheck}/>
                    })
                }
            </div>
        );
    }
}

export default SecondaryBox;