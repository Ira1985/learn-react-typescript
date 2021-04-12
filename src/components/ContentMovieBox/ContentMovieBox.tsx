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
        if(_.has(newFilter, e.target.name)) {
            type fieldsOfFilter = keyof ContentMovieBoxState['filters'];
            const name = e.target.name as fieldsOfFilter;
            newFilter[e.target.name as fieldsOfFilter] = e.target.value;
            this.setState({
                filters: newFilter
            })
        } else {
            throw Error("Unknown key")
        }

        const tree = {
            roots: {
                trunk: {
                    branch: 'a leaf',
                    hollow: 'a squirrel',
                },
            },
            country: {
                city: 'a citizen',
            },
            'Internet': {
                'Hexlet.io': {
                    'Frontend JS': {
                        'Trees': 'this lesson'
                    },
                    'Blog': 'this post',
                },
            },
        };

        _.keys(tree).flatMap(key => console.log(key))
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