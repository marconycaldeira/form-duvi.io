import React, { useEffect, useState } from "react";
import { AppContext, useAppContext } from '../../../src/context/state'
import { Image, Button, Card } from "react-bootstrap"
import { HiArrowRight } from "react-icons/hi"
import axios from "axios";
import Select from "react-select";
import Dropzone from "react-dropzone";

export default function Subject() {

    const { duviState, setDuviState } = useAppContext()
    const [availableSubjects, setAvailableSubjects] = useState();

    const nextStep = () => {

        setDuviState({
            ...duviState,
            step: "Upload"
        })
    }
    const setSubject = (value) => {
      setDuviState({
        ...duviState,
        subject: value,
      });
    };
    
    const getSubjectsFromAPI = async () => {
        
        let { data: subjects } = await axios.get(
          "https://sub.duvi.io/api/materias/"
        );

        subjects = subjects.map((value) => {
            return {
                value: value.id,
                label: value.nome,
            }
        })
        
        setAvailableSubjects(subjects);

    }

    useEffect(() => {
      getSubjectsFromAPI();
    }, [duviState]);
    
    return (
      <>
        <Card className="text-center toggleIn">
          <Card.Body>
            <Card.Title>
              Em qual Matéria você precisa de Resolução em Tempo Real?*
            </Card.Title>
            <Card.Text>
              Se sua matéria não está nessa lista, escolha a que mais se
              assemelha.
            </Card.Text>
            <div className="text-left">
              <Select
                onChange={(selected) => setSubject(selected.value)}
                options={availableSubjects}
              />
            </div>
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
