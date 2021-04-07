import React, { createRef, useState } from "react";
import Dropzone from "react-dropzone";
import { AppContext, useAppContext } from '../../../src/context/state'
import { Image, Button, Card, ListGroup } from "react-bootstrap";
import { HiArrowRight } from "react-icons/hi"
import axios from "axios"
import ReactLoading from "react-loading";

const LAMBDA_ENDPOINT = "https://7dbr2ta2il.execute-api.us-east-2.amazonaws.com/default/getPresignedURL";
const BUCKET_ENDPOINT = "http://duvi-bucket-test2.s3.amazonaws.com/";


export default function Upload() {

    const { duviState, setDuviState } = useAppContext()
    const [loading, setLoading] = useState(false);

    const nextStep = () => {

        setDuviState({
            ...duviState,
            step: "Description"
        })
    }

    const addImages = (newFile) => {

        let currentFiles = duviState.files
        currentFiles.push(newFile);

        console.log(currentFiles);

        setDuviState({
            ...duviState,
            files: currentFiles,
        });
    }   

    const removeImage = (fileName) => {

        let currentFiles = duviState.files;
        currentFiles = currentFiles.filter((value) => {
            return (value.name != fileName);
        });

        setDuviState({
            ...duviState,
            files: currentFiles,
        });
    }


    const dropzoneRef = createRef();
    const openDialog = () => {
      if (dropzoneRef.current) {
        dropzoneRef.current.open();
      }
    };

    const processFile = async (files) => {
        setLoading(true);
        for (const key in files) {
          if (Object.hasOwnProperty.call(files, key)) {
                const file = files[key]

                //const blob = new Blob([file], { type: file.type });
                const response = await axios.get(LAMBDA_ENDPOINT, {
                  params: { filename: file.name, mimetype: file.type },
                });

                const upload_response = await axios.put(
                  response.data.uploadURL,
                  file,
                  { headers: { "Content-Type": file.type } }
                );

                addImages({
                  name: file.name,
                  url: BUCKET_ENDPOINT + response.data.filename,
                });
          }
        }
        setLoading(false);

    }

    return (
      <>
        <Card className="text-center toggleIn">
          <Card.Body>
            <Card.Title>
              Envie listas de exercício, slides ou quaisquer materiais que
              demonstrem o aprofundamento do conteúdo que seu professor
              passou!!*
            </Card.Title>
            <Card.Text></Card.Text>
            <Dropzone onDrop={(e) => processFile(e)} ref={dropzoneRef} noClick noKeyboard>
              {({ getRootProps, getInputProps, acceptedFiles }) => {
                return (
                  <div className="container">
                    <div className="dropzone p-4">
                      <input {...getInputProps()} />
                      <p>Arraste seus arquivos para cá</p>
                      <button
                        type="button"
                        className="btn btn-primary"
                        onClick={openDialog}
                      >
                        Ou selecione os arquivos do seu computador
                      </button>
                    </div>
                    <div className="d-flex justify-content-center">
                     {loading ? (
                        <ReactLoading
                          type="bars"
                          color="#ef7f3a"
                          height={"20%"}
                          width={"20%"}
                        />
                      ) : (
                        <ListGroup className="text-left mt-5 w-100">
                          {duviState.files.map((file) => (
                            <ListGroup.Item
                              className="d-flex justify-content-between"
                              key={file.name}
                            >
                              <span className="float-left">{file.name}</span>
                              <span className="float-right">
                                <button
                                  onClick={() => removeImage(file.name)}
                                  className="ml-5 btn btn-danger rounded delete-button"
                                >
                                  x
                                </button>
                              </span>
                            </ListGroup.Item>
                          ))}
                        </ListGroup>
                      )}
                    </div>
                  </div>
                );
              }}
            </Dropzone>
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
