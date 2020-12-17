import { Distribution } from '@/functions/constants';
import PathModel from '@/models/PathModel';

export function wEsFunction(W1, W2, W3, W4, W5, W6, W7, W8, W9, W10, W11, W12, W13, W14, W15, W16, W17, W18) {
  return ((W1 * W3 + W2 * W4 * W5 * W6) * W7 * W8 * (W9 * W11 + W10 * W12) * W13 * W16 * W17 * W18) / ((1 - W8 * (W9 * W11 + W10 * W12) * W13 * W14 * W15));
}

export function binomialDistributionMomentGeneratingFunction(s: number, n: number, p: number) {
  return Math.pow((p * Math.pow(Math.E, s) + 1 - p), n);
}

export function exponentialDistributionMomentGeneratingFunction(s: number, a: number) {
  return Math.pow((1 - (s / a)), -1);
}

export function gammaDistributionMomentGeneratingFunction(s: number, a: number, b: number) {
  return Math.pow((1 - (s / a)), (-1 * b));
}

export function geometricalDistributionMomentGeneratingFunction(s: number, p: number) {
  let nominator: number = p * Math.pow(Math.E, s);
  let denominator: number = (1 - Math.pow(Math.E, s) + p * Math.pow(Math.E, s));
  return (nominator / denominator);
}

export function negativeBinomialDistributionMomentGeneratingFunction(s: number, p: number, r: number) {
  return Math.pow(p / (1 - Math.pow(Math.E, s) + p * Math.pow(Math.E, s)), r);
}

export function normalDistributionMomentGeneratingFunction(s: number, m: number, sigma: number) {
  return Math.pow(Math.E, s * m + (1 / 2) * s * s * sigma * sigma);
}

export function puassonDistributionMomentGeneratingFunction(s: number, lambda: number) {
  return Math.pow(Math.E, lambda * (Math.pow(Math.E, s) - 1));
}

export function continuousUniformDistributionMomentGeneratingFunction(s: number, a: number, b: number) {
  let nominator: number = Math.pow(Math.E, s * a) - Math.pow(Math.E, s * b);
  let denominator: number = (a - b) * s;
  return (nominator / denominator);
}


export function binomialDistributionExpectedValueFunction(n: number, p: number) {
  return n * p;
}

export function exponentialDistributionExpectedValueFunction(a: number) {
  return 1 / a;
}

export function gammaDistributionExpectedValueFunction(b: number, a: number) {
  return b / a;
}

export function geometricalDistributionExpectedValueFunction(p: number) {
  return 1 / p;
}

export function negativeBinomialDistributionExpectedValueFunction(r: number, p: number) {
  return (r * (1 - p)) / p;
}

export function normalBinomialDistributionExpectedValueFunction(m: number) {
  return m;
}

export function puassonBinomialDistributionExpectedValueFunction(lambda: number) {
  return lambda;
}

export function continuousUniformDistributionExpectedValueFunction(a: number, b: number) {
  return (a + b) / 2;
}


export function binomialDistributionSecondMomentFunction(n: number, p: number) {
  return n * p * (n * p + 1 - p);
}

export function exponentialDistributionSecondMomentFunction(a: number) {
  return 2 / (a * a);
}

export function gammaDistributionSecondMomentFunction(b: number, a: number) {
  return b * (b + 1) / (a * a);
}

export function geometricalDistributionSecondMomentFunction(p: number) {
  return (2 - p) / (p * p);
}

export function negativeBinomialDistributionSecondMomentFunction(r: number, p: number) {
  return (r * (1 - p) * (1 + r - r * p)) / (p * p);
}

export function normalBinomialDistributionSecondMomentFunction(m: number, sigma: number) {
  return m * m + sigma * sigma;
}

export function puassonBinomialDistributionSecondMomentFunction(lambda: number) {
  return lambda * (1 + lambda);
}

export function continuousUniformDistributionSecondMomentFunction(a: number, b: number) {
  return (a * a + a * b + b * b) / 3;
}


export function calculateWFunctionForPath(path: PathModel, isSEqualZero: boolean) {
  let moment: number;
  let W: number;
  const { a, distribution, sigma, lambda, probability, additiveParameter, b, m, n, r } = path;
  let s = isSEqualZero ? 0 : path.s;
  const { BINOMIAL_DISTRIBUTION, CONTINUOUS_UNIFORM_DISTRIBUTION, EXPONENTIAL_DISTRIBUTION, GAMMA_DISTRIBUTION, GEOMETRICAL_DISTRIBUTION, NEGATIVE_BINOMIAL_DISTRIBUTION, NORMAL_DISTRIBUTION, PUASSON_DISTRIBUTION } = Distribution;
  switch (distribution) {
    case BINOMIAL_DISTRIBUTION: {
      moment = binomialDistributionMomentGeneratingFunction(s, n, probability);
      break;
    }
    case CONTINUOUS_UNIFORM_DISTRIBUTION: {
      moment = continuousUniformDistributionMomentGeneratingFunction(s, a, b);
      break;
    }
    case EXPONENTIAL_DISTRIBUTION: {
      moment = exponentialDistributionMomentGeneratingFunction(s, a);
      break;
    }
    case GAMMA_DISTRIBUTION: {
      moment = gammaDistributionMomentGeneratingFunction(s, a, b);
      break;
    }
    case GEOMETRICAL_DISTRIBUTION: {
      moment = geometricalDistributionMomentGeneratingFunction(s, probability);
      break;
    }
    case NEGATIVE_BINOMIAL_DISTRIBUTION: {
      moment = negativeBinomialDistributionMomentGeneratingFunction(s, probability, r);
      break;
    }
    case NORMAL_DISTRIBUTION: {
      moment = normalDistributionMomentGeneratingFunction(s, m, sigma);
      break;
    }
    case PUASSON_DISTRIBUTION: {
      moment = puassonDistributionMomentGeneratingFunction(s, lambda);
      break;
    }
  }
  W = moment * probability;
  return W;
}
