
import React from 'react'
import Button from '../Button/Button'
import style from './Cards.module.css'

const Card = ({ imagem, nome, descricao, de, por, vezes, ou }) => {
  return (
    <article className={style.card} >
      <picture className={style.picture}>
        <img src={imagem}  alt="" />
      </picture>
      <h3 className={style.titulo}>{nome}</h3>
      <h4 className={style.descricao}>{descricao}</h4>
      <h4 className={style.h4}>De: R${de},00</h4>
      <h5 className={style.por}>Por: R${por},00</h5>
      <p className={style.p}>ou {vezes}x de: R${ou}0</p>
      <Button style={style.button} content = "Comprar" />
    </article>
  )
}

export default Card