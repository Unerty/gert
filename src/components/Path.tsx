import * as React from 'react';
import PathModel from '@/models/PathModel';
import { Distribution } from '@/functions/constants';

interface IProps extends PathModel {
  setProbability: (probability: number) => void;
  setDistribution: (distribution: string) => void;
  setA: (a: number) => void;
  setB: (b: number) => void;
  setM: (M: number) => void;
  setN: (n: number) => void;
  setR: (r: number) => void;
  setS: (s: number) => void;
  setLambda: (lambda: number) => void;
  setSigma: (sigma: number) => void;
}

export default class Path extends React.Component<IProps> {
  constructor(props) {
    super(props);
  }

  render() {
    const { BINOMIAL_DISTRIBUTION, CONTINUOUS_UNIFORM_DISTRIBUTION, EXPONENTIAL_DISTRIBUTION, GAMMA_DISTRIBUTION, GEOMETRICAL_DISTRIBUTION, NEGATIVE_BINOMIAL_DISTRIBUTION, NORMAL_DISTRIBUTION, PUASSON_DISTRIBUTION } = Distribution;

    const nVisible = (
      this.props.distribution === BINOMIAL_DISTRIBUTION ||
      this.props.distribution === NEGATIVE_BINOMIAL_DISTRIBUTION
    ) ? 'unset' : 'none';
    const mVisible = this.props.distribution === NORMAL_DISTRIBUTION ? 'unset' : 'none';
    const rVisible = this.props.distribution === NEGATIVE_BINOMIAL_DISTRIBUTION ? 'unset' : 'none';
    const aVisible = (
      this.props.distribution === EXPONENTIAL_DISTRIBUTION ||
      this.props.distribution === GAMMA_DISTRIBUTION ||
      this.props.distribution === CONTINUOUS_UNIFORM_DISTRIBUTION
    ) ? 'unset' : 'none';
    const bVisible = (
      this.props.distribution === GAMMA_DISTRIBUTION ||
      this.props.distribution === CONTINUOUS_UNIFORM_DISTRIBUTION
    ) ? 'unset' : 'none';
    const pVisible = (
      this.props.distribution === BINOMIAL_DISTRIBUTION ||
      this.props.distribution === GEOMETRICAL_DISTRIBUTION ||
      this.props.distribution === NEGATIVE_BINOMIAL_DISTRIBUTION
    ) ? 'unset' : 'none';
    const lambdaVisible = this.props.distribution === PUASSON_DISTRIBUTION ? 'unset' : 'none';
    const sigmaVisible = this.props.distribution === NORMAL_DISTRIBUTION ? 'unset' : 'none';
    const {
      id,
      probability,
      distribution,
      lambda,
      sigma,
      a,
      b,
      m,
      n,
      r,
      s,
      setProbability,
      setDistribution,
      setA,
      setB,
      setM,
      setN,
      setR,
      setS,
      setLambda,
      setSigma,
    } = this.props;
    return (
      <div style={{
        backgroundColor: 'sandybrown',
        display: 'inline-grid',
        width: '250px',
        height: '270px',
        margin: '0.5rem',
        padding: '0.25rem',
      }}>
        <div>
          <h3>Номер дуги: {id}</h3>
          <span>s = </span>
          <input type="number" onChange={event => setS(Number(event.target.value))}
                 value={s.toString()} min={0} step={0.01}
                 style={{ width: '100px' }}
          />
          <br/>
          <span>Ймовірність: <strong> {probability}</strong><br/></span>
          <input type={'range'} onChange={event => setProbability(Number(event.target.value))}
                 value={probability.toString()} min={0} max={1} step={0.01}/><br/>
          Розподіл:<br/>
          <select value={distribution}
                  onChange={event => setDistribution(event.target.value)}>
            <option value={BINOMIAL_DISTRIBUTION}>{BINOMIAL_DISTRIBUTION}</option>
            <option value={EXPONENTIAL_DISTRIBUTION}>{EXPONENTIAL_DISTRIBUTION}</option>
            <option value={GAMMA_DISTRIBUTION}>{GAMMA_DISTRIBUTION}</option>
            <option value={GEOMETRICAL_DISTRIBUTION}>{GEOMETRICAL_DISTRIBUTION}</option>
            <option value={NEGATIVE_BINOMIAL_DISTRIBUTION}>{NEGATIVE_BINOMIAL_DISTRIBUTION}</option>
            <option value={NORMAL_DISTRIBUTION}>{NORMAL_DISTRIBUTION}</option>
            <option value={PUASSON_DISTRIBUTION}>{PUASSON_DISTRIBUTION}</option>
            <option value={CONTINUOUS_UNIFORM_DISTRIBUTION}>{CONTINUOUS_UNIFORM_DISTRIBUTION}</option>
          </select>
        </div>
        <div style={{ display: nVisible }}>
          <br/>
          n = <input type={'number'} value={n}
                     onChange={event => setN(Number(event.target.value))}/><br/>
        </div>
        <div style={{ display: mVisible }}>
          <br/>
          m = <input type={'number'} value={m}
                     onChange={event => setM(Number(event.target.value))}/><br/>
        </div>
        <div style={{ display: rVisible }}>
          <br/>
          r = <input type={'number'} value={r}
                     onChange={event => setR(Number(event.target.value))}/><br/>
        </div>
        <div style={{ display: aVisible }}>
          <br/>
          a = <input type="number" value={a}
                     onChange={event => setA(Number(event.target.value))}/><br/>
        </div>
        <div style={{ display: bVisible }}>
          <br/>
          b = <input type="number" value={b}
                     onChange={event => setB(Number(event.target.value))}/><br/>
        </div>
        <div style={{ display: lambdaVisible }}>
          <br/>
          lambda = <input type="number" value={lambda}
                          onChange={event => setLambda(Number(event.target.value))}/><br/>
        </div>
        <div style={{ display: sigmaVisible }}>
          <br/>
          sigma = <input type="number" value={sigma}
                         onChange={event => setSigma(Number(event.target.value))}/><br/>
        </div>
      </div>
    );
  }
}
