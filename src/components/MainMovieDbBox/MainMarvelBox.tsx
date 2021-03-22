import React, {Component} from "react";
import "./mainMarvelBox.scss"
import ItemBox from "../ItemBox/ItemBox";
import Movie from "../../models/Movie";
import {movieService} from "../../services/MovieService";

type MainMovieDbBoxProps = {
    filters: {
        sort_by: string | undefined
    }
    page: number
}

type MainMovieDbBoxState = {
    items: Movie[] | null
}

class MainMovieDbBox extends Component<MainMovieDbBoxProps, MainMovieDbBoxState>{
    constructor(props: MainMovieDbBoxProps) {
        super(props);
        this.state = {
            items: null
        }
    }

    async componentDidMount() {
        console.log("componentDidMount")
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

    async componentDidUpdate(prevProps: Readonly<MainMovieDbBoxProps>) {
        console.log("componentDidUpdate 1")
        if(this.props.filters.sort_by !== prevProps.filters.sort_by) {
            console.log("componentDidUpdate 2")
            let response = await movieService.getList<Movie>(undefined, this.props.filters.sort_by);
            let results = response ? response.results : []
            this.setState({
                items: results
            })
        }
        if(this.props.page !== prevProps.page) {
            console.log("componentDidUpdate 2")
            let response = await movieService.getList<Movie>(this.props.page, this.props.filters.sort_by);
            let results = response ? response.results : []
            this.setState({
                items: results
            })
        }
    }

    render() {
        let {items} = this.state;
        console.log("render MainMovieDbBox")
        return <div className={"main-marvel-box"}>
            {
                items && items.map(item => <ItemBox key={item.id} item={item}/>)
            }
        </div>;
    }
}

export default MainMovieDbBox