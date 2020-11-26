export function Mason() {
  return 0;
}

export function binomialDistributionMomentGeneratingFunction(s: number, n: number, p: number) {
  return Math.pow((p * Math.pow(Math.E, s) + 1 - p), n);
}

export function discreteDistributionMomentGeneratingFunction(s: number, pArray: Array<number>, TArray: Array<number>) {
  let nominator: number = 0;
  let denominatior: number = 0;
  pArray.forEach((p, index) => {
    nominator += (p * Math.pow(Math.E, (s * TArray[index])));
    denominatior += p;
  });
  return (nominator / denominatior);
}

export function exponentialDistributionMomentGeneratingFunction(s: number, a: number) {
  return Math.pow((1 - (s / a)), -1);
}

export function gammaDistributionMomentGeneratingFunction(s: number, a: number, b: number) {
  return Math.pow((1 - (s / a)), (-1 * b));
}

export function geometricalDistributionMomentGeneratingFunction(s: number, p: number) {
  let nominator: number = p * Math.pow(Math.E, s);
  let denominatior: number = (1 - Math.pow(Math.E, s) + p * Math.pow(Math.E, s));
  return (nominator / denominatior);
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
  let denominatior: number = (a - b) * s;
  return (nominator / denominatior);
}
