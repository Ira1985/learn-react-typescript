import React, {ChangeEvent, Component} from "react";
import "./mainBox.scss"
import SecondaryBox from "../SecondaryBox/SecondaryBox";
import Emploee from "../../models/Emploee";
import {emploeeService} from "../../services/EmploeeService";


type MainBoxProps = {

}
type MainBoxState = {
    items: Emploee[] | null,
    checkedItems: Map<string, Emploee[]>
}
class MainBox extends Component<MainBoxProps, MainBoxState>{
    constructor(props: MainBoxProps) {
        super(props);
        this.state = {
            items: null,
            checkedItems: new Map()
        }
    }

    async componentDidMount() {
        let response = await emploeeService.getList();
        this.setState({
            items: response
        })
    }

    handleCheck = (e: ChangeEvent<HTMLInputElement>, item: Emploee) => {
        const {checkedItems} = this.state;
        let month = new Date(item.dob).toLocaleString('default', {month: 'long'});
        let newMap = checkedItems;
        let newArr: Emploee[] = [];
        if(e.target.checked) {
            if(checkedItems.has(month)) {
                newArr = checkedItems.get(month) ?? [];
            }
            newArr.push(item);
            newMap.set(month, newArr);
        } else {
            newArr = checkedItems.get(month) as Emploee[];
            let filterArr = newArr.filter(emploee => emploee.id !== item.id);
            if(filterArr.length)
                newMap.set(month, filterArr);
            else
                newMap.delete(month);
        }


        this.setState({
            checkedItems: newMap
        })
    }

    render() {
        const {items, checkedItems} = this.state;

        return (
            <div className={"main-box"}>
                <SecondaryBox widthClass={"big-box"} items={items} checkedItems={checkedItems} handleCheck={this.handleCheck}/>
                <SecondaryBox widthClass={"small-box"} items={items} checkedItems={checkedItems} handleCheck={this.handleCheck}/>
            </div>
        );
    }
}

export default MainBox;