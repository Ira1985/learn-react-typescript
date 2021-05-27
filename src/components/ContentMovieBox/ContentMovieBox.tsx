import React, {ChangeEvent, MouseEvent, Component} from "react";
import * as _ from "lodash";
import MainMovieDbBox from "../MainMovieDbBox/MainMarvelBox";
import "./contentMovieBox.scss"
import HeadContentBox from "../HeadContentBox/HeadContentBox";

type ContentMovieBoxProps = {

}

type ContentMovieBoxState = {
    filters: {
        sort_by: string | undefined
    }
}
type FieldsOfFilter = keyof ContentMovieBoxState['filters'];


class ContentMovieBox extends Component<ContentMovieBoxProps, ContentMovieBoxState>{
    constructor(props: ContentMovieBoxProps) {
        super(props);
        this.state = {
            filters: {
                sort_by: undefined
            }
        }
    }

    getFieldOfFilter<O extends ContentMovieBoxState['filters'], K extends keyof O> (obj: O, value: string): K | undefined{
        let n;
        type c = Pick<O, K>
        if(value in obj) {
            n = value as K;
        }
        return n;
    }

    handlerFilters = (e: ChangeEvent<HTMLSelectElement>) => {
        let newFilter = {...this.state.filters};
        let field = this.getFieldOfFilter(newFilter, e.target.name);
        if(field) {
            newFilter[field] = e.target.value;
            this.setState({
                filters: newFilter
            })
        } else
            throw Error("Unknown key " + e.target.name)
    }

    render() {
        let {filters} = this.state;

        return <div className={"content-movie-box"}>
            <HeadContentBox filters={filters} handlerFilters={this.handlerFilters} />
            <MainMovieDbBox filters={filters}/>
        </div>;
    }
}

export default ContentMovieBox