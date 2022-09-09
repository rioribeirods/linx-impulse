
import React from 'react'
import P from '../P/P'
import Button from '../Button/Button';
import style from './AltForm.module.css'
import { useForm } from "react-hook-form"

const AltForm = () => {
    const { register: register, handleSubmit: handleSubmit, formState: { errors: error } } = useForm();
    const onSubmit = data => console.log(data);
  
    return (
        <section className={style.AltForm}>
            <div className={style.selection}>
                <span className={style.line} />
                <P style={style.t1} content={"Compartilhe a novidade"} />
                <span className={style.line} />
            </div>
            <P style={style.p1} content={"Quer que seus amigos também ganhem a lista personalizada deles? Preencha agora!"} />
            <form onSubmit={handleSubmit(onSubmit)} className={style.forms}>
                <div className={style.forms1}>
                    <label>Nome do seu amigo:</label>
                    <input {...register("nome", { required: true, minLength: 10 })} type='text' name='nome' className={style.inputText} />
                    {error.nome && <span>Esse campo é obrigatório.</span>}
                </div>
                <div className={style.forms2}>
                    <label>Email:</label>
                    <input {...register("email2", { required: true,  pattern: {
      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
      message: 'Enter a valid e-mail address',
    } })} type='email' name='email' className={style.inputText} />
    {error.email && <span>Esse campo é obrigatório.</span>}
                </div>
            </form>
            <div className={style.divBtn}>
                <Button content={'Enviar agora'} style={style.btn} />
            </div>


        </section>

    )
}

export default AltForm