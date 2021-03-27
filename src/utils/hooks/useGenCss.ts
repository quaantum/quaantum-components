import { useContext } from 'react';
import { ctx } from '../../components';
import { QuaantumUIProps } from '../../types';
import { genCss } from '../genCss';

export const useGenCss = () => {
  const { colors } = useContext(ctx);

  const generate = (props: QuaantumUIProps) => {
    return genCss(props, { colors });
  };
  return generate;
};

export type GenCss = ReturnType<typeof useGenCss>;