import { ChangeEvent, useState } from "react";
import Stack from "react-bootstrap/Stack";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import useAuthentication from "src/hooks/useAuthentication";

function HomePage() {
  const [instanceValidated, setInstanceValidated] = useState(false);
  const [instanceUrl, setInstanceUrl] = useState("");
  const { authenticated, authenticate, digitalTwinServiceClient } = useAuthentication();
  const [query, setQuery] = useState("");
  const [queryResults, setQueryResults] = useState("");

  const handleAuthenticate = () => {
    console.log(instanceUrl);
    authenticate(instanceUrl);
  };

  const validateInstance = (e: ChangeEvent<HTMLInputElement>) => {
    setInstanceValidated(true);
    setInstanceUrl(e.target.value);
  };

  const handleQueryChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setQuery(e.target.value);
  };

  const executeQuery = async () => {
    const results = await digitalTwinServiceClient!.queryTwins(query);
    setQueryResults(JSON.stringify(results));
  };

  return (
    <>
      <Container>
        <Row>
          <Col>
            <h1 className="mt-3">Azure Digital Twins Query App</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <Stack direction="horizontal" gap={3} className="py-3">
              <Form.Control
                id="instance-input"
                className="me-auto"
                placeholder="Type your Azure digital twin instance URL here..."
                onChange={validateInstance}
              ></Form.Control>
              <Button
                id="authenticate-button"
                variant="primary"
                onClick={handleAuthenticate}
                disabled={!instanceValidated}
              >
                Login
              </Button>
            </Stack>
          </Col>
        </Row>
        <Row>
          <Col>
            <Stack direction="horizontal" gap={3} className="py-3">
              <Form.Control
                id="query-input"
                as="textarea"
                className="me-auto"
                placeholder="Type your query here..."
                disabled={!authenticated}
                onChange={handleQueryChange}
              ></Form.Control>
              <Button
                id="query-execute-button"
                variant="primary"
                disabled={!authenticated}
                onClick={executeQuery}
              >
                Execute
              </Button>
            </Stack>
          </Col>
        </Row>
        <Row>
          <Col>
            <h2 className="mt-3">Results</h2>
            <div>
              <Form.Control
                id="query-results"
                as="textarea"
                className="me-auto"
                placeholder="Type your query here..."
                value={queryResults}
                readOnly
              ></Form.Control>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default HomePage;
