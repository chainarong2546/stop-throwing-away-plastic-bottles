import { NextPage } from 'next';
import Head from 'next/head';
import { Card, Image as BsImage } from 'react-bootstrap';

import My_Navbar from '../Navbar';

const Home: NextPage = () => {

  return (
    <>
      <Head>
        <title> โครงการรณรงค์ปลูกจิตสำนึก งดทิ้งขวดพลาสติก </title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {My_Navbar("home")}

      <Card>
        <Card.Header> หน้าหลัก </Card.Header>
        <Card.Body>
          <Card.Text>
          <BsImage src="/home/messageImage_1633758471594.jpg" fluid rounded/>
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  )
}

export default Home