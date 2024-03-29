import React, { ComponentType } from 'react';
import { DomElement } from '../utils/domElements';
import { LiteralUnion } from '../utils/types';

type AllCss = 'inherit' | 'initial' | 'unset';
export interface BorderProperties {
  borderRadius: LiteralUnion<AllCss, number | string>;
  /**
   * shorthand for borderRadius
   */
  border: LiteralUnion<AllCss, number | string>;
  borderColor: LiteralUnion<AllCss, string>;
  borderWidth: LiteralUnion<AllCss, string>;
  borderStyle: LiteralUnion<AllCss, string>;
  borderTop: BorderProperties['border'];
  borderTopColor: BorderProperties['borderColor'];
  borderTopWidth: BorderProperties['borderWidth'];
  borderTopStyle: BorderProperties['borderStyle'];
  borderRight: BorderProperties['border'];
  borderRightColor: BorderProperties['borderColor'];
  borderRightWidth: BorderProperties['borderWidth'];
  borderRightStyle: BorderProperties['borderStyle'];
  borderBottom: BorderProperties['border'];
  borderBottomColor: BorderProperties['borderColor'];
  borderBottomWidth: BorderProperties['borderWidth'];
  borderBottomStyle: BorderProperties['borderStyle'];
  borderLeft: BorderProperties['border'];
  borderLeftColor: BorderProperties['borderColor'];
  borderLeftWidth: BorderProperties['borderWidth'];
  borderLeftStyle: BorderProperties['borderStyle'];
  borderCollapse: LiteralUnion<AllCss, 'collapse' | 'separate'>;

  outline: LiteralUnion<AllCss>;
  /**
   * shorthand for borderRadius
   */
  radius: BorderProperties['borderRadius'];
  /**
   * shorthand for borderRadius
   */
  round: BorderProperties['borderRadius'];
  /**
   * shorthand for borderRadius
   */
  r: BorderProperties['borderRadius'];
  /**
   * shorthand for border
   */
  b: BorderProperties['border'];
  /**
   * shorthand for borderTop
   */
  bt: BorderProperties['borderTop'];
  /**
   * shorthand for borderRight
   */
  br: BorderProperties['borderRight'];
  /**
   * shorthand for borderBottom
   */
  bb: BorderProperties['borderBottom'];
  /**
   * shorthand for borderLeft
   */
  bl: BorderProperties['borderLeft'];
}

export interface ColorProperties {
  color: LiteralUnion<AllCss>;
  /**
   * shortcut for color
   */
  c: ColorProperties['color'];
}

export interface BackgroundProperties {
  background: LiteralUnion<AllCss>;
  backgroundColor: LiteralUnion<AllCss>;
  backgroundImage: LiteralUnion<AllCss>;

  /**
   * shortcut for background
   */
  bg: BackgroundProperties['background'];

  /**
   * shortcut for backgroundColor
   */
  bgColor: BackgroundProperties['backgroundColor'];

  /**
   * shortcut for backgroundImage
   */
  bgImage: BackgroundProperties['backgroundImage'];
}

export interface PaddingProperties {
  padding: LiteralUnion<AllCss, number | string>;
  paddingX: PaddingProperties['padding'];
  paddingY: PaddingProperties['padding'];
  paddingTop: PaddingProperties['padding'];
  paddingRight: PaddingProperties['padding'];
  paddingBottom: PaddingProperties['padding'];
  paddingLeft: PaddingProperties['padding'];
  /**
   * shortcut for padding
   */
  p: PaddingProperties['padding'];
  /**
   * shortcut for paddingX
   */
  px: PaddingProperties['paddingX'];
  /**
   * shortcut for paddingY
   */
  py: PaddingProperties['paddingY'];
  /**
   * shortcut for paddingTop
   */
  pt: PaddingProperties['paddingTop'];
  /**
   * shortcut for paddingRight
   */
  pr: PaddingProperties['paddingRight'];
  /**
   * shortcut for paddingBottom
   */
  pb: PaddingProperties['paddingBottom'];
  /**
   * shortcut for paddingLeft
   */
  pl: PaddingProperties['paddingLeft'];
}

export interface SizeProperties {
  width: LiteralUnion<AllCss, number | string>;
  height: LiteralUnion<AllCss, number | string>;

  minWidth: LiteralUnion<AllCss, number | string>;
  maxWidth: LiteralUnion<AllCss, number | string>;
  minHeight: LiteralUnion<AllCss, number | string>;
  maxHeight: LiteralUnion<AllCss, number | string>;

  boxSizing: 'content-box' | 'border-box' | AllCss;

  /**
   * shortcut for width
   */
  w: SizeProperties['width'];

  /**
   * shortcut for height
   */
  h: SizeProperties['height'];

  /**
   * shortcut for minWidth
   */
  minW: SizeProperties['minWidth'];
  /**
   * shortcut for maxWidth
   */
  maxW: SizeProperties['maxWidth'];
  /**
   * shortcut for minHeight
   */
  minH: SizeProperties['minHeight'];
  /**
   * shortcut for maxHeight
   */
  maxH: SizeProperties['maxHeight'];
}

