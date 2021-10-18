import { NextPage } from 'next';
import Head from 'next/head';
import { Card } from 'react-bootstrap';

import My_Navbar from '../Navbar';

const AssessmentForm: NextPage = () => {

  return (
    <>
      <Head>
        <title> แนะนำวิธีแยกขวด - โครงการรณรงค์ปลูกจิตสำนึก งดทิ้งขวดพลาสติก </title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {My_Navbar("home")}

      <Card>
        <Card.Header> แบบประเมิณโครงการ </Card.Header>
        <Card.Body>
            <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSelyi_3bS6BnUnoxtLYpjM53OoXfY30E3dtso4gPTz19SmH8g/viewform?embedded=true" width="100%" height="1939" frameBorder="0">กำลังโหลด…</iframe>
        </Card.Body>
      </Card>
    </>
  )
}

export default AssessmentForm