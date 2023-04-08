import AceEditor from "react-ace";
import React from "react";
import "ace-builds/src-noconflict/theme-textmate";
import "ace-builds/src-noconflict/mode-json";
import "ace-builds/src-noconflict/ext-language_tools";

interface BodyEditorProps {
  body: string;
  onChange: (body: string) => void;
}

export default function BodyEditor(props: BodyEditorProps) {
  const { body, onChange } = props;
  return (
    <AceEditor
      enableBasicAutocompletion
      enableLiveAutocompletion
      enableSnippets
      mode="json"
      theme="textmate"
      name="bodyEditor"
      fontSize={18}
      width={"100%"}
      showPrintMargin={false}
      showGutter={true}
      highlightActiveLine={true}
      tabSize={2}
      setOptions={{ useWorker: false }}
      value={body}
      onChange={onChange}
      maxLines={10}
    />
  );
}
