import React from "react";
import { AppContext, useAppContext } from '../../../src/context/state'
import { Image, Button, Card, Form } from "react-bootstrap"
import { HiArrowRight } from "react-icons/hi"
export default function ResolutionType() {

    const { duviState, setDuviState } = useAppContext()
    const nextStep = () => {
       
        setDuviState({
            ...duviState,
            step: "Subject"
        })
    }

    const setResolutionType = (type) =>{
        setDuviState({
            ...duviState,
            resolutionType: type,
        });
    }

    return (
      <>
        <Card className="text-center toggleIn">
          <Card.Body>   
            <Card.Title>
              Você precisa de ajuda com...<span className="text-danger">*</span>
            </Card.Title>
            <Card.Text>
              <div className="mb-3 d-flex justify-content-center">
                <div
                  onClick={() => setResolutionType(1)}
                  className={`my-3 py-2 px-2 mx-1 border ${
                    duviState.resolutionType == 1 ? "bg-light-blue" : ""
                  }`}
                >
                  <Form.Check
                    inline
                    name="resolutionType"
                    label="Reslucao em tempo real"
                    type="radio"
                    id="resolutionType-1"
                    key="resolutionType-1"
                  />
                </div>
                <div
                  onClick={() => setResolutionType(2)}
                  className={`my-3 py-2 px-2 mx-1 border ${
                    duviState.resolutionType == 2 ? "bg-light-blue" : ""
                  }`}
                >
                  <Form.Check 
                    inline 
                    name="resolutionType"
                    label="Reslucao com prazo" 
                    type="radio"
                    id="resolutionType-2" 
                    key="resolutionType-2" 
                  />
                </div>
              </div>
            </Card.Text>
          </Card.Body>
          <Button
            size="lg"
            onClick={nextStep}
            variant="warning"
            className="rounded-bottom rounded-0 button-next button-next-right-align p-3 mt-5 text-white"
            block
          >
            AVANÇAR <HiArrowRight />
          </Button>
        </Card>
      </>
    );
}
