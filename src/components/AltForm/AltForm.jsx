
import React from 'react'
import P from '../P/P'
import Button from '../Button/Button';
import style from './AltForm.module.css'

const AltForm = () => {
    return (
        <section className={style.AltForm}>
            <div className={style.selection}>
                <span className={style.line} />
                <P style={style.t1} content={"Compartilhe a novidade"} />
                <span className={style.line} />
            </div>
            <P style={style.p1} content={"Quer que seus amigos também ganhem a lista personalizada deles? Preencha agora!"} />
            <section className={style.forms}>
                <div className={style.forms1}>
                    <label>Nome do seu amigo:</label>
                    <input type='text' name='nome' className={style.inputText} />
                </div>
                <div className={style.forms2}>
                    <label>Email:</label>
                    <input type='email' name='email' className={style.inputText} />
                </div>
            </section>
            <div className={style.divBtn}>
                <Button content={'Enviar agora'} style={style.btn} />
            </div>


        </section>

    )
}

export default AltForm