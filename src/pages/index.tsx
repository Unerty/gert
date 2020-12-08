import * as React from 'react';
import Path from '@/components/Path';
import { Distribution } from '@/functions/constants';
import PathModel from '@/models/PathModel';

interface IProps {
}

interface IState {
  pathes: Array<PathModel>
}

export default class App extends React.Component<IProps, IState> {
  constructor(props) {
    super(props);
    this.state = {
      pathes: [
        new PathModel(1, 1, 0, Distribution.NORMAL_DISTRIBUTION, 1, 1, 1, 1, 1, 1, 1, 1),
        new PathModel(2, 1, 0, Distribution.NORMAL_DISTRIBUTION, 1, 1, 1, 1, 1, 1, 1, 1),
        new PathModel(3, 1, 0, Distribution.NORMAL_DISTRIBUTION, 1, 1, 1, 1, 1, 1, 1, 1),
        new PathModel(4, 1, 0, Distribution.NORMAL_DISTRIBUTION, 1, 1, 1, 1, 1, 1, 1, 1),
        new PathModel(5, 1, 2000, Distribution.NORMAL_DISTRIBUTION, 1, 1, 1, 1, 1, 1, 1, 1),
        new PathModel(6, 1, 0, Distribution.NORMAL_DISTRIBUTION, 1, 1, 1, 1, 1, 1, 1, 1),
        new PathModel(7, 1, 0, Distribution.NORMAL_DISTRIBUTION, 1, 1, 1, 1, 1, 1, 1, 1),
        new PathModel(8, 1, 0, Distribution.NORMAL_DISTRIBUTION, 1, 1, 1, 1, 1, 1, 1, 1),
        new PathModel(9, 1, 0, Distribution.NORMAL_DISTRIBUTION, 1, 1, 1, 1, 1, 1, 1, 1),
        new PathModel(10, 1, 0, Distribution.NORMAL_DISTRIBUTION, 1, 1, 1, 1, 1, 1, 1, 1),
        new PathModel(11, 1, 10000, Distribution.NORMAL_DISTRIBUTION, 1, 1, 1, 1, 1, 1, 1, 1),
        new PathModel(12, 1, 1000, Distribution.NORMAL_DISTRIBUTION, 1, 1, 1, 1, 1, 1, 1, 1),
        new PathModel(13, 1, 0, Distribution.NORMAL_DISTRIBUTION, 1, 1, 1, 1, 1, 1, 1, 1),
        new PathModel(14, 0.05, 0, Distribution.NORMAL_DISTRIBUTION, 1, 1, 1, 1, 1, 1, 1, 1),
        new PathModel(15, 1, 0, Distribution.NORMAL_DISTRIBUTION, 1, 1, 1, 1, 1, 1, 1, 1),
        new PathModel(16, 0.95, 0, Distribution.NORMAL_DISTRIBUTION, 1, 1, 1, 1, 1, 1, 1, 1),
        new PathModel(17, 1, 0, Distribution.NORMAL_DISTRIBUTION, 1, 1, 1, 1, 1, 1, 1, 1),
        new PathModel(18, 1, 500, Distribution.NORMAL_DISTRIBUTION, 1, 1, 1, 1, 1, 1, 1, 1),
      ],
    };
  }

