import { RequestSettingsProps } from "@/types/components";
import React from "react";
import { Table, Button, Form } from "react-bootstrap";
import { Trash } from "react-bootstrap-icons";

export default function RequestSettings(props: RequestSettingsProps) {
  const {
    requestSettings,
    addRequestSetting,
    deleteRequestSetting,
    onChangeRequestSetting,
  } = props;
  return (
    <>
      {requestSettings.length !== 0 && (
        <Table size="sm" striped bordered hover>
          <thead>
            <tr>
              <th></th>
              <th>Key</th>
              <th>Value</th>
              <th>Description</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {requestSettings.map((requestSetting, i) => {
              return (
                <tr key={i}>
                  <td
                    style={{
                      textAlign: "center",
                    }}
                  >
                    <Form.Check
                      type="checkbox"
                      checked={requestSetting.selected}
                      onChange={(e) => {
                        onChangeRequestSetting(
                          requestSetting.id,
                          "selected",
                          e.target.checked
                        );
                      }}
                    />
                  </td>
                  <td>
                    <Form.Control
                      value={requestSetting.key}
                      onChange={(e) => {
                        onChangeRequestSetting(
                          requestSetting.id,
                          "key",
                          e.target.value
                        );
                      }}
                      size="sm"
                      type="text"
                    />
                  </td>
                  <td>
                    <Form.Control
                      value={requestSetting.value}
                      onChange={(e) => {
                        onChangeRequestSetting(
                          requestSetting.id,
                          "value",
                          e.target.value
                        );
                      }}
                      size="sm"
                      type="text"
                    />
                  </td>
                  <td>
                    <Form.Control
                      value={requestSetting.description}
                      onChange={(e) => {
                        onChangeRequestSetting(
                          requestSetting.id,
                          "description",
                          e.target.value
                        );
                      }}
                      size="sm"
                      type="text"
                    />
                  </td>
                  <td
                    style={{
                      textAlign: "center",
                    }}
                  >
                    <Button
                      size="sm"
                      variant="outline-danger"
                      style={{
                        borderRadius: "50%",
                      }}
                      onClick={() => deleteRequestSetting(requestSetting.id)}
                    >
                      <Trash />
                    </Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      )}
      <Button className="mt-10" size="sm" onClick={addRequestSetting}>
        Add
      </Button>
    </>
  );
}
