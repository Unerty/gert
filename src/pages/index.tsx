import * as React from 'react';
import Path from '@/components/Path';
import { Distribution } from '@/functions/constants';
import PathModel from '@/models/PathModel';
import { calculateWFunctionForPath, wEsFunction } from '@/functions/functions';

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
        new PathModel(1, 1, 0, NORMAL_DISTRIBUTION, 1, 1, 1, 1, 1, 1, 1, 1),
        new PathModel(2, 1, 0, NORMAL_DISTRIBUTION, 1, 1, 1, 1, 1, 1, 1, 1),
        new PathModel(3, 1, 0, NORMAL_DISTRIBUTION, 1, 1, 1, 1, 1, 1, 1, 1),
        new PathModel(4, 1, 0, NORMAL_DISTRIBUTION, 1, 1, 1, 1, 1, 1, 1, 1),
        new PathModel(5, 1, 2, GAMMA_DISTRIBUTION, 1, 1, 1, 1, 0.5, 1, 1, 1),
        new PathModel(6, 1, 0, NORMAL_DISTRIBUTION, 1, 1, 1, 1, 1, 1, 1, 1),
        new PathModel(7, 1, 0, NORMAL_DISTRIBUTION, 1, 1, 1, 1, 1, 1, 1, 1),
        new PathModel(8, 1, 0, NORMAL_DISTRIBUTION, 1, 1, 1, 1, 1, 1, 1, 1),
        new PathModel(9, 1, 0, NORMAL_DISTRIBUTION, 1, 1, 1, 1, 1, 1, 1, 1),
        new PathModel(10, 1, 0, NORMAL_DISTRIBUTION, 1, 1, 1, 1, 1, 1, 1, 1),
        new PathModel(11, 1, 10, NORMAL_DISTRIBUTION, 1, 1, 1, 1, 1, 1, 1, 1),
        new PathModel(12, 1, 1, NORMAL_DISTRIBUTION, 1, 1, 1, 1, 1, 1, 1, 1),
        new PathModel(13, 1, 0, NORMAL_DISTRIBUTION, 1, 1, 1, 1, 1, 1, 1, 1),
        new PathModel(14, 0.05, 0, NORMAL_DISTRIBUTION, 1, 1, 1, 1, 1, 1, 1, 1),
        new PathModel(15, 1, 0, NORMAL_DISTRIBUTION, 1, 1, 1, 1, 1, 1, 1, 1),
        new PathModel(16, 0.95, 0, NORMAL_DISTRIBUTION, 1, 1, 1, 1, 1, 1, 1, 1),
        new PathModel(17, 1, 0, NORMAL_DISTRIBUTION, 1, 1, 1, 1, 1, 1, 1, 1),
        new PathModel(18, 1, 0.5, NORMAL_DISTRIBUTION, 1, 1, 1, 1, 1, 1, 1, 1),
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
                            additiveParameter={path.additiveParameter}
                            distribution={path.distribution}
                            s={path.s}
                            m={path.m}
                            r={path.r}
                            n={path.n}
                            a={path.a}
                            b={path.b}
                            lambda={path.lambda}
                            sigma={path.sigma}
                            setAdditiveParameter={(additiveParameter: number) => {
                              let pathes = this.state.pathes;
                              path.additiveParameter = additiveParameter;
                              this.setState({ pathes: pathes });
                            }}
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
        W<small>E</small>(s) = {wEsFunction(
        calculateWFunctionForPath(pathes[0],false),
        calculateWFunctionForPath(pathes[1],false),
        calculateWFunctionForPath(pathes[2],false),
        calculateWFunctionForPath(pathes[3],false),
        calculateWFunctionForPath(pathes[4],false),
        calculateWFunctionForPath(pathes[5],false),
        calculateWFunctionForPath(pathes[6],false),
        calculateWFunctionForPath(pathes[7],false),
        calculateWFunctionForPath(pathes[8],false),
        calculateWFunctionForPath(pathes[9],false),
        calculateWFunctionForPath(pathes[10],false),
        calculateWFunctionForPath(pathes[11],false),
        calculateWFunctionForPath(pathes[12],false),
        calculateWFunctionForPath(pathes[13],false),
        calculateWFunctionForPath(pathes[14],false),
        calculateWFunctionForPath(pathes[15],false),
        calculateWFunctionForPath(pathes[16],false),
        calculateWFunctionForPath(pathes[17],false),
        )},<br/>
        W<small>E</small>(0) = {wEsFunction(
        calculateWFunctionForPath(pathes[0],true),
        calculateWFunctionForPath(pathes[1],true),
        calculateWFunctionForPath(pathes[2],true),
        calculateWFunctionForPath(pathes[3],true),
        calculateWFunctionForPath(pathes[4],true),
        calculateWFunctionForPath(pathes[5],true),
        calculateWFunctionForPath(pathes[6],true),
        calculateWFunctionForPath(pathes[7],true),
        calculateWFunctionForPath(pathes[8],true),
        calculateWFunctionForPath(pathes[9],true),
        calculateWFunctionForPath(pathes[10],true),
        calculateWFunctionForPath(pathes[11],true),
        calculateWFunctionForPath(pathes[12],true),
        calculateWFunctionForPath(pathes[13],true),
        calculateWFunctionForPath(pathes[14],true),
        calculateWFunctionForPath(pathes[15],true),
        calculateWFunctionForPath(pathes[16],true),
        calculateWFunctionForPath(pathes[17],true),
      )},<br/>
      µ = 12,879,<br/>
      σ<sup>2</sup> = 9,211<br/>

      </main>
    );
  }
}
