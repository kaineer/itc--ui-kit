import { useState } from 'react';
import classes from './FileSelector.module.css'
import { FileBadge } from '../kit/FileBadge';

interface Props {
  filenames: string[];
  initial: string;
  onClick?: (name: string) => void;
}

const noop = () => null;

export const FileSelector = ({
  filenames,
  initial = '',
  onClick = noop,
}) => {
  const [selected, setSelected] = useState<string>(initial);

  const handleClick = (name: string) => () => {
    setSelected(name);
    onClick(name);
  }

  return (
    <div className={classes.container}>
      { filenames.map((name) => {
        return <FileBadge
          active={name === selected}
          title={name}
          onClick={handleClick(name)}
        />
      }) }
    </div>
  );
}
