import clsx from 'clsx';
import classes from './TextInput.module.css'
import type { Ref } from 'react';
import { getVariationClasses } from '../shared/classes';

const defaultVariation = '500x80 shadow';

interface Props {
  variation?: string;
  defaultValue?: string;
  ref?: Ref<HTMLInputElement>;
}

export const TextInput = ({
  variation = '',
  defaultValue = '',
  ref
}: Props) => {
  const variationClasses = getVariationClasses(
    variation || defaultVariation,
    classes
  );

  if (ref) {
    return (
      <input
        ref={ref}
        className={clsx(classes.input, variationClasses)}
        defaultValue={defaultValue}
      />
    );
  }

  return (
    <input
      className={clsx(classes.input, variationClasses)}
      defaultValue={defaultValue}
    />
  );
}
