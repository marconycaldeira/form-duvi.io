import React from "react";
import { AppContext } from '../../../src/context/state'
import { Image, Button } from "react-bootstrap"
import { HiArrowRight } from "react-icons/hi"
export default function HomeStep() {
    const { duviState, setDuviState } = React.useContext(AppContext)
    const nextStep = () => {
        setDuviState({
            ...duviState,
            step: "ResolutionType"
        })
    }

    return (
        <>
            <Image className="logo" src={'assets/images/logo.png'} />
            <div className="form-header pt-5 pb-2">Olá, Estudante!! Clique em Duvirta-se para fazer um novo pedido ;)</div>
            <div className="form-subheader">Sabemos como está sendo difícil. Será um prazer te ajudar.</div>
            <Button size="lg" onClick={nextStep} variant="warning" className="button-next p-3 mt-5 text-white" block>DUVIRTA-SE{' '}
                <HiArrowRight />
            </Button>
        </>
    )
}
