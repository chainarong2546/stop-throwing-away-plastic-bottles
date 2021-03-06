import { NextPage } from 'next';
import Head from 'next/head';
import { Card, Table, Image as BsImage } from 'react-bootstrap';

import My_Navbar from '../Navbar';

const Manipulator: NextPage = () => {

  return (
    <>
      <Head>
        <title> ผู้จัดทำ - โครงการรณรงค์ปลูกจิตสำนึก งดทิ้งขวดพลาสติก </title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {My_Navbar("manipulator")}

      <Card>
        <Card.Header> ผู้จัดทำโครงการ </Card.Header>
        <Card.Body>
          <Table striped bordered hover style={{textAlign:'center'}}>
            <thead>
              <tr>
                <th style={{width:'10%'}} ># </th>
                <th style={{width:'40%'}}> รูปประจำตัว </th>
                <th style={{width:'50%'}}> รายละเอียด </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td> 1 </td>
                <td> <BsImage src="/manipulator/รูปประจำตัว ชัยณรงค์.webp" style={{width:'180px'}} rounded/> </td>
                <td>
                  <b>ชื่อ :</b> นายชัยณรงค์ คงพล <br/>
                  <b>รหัสนักศึกษา :</b> 116410400146-9 <br/>
                  นักศึกษามหาวิทยาลัยเทคโนโลยีราชมงคลธัญบุรี <br/>
                  คณะ วิศวกรรมศาสตร์ <br/>
                </td>
              </tr>
              <tr>
                <td> 2 </td>
                <td> <BsImage src="/manipulator/รูปประจำตัว ธิติวุฒิ.webp" style={{width:'180px'}} rounded/> </td>
                <td>
                  <b>ชื่อ :</b> นายธิติวุฒิ ศรีจินดา <br/>
                  <b>รหัสนักศึกษา :</b> 116410400549-4 <br/>
                  นักศึกษามหาวิทยาลัยเทคโนโลยีราชมงคลธัญบุรี <br/>
                  คณะ วิศวกรรมศาสตร์ <br/>
                </td>
              </tr>
              <tr>
                <td> 3 </td>
                <td> <BsImage src="/manipulator/รูปประจำตัว มนัสวี.webp" style={{width:'180px'}} rounded/> </td>
                <td>
                  <b>ชื่อ :</b> นายมนัสวี สามลา <br/>
                  <b>รหัสนักศึกษา :</b> 116410417008-2 <br/>
                  นักศึกษามหาวิทยาลัยเทคโนโลยีราชมงคลธัญบุรี <br/>
                  คณะ วิศวกรรมศาสตร์ <br/>
                </td>
              </tr>
              <tr>
                <td> 4 </td>
                <td> <BsImage src="/manipulator/รูปประจำตัว วรพล.webp" style={{width:'180px'}} rounded/> </td>
                <td>
                  <b>ชื่อ :</b> นายวรพล จัดเขตรกรรม <br/>
                  <b>รหัสนักศึกษา :</b> 116410400670-8 <br/>
                  นักศึกษามหาวิทยาลัยเทคโนโลยีราชมงคลธัญบุรี <br/>
                  คณะ วิศวกรรมศาสตร์ <br/>
                </td>
              </tr>
              <tr>
                <td> 5 </td>
                <td> <BsImage src="/manipulator/รูปประจำตัว อภิชยา.webp" style={{width:'180px'}} rounded/> </td>
                <td>
                  <b>ชื่อ :</b> นาวสาวอภิชญา นวลแก้ว <br/>
                  <b>รหัสนักศึกษา :</b> 116410400514-8 <br/>
                  นักศึกษามหาวิทยาลัยเทคโนโลยีราชมงคลธัญบุรี <br/>
                  คณะ วิศวกรรมศาสตร์ <br/>
                </td>
              </tr>
            </tbody>
          </Table>

        </Card.Body>
      </Card>

    </>
  )
}

export default Manipulator