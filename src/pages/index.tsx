import { Inter } from "next/font/google";
import { Col, Container, Row, Tab, Tabs, ThemeProvider } from "react-bootstrap";
import { v4 as uuid_v4 } from "uuid";

const inter = Inter({ subsets: ["latin"] });

import dynamic from "next/dynamic";
import { useState } from "react";
import RequestBar from "@/components/request-bar/RequestBar";
import RequestSettings from "@/components/request-settings/RequestSettings";
import { RequestSetting } from "@/types/components";

const BodyEditor = dynamic(
  () => import("@/components/body-editor/BodyEditor"),
  { ssr: false }
);

const ResultsEditor = dynamic(
  () => import("@/components/results-editor/ResultsEditor"),
  {
    ssr: false,
  }
);

export default function Home() {
  const [url, setUrl] = useState("");
  const [requestMethod, setRequestMethod] = useState("GET");
  const [parameters, setParameters] = useState<RequestSetting[]>([]);
  const [headers, setHeaders] = useState<RequestSetting[]>([]);
  const [body, setBody] = useState("");
  const [result, setResult] = useState("");

  const sendRequest = () => {
    console.log(
      JSON.stringify({
        url,
        requestMethod,
        parameters,
      })
    );
  };

  const onChangeRequestSetting = (
    id: string,
    key: string,
    value: string | boolean,
    type: "param" | "header"
  ) => {
    switch (type) {
      case "param":
        setParameters((prevParams) => {
          return prevParams.map((param) => {
            if (param.id === id) {
              const newParam: any = { ...param };
              newParam[key] = value;
              return newParam;
            } else {
              return param;
            }
          });
        });
        break;
      case "header":
        setHeaders((prevHeaders) => {
          return prevHeaders.map((header) => {
            if (header.id === id) {
              const newHeader: any = { ...header };
              newHeader[key] = value;
              return newHeader;
            } else {
              return header;
            }
          });
        });
        break;
      default:
        break;
    }
  };

  const addRequestSetting = (type: "param" | "header") => {
    const newRequestSetting = {
      id: uuid_v4(),
      selected: true,
      key: "",
      value: "",
      description: "",
    };
    switch (type) {
      case "param":
        const newParameters = [...parameters, newRequestSetting];
        setParameters(newParameters);
        break;
      case "header":
        const newHeaders = [...headers, newRequestSetting];
        setHeaders(newHeaders);
        break;
      default:
        break;
    }
  };

  const deleteRequestSetting = (id: string, type: "param" | "header") => {
    switch (type) {
      case "param":
        const newParams = parameters.filter((param) => param.id !== id);
        setParameters(newParams);
        break;
      case "header":
        const newHeaders = headers.filter((header) => header.id !== id);
        setHeaders(newHeaders);
        break;
      default:
        break;
    }
  };

  return (
    <ThemeProvider
      breakpoints={["xxxl", "xxl", "xl", "lg", "md", "sm", "xs", "xxs"]}
      minBreakpoint="xxs"
    >
      <Container fluid="lg">
        <Row className="mt-50">
          <RequestBar
            url={url}
            onChangeUrl={(url) => setUrl(url)}
            onChangeRequestMethod={(method) => setRequestMethod(method)}
            sendRequest={sendRequest}
          />
        </Row>
        <Row className="mt-20">
          <Col md={11}>
            <Tabs
              id="request-settings"
              defaultActiveKey="params"
              className="mb-3"
            >
              <Tab eventKey="params" title="Params">
                <RequestSettings
                  requestSettings={parameters}
                  addRequestSetting={() => addRequestSetting("param")}
                  deleteRequestSetting={(id) =>
                    deleteRequestSetting(id, "param")
                  }
                  onChangeRequestSetting={(id, key, value) =>
                    onChangeRequestSetting(id, key, value, "param")
                  }
                />
              </Tab>
              <Tab eventKey="headers" title="Headers">
                <RequestSettings
                  requestSettings={headers}
                  addRequestSetting={() => addRequestSetting("header")}
                  deleteRequestSetting={(id) =>
                    deleteRequestSetting(id, "header")
                  }
                  onChangeRequestSetting={(id, key, value) =>
                    onChangeRequestSetting(id, key, value, "header")
                  }
                />
              </Tab>
              <Tab eventKey="body" title="Body">
                <BodyEditor
                  body={body}
                  onChange={(body: string) => setBody(body)}
                />
              </Tab>
            </Tabs>
          </Col>
        </Row>
        {result.trim() !== "" && (
          <>
            <Row className="mt-20">
              <Col>Results</Col>
            </Row>
            <Row className="mt-20">
              <Col md={11}>
                <ResultsEditor result={result} />
              </Col>
            </Row>
          </>
        )}
        <Row className="mt-20"></Row>
      </Container>
    </ThemeProvider>
  );
}
