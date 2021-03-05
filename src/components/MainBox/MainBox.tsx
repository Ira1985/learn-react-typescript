import React, {ChangeEvent, Component} from "react";
import "./mainBox.scss"
import SecondaryBox from "../SecondaryBox/SecondaryBox";
import Emploee from "../../models/Emploee";
import {emploeeService} from "../../services/EmploeeService";
import Movie from "../../models/Movie";
import {movieService} from "../../services/MovieService";

type MainBoxProps = {

}
type MainBoxState = {
    items: Emploee[],
    checkedItems: Map<string, Emploee[]>
}
class MainBox extends Component<MainBoxProps, MainBoxState>{
    constructor(props: MainBoxProps) {
        super(props);
        this.state = {
            items: [],
            checkedItems: new Map()
        }
    }

    componentDidMount(): void {
        emploeeService.getList()
            .then(result => {
                let arr = Array.from(result).map(item => {
                    if (emploeeService.isEmploee(item)) {
                        return item
                    }
                    return null
                });
                this.setState({
                    items: arr as Emploee[]
                })
            })
    }

    handleCheck = (e: ChangeEvent<HTMLInputElement>, item: Emploee) => {
        const {checkedItems} = this.state;
        let month = new Date(item.dob).toLocaleString('default', {month: 'long'});
        let newMap = checkedItems;
        let newArr: Emploee[] = [];
        if(e.target.checked) {
            if(checkedItems.has(month)) {
                newArr = checkedItems.get(month) as Emploee[];
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

    getExample(): String | undefined {
        let i = Math.round(Math.random());
        let result: string | undefined;
        if(i)
            result = "S"
        else
            result = undefined
        return result
    }

    render() {
        const {items, checkedItems} = this.state;

        let d: String;

        d = this.getExample() as String;
        console.log("type d = ", typeof d)
        return (
            <div className={"main-box"}>
                <SecondaryBox widthClass={"big-box"} items={items} checkedItems={checkedItems} handleCheck={this.handleCheck}/>
                <SecondaryBox widthClass={"small-box"} items={items} checkedItems={checkedItems} handleCheck={this.handleCheck}/>
            </div>
        );
    }
}

export default MainBox;