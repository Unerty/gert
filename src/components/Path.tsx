import * as React from 'react';
import PathModel from '@/models/PathModel';
import { Distribution } from '@/functions/constants';

interface IProps extends PathModel {
  setAdditiveParameter: (additiveParameter: number) => void;
  setProbability: (probability: number) => void;
  setDistribution: (distribution: string) => void;
}

export default class Path extends React.Component<IProps> {
  constructor(props) {
    super(props);
  }

  render() {
    const { BINOMIAL_DISTRIBUTION, CONTINIOUS_UNIFORM_DISTRIBUTION, EXPONENTIAL_DISTRIBUTION, GAMMA_DISTRIBUTION, GEOMETRICAL_DISTRIBUTION, NEGATIVE_BINOMIAL_DISTRIBUTION, NORMAL_DISTRIBUTION, PUASSON_DISTRIBUTION } = Distribution;

    const nVisible = (
      this.props.distribution === BINOMIAL_DISTRIBUTION ||
      this.props.distribution === NEGATIVE_BINOMIAL_DISTRIBUTION
    ) ? 'unset' : 'none';
    const mVisible = this.props.distribution === NORMAL_DISTRIBUTION ? 'unset' : 'none';
    const rVisible = this.props.distribution === NEGATIVE_BINOMIAL_DISTRIBUTION ? 'unset' : 'none';
    const aVisible = (
      this.props.distribution === EXPONENTIAL_DISTRIBUTION ||
      this.props.distribution === GAMMA_DISTRIBUTION ||
      this.props.distribution === CONTINIOUS_UNIFORM_DISTRIBUTION
    ) ? 'unset' : 'none';
    const bVisible = (
      this.props.distribution === GAMMA_DISTRIBUTION ||
      this.props.distribution === CONTINIOUS_UNIFORM_DISTRIBUTION
    ) ? 'unset' : 'none';
    const pVisible = (
      this.props.distribution === BINOMIAL_DISTRIBUTION ||
      this.props.distribution === GEOMETRICAL_DISTRIBUTION ||
      this.props.distribution === NEGATIVE_BINOMIAL_DISTRIBUTION
    ) ? 'unset' : 'none';
    const lambdaVisible = this.props.distribution === PUASSON_DISTRIBUTION ? 'unset' : 'none';
    const sigmaVisible = this.props.distribution === NORMAL_DISTRIBUTION ? 'unset' : 'none';
    const { id, probability, additiveParameter, distribution, lambda, sigma, a, b, m, n, r, s, setAdditiveParameter, setProbability, setDistribution } = this.props;
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
          <span>Вартість, грн.:<br/></span>
          <input type="number" onChange={event => setAdditiveParameter(Number(event.target.value))}
                 value={additiveParameter.toString()} min={0} step={0.01}
                 style={{ width: '100px' }}
          />
          <br/>
          <span>Ймовірність: <strong> {probability}</strong><br/></span>
          <input type={'range'} onChange={event => setProbability(Number(event.target.value))}
                 value={probability.toString()} min={0} max={1} step={0.01}/><br/>
          Розподіл:<br/>
          <select value={this.props.distribution}
                  onChange={event => setDistribution(event.target.value)}>
            <option value={BINOMIAL_DISTRIBUTION}>{BINOMIAL_DISTRIBUTION}</option>
            <option value={EXPONENTIAL_DISTRIBUTION}>{EXPONENTIAL_DISTRIBUTION}</option>
            <option value={GAMMA_DISTRIBUTION}>{GAMMA_DISTRIBUTION}</option>
            <option value={GEOMETRICAL_DISTRIBUTION}>{GEOMETRICAL_DISTRIBUTION}</option>
            <option value={NEGATIVE_BINOMIAL_DISTRIBUTION}>{NEGATIVE_BINOMIAL_DISTRIBUTION}</option>
            <option value={NORMAL_DISTRIBUTION}>{NORMAL_DISTRIBUTION}</option>
            <option value={PUASSON_DISTRIBUTION}>{PUASSON_DISTRIBUTION}</option>
            <option value={CONTINIOUS_UNIFORM_DISTRIBUTION}>{CONTINIOUS_UNIFORM_DISTRIBUTION}</option>
          </select>
        </div>
        <div style={{ display: nVisible }}>
          <br/>
          n = <input value={this.props.n}
                     onChange={event => this.setState({ n: Number(event.target.value) })}/><br/>
        </div>
        <div style={{ display: mVisible }}>
          <br/>
          m = <input value={this.props.m}
                     onChange={event => this.setState({ m: Number(event.target.value) })}/><br/>
        </div>
        <div style={{ display: rVisible }}>
          <br/>
          r = <input value={this.props.r}
                     onChange={event => this.setState({ r: Number(event.target.value) })}/><br/>
        </div>
        <div style={{ display: aVisible }}>
          <br/>
          a = <input value={this.props.a}
                     onChange={event => this.setState({ a: Number(event.target.value) })}/><br/>
        </div>
        <div style={{ display: bVisible }}>
          <br/>
          b = <input value={this.props.b}
                     onChange={event => this.setState({ b: Number(event.target.value) })}/><br/>
        </div>
        <div style={{ display: lambdaVisible }}>
          <br/>
          lambda = <input value={this.props.lambda}
                          onChange={event => this.setState({ lambda: Number(event.target.value) })}/><br/>
        </div>
        <div style={{ display: sigmaVisible }}>
          <br/>
          sigma = <input value={this.props.sigma}
                         onChange={event => this.setState({ sigma: Number(event.target.value) })}/><br/>
        </div>
      </div>
    );
  }
}
