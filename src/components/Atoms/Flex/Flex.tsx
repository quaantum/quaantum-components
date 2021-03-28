import React from 'react';
import { useQuaantumInternalProps } from '../../../utils/hooks/useQuaantumInternalProps';
import Box, { BoxProps } from '../Box/Box';

export interface FlexProps extends BoxProps {}

const Flex: React.FC<FlexProps> = (props) => {
  const internalProps = useQuaantumInternalProps('Flex');

  return <Box {...internalProps} {...props} />;
};

export default Flex;
