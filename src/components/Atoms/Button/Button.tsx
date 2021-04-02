import React, { ButtonHTMLAttributes } from 'react';
import { QuaantumUIProps } from '../../../types';
import { useQuaantumInternalProps } from '../../../utils/hooks/useQuaantumInternalProps';
import { RawButton } from '../../HTML/HTML';

export interface ButtonProps extends QuaantumUIProps, ButtonHTMLAttributes<HTMLButtonElement> {}

const Button: React.FC<ButtonProps> = (props) => {
  const internalProps = useQuaantumInternalProps('Button');
  return <RawButton {...internalProps} {...props} />;
};

export default Button;
