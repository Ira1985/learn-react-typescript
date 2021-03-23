import React, {ChangeEvent, MouseEvent, Component} from "react";
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
    },
    page: number
}

class ContentMovieBox extends Component<ContentMovieBoxProps, ContentMovieBoxState>{
    constructor(props: ContentMovieBoxProps) {
        super(props);
        this.state = {
            filters: {
                sort_by: undefined
            },
            page: 1
        }
    }

    handlerFilters = (e: ChangeEvent<HTMLSelectElement>) => {
        let newFilter = {...this.state.filters};
        newFilter[e.target.name] = e.target.value
        this.setState({
            filters: newFilter,
            page: 1
        })
    }

    handlerPages =(e: MouseEvent<HTMLButtonElement>) => {
        let {page} = this.state;
        let newPage = page;
        if(e.currentTarget.value === "forvard")
            ++newPage;
        if(e.currentTarget.value === "back" && page !== 1)
            --newPage;
        this.setState({
            page: newPage
        })
    }

    render() {
        let {filters, page} = this.state;

        return <div className={"content-movie-box"}>
            <HeadContentBox filters={filters} handlerFilters={this.handlerFilters} />
            <MainMovieDbBox filters={filters} page={page}/>
            <FooterContentBox page={page} handlerPages={this.handlerPages}/>
        </div>;
    }
}

export default ContentMovieBox