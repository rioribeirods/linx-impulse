import React from 'react';
import { useState, useEffect } from 'react';
import style from "./Main.module.css"
import P from "../P/P.jsx"
import Button from "../Button/Button.jsx"
import Forms from '../Forms/Forms';

const Main = () => {
    const [data, setData] = useState([])
    const [page, setPage] = useState(1)

    async function getAPI () {

        try {
            const res = await fetch(`https://frontend-intern-challenge-api.iurykrieger.now.sh/products?page=${page}`)
            const json = await res.json()

            setData([...dado, ...json.products])
        } catch(error) {
            console.log(error)
        }
    }
        useEffect(() => {getAPI()}, [page])

        return (
            <main>
                <section className={style.sectionTexto}>
                    <section className={style.sectionDivisao}>
                    <P style={style.tituloTexto} content={"Ajude o algoritmo a ser mais certeiro"}></P>
                    <P style={style.texto} content={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ultricies tellus nec mi porta convallis sollicitudin eu urna. Mauris rhoncus erat sed interdum dignissim. Suspendisse semper pretium consectetur. Praesent bibendum arcu risus, sit amet iaculis ex tempus quis. Cras et erat ut tellus vulputate tincidunt. Aenean lacinia euismod augue vel egestas. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum vel urna tortor. Vivamus et arcu non felis tristique eleifend. "} />
                    <P style={style.texto} content={"Morbi eu condimentum urna. Curabitur eu magna eget turpis condimentum ultrices. Suspendisse quis lorem ultricies, pulvinar purus sed, egestas erat. Etiam ultricies a ante vehicula pharetra. Quisque ut neque mattis, consequat velit ut, ultrices orci. Nulla varius elementum erat vel pharetra. Aenean sit amet nisi diam. Morbi viverra, magna ac luctus commodo, odio ante suscipit libero, at mattis augue est vel metus."} />
                    </section>
                    <section className={style.sectionDivisao}>
                    <Forms />
                    </section>
                </section>
                
            </main>
        )

    
}

export default Main