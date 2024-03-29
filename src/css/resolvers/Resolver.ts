import { QuaantumProps } from '../types';
import { getColor } from './getColor';
import { Config, resolve } from './resolve';

export class Resolver {
  static general = (key: string) => (prop: string, _config: Config) => `${key}:${prop};`;

  static custom = (prop: Record<string, QuaantumProps> | undefined, _config: Config) => {
    if (!prop) return '';
    return Object.keys(prop)
      .map((key) => {
        return `${key}{${resolve(prop[key], _config)}}`;
      })
      .join('');
  };

  static pseudo = (key: string) => (props: QuaantumProps, config: Config) =>
    `&${key} {${resolve(props, config)}}`;

  static color = (key = 'color') => (prop: string, config: Config) => {
    return Resolver.general(key)(getColor(prop, config.colors), config);
  };

  static measurement = (key: string, type: keyof Config['units'] = 'measurement') => (
    prop: QuaantumProps['width'],
    config: Config
  ) => {
    let res: string;

    if (!prop) {
      res = '0';
    } else if (typeof prop === 'number') {
      res = `${prop}${config.units[type]}`;
    } else {
      res = prop as string;
    }

    return Resolver.general(key)(res, config);
  };
}
