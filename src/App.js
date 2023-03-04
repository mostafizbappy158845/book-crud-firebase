import { useState } from "react";
import { Container, Navbar, Row, Col } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import AddBook from "./components/AddBook";
import BooksList from "./components/BooksList";
import "./App.css";

function App() {
  const [bookId, setBookId] = useState("");

  const getBookIdHandler = (id) => {
    console.log("The ID of document to be edited: ", id);
    setBookId(id);
  };
  return (
    <>
    {/* bg="dark" variant="dark" */}
      <Navbar  style={{ backgroundColor: "#645CBB" }} className="header">
        <Container>
          <Navbar.Brand href="#home" className="text-white">Library - Firebase CRUD</Navbar.Brand>
        </Container>
      </Navbar>

      <Container style={{ width: "400px" }}>
        <Row>
          <Col>
            <AddBook id={bookId} setBookId={setBookId} />
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col>
            <BooksList getBookId={getBookIdHandler} />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;