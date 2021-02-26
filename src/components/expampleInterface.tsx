import React, {ChangeEvent, Component, MouseEventHandler} from 'react';
import {API} from "../utils/AxiosAPI";
import Movie from "../models/Movie";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography'
import Grid from "@material-ui/core/Grid";
import Pagination from '@material-ui/lab/Pagination';
import CardActions from "@material-ui/core/CardActions";
import Chip from "@material-ui/core/Chip";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import {Theme} from "@material-ui/core/styles";

import "./e.css";

type ExpampleInterfaceState = {
    count: number,
    items: Movie[],
    totalPages: number,
    page: number,
    searchWord: string
}

type ExpampleInterfaceProps = {

}

const url: string = "discover/movie";

class ExpampleInterface extends Component<ExpampleInterfaceProps, ExpampleInterfaceState>{

    constructor(props: ExpampleInterfaceProps) {
        super(props);
        this.state = {
            count: 0,
            items: [],
            page: 1,
            totalPages: 0,
            searchWord: ''
        }
        this.changePages = this.changePages.bind(this);
        this.handlerChangeSearch = this.handlerChangeSearch.bind(this)
        this.searchMovies = this.searchMovies.bind(this)
    }

    componentDidMount(): void {
        this.getMovies(this.state.page);
        //fetch("https://api.themoviedb.org/3/discover/movie?api_key=00a1e64ecaa38fff3a8cdeab46c62451")
    }

    changePages(e: ChangeEvent<unknown>, page: number): void {
        this.getMovies(page)
    }

    getMovies(page: number) {
        API.get(url, {
            params: {
                language: "ru-RU",
                page: page
            }
        })
            .then(request => {
                console.log(request);
                let data = request.data;
                this.setState({
                    items: data.results,
                    totalPages: data.total_pages,
                    page: page
                })
            })
    }

    searchMovies(): any {
        //e.preventDefault();
        console.log("searchMovies")

    }

    handlerChangeSearch(e: ChangeEvent<HTMLInputElement>): any {
        let searchWord: string = e.currentTarget.value;
        API.get("search/movie", {
            params: {
                language: "ru",
                query: searchWord
            }
        })
            .then(request => {
                console.log(request)
                let data = request.data;
                this.setState({
                    items: data.results,
                    totalPages: data.total_pages,
                    page: data.page
                })
            })
        this.setState({
            searchWord: searchWord
        })
    }

    render() {
        let {items, totalPages, page} = this.state;
        return <div className={"wholeWindow"}>
            <Paper component="form">
                <InputBase
                    placeholder="Search Movies"
                    inputProps={{ 'aria-label': 'search google maps' }}
                    onChange={this.handlerChangeSearch}
                />
                <IconButton type="submit" aria-label="search" onClick={this.searchMovies}>
                    <SearchIcon />
                </IconButton>
            </Paper>
            <Grid container spacing={3} style={{margin: "0px", width: "100%", height: "100%", overflowY: "auto"}}>
                {
                    items.map(item => {
                        return (
                            <Grid item xs={3}>
                                <Card style={{maxWidth: "400px", minWidth: "300px"}}>
                                    <CardActionArea>
                                        <CardMedia
                                            style={{height: 0, paddingTop: '56.25%'}}
                                            image={`https://image.tmdb.org/t/p/original${item.backdrop_path}`}
                                            title="Contemplative Reptile"
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="h2">
                                                {item.title}
                                            </Typography>
                                        </CardContent>
                                        <CardActions disableSpacing>
                                            <Chip label={item.vote_average} variant="outlined" />
                                        </CardActions>
                                    </CardActionArea>
                                </Card>
                            </Grid>
                        )
                    })
                }
            </Grid>
            <Pagination count={totalPages} page={page} showFirstButton showLastButton onChange={this.changePages} />
        </div>
    }
}

export default ExpampleInterface;