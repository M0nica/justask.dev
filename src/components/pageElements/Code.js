import React from "react";
import Highlight, { defaultProps } from "prism-react-renderer";
import theme from "prism-react-renderer/themes/nightOwl";
import { LiveEditor, LiveError, LivePreview, LiveProvider } from "react-live";
import styled from "@emotion/styled";
import { copyToClipboard } from "../../utils/copy-to-clipboard";

const Pre = styled.pre`
  position: relative;
  text-align: left;
  margin: 1em;
  padding: 1.5em;
  overflow-x: auto;
  border-radius: 3px;

  & .token-lline {
    line-height: 1.3em;
    height: 1.3em;
  }
  font-family: monospace;
  font-size: 1.2em;
`;

const LineNo = styled.span`
  display: inline-block;
  width: 2em;
  user-select: none;
  opacity: 0.3;
`;

const CopyCode = styled.button`
  position: absolute;
  right: 0.25rem;
  top: 0.5rem;
  border: 0;
  border-radius: 3px;
  padding: 0.5em;
  margin: 0.25em;
  opacity: 0.3;
  cursor: pointer;
  font-family: monospace;
  &:hover {
    opacity: 1;
  }
`;

export const Code = ({ codeString, language, ...props }) => {
  if (props["react-live"]) {
    return (
      <LiveProvider code={codeString} theme={theme}>
        <LiveEditor />
        <LiveError />
        <LivePreview />
      </LiveProvider>
    );
  }
  const handleClick = () => {
    copyToClipboard(codeString);
  };
  return (
    <Highlight
      {...defaultProps}
      code={codeString}
      language={language}
      theme={theme}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <Pre className={className} style={style}>
          <CopyCode onClick={handleClick}>Copy</CopyCode>
          {tokens.map((line, i) => (
            <div {...getLineProps({ line, key: i })}>
              <LineNo>{i + 1}</LineNo>
              {line.map((token, key) => (
                <span {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </Pre>
      )}
    </Highlight>
  );
};
