import React from 'react';
import Button from "../Button/Button.jsx";
import style from "./Header.module.css";
import P from "../P/P.jsx"

const Header = () => {
    return (
        <header className={style.headerStyle}>
            <div className={style.divHeader}>
            <P style={style.pUm} content={"uma seleção de produtos"} />
            <P style={style.pDois} content={"especial para você"} />
            <P style={style.pTres} content={"Todos os produtos desta lista foram selecionados a partir da sua navegação. Aproveite!"} />
            </div>
            <div className={style.divButton} >
                <Button style={style.button} content="Conheça a Linx" />
                <Button style={style.button} content="Ajude o algoritimo" />
                <Button style={style.button} content="Seus produtos" />
                <Button style={style.button} content="Compartilhe" />
            </div>
        </header>
                    )
}

                    export default Header