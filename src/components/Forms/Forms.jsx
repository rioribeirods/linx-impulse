import React from 'react';
import { useForm } from 'react-hook-form';
import style from "./Forms.module.css"
import Button from '../Button/Button';

const Forms = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <form onSubmit={handleSubmit(onSubmit)} className={style.form}>
            <label>Seu nome:</label>
            <input type="text" name='nome' {...register("nome", { required: true, minLength: 10 })} className={style.inputTexto} />
            {errors.nome && <span>Esse campo é obrigatório.</span>}
            <label>Email:</label>
            <input type="email" name='email' className={style.inputTexto} {...register("email", {
                required: true, pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                    message: 'Enter a valid e-mail address',
                }
            })} />
            {errors.email && <span>Esse campo é obrigatório.</span>}
            <label {...register("cpf", {
                required: true, pattern: {
                    value: /^\d{3}\.\d{3}\.\d{3}\-\d{2}$/,
                    message: 'CPF inválido ',
                }
            })}>CPF:</label>
            {errors.cpf && <span>Esse campo é obrigatório.<br></br>
                (digite no formato xxx.xxx.xxx-xx)</span>}
            <input type="text" name='cpf' className={style.inputTexto} {...register("cpf", {
                required: true, pattern: {
                    value: /^\d{3}\.\d{3}\.\d{3}\-\d{2}$/,
                    message: 'CPF inválido ',
                }
            })} />
            <div className={style.inputRadio}>
                <input  {...register("genero", { required: true})} type="radio" name='genero'/>
                <label>Masculino</label>
                <input {...register("genero", { required: true})} type="radio" name='genero'/>
                <label>Feminino</label>
                <input {...register("genero", { required: true})} type="radio" name='genero'/>
                <label>Não-binário</label>
                {errors.genero && <span>Esse campo é obrigatório.</span>}
            </div>
            <Button content={"Enviar"} style={style.button} />
        </form>
    )
}

export default Forms