import { BuitUIProps } from './types';

export const dictionary: Record<
  keyof Omit<Required<BuitUIProps>, 'variant' | 'customCss'>,
  string
> = {
  color: 'color',
  bg: 'background',
  bgColor: 'background-color',
  round: 'border-radius',
  width: 'width',
  w: 'width',
  height: 'height',
  h: 'height',
  border: 'border',
  borderTop: 'border-top',
  borderRight: 'border-right',
  borderBottom: 'border-bottom',
  borderLeft: 'border-left',
  b: 'border',
  bt: 'border-top',
  br: 'border-right',
  bb: 'border-bottom',
  bl: 'border-left',
  boxShadow: 'box-shadow',
  padding: 'padding',
  paddingTop: 'padding-top',
  paddingRight: 'padding-right',
  paddingBottom: 'padding-bottom',
  paddingLeft: 'padding-left',
  p: 'padding',
  pt: 'padding-top',
  pr: 'padding-right',
  pb: 'padding-bottom',
  pl: 'padding-left',
  margin: 'margin',
  marginTop: 'margin-top',
  marginRight: 'margin-right',
  marginBottom: 'margin-bottom',
  marginLeft: 'margin-left',
  m: 'margin',
  mt: 'margin-top',
  mr: 'margin-right',
  mb: 'margin-bottom',
  ml: 'margin-left',
  fontWeight: 'font-weight',
  minW: 'min-width',
  maxW: 'max-width',
  minH: 'min-height',
  maxH: 'min-height',
  cursor: 'cursor',
  outline: 'outline',
  display: 'display',
  justifyContent: 'justify-content',
  alignItems: 'align-items',
  flexDirection: 'flex-direction',
  flexWrap: 'flex-wrap',
  resize: 'resize',
  overflow: 'overflow',
  overflowX: 'overflow-x',
  overflowY: 'overflow-y',
  fontFamily: 'font-family',
  fontSize: 'font-size',
  textDecoration: 'text-decoration',
  position: 'position',
  top: 'top',
  left: 'left',
  right: 'right',
  bottom: 'bottom',
  objectFit: 'object-fit',
  objectPosition: 'object-position',
  zIndex: 'z-index',
  listStyle: 'list-style',
  content: 'content',
  textTransform: 'text-transform',
  textOrientation: 'text-orientation',
  transform: 'transform',
  transformOrigin: 'transform-origin',
  textAlign: 'text-align',
  _hover: '&:hover',
  _active: '&:active',
  _focus: '&:focus',
  _placeholder: '&::placeholder',
  _before: '&::before',
  _after: '&::after',
};
