import React, {Component} from "react";
import "./footerContentBox.scss"

type FooterContentBoxProps = {
    handlerPages: (page: number) => void
    page: number
}

type FooterContentBoxState = {

}

class FooterContentBox extends Component<FooterContentBoxProps, FooterContentBoxState>{
    constructor(props: FooterContentBoxProps) {
        super(props)
    }

    render() {
        let {handlerPages, page} = this.props;
        return <div className={"footer-contet-box"}>
            <button type={"button"} value={"forvard"} onClick={() => handlerPages(page + 1)}>Вперед</button>
            <span>{page}</span>
            <button value={"back"} onClick={(e) => handlerPages(page - 1)}>Назад</button>

        </div>;
    }
}

export default FooterContentBox