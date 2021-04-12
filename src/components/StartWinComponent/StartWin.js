import React, {Component} from "react";
import "./startWin.css"
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import List from '@material-ui/core/List';
import ContentMovieBox from "../ContentMovieBox/ContentMovieBox";
import {movieService} from "../../services/MovieService";

class StartWin extends Component{
    constructor(props) {
        super(props);
        this.state = {
            minimaizNavMenu: false,
            agree: true
        }
    }
    handlerMinNavMenu = () => this.setState(prevState => (
        {
            minimaizNavMenu: !prevState.minimaizNavMenu
        }
    ))

    handlerChange = (event) => {
        this.setState(prevState => ({
            [event.target.name]: event.target.checked
        }))
    }
    render() {
        const {minimaizNavMenu} = this.state;
        return (
           <div className={"wholeWindow"}>
               <div className={minimaizNavMenu ? "minNavigationMenu" : "navigationMenu"}>
                   <List>
                       <button onClick={() => movieService.getSessionId()}>Login</button>
                   </List>
                   <div className={"buttonMinimaizer"}>
                       <IconButton onClick={this.handlerMinNavMenu}>
                           {minimaizNavMenu ? <ChevronLeftIcon/> : <ChevronRightIcon/>}
                       </IconButton>
                   </div>
               </div>
               <div className={"contentWindow"}>
                   <div className={"content"}>
                       {/*<Switch name={"agree"} checked={agree} onChange={this.handlerChange}></Switch>*/}
                       <ContentMovieBox/>

                   </div>
               </div>
           </div>
        )
    }
}

export default StartWin;