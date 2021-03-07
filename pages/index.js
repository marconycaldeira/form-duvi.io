import Head from 'next/head'
import React from "react";
import { useEffect } from 'react';
import { Container, Row, Col } from "react-bootstrap"
import HomeStep from '../src/components/home/home';
import ResolutionType from '../src/components/home/resolution-type';
import Subject from '../src/components/home/subject';
import Upload from '../src/components/home/upload';
import Description from '../src/components/home/description';
import Budget from '../src/components/home/budget';
import Schedule from '../src/components/home/schedule';
import Register from '../src/components/home/register';
import Finish from '../src/components/home/finish';
import { useAppContext } from '../src/context/state'


export default function Home() {

  const { duviState } = useAppContext()

  const steps = {
    "Home": HomeStep,
    "ResolutionType": ResolutionType, 
    "Subject": Subject,
    "Upload": Upload,
    "Description": Description,
    "Budget" : Budget,
    "Schedule": Schedule,
    "Register": Register,
    "Finish": Finish
  }

  let Component = steps[duviState.step]

  useEffect(() => {
    console.log(duviState);
  }, []);

  return (
    <Container className="main-container" fluid>
      <Row className="h-50 justify-content-center">
        <Col xs={6} className="text-center">
          <Component />
        </Col>
      </Row>
    </Container>
  )
}
