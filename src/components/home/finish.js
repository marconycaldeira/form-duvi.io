import React from "react";
import { AppContext, useAppContext } from '../../../src/context/state'
import { Image, Button, Card } from "react-bootstrap"
import { HiArrowRight } from "react-icons/hi"
export default function Description() {

    const { duviState, setDuviState } = useAppContext()
    const nextStep = () => {

        setDuviState({
            ...duviState,
            step: "Home"
        })
    }

    return (
        <>
            <Image className="logo" src={'assets/images/logo.png'} />
            <div className="form-header pt-5 pb-2">Valeuu, TESTE - NAO ACEITAR!! </div>
            <div className="form-subheader">Nos próximos minutos você receberá uma atualização no seu Whats. Fique ligado(a)!! Quer fazer outro pedido?</div>
        </>
    )
}
