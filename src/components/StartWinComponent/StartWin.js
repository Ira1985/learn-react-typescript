import React, {Component} from "react";
import "./startWin.css"
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import List from '@material-ui/core/List';
import ContentMovieBox from "../ContentMovieBox/ContentMovieBox";
import {movieService} from "../../services/MovieService";
import {APICS} from "../../utils/AxiosAPI";

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


    onSubmit = () => {

        var formData = new FormData();


        let o = {
            "marketplaceId": document.getElementById("id").value,
            "file": document.forms["userForm"].image.files[0]
        }

        let k = JSON.stringify({
            "id": document.getElementById("id").value,
            "name": document.getElementById("name").value,
            "avatar": document.getElementById("avatar").value
        })

        let b = new Blob([JSON.stringify(o)], {
            type: "application/json"
        });

        let d = new Blob([o],{
            type: "multipart/form-data"
        });


        formData.append("src", document.forms["userForm"].src.files[0]);
        formData.append('images', JSON.stringify({
            "id": document.getElementById("id").value,
            "name": document.getElementById("name").value,
            "avatar": document.getElementById("avatar").value
        }));
        var boundary = Math.random().toString().substr(2);
        APICS.put("/catalogs", formData)
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