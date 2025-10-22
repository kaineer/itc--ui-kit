import { useState } from "react";
import classes from './EditorWithSelector.module.css'
import { FileSelector } from "./FileSelector";
import { CodeEditor } from "../kit/CodeEditor";

interface FileDescription {
  name: string;
  content: string;
}

interface Props {
  files: FileDescription[];
  initial?: string;
  onFileChange: (name: string, value: string) => void;
}

const getLanguage = (name: string) => {
  if (name) {
    const dotPos = name.lastIndexOf('.');
    const ext = name.slice(dotPos + 1);

    if (ext === 'js') return 'javascript';
    return ext;
  }
}

export const EditorWithSelector = ({ files, initial, onFileChange }: Props) => {
  const [selected, setSelected] = useState<string>(
    initial || files[0].name
  );
  const [language, setLanguage] = useState<string>(getLanguage(initial));

  const value = files.find(({name}) => name === selected)?.content || '';

  const handleSelection = (name: string) => {
    setSelected(name);
    setLanguage(getLanguage(name));
  }

  const handleChange = (value: string) => {
    onFileChange(selected, value);
  }

  return (
    <div className={classes.container}>
      <FileSelector
        initial={selected}
        onClick={handleSelection}
        filenames={files.map(({ name }) => name)}
      />
      <CodeEditor
        value={value}
        language={language}
        onChange={handleChange}
      />
    </div>
  );
}
