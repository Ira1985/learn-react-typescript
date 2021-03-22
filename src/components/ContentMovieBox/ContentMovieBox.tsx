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
            filters: newFilter
        })
    }

    handlerPlusePages =(e: MouseEvent<HTMLButtonElement>) => {
        this.setState((prevState) => ({
            page: prevState.page + 1
        }))
    }

    handlerMinusPages =(e: MouseEvent<HTMLButtonElement>) => {

        this.setState((prevState) => ({
            page: prevState.page - 1
        }))
    }

    render() {
        let {filters, page} = this.state;

        return <div className={"content-movie-box"}>
            <HeadContentBox filters={filters} handlerFilters={this.handlerFilters} />
            <MainMovieDbBox filters={filters} page={page}/>
            <FooterContentBox page={page} handlerPlusePages={this.handlerPlusePages} handlerMinusPages={this.handlerMinusPages}/>
        </div>;
    }
}

export default ContentMovieBox