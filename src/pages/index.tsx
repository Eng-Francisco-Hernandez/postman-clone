import { Inter } from "next/font/google";
import {
  Button,
  Col,
  Container,
  Form,
  Row,
  Table,
  ThemeProvider,
} from "react-bootstrap";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <ThemeProvider
      breakpoints={["xxxl", "xxl", "xl", "lg", "md", "sm", "xs", "xxs"]}
      minBreakpoint="xxs"
    >
      <Container fluid="lg">
        <Row className="mt-50">
          <div className="d-flex">
            <Col md={2}>
              <Form.Select size="sm" aria-label="Default select example">
                <option value="1">GET</option>
                <option value="2">POST</option>
                <option value="3">PUT</option>
                <option value="4">DELETE</option>
              </Form.Select>
            </Col>
            <Col md={8}>
              <Form.Control size="sm" type="text" placeholder="URL" />
            </Col>
            <Col md={2}>
              <Button size="sm" variant="outline-success">
                Search
              </Button>
            </Col>
          </div>
        </Row>
        <Row className="mt-20">
          <Col>Params</Col>
        </Row>
        <Row className="mt-10">
          <Col md={11}>
            <Table size="sm" striped bordered hover>
              <thead>
                <tr>
                  <th></th>
                  <th>Key</th>
                  <th>Value</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                </tr>
              </tbody>
            </Table>
          </Col>
        </Row>
        <Row>
          <Col>
            <Button size="sm" variant="outline-success">
              Add parameter
            </Button>
          </Col>
        </Row>
      </Container>
    </ThemeProvider>
  );
}
