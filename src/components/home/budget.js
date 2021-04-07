import React from "react";
import { AppContext, useAppContext } from '../../../src/context/state'
import { Image, Button, Card, Form } from "react-bootstrap";
import { HiArrowRight } from "react-icons/hi"
export default function Budget() {

    const { duviState, setDuviState } = useAppContext()
    const nextStep = () => {

        setDuviState({
            ...duviState,
            step: "Schedule"
        })
    }
  const setBudget = (value) => {
    setDuviState({
      ...duviState,
      budget: value,
    });
  };
    return (
      <>
        <Card className="text-center toggleIn">
          <Card.Body>
            <Card.Title>Qual seu orçamento para as suas questões?*</Card.Title>
            <Card.Text>
              Conta aí quanto você está disposto a pagar, AO TOTAL, para receber
              suas resoluções passo a passo 😎
            </Card.Text>
            <Form>
              <Form.Group className="my-3" controlId="formBasicEmail">
                <Form.Label>Defina seu orçamento</Form.Label>
                <Form.Control
                  onChange={(e) => setBudget(e.target.value)}
                  type="text"
                  placeholder="Defina seu orçamento"
                />
              </Form.Group>
            </Form>
          </Card.Body>
          <Button
            size="lg"
            onClick={nextStep}
            variant="warning"
            className="text-right rounded-bottom rounded-0 button-next button-next-right-align p-3 mt-5 text-white"
            block
          >
            AVANÇAR <HiArrowRight />
          </Button>
        </Card>
      </>
    );
}
