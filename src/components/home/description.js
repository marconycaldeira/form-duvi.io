import React from "react";
import { AppContext, useAppContext } from '../../../src/context/state'
import { Image, Button, Card, Form } from "react-bootstrap";
import { HiArrowRight } from "react-icons/hi"
export default function Description() {

    const { duviState, setDuviState } = useAppContext()
    const nextStep = () => {

        setDuviState({
            ...duviState,
            step: "Budget"
        })
    }
    const setQtdOfExercises = (value) => {
         setDuviState({
           ...duviState,
           qtd_problems: value,
         });
    }
    const setComments = (value) => {
        setDuviState({
            ...duviState,
            comments: value,
        });
    }
    return (
      <>
        <Card className=" toggleIn">
          <Card.Body>
            <Card.Title className="text-center">
              Conta mais sobre o material que você tá enviando para a gente!!
            </Card.Title>
            <Card.Text className="text-center">
              Especifique quantas e quais seriam as questões
            </Card.Text>
            <Form>
              <Form.Group className="my-3" controlId="formBasicEmail">
                <Form.Label>
                  Em quantos exercícios você precisa de ajuda
                </Form.Label>
                <Form.Control
                  onChange={(e) => setQtdOfExercises(e.target.value)}
                  type="number"
                  placeholder="Em quantos exercícios você precisa de ajuda"
                />
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>
                  Teria comentários ou observações aos Tutores
                </Form.Label>
                <Form.Control
                  onChange={(e) => setComments(e.target.value)}
                  type="text"
                  placeholder="Teria comentários ou observações aos Tutores"
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
