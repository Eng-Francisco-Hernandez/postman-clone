import { RequestBarProps } from "@/types/components";
import { requestMethods } from "@/utils/util-constants";
import React from "react";
import { Col, Form, Button } from "react-bootstrap";

export default function RequestBar(props: RequestBarProps) {
  const { url, onChangeUrl, onChangeRequestMethod, sendRequest } = props;
  return (
    <div className="d-flex">
      <Col md={2}>
        <Form.Select
          size="sm"
          onChange={(e) => onChangeRequestMethod(e.target.value)}
        >
          {requestMethods.map((method, i) => {
            return (
              <option key={i} value={method}>
                {method}
              </option>
            );
          })}
        </Form.Select>
      </Col>
      <Col md={8}>
        <Form.Control
          value={url}
          onChange={(e) => onChangeUrl(e.target.value)}
          size="sm"
          type="text"
          placeholder="URL"
        />
      </Col>
      <Col md={2}>
        <Button size="sm" variant="success" onClick={sendRequest}>
          Send
        </Button>
      </Col>
    </div>
  );
}
