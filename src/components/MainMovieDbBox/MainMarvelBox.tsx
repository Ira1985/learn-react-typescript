import React, {Component, MouseEvent} from "react";
import "./mainMarvelBox.scss"
import ItemBox from "../ItemBox/ItemBox";
import Movie from "../../models/Movie";
import {movieService} from "../../services/MovieService";
import FooterContentBox from "../FootterContentBox/FooterContentBox";

type MainMovieDbBoxProps = {
    filters: {
        sort_by: string | undefined
    }
}

type MainMovieDbBoxState = {
    items: Movie[] | null,
    page: number
}

class MainMovieDbBox extends Component<MainMovieDbBoxProps, MainMovieDbBoxState>{
    constructor(props: MainMovieDbBoxProps) {
        super(props);
        this.state = {
            items: null,
            page: 1
        }
    }

    async componentDidMount() {
        let response = await movieService.getList<Movie>();
        let results = response ? response.results : []
        this.setState({
            items: results
        })
    }

    /*async componentWillReceiveProps(nextProps: Readonly<MainMovieDbBoxProps>, nextContext: any) {
        console.log("componentWillReceiveProps 1")
        if(this.props.filters.sort_by !== nextProps.filters.sort_by) {
            console.log("componentWillReceiveProps 2")
            let response = await movieService.getList<Movie>(undefined, nextProps.filters.sort_by);
            let results = response ? response.results : []
            this.setState({
                items: results
            })
        }
    }*/

    async componentDidUpdate(prevProps: Readonly<MainMovieDbBoxProps>, prevState: Readonly<MainMovieDbBoxState>, snapshot?: any) {
        if(this.props.filters.sort_by !== prevProps.filters.sort_by) {
            let response = await movieService.getList<Movie>(undefined, this.props.filters.sort_by);
            let results = response ? response.results : []
            this.setState({
                items: results,
                page: 1
            })
        }
        if(this.state.page !== prevState.page) {
            let response = await movieService.getList<Movie>(this.state.page, this.props.filters.sort_by);
            let results = response ? response.results : []
            this.setState({
                items: results
            })
        }
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
        let {items, page} = this.state;
        return <div className={"whole-main-marvel-box"}>
            <div className={"main-marvel-box"}>
                {
                    items && items.map(item => <ItemBox key={item.id} item={item}/>)
                }
            </div>
            <FooterContentBox handlerPages={this.handlerPages} page={page}/>
        </div>;
    }
}

export default MainMovieDbBox