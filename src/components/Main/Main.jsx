import React from 'react';
import { useState, useEffect } from 'react';
import style from "./Main.module.css"
import P from "../P/P.jsx"
import Button from "../Button/Button.jsx"
import Forms from '../Forms/Forms';
import Cards from '../Cards/Cards.jsx'
import AltForm from '../AltForm/AltForm';

const Main = () => {
    const [data, setData] = useState([])
    const [page, setPage] = useState(1)

    async function getAPI() {

        try {
            const res = await fetch(`https://frontend-intern-challenge-api.iurykrieger.now.sh/products?page=${page}`)
            const json = await res.json()

            setData([...data, ...json.products])
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => { getAPI() }, [page])

    return (
        <main>
            <div className={style.sectionTexto}>
                <div className={style.sectionDivisao}>
                    <P style={style.tituloTexto} content={"Ajude o algoritmo a ser mais certeiro"}></P>
                    <P style={style.texto} content={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ultricies tellus nec mi porta convallis sollicitudin eu urna. Mauris rhoncus erat sed interdum dignissim. Suspendisse semper pretium consectetur. Praesent bibendum arcu risus, sit amet iaculis ex tempus quis. Cras et erat ut tellus vulputate tincidunt. Aenean lacinia euismod augue vel egestas. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum vel urna tortor. Vivamus et arcu non felis tristique eleifend. "} />
                    <P style={style.texto} content={"Morbi eu condimentum urna. Curabitur eu magna eget turpis condimentum ultrices. Suspendisse quis lorem ultricies, pulvinar purus sed, egestas erat. Etiam ultricies a ante vehicula pharetra. Quisque ut neque mattis, consequat velit ut, ultrices orci. Nulla varius elementum erat vel pharetra. Aenean sit amet nisi diam. Morbi viverra, magna ac luctus commodo, odio ante suscipit libero, at mattis augue est vel metus."} />
                </div>
                <Forms />
            </div>
            <section className={style.sectionDois}>
                <div className={style.sectionTres}>
                    <span className={style.linha} ></span>
                    <P style={style.textoSelecao} content={"Sua seleção especial"} />
                    <span className={style.linha}></span>
                </div>
            </section>
            <section className={style.cards}>
                {
                    data.length > 0 ?
                        data.map((item, index) => {
                            return (
                                <Cards
                                    key={index}
                                    imagem={item.image}
                                    nome={item.name}
                                    descricao={item.description}
                                    de={item.oldPrice}
                                    por={item.price}
                                    vezes={item.installments.count}
                                    ou={item.installments.value} />
                            )
                        }) : ''
                  }
            </section>
            <div className={style.divButton}>
            <Button style={style.button} onClick={() => setPage(page + 1)} content="Adquira mais produtos aqui" />
            </div>
            <AltForm />
        </main>
    )


}

export default Main