import React from "react";
import { AppContext, useAppContext } from '../../../src/context/state'
import { Image, Button, Card } from "react-bootstrap"
import { HiArrowRight } from "react-icons/hi"
export default function Upload() {

    const { duviState, setDuviState } = useAppContext()
    const nextStep = () => {

        setDuviState({
            ...duviState,
            step: "Description"
        })
    }

    return (
        <>
            <Card className="text-center toggleIn">
                <Card.Body>
                    <Card.Title>Upload</Card.Title>
                    <Card.Text>
                        With supporting text below as a natural lead-in to additional content.
                        </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
                <Button size="lg" onClick={nextStep} variant="warning" className="text-right rounded-bottom rounded-0 button-next button-next-right-align p-3 mt-5 text-white" block>AVANÇAR{' '}
                    <HiArrowRight />
                </Button>
            </Card>
        </>
    )
}
