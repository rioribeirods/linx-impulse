import React from 'react';
import style from "./Forms.module.css"
import Button from '../Button/Button';

const Forms = () => {
    return (
        <form className={style.form}>
            <label>Seu nome:</label>
            <input type="text" name='nome' className={style.inputTexto} />
            <label>Email:</label>
            <input type="email" name='email' className={style.inputTexto} />
            <label>CPF:</label>
            <input type="text" name='cpf' className={style.inputTexto} />
            <div className={style.inputRadio}>
            <input type="radio" name='genero' />
            <label>Masculino</label>
            <input type="radio" name='genero' />
            <label>Feminino</label>
            <input type="radio" name='genero' />
            <label>Não-binário</label>
            </div>
            <Button content={"Enviar"} style={style.button} />
        </form>
    )
}

export default Forms