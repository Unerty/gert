import { Distribution } from '@/functions/constants';

export default class PathModel {
  constructor(id: number, probability: number, additiveParameter: number, distribution: Distribution, s: number, n: number, m: number, r: number, a: number, b: number, p: number, lambda: number, sigma: number) {
    this.id = id;
    this.probability = probability;
    this.additiveParameter = additiveParameter;
    this.distribution = distribution;
    this.s = s;
    this.n = n;
    this.m = m;
    this.r = r;
    this.a = a;
    this.b = b;
    this.p = p;
    this.lambda = lambda;
    this.sigma = sigma;
  }
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
