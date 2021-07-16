import React, { forwardRef, HTMLAttributes } from 'react';
import { QuaantumProps } from '../../../css/types';
import { QuaantumBase } from '../../Base/QuaantumBase';

export interface TextProps
  extends QuaantumProps,
    Omit<HTMLAttributes<HTMLParagraphElement>, 'color'> {}

const Text = forwardRef<HTMLParagraphElement, TextProps>((props) => {
  return <QuaantumBase as='p' styleAs='Text' {...props} />;
});

export default Text;
