import { CopyBlock, dracula } from "react-code-blocks";



// @ts-ignore
export default function CodeBlock({ code, language, showLineNumbers }){
  return (
      <CopyBlock
          style={{width:"50%"}}
          text={code}
          language={language}
          showLineNumbers={showLineNumbers}
          theme={dracula}
          codeBlock
      />
  );
};
