import AceEditor from "react-ace";
import "ace-builds/src-noconflict/theme-textmate";

interface TerminalProps {
  result?: string;
}

export default function Terminal(props: TerminalProps) {
  const { result } = props;

  return (
    <AceEditor
      theme="textmate"
      name="codeResult"
      fontSize={18}
      width={"100%"}
      tabSize={2}
      value={result}
      readOnly
      focus={false}
      showPrintMargin={false}
      highlightActiveLine={false}
    />
  );
}
