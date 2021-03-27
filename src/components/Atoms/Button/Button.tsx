import React from 'react';
import { useContext } from 'react';
import styled from 'styled-components';
import { QuaantumUIProps, Internal } from '../../../types';
import { useGenCss } from '../../../utils/hooks/useGenCss';
import { ctx } from '../../Providers/QuaantumProvider/QuaantumProvider';

export interface ButtonProps extends QuaantumUIProps {
  variant?: 'solid' | 'outline';
}

const ButtonWithoutContext = styled.button<ButtonProps & Internal>`
  ${(props) =>
    props.genCss({
      ...props.componentCtx.base,
      ...props.componentCtx.variants?.[props.variant || props.componentCtx.defaultVariant],
    })}
`;

const Button: React.FC<ButtonProps> = (props) => {
  console.log('Button');
  const { components } = useContext(ctx);
  const genCss = useGenCss();
  return <ButtonWithoutContext componentCtx={components?.button} {...props} genCss={genCss} />;
};

export default Button;
