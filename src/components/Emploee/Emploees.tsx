import React, {ChangeEvent, Component} from "react";
import "./emploees.scss"
import Emploee from "../../models/Emploee";

type EmploeesProps = {
    item: Emploee,
    handleCheck(e: ChangeEvent<HTMLInputElement>, item: Emploee): void
}

class Emploees extends Component<EmploeesProps> {

    render() {
        const {item, handleCheck} = this.props;
        return (
            <div key={item.id} className={"item-from-list"}>
                <span>{item.lastName} {item.firstName}</span>
                <input type={'checkbox'} onChange={(e: ChangeEvent<HTMLInputElement>) => handleCheck(e, item)}/>
            </div>
        );
    }
}

export default Emploees