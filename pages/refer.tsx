import { NextPage } from 'next';
import Head from 'next/head';
import { Card } from 'react-bootstrap';

import My_Navbar from '../Navbar';

const Refer: NextPage = () => {

  return (
    <>
      <Head>
        <title> โครงการรณรงค์ปลูกจิตสำนึก งดทิ้งขวดพลาสติก </title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {My_Navbar("refer")}

      <Card>
        <Card.Header> เอกสารอ้างอิง </Card.Header>
        <Card.Body>
          <Card.Title> ... </Card.Title>
          <Card.Text>
            ...
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  )
}

export default Refer