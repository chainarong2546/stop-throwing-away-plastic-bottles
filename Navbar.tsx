import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import Link from 'next/link';

function My_Navbar(page: string) {
  var PageHome = "";
  var PageInfo = "";
  var PageProjectBook = "";
  var PageManipulator = "";
  var PageDownload = "";
  var PageArtifact = ""
  var PageSeparateBottles = "";
  var PageRefer = "";
    if (page == "home") {
      var PageHome = "active";
    } else if (page == "project_book") {
      var PageProjectBook = "active";
      var PageInfo = "show";
    } else if (page == "manipulator") {
      var PageManipulator = "active";
      var PageInfo = "show";
    } else if (page == "refer") {
      var PageRefer = "active";
      var PageInfo = "show";
    } else if (page == "download") {
      var PageDownload = "active";
      var PageInfo = "show";
    } else if (page == "artifact") {
      var PageArtifact = "active";
    } else if (page == "separate_bottles") {
      var PageSeparateBottles = "active";
    }
  return (
    <>
      <Navbar bg="primary" variant="dark" style={{borderRadius:'10px', marginBottom:'5px'}}>
        <Container fluid="md">
          <Nav className="me-auto">
            <Link href="../" passHref>
              <Nav.Link className={PageHome}> หน้าหลัก </Nav.Link>
            </Link>
              <NavDropdown className={PageInfo} title="รายละเอียดโครงการ" id="navbarScrollingDropdown">
                <Link href="/project_book" passHref>
                  <NavDropdown.Item href="#action3" className={PageProjectBook}> รูปเล่มโครงการ </NavDropdown.Item>
                </Link>
                <Link href="/manipulator" passHref>
                  <NavDropdown.Item className={PageManipulator}> ผู้จัดทำโครงการ </NavDropdown.Item>
                </Link>
                <Link href="/refer" passHref>
                  <NavDropdown.Item className={PageRefer}> ข้อมูลอ้างอิง </NavDropdown.Item>
                </Link>
                <NavDropdown.Divider />
                <Link href="/download" passHref>
                  <NavDropdown.Item className={PageDownload}> ดาวน์โหลด </NavDropdown.Item>
                </Link>
              </NavDropdown>
              <Link href="/artifact" passHref>
                <Nav.Link className={PageArtifact}> สิ่งประดิษฐ์จากขวดพลาสติก </Nav.Link>
              </Link>
              <Link href="/separate_bottles" passHref>
                <Nav.Link className={PageSeparateBottles}> วิธีแยกพลาสติก </Nav.Link>
              </Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}

export default My_Navbar