import * as React from 'react';
import Path from '@/components/Path';
import {
  BINOMIAL_DISTRIBUTION, CONTINIOUS_UNIFORM_DISTRIBUTION,
  DISCRETE_DISTRIBUTION,
  EXPONENTIAL_DISTRIBUTION,
  GAMMA_DISTRIBUTION,
  GEOMETRICAL_DISTRIBUTION,
  NEGATIVE_BINOMIAL_DISTRIBUTION,
  NORMAL_DISTRIBUTION,
  PUASSON_DISTRIBUTION,
} from '@/functions/constants';

interface IProps {
}

interface IState {
  distribution: string;
  s: number;
  m: number;
  r: number;
  a: number;
  b: number;
  p: number;
  pArray: Array<number>;
  TArray: Array<number>;
  lambda: number;
  sigma: number;
}

export default class App extends React.Component<IProps, IState> {
  constructor(props) {
    super(props);
    this.state = {
      distribution: BINOMIAL_DISTRIBUTION,
      s: 1,
      m: 1,
      r: 1,
      a: 1,
      b: 1,
      p: 1,
      pArray: [1],
      TArray: [1],
      lambda: 1,
      sigma: 1
    };
  }

  render() {
    return (
      <main style={{display: 'flex'}}>
        <div style={{width: '50%'}}>
        {/*<img src={"https://github.com/Unerty/gert/blob/main/static/ris4.png?raw=true"} width={'75%'}/>
        <img src={"https://github.com/Unerty/gert/blob/main/static/ris5.png?raw=true"} width={'25%'}/>*/}

        Оберіть розподіл:<br/>
        <select value={this.state.distribution}
                onChange={event => this.setState({ distribution: event.target.value})}>
          <option value={BINOMIAL_DISTRIBUTION}>{BINOMIAL_DISTRIBUTION}</option>
          <option value={DISCRETE_DISTRIBUTION}>{DISCRETE_DISTRIBUTION}</option>
          <option value={EXPONENTIAL_DISTRIBUTION}>{EXPONENTIAL_DISTRIBUTION}</option>
          <option value={GAMMA_DISTRIBUTION}>{GAMMA_DISTRIBUTION}</option>
          <option value={GEOMETRICAL_DISTRIBUTION}>{GEOMETRICAL_DISTRIBUTION}</option>
          <option value={NEGATIVE_BINOMIAL_DISTRIBUTION}>{NEGATIVE_BINOMIAL_DISTRIBUTION}</option>
          <option value={NORMAL_DISTRIBUTION}>{NORMAL_DISTRIBUTION}</option>
          <option value={PUASSON_DISTRIBUTION}>{PUASSON_DISTRIBUTION}</option>
          <option value={CONTINIOUS_UNIFORM_DISTRIBUTION}>{CONTINIOUS_UNIFORM_DISTRIBUTION}</option>
        </select><br/><br/>
          Введіть змінні: <br/>
          s = <input value={this.state.s}
                     onChange={event => this.setState({ s: Number(event.target.value)})}/><br/>
          m = <input value={this.state.m}
                     onChange={event => this.setState({ m: Number(event.target.value)})}/><br/>
          r = <input value={this.state.r}
                     onChange={event => this.setState({ r: Number(event.target.value)})}/><br/>
          a = <input value={this.state.a}
                     onChange={event => this.setState({ a: Number(event.target.value)})}/><br/>
          b = <input value={this.state.b}
                     onChange={event => this.setState({ b: Number(event.target.value)})}/><br/>
          p = <input value={this.state.p}
                     onChange={event => this.setState({ p: Number(event.target.value)})}/><br/>
          p1, p2, ... pn = <input/> <br/>
          T1, T2, ... Tn = <input/> <br/>
          lambda = <input value={this.state.lambda}
                     onChange={event => this.setState({ lambda: Number(event.target.value)})}/><br/>
          sigma = <input value={this.state.sigma}
                     onChange={event => this.setState({ sigma: Number(event.target.value)})}/><br/>
        </div>
        <div style={{width: '50%'}}>
          <Path id={1} initialProbability={1} initialAdditiveParameter={0}/>
          <Path id={2} initialProbability={1} initialAdditiveParameter={0}/>
          <Path id={3} initialProbability={1} initialAdditiveParameter={0}/>
          <Path id={4} initialProbability={1} initialAdditiveParameter={0}/>
          <Path id={5} initialProbability={1} initialAdditiveParameter={2000}/>

          <Path id={6} initialProbability={1} initialAdditiveParameter={0}/>
          <Path id={7} initialProbability={1} initialAdditiveParameter={0}/>
          <Path id={8} initialProbability={1} initialAdditiveParameter={0}/>
          <Path id={9} initialProbability={1} initialAdditiveParameter={0}/>
          <Path id={10} initialProbability={1} initialAdditiveParameter={0}/>

          <Path id={11} initialProbability={1} initialAdditiveParameter={10000}/>
          <Path id={12} initialProbability={1} initialAdditiveParameter={1000}/>
          <Path id={13} initialProbability={1} initialAdditiveParameter={0}/>
          <Path id={14} initialProbability={0.05} initialAdditiveParameter={0}/>
          <Path id={15} initialProbability={1} initialAdditiveParameter={0}/>

          <Path id={16} initialProbability={0.95} initialAdditiveParameter={0}/>
          <Path id={17} initialProbability={1} initialAdditiveParameter={0}/>
          <Path id={18} initialProbability={1} initialAdditiveParameter={500}/>
        </div>

      </main>
    );
  }
}
