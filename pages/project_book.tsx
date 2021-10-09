import { NextPage } from 'next';
import Head from 'next/head';
import Script from 'next/script';
import { Card } from 'react-bootstrap';
import My_Navbar from '../Navbar';

const ProjectBook: NextPage = () => {

  return (
    <>
      <Head>
        <title> รูปเล่ม - โครงการรณรงค์ปลูกจิตสำนึก งดทิ้งขวดพลาสติก </title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {My_Navbar("project_book")}

      <Card>
        <Card.Header> รูปเล่มโครงการ </Card.Header>
        <Card.Body>
 
        <embed type="application/pdf" src="zaza" width="100%" height="685" />
        </Card.Body>
      </Card>
    </>
  )
}

export default ProjectBook
