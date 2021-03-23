import React, {MouseEvent, Component} from "react";
import "./footerContentBox.scss"

type FooterContentBoxProps = {
    handlerPages: (e: MouseEvent<HTMLButtonElement>) => void
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
            <button type={"button"} value={"forvard"} onClick={(e) => handlerPages(e)}>Вперед</button>
            <span>{page}</span>
            <button value={"back"} onClick={(e) => handlerPages(e)}>Назад</button>

        </div>;
    }
}

export default FooterContentBox