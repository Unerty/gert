import { Distribution } from '@/functions/constants';

export default class PathModel {
  id: number;
  probability: number;
  additiveParameter: number;
  distribution: Distribution;
  s: number;
  n: number;
  m: number;
  r: number;
  a: number;
  b: number;
  p: number;
  lambda: number;
  sigma: number;
}
