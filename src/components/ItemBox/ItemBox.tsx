import React, {Component} from "react";
import "./itemBox.scss"
import Movie from "../../models/Movie";

type ItemBoxProps = {
    item: Movie
}

class ItemBox extends Component<ItemBoxProps>{
    constructor(props: ItemBoxProps) {
        super(props)
    }

    render() {
        const {item} = this.props;
        return <div className={"item-box"}>
            <img src={
                "https://image.tmdb.org/t/p/w500" + (item.backdrop_path ? item.poster_path : "/1")
            } className={"image-item"} alt={"movie poster"}/>
            <p>{item.title}</p>
            <p>Рейтинг: {item.vote_average}</p>
        </div>;
    }
}

export default ItemBox;