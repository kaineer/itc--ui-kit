import CodeMirror from "@uiw/react-codemirror";
import { javascript, type LanguageSupport } from "@codemirror/lang-javascript";
import { html } from "@codemirror/lang-html";
import { css } from "@codemirror/lang-css";

interface Props {
  language: string;
  minHeight?: number;
  value?: string;
  onChange: (value: string) => void;
}

const getLangExtension = (language: string): LanguageSupport => {
  if (language === 'javascript') {
    return javascript();
  } else if (language === 'css') {
    return css();
  } else {
    return html();
  }
}

const px = (value: number): string => {
  return '' + value + 'px';
}

const defaultStyle = {
  border: 'solid 1px #88c0d0',
  backgroundColor: '#ffffff',

  borderRadius: '8px',
  padding: '8px',
}

export const CodeEditor = ({
  language,
  minHeight = 200,
  value = '',
  onChange = () => null,
}: Props) => {
  const langSupport = getLangExtension(language);

  const style = {
    ...defaultStyle,
    minHeight: px(minHeight)
  };

  return (
    <CodeMirror
      extensions={[ langSupport ]}
      style={style}
      value={value}
      onChange={onChange}
    />
  );
}
