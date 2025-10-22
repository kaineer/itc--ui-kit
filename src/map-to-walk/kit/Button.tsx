import clsx from 'clsx';
import classes from './Button.module.css';
import type { ReactNode, MouseEvent } from 'react';
import { getVariationClasses } from '../shared/classes';

interface Props {
  title: string;
  variation: string;
  children?: ReactNode;
  onClick: (e: MouseEvent<HTMLButtonElement>) => void;
}

export const Button = ({
  title = 'Нажать', variation, children
}: Props) => {
  const variationClasses = getVariationClasses(variation, classes);

  const className = clsx(classes.button, variationClasses);

  return (
    <button className={className}>
      { children ?
        children :
        <span className={classes.label}>{ title }</span>
      }
    </button>
  );
}
