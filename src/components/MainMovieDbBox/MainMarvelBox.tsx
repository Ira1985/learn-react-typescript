import React, {Component} from "react";
import "./mainMarvelBox.scss"
import ItemBox from "../ItemBox/ItemBox";
import Movie from "../../models/Movie";
import {movieService} from "../../services/MovieService";

type MainMovieDbBoxProps = {

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
        let response = await movieService.getList<Movie>();
        let results = response ? response.results : []
        this.setState({
            items: results
        })
    }

    render() {
        let {items} = this.state;
        console.log("render items: ", items)
        return <div className={"main-marvel-box"}>
            {
                items && items.map(item => <ItemBox key={item.id} item={item}/>)
            }
        </div>;
    }
}

export default MainMovieDbBox