import React, {ChangeEvent, Component} from "react";
import "./headContentBox.scss"
import Option from "../../models/AddedModels/Option";

type HeadContentBoxProps = {
    filters: {
        sort_by: string | undefined
    },
    handlerFilters: (e: ChangeEvent<HTMLSelectElement>) => void,
    option: Option[]
}

type HeadContentBoxState = {

}

class HeadContentBox extends Component<HeadContentBoxProps, HeadContentBoxState>{

    static defaultProps = {
        option: [
            new Option("Популярные по убыванию", "popularity.desc"),
            new Option("Популярные по возрастанию", "popularity.asc"),
            new Option("Рейтинг по убыванию", "vote_average.desc"),
            new Option("Рейтинг по возрастанию", "vote_average.asc")
        ]
    }

    constructor(props: HeadContentBoxProps) {
        super(props)
    }

    render() {
        let {handlerFilters, option} = this.props;

        return <div className={"head-contet-box"}>
            <span>Фильтры: </span>
            <select name={"sort_by"} onChange={e => handlerFilters(e)}>
                {option.map(option => <option key={option.value} value={option.value}>{option.label}</option>)}
            </select>

        </div>;
    }
}

export default HeadContentBox