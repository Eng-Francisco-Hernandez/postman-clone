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
      fontSize={14}
      width={"100%"}
      tabSize={2}
      value={result}
      focus={false}
      showPrintMargin={false}
      highlightActiveLine={false}
      maxLines={15}
    />
  );
}
