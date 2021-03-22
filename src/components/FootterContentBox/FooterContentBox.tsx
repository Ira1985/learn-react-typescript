import React, {MouseEvent, Component} from "react";
import "./footerContentBox.scss"

type FooterContentBoxProps = {
    handlerPlusePages: (e: MouseEvent<HTMLButtonElement>) => void
    handlerMinusPages: (e: MouseEvent<HTMLButtonElement>) => void
    page: number
}

type FooterContentBoxState = {

}

class FooterContentBox extends Component<FooterContentBoxProps, FooterContentBoxState>{
    constructor(props: FooterContentBoxProps) {
        super(props)
    }

    render() {
        let {handlerPlusePages, handlerMinusPages, page} = this.props;
        return <div className={"footer-contet-box"}>
            <button type={"button"} value={"forvard"} onClick={(e) => handlerPlusePages(e)}>Вперед</button>
            <span>{page}</span>
            <button value={"back"} onClick={(e) => handlerMinusPages(e)}>Назад</button>

        </div>;
    }
}

export default FooterContentBox