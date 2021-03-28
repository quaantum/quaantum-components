import React from 'react';
import { BuitUIProps } from '../../../types';
import { useBuitInternalProps } from '../../../utils/hooks/useBuitInternalProps';
import { RawDiv, RawMain, RawArticle, RawSection, RawAside } from '../../HTML/HTML';

export interface BoxProps extends BuitUIProps {
  as?: 'div' | 'main' | 'article' | 'section' | 'aside';
}

const elements = {
  div: RawDiv,
  main: RawMain,
  article: RawArticle,
  section: RawSection,
  aside: RawAside,
};

const Box: React.FC<BoxProps> = ({ as = 'div', ...props }) => {
  const internalProps = useBuitInternalProps('Box');

  const Component = as in elements ? elements[as] : elements.div;

  return <Component {...internalProps} {...props} />;
};

export default Box;