export interface MarginProperties {
  margin: LiteralUnion<AllCss, string | number>;
  marginX: MarginProperties['margin'];
  marginY: MarginProperties['margin'];
  marginTop: MarginProperties['margin'];
  marginRight: MarginProperties['margin'];
  marginBottom: MarginProperties['margin'];
  marginLeft: MarginProperties['margin'];
  /**
   * shorthand for margin
   */
  m: MarginProperties['margin'];
  /**
   * shorthand for marginX
   */
  mx: MarginProperties['marginX'];
  /**
   * shorthand for marginY
   */
  my: MarginProperties['marginY'];
  /**
   * shorthand for marginTop
   */
  mt: MarginProperties['marginTop'];
  /**
   * shorthand for marginRight
   */
  mr: MarginProperties['marginRight'];
  /**
   * shorthand for marginBottom
   */
  mb: MarginProperties['marginBottom'];
  /**
   * shorthand for marginLeft
   */
  ml: MarginProperties['marginLeft'];
}

export interface DisplayProperties {
  display:
    | 'flex'
    | 'grid'
    | 'inline-flex'
    | 'inline-grid'
    | 'block'
    | 'inline'
    | 'inline-block'
    | 'none';

  /**
   * shortcut for display
   */
  d: Css['display'];
  float: 'left' | 'right' | 'none' | AllCss;
}

export interface OverflowProperties {
  overflow: LiteralUnion<'hidden' | 'scroll' | 'visible' | 'auto' | AllCss>;
  overflowX: OverflowProperties['overflow'];
  overflowY: OverflowProperties['overflow'];
}

export interface FontProperties {
  fontWeight: LiteralUnion<
    100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | AllCss,
    number | string
  >;
  fontSize: LiteralUnion<AllCss, number | string>;
  fontFamily: LiteralUnion<AllCss>;
  textDecoration: LiteralUnion<AllCss>;
  textTransform: LiteralUnion<'uppercase' | 'capitalize' | 'lowercase' | AllCss>;
  textOrientation: LiteralUnion<AllCss>;
  textAlign: LiteralUnion<'center' | 'left' | 'right' | AllCss>;
  whiteSpace: LiteralUnion<AllCss | 'normal' | 'nowrap' | 'pre' | 'pre-wrap' | 'pre-line'>;
  lineHeight: LiteralUnion<AllCss, number | string>;
  wordBreak: LiteralUnion<AllCss | 'normal' | 'break-all' | 'break-word'>;
  wordWrap: LiteralUnion<AllCss | 'normal' | 'break-word'>;
  letterSpacing: LiteralUnion<AllCss, number | string>;
  fontStyle: LiteralUnion<AllCss | 'normal' | 'italic' | 'oblique'>;
}

export interface PositionProperties {
  position: LiteralUnion<AllCss | 'absolute' | 'fixed' | 'relative' | 'static' | 'sticky'>;
  top: LiteralUnion<AllCss | number>;
  left: LiteralUnion<AllCss | number>;
  right: LiteralUnion<AllCss | number>;
  bottom: LiteralUnion<AllCss | number>;
}

export interface PseudoElements {
  _after: Omit<QuaantumProps, '_after'>;
  _before: Omit<QuaantumProps, '_before'>;
  content: string;
}

export interface PseudoClasses {
  _focus: Omit<QuaantumProps, '_focus'>;
  _hover: Omit<QuaantumProps, '_hover'>;
  _active: Omit<QuaantumProps, '_active'>;
  _placeholder: Omit<QuaantumProps, '_placeholder'>;
}

export interface AnimationProperties {
  transform: LiteralUnion<AllCss>;
  transition: LiteralUnion<AllCss>;
  transformOrigin: LiteralUnion<AllCss>;
  transitionDuration: LiteralUnion<AllCss, string | number>;
  transitionProperty: LiteralUnion<AllCss, string | number>;
  animation: LiteralUnion<AllCss>;
  animationName: LiteralUnion<AllCss>;
  animationDuration: LiteralUnion<AllCss, number | string>;
  animationTimingFunction: LiteralUnion<AllCss>;
  animationDelay: LiteralUnion<AllCss, number | string>;
  animationIterationCount: LiteralUnion<AllCss, number | string>;
  animationDirection: LiteralUnion<AllCss>;
  animationFillMode: LiteralUnion<AllCss>;
  animationPlayState: LiteralUnion<AllCss>;
}

type FlexGridValues =
  | 'flex-start'
  | 'flex-end'
  | 'space-between'
  | 'space-around'
  | 'space-evenly'
  | 'center'
  | 'end'
  | 'start'
  | 'stretch';

export interface FlexGridProperties {
  justifyContent: LiteralUnion<FlexGridValues | AllCss>;
  justifyItems: LiteralUnion<FlexGridValues | AllCss>;
  justifySelf: LiteralUnion<FlexGridValues | AllCss>;
  alignItems: LiteralUnion<FlexGridValues | AllCss>;
  alignContent: LiteralUnion<FlexGridValues | AllCss>;
  alignSelf: LiteralUnion<FlexGridValues | AllCss>;
  placeItems: LiteralUnion<FlexGridValues | AllCss>;
  placeContent: LiteralUnion<FlexGridValues | AllCss>;
  placeSelf: LiteralUnion<FlexGridValues | AllCss>;
  flex: LiteralUnion<AllCss>;
  flexDirection: LiteralUnion<AllCss | 'column' | 'column-reverse' | 'row' | 'row-reverse'>;
  flexWrap: LiteralUnion<AllCss | 'wrap' | 'no-wrap' | 'wrap-reverse'>;
  flexGrow: LiteralUnion<AllCss>;
  flexShrink: LiteralUnion<AllCss>;
  flexBasis: LiteralUnion<AllCss | 'fill' | 'max-content' | 'min-content' | 'fit-content'>;
  grid: LiteralUnion<AllCss>;
  gridTemplateColumns: LiteralUnion<AllCss>;
  gridAutoColumns: LiteralUnion<AllCss>;
  gridAutoRows: LiteralUnion<AllCss>;
  gridAutoFlow: LiteralUnion<AllCss>;
  gridTemplateRows: LiteralUnion<AllCss>;
  gridTemplateAreas: LiteralUnion<AllCss>;
  gridTemplate: LiteralUnion<AllCss>;
  gridColumnStart: LiteralUnion<AllCss>;
  gridColumnEnd: LiteralUnion<AllCss>;
  gridRowStart: LiteralUnion<AllCss>;
  gridRowEnd: LiteralUnion<AllCss>;
  gridColumn: LiteralUnion<AllCss>;
  gridRow: LiteralUnion<AllCss>;
  gridArea: LiteralUnion<AllCss>;
  columnGap: LiteralUnion<AllCss>;
  rowGap: LiteralUnion<AllCss>;
  gap: LiteralUnion<AllCss>;
}

export interface SVGProperties {
  fill: LiteralUnion<AllCss>;
  stroke: LiteralUnion<AllCss>;
  strokeWidth: LiteralUnion<AllCss>;
  strokeLinecap: LiteralUnion<'butt' | 'round' | 'square' | AllCss>;
  strokeDasharray: LiteralUnion<'butt' | 'round' | 'square' | AllCss>;
}
export interface QuaantumProperties {
  variant: string;
  csx: Record<string, Omit<QuaantumProps, 'custom'>>;
  customCss: string;
  styleAs: string;
  as: DomElement | React.ComponentType<any>;
}

type Cursor =
  | 'url'
  | 'auto'
  | 'default'
  | 'none'
  | 'context-menu'
  | 'help'
  | 'pointer'
  | 'progress'
  | 'wait'
  | 'cell'
  | 'crosshair'
  | 'text'
  | 'vertical-text'
  | 'alias'
  | 'copy'
  | 'move'
  | 'no-drop'
  | 'not-allowed'
  | 'e-resize'
  | 'n-resize'
  | 'ne-resize'
  | 'nw-resize'
  | 's-resize'
  | 'se-resize'
  | 'sw-resize'
  | 'w-resize'
  | 'ew-resize'
  | 'ns-resize'
  | 'nesw-resize'
  | 'nwse-resize'
  | 'col-resize'
  | 'row-resize'
  | 'all-scroll'
  | 'zoom-in'
  | 'zoom-out'
  | 'grab'
  | 'grabbing';

export interface Css
  extends BorderProperties,
    ColorProperties,
    BackgroundProperties,
    PaddingProperties,
    SizeProperties,
    MarginProperties,
    DisplayProperties,
    OverflowProperties,
    FontProperties,
    PositionProperties,
    PseudoElements,
    PseudoClasses,
    AnimationProperties,
    FlexGridProperties,
    SVGProperties,
    QuaantumProperties {
  boxShadow: LiteralUnion<AllCss>;
  /**
   * shortcut for `boxShadow`
   */
  shadow: Css['boxShadow'];

  opacity: LiteralUnion<AllCss, number>;

  cursor: LiteralUnion<Cursor | AllCss>;
  userSelect: LiteralUnion<'none' | 'text' | 'all' | AllCss>;

  resize: 'none' | 'both' | 'horizontal' | 'vertical' | AllCss;

  objectFit: 'cover' | 'contain' | 'none' | 'fill' | 'scale-down' | AllCss;
  objectPosition: LiteralUnion<AllCss>;
  zIndex: LiteralUnion<AllCss, number>;
  listStyle: LiteralUnion<AllCss>;

  clipPath: LiteralUnion<AllCss>;
  perspective: LiteralUnion<AllCss>;
}

export type QuaantumProps = { [P in keyof Css]?: Css[P] };

export type Props<T> = T extends ComponentType<infer S> ? S : T;
