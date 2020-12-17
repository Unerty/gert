import { Distribution } from '@/functions/constants';

export default class PathModel {
  constructor(id: number, probability: number, distribution: Distribution, s: number, n: number, m: number, r: number, a: number, b: number, lambda: number, sigma: number) {
    this.id = id;
    this.probability = probability;
    this.distribution = distribution;
    this.s = s;
    this.n = n;
    this.m = m;
    this.r = r;
    this.a = a;
    this.b = b;
    this.lambda = lambda;
    this.sigma = sigma;
  }
  id: number;
  probability: number;
  distribution: Distribution;
  s: number;
  n: number;
  m: number;
  r: number;
  a: number;
  b: number;
  lambda: number;
  sigma: number;
}