  render() {

    const { BINOMIAL_DISTRIBUTION, CONTINIOUS_UNIFORM_DISTRIBUTION, EXPONENTIAL_DISTRIBUTION, GAMMA_DISTRIBUTION, GEOMETRICAL_DISTRIBUTION, NEGATIVE_BINOMIAL_DISTRIBUTION, NORMAL_DISTRIBUTION, PUASSON_DISTRIBUTION } = Distribution;
    const nVisible = (
      this.state.distribution === BINOMIAL_DISTRIBUTION ||
      this.state.distribution === NEGATIVE_BINOMIAL_DISTRIBUTION
    ) ? 'unset' : 'none';
    const mVisible = this.state.distribution === NORMAL_DISTRIBUTION ? 'unset' : 'none';
    const rVisible = this.state.distribution === NEGATIVE_BINOMIAL_DISTRIBUTION ? 'unset' : 'none';
    const aVisible = (
      this.state.distribution === EXPONENTIAL_DISTRIBUTION ||
      this.state.distribution === GAMMA_DISTRIBUTION ||
      this.state.distribution === CONTINIOUS_UNIFORM_DISTRIBUTION
    ) ? 'unset' : 'none';
    const bVisible = (
      this.state.distribution === GAMMA_DISTRIBUTION ||
      this.state.distribution === CONTINIOUS_UNIFORM_DISTRIBUTION
    ) ? 'unset' : 'none';
    const pVisible = (
      this.state.distribution === BINOMIAL_DISTRIBUTION ||
      this.state.distribution === GEOMETRICAL_DISTRIBUTION ||
      this.state.distribution === NEGATIVE_BINOMIAL_DISTRIBUTION
    ) ? 'unset' : 'none';
    const lambdaVisible = this.state.distribution === PUASSON_DISTRIBUTION ? 'unset' : 'none';
    const sigmaVisible = this.state.distribution === NORMAL_DISTRIBUTION ? 'unset' : 'none';
    return (
      <main>
        <div style={{ display: 'flex' }}>
          <div style={{ width: '30%' }}>
            {/*<img src={"https://github.com/Unerty/gert/blob/main/static/ris4.png?raw=true"} width={'75%'}/>
        <img src={"https://github.com/Unerty/gert/blob/main/static/ris5.png?raw=true"} width={'25%'}/>*/}

            Оберіть розподіл:<br/>
            <select value={this.state.distribution}
                    onChange={event => this.setState({ distribution: event.target.value })}>
              <option value={BINOMIAL_DISTRIBUTION}>{BINOMIAL_DISTRIBUTION}</option>
              <option value={EXPONENTIAL_DISTRIBUTION}>{EXPONENTIAL_DISTRIBUTION}</option>
              <option value={GAMMA_DISTRIBUTION}>{GAMMA_DISTRIBUTION}</option>
              <option value={GEOMETRICAL_DISTRIBUTION}>{GEOMETRICAL_DISTRIBUTION}</option>
              <option value={NEGATIVE_BINOMIAL_DISTRIBUTION}>{NEGATIVE_BINOMIAL_DISTRIBUTION}</option>
              <option value={NORMAL_DISTRIBUTION}>{NORMAL_DISTRIBUTION}</option>
              <option value={PUASSON_DISTRIBUTION}>{PUASSON_DISTRIBUTION}</option>
              <option value={CONTINIOUS_UNIFORM_DISTRIBUTION}>{CONTINIOUS_UNIFORM_DISTRIBUTION}</option>
            </select><br/><br/>
            Введіть змінні: <br/>
            {/*s = <input value={this.state.s}
                     onChange={event => this.setState({ s: Number(event.target.value)})}/><br/>*/}
            <div style={{ display: nVisible }}>
              n = <input value={this.state.n}
                         onChange={event => this.setState({ n: Number(event.target.value) })}/><br/>
            </div>
            <div style={{ display: mVisible }}>
              m = <input value={this.state.m}
                         onChange={event => this.setState({ m: Number(event.target.value) })}/><br/>
            </div>
            <div style={{ display: rVisible }}>
              r = <input value={this.state.r}
                         onChange={event => this.setState({ r: Number(event.target.value) })}/><br/>
            </div>
            <div style={{ display: aVisible }}>
              a = <input value={this.state.a}
                         onChange={event => this.setState({ a: Number(event.target.value) })}/><br/>
            </div>
            <div style={{ display: bVisible }}>
              b = <input value={this.state.b}
                         onChange={event => this.setState({ b: Number(event.target.value) })}/><br/>
            </div>
            <div style={{ display: pVisible }}>
              p = <input value={this.state.p}
                         onChange={event => this.setState({ p: Number(event.target.value) })}/><br/>
            </div>
            <div style={{ display: lambdaVisible }}>
              lambda = <input value={this.state.lambda}
                              onChange={event => this.setState({ lambda: Number(event.target.value) })}/><br/>
            </div>
            <div style={{ display: sigmaVisible }}>
              sigma = <input value={this.state.sigma}
                             onChange={event => this.setState({ sigma: Number(event.target.value) })}/><br/>
            </div>
          </div>
          <div style={{ width: '70%' }}>
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
        </div>
        Результати:
        µ = 12,879, σ<sup>2</sup> = 9,211

      </main>
    );
  }
}
