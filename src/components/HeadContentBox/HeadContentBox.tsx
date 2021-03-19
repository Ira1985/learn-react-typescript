import React, {ChangeEvent, Component, OptionHTMLAttributes} from "react";
import "./headContentBox.scss"

type HeadContentBoxProps = {
    filters: {
        sort_by: string | undefined
    }

    handlerFilters: (e: ChangeEvent<HTMLSelectElement>) => void
}

type HeadContentBoxState = {

}

class HeadContentBox extends Component<HeadContentBoxProps, HeadContentBoxState>{
    constructor(props: HeadContentBoxProps) {
        super(props)
    }

    render() {
        let {filters: {sort_by}, handlerFilters} = this.props;

        return <div className={"head-contet-box"}>
            <span>Фильтры: </span>
            <select name={"sort_by"} onChange={e => handlerFilters(e)}>
                <option value={'popularity.desc'}>Популярные по убыванию</option>
                <option value={'popularity.asc'}>Популярные по возрастанию</option>
            </select>

        </div>;
    }
}

export default HeadContentBox