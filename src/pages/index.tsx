import * as React from 'react';
import Path from '@/components/Path';
import { Distribution } from '@/functions/constants';
import PathModel from '@/models/PathModel';
import {
  calculateDistributionExpectedValueForPath,
  calculateDistributionMomentGeneratingFunctionForPath,
  calculateDistributionSecondMomentForPath,
  wEsFunction,
} from '@/functions/functions';

const { BINOMIAL_DISTRIBUTION, CONTINUOUS_UNIFORM_DISTRIBUTION, EXPONENTIAL_DISTRIBUTION, GAMMA_DISTRIBUTION, GEOMETRICAL_DISTRIBUTION, NEGATIVE_BINOMIAL_DISTRIBUTION, NORMAL_DISTRIBUTION, PUASSON_DISTRIBUTION } = Distribution;


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
        new PathModel(1, 0.6, NORMAL_DISTRIBUTION, 0, 1, 1, 1, 1, 1, 1, 1),
        new PathModel(2, 0.4, NORMAL_DISTRIBUTION, 0, 1, 1, 1, 1, 1, 1, 1),
        new PathModel(3, 1, NORMAL_DISTRIBUTION, 0, 1, 1, 1, 1, 1, 1, 1),
        new PathModel(4, 1, NORMAL_DISTRIBUTION, 0, 1, 1, 1, 1, 1, 1, 1),
        new PathModel(5, 1, GAMMA_DISTRIBUTION, 2, 1, 1, 1, 0.5, 1, 1, 1),
        new PathModel(6, 1, NORMAL_DISTRIBUTION, 0, 1, 1, 1, 1, 1, 1, 1),
        new PathModel(7, 1, NORMAL_DISTRIBUTION, 0, 1, 1, 1, 1, 1, 1, 1),
        new PathModel(8, 1, NORMAL_DISTRIBUTION, 0, 1, 1, 1, 1, 1, 1, 1),
        new PathModel(9, 1, NORMAL_DISTRIBUTION, 0, 1, 1, 1, 1, 1, 1, 1),
        new PathModel(10, 1, NORMAL_DISTRIBUTION, 0, 1, 1, 1, 1, 1, 1, 1),
        new PathModel(11, 1, NORMAL_DISTRIBUTION, 10, 1, 1, 1, 1, 1, 1, 1),
        new PathModel(12, 1, NORMAL_DISTRIBUTION, 1, 1, 1, 1, 1, 1, 1, 1),
        new PathModel(13, 1, NORMAL_DISTRIBUTION, 0, 1, 1, 1, 1, 1, 1, 1),
        new PathModel(14, 0.05, NORMAL_DISTRIBUTION, 0, 1, 1, 1, 1, 1, 1, 1),
        new PathModel(15, 1, NORMAL_DISTRIBUTION, 0, 1, 1, 1, 1, 1, 1, 1),
        new PathModel(16, 0.95,NORMAL_DISTRIBUTION, 0, 1, 1, 1, 1, 1, 1, 1),
        new PathModel(17, 1, NORMAL_DISTRIBUTION, 0, 1, 1, 1, 1, 1, 1, 1),
        new PathModel(18, 1, NORMAL_DISTRIBUTION, 0.5, 1, 1, 1, 1, 1, 1, 1),
      ],
    };
  }

  render() {
    const { pathes } = this.state;
    return (
      <main>
        <div style={{ display: 'flex' }}>
          <div>
            {pathes.map(
              path => <Path id={path.id}
                            probability={path.probability}
                            distribution={path.distribution}
                            s={path.s}
                            m={path.m}
                            r={path.r}
                            n={path.n}
                            a={path.a}
                            b={path.b}
                            lambda={path.lambda}
                            sigma={path.sigma}
                            setProbability={(probability: number) => {
                              let pathes = this.state.pathes;
                              path.probability = probability;
                              this.setState({ pathes: pathes });
                            }}
                            setDistribution={(distribution: Distribution) => {
                              let pathes = this.state.pathes;
                              path.distribution = distribution;
                              this.setState({ pathes: pathes });
                            }}
                            setA={(a: number) => {
                              let pathes = this.state.pathes;
                              path.a = a;
                              this.setState({ pathes: pathes });
                            }}
                            setB={(b: number) => {
                              let pathes = this.state.pathes;
                              path.b = b;
                              this.setState({ pathes: pathes });
                            }}
                            setM={(m: number) => {
                              let pathes = this.state.pathes;
                              path.m = m;
                              this.setState({ pathes: pathes });
                            }}
                            setN={(n: number) => {
                              let pathes = this.state.pathes;
                              path.n = n;
                              this.setState({ pathes: pathes });
                            }}
                            setR={(r: number) => {
                              let pathes = this.state.pathes;
                              path.r = r;
                              this.setState({ pathes: pathes });
                            }}
                            setS={(s: number) => {
                              let pathes = this.state.pathes;
                              path.s = s;
                              this.setState({ pathes: pathes });
                            }}
                            setLambda={(lambda: number) => {
                              let pathes = this.state.pathes;
                              path.lambda = lambda;
                              this.setState({ pathes: pathes });
                            }}
                            setSigma={(sigma: number) => {
                              let pathes = this.state.pathes;
                              path.sigma = sigma;
                              this.setState({ pathes: pathes });
                            }}

              />,
            )}

          </div>
        </div>
        Результати: <br/>
        W<small>E</small>(s) = {Math.abs(wEsFunction(
        calculateDistributionMomentGeneratingFunctionForPath(pathes[0], false),
        calculateDistributionMomentGeneratingFunctionForPath(pathes[1], false),
        calculateDistributionMomentGeneratingFunctionForPath(pathes[2], false),
        calculateDistributionMomentGeneratingFunctionForPath(pathes[3], false),
        calculateDistributionMomentGeneratingFunctionForPath(pathes[4], false),
        calculateDistributionMomentGeneratingFunctionForPath(pathes[5], false),
        calculateDistributionMomentGeneratingFunctionForPath(pathes[6], false),
        calculateDistributionMomentGeneratingFunctionForPath(pathes[7], false),
        calculateDistributionMomentGeneratingFunctionForPath(pathes[8], false),
        calculateDistributionMomentGeneratingFunctionForPath(pathes[9], false),
        calculateDistributionMomentGeneratingFunctionForPath(pathes[10], false),
        calculateDistributionMomentGeneratingFunctionForPath(pathes[11], false),
        calculateDistributionMomentGeneratingFunctionForPath(pathes[12], false),
        calculateDistributionMomentGeneratingFunctionForPath(pathes[13], false),
        calculateDistributionMomentGeneratingFunctionForPath(pathes[14], false),
        calculateDistributionMomentGeneratingFunctionForPath(pathes[15], false),
        calculateDistributionMomentGeneratingFunctionForPath(pathes[16], false),
        calculateDistributionMomentGeneratingFunctionForPath(pathes[17], false),
      ))},<br/>
        W<small>E</small>(0) = {wEsFunction(
        calculateDistributionMomentGeneratingFunctionForPath(pathes[0], true),
        calculateDistributionMomentGeneratingFunctionForPath(pathes[1], true),
        calculateDistributionMomentGeneratingFunctionForPath(pathes[2], true),
        calculateDistributionMomentGeneratingFunctionForPath(pathes[3], true),
        calculateDistributionMomentGeneratingFunctionForPath(pathes[4], true),
        calculateDistributionMomentGeneratingFunctionForPath(pathes[5], true),
        calculateDistributionMomentGeneratingFunctionForPath(pathes[6], true),
        calculateDistributionMomentGeneratingFunctionForPath(pathes[7], true),
        calculateDistributionMomentGeneratingFunctionForPath(pathes[8], true),
        calculateDistributionMomentGeneratingFunctionForPath(pathes[9], true),
        calculateDistributionMomentGeneratingFunctionForPath(pathes[10], true),
        calculateDistributionMomentGeneratingFunctionForPath(pathes[11], true),
        calculateDistributionMomentGeneratingFunctionForPath(pathes[12], true),
        calculateDistributionMomentGeneratingFunctionForPath(pathes[13], true),
        calculateDistributionMomentGeneratingFunctionForPath(pathes[14], true),
        calculateDistributionMomentGeneratingFunctionForPath(pathes[15], true),
        calculateDistributionMomentGeneratingFunctionForPath(pathes[16], true),
        calculateDistributionMomentGeneratingFunctionForPath(pathes[17], true),
      )},<br/>
        p<small>E</small> = {wEsFunction(
        pathes[0].probability,
        pathes[1].probability,
        pathes[2].probability,
        pathes[3].probability,
        pathes[4].probability,
        pathes[5].probability,
        pathes[6].probability,
        pathes[7].probability,
        pathes[8].probability,
        pathes[9].probability,
        pathes[10].probability,
        pathes[11].probability,
        pathes[12].probability,
        pathes[13].probability,
        pathes[14].probability,
        pathes[15].probability,
        pathes[16].probability,
        pathes[17].probability,
      )},<br/>
        µ = {wEsFunction(
        calculateDistributionExpectedValueForPath(pathes[0]),
        calculateDistributionExpectedValueForPath(pathes[1]),
        calculateDistributionExpectedValueForPath(pathes[2]),
        calculateDistributionExpectedValueForPath(pathes[3]),
        calculateDistributionExpectedValueForPath(pathes[4]),
        calculateDistributionExpectedValueForPath(pathes[5]),
        calculateDistributionExpectedValueForPath(pathes[6]),
        calculateDistributionExpectedValueForPath(pathes[7]),
        calculateDistributionExpectedValueForPath(pathes[8]),
        calculateDistributionExpectedValueForPath(pathes[9]),
        calculateDistributionExpectedValueForPath(pathes[10]),
        calculateDistributionExpectedValueForPath(pathes[11]),
        calculateDistributionExpectedValueForPath(pathes[12]),
        calculateDistributionExpectedValueForPath(pathes[13]),
        calculateDistributionExpectedValueForPath(pathes[14]),
        calculateDistributionExpectedValueForPath(pathes[15]),
        calculateDistributionExpectedValueForPath(pathes[16]),
        calculateDistributionExpectedValueForPath(pathes[17]),
      )},<br/>
        Другий момент = {wEsFunction(
        calculateDistributionSecondMomentForPath(pathes[0]),
        calculateDistributionSecondMomentForPath(pathes[1]),
        calculateDistributionSecondMomentForPath(pathes[2]),
        calculateDistributionSecondMomentForPath(pathes[3]),
        calculateDistributionSecondMomentForPath(pathes[4]),
        calculateDistributionSecondMomentForPath(pathes[5]),
        calculateDistributionSecondMomentForPath(pathes[6]),
        calculateDistributionSecondMomentForPath(pathes[7]),
        calculateDistributionSecondMomentForPath(pathes[8]),
        calculateDistributionSecondMomentForPath(pathes[9]),
        calculateDistributionSecondMomentForPath(pathes[10]),
        calculateDistributionSecondMomentForPath(pathes[11]),
        calculateDistributionSecondMomentForPath(pathes[12]),
        calculateDistributionSecondMomentForPath(pathes[13]),
        calculateDistributionSecondMomentForPath(pathes[14]),
        calculateDistributionSecondMomentForPath(pathes[15]),
        calculateDistributionSecondMomentForPath(pathes[16]),
        calculateDistributionSecondMomentForPath(pathes[17]),
      )},<br/>
        σ<sup>2</sup> = {
        wEsFunction(
          calculateDistributionSecondMomentForPath(pathes[0]),
          calculateDistributionSecondMomentForPath(pathes[1]),
          calculateDistributionSecondMomentForPath(pathes[2]),
          calculateDistributionSecondMomentForPath(pathes[3]),
          calculateDistributionSecondMomentForPath(pathes[4]),
          calculateDistributionSecondMomentForPath(pathes[5]),
          calculateDistributionSecondMomentForPath(pathes[6]),
          calculateDistributionSecondMomentForPath(pathes[7]),
          calculateDistributionSecondMomentForPath(pathes[8]),
          calculateDistributionSecondMomentForPath(pathes[9]),
          calculateDistributionSecondMomentForPath(pathes[10]),
          calculateDistributionSecondMomentForPath(pathes[11]),
          calculateDistributionSecondMomentForPath(pathes[12]),
          calculateDistributionSecondMomentForPath(pathes[13]),
          calculateDistributionSecondMomentForPath(pathes[14]),
          calculateDistributionSecondMomentForPath(pathes[15]),
          calculateDistributionSecondMomentForPath(pathes[16]),
          calculateDistributionSecondMomentForPath(pathes[17]),
        ) - Math.pow(wEsFunction(
          calculateDistributionExpectedValueForPath(pathes[0]),
          calculateDistributionExpectedValueForPath(pathes[1]),
          calculateDistributionExpectedValueForPath(pathes[2]),
          calculateDistributionExpectedValueForPath(pathes[3]),
          calculateDistributionExpectedValueForPath(pathes[4]),
          calculateDistributionExpectedValueForPath(pathes[5]),
          calculateDistributionExpectedValueForPath(pathes[6]),
          calculateDistributionExpectedValueForPath(pathes[7]),
          calculateDistributionExpectedValueForPath(pathes[8]),
          calculateDistributionExpectedValueForPath(pathes[9]),
          calculateDistributionExpectedValueForPath(pathes[10]),
          calculateDistributionExpectedValueForPath(pathes[11]),
          calculateDistributionExpectedValueForPath(pathes[12]),
          calculateDistributionExpectedValueForPath(pathes[13]),
          calculateDistributionExpectedValueForPath(pathes[14]),
          calculateDistributionExpectedValueForPath(pathes[15]),
          calculateDistributionExpectedValueForPath(pathes[16]),
          calculateDistributionExpectedValueForPath(pathes[17]),
        ), 2)
      }
        <br/>

      </main>
    );
  }
}
