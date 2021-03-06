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
