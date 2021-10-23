import { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { Card, Image as BsImage, Button, Container, Row, Col } from 'react-bootstrap';

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
            <h5>แบบประเมินโครงการ</h5>
            ขอความกรุณาท่านที่เข้าชมเว็บไซต์ กรอกแบบประเมิณโครงการเพื่อเป็นข้อมูลสำหรับประเมิณความสำเร็จในการทำโครงการ <br/>
            <Button target="_bank" href="https://forms.gle/As2UQerYygpxEFPu5"> คลิกเพื่อทำแบบประเมิณ </Button>
          </Card.Text>
          <hr/>
          <Row>
            <Col lg={8} style={{margin:'auto'}}>
            <BsImage src="/home/01.webp" fluid rounded/>
            <BsImage src="/home/02.webp" fluid rounded/>
            <BsImage src="/home/03.webp" fluid rounded/>
            </Col>
          </Row>

        </Card.Body>
      </Card>
    </>
  )
}

export default Home