import React, { SVGProps } from 'react';
import { QuaantumProps } from '../../../../css/types';
import { QuaantumBase } from '../../../Base/QuaantumBase';

const ShouldExcludeSVG = ['d', 'r'] as const;

const SVGShouldExclude = [
  'color',
  'stroke',
  'strokeWidth',
  'strokeDasharray',
  'strokeLinecap',
  'fontFamily',
  'fontSize',
  'fontWeight',
  'height',
  'overflow',
  'height',
  'width',
  'textDecoration',
  'transform',
  'cursor',
  'display',
] as const;

type ShouldExcludeSVG = typeof ShouldExcludeSVG[number];
type SVGShouldExclude = typeof SVGShouldExclude[number];

export interface ChartAxisProps
  extends Omit<QuaantumProps, ShouldExcludeSVG>,
    Omit<SVGProps<SVGLineElement>, SVGShouldExclude> {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
}

const ChartAxis: React.FC<ChartAxisProps> = ({ x1, x2, y1, y2, ...props }) => {
  return (
    <QuaantumBase<'ok'>
      as='line'
      styleAs='ChartAxis'
      x1={x1}
      x2={x2}
      y1={y1}
      y2={y2}
      exclude={ShouldExcludeSVG}
      {...props}
    ></QuaantumBase>
  );
};

export default ChartAxis;
