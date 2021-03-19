import React, {ChangeEvent, Component} from "react";
import MainMovieDbBox from "../MainMovieDbBox/MainMarvelBox";
import "./contentMovieBox.scss"
import FooterContentBox from "../FootterContentBox/FooterContentBox";
import HeadContentBox from "../HeadContentBox/HeadContentBox";

type ContentMovieBoxProps = {

}

type ContentMovieBoxState = {
    filters: {
        sort_by: string | undefined,
        [index: string]: string | undefined
    }
}

class ContentMovieBox extends Component<ContentMovieBoxProps, ContentMovieBoxState>{
    constructor(props: ContentMovieBoxProps) {
        super(props);
        this.state = {
            filters: {
                sort_by: undefined
            }
        }
    }

    handlerFilters = (e: ChangeEvent<HTMLSelectElement>) => {
        let newFilter = {...this.state.filters};
        newFilter[e.target.name] = e.target.value
        this.setState({
            filters: newFilter
        })
    }

    render() {
        let {filters} = this.state;

        return <div className={"content-movie-box"}>
            <HeadContentBox filters={filters} handlerFilters={this.handlerFilters} />
            <MainMovieDbBox/>
            <FooterContentBox/>
        </div>;
    }
}

export default ContentMovieBox