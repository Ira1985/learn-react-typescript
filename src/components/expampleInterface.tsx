import React, {Component} from 'react';
import axios, {AxiosResponse} from "axios";
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

import "./e.css";

type ExpampleInterfaceState = {
    count: number,
    items: Movie[]
}

type ExpampleInterfaceProps = {

}

class ExpampleInterface extends Component<ExpampleInterfaceProps, ExpampleInterfaceState>{

    constructor(props: ExpampleInterfaceProps) {
        super(props);
        this.state = {
            count: 0,
            items: []
        }
    }

    componentDidMount(): void {
        axios.interceptors.response.use(function<T> (response: any): T {
            // Делаем что угодно с поступившими данными
            return response;
        }, function (error) {
            // Обрабатываем ошибку
            return Promise.reject(error);
        });
        axios({
            method: "get",
            url: "https://api.themoviedb.org/3/discover/movie",
            headers: {
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyYjk0MmRjNTRmZTkwY2ExNmQwN2QxNTEwNzFkYzY0YyIsInN1YiI6IjVmZDg4Nzk4ZGI5NTJkMDAzZDdlOGY2OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.57qKS4g2vWIauKakU3n0WmJX0Gy5y6D5Z8nw9MA7u8Y"
            },
            params: {
                language: "ru"
            }
        })
            .then(request => {
                let data: Movie[] = request.data.results;
                this.setState({items: data})
            })
    }

    render() {
        let {items} = this.state;
        return <div className={"wholeWindow"}>
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
            <Pagination count={10} showFirstButton showLastButton />
        </div>
    }
}

export default ExpampleInterface;