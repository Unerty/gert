import * as React from 'react';
import Path from '@/components/Path';
import { Distribution } from '@/functions/constants';
import PathModel from '@/models/PathModel';

const { BINOMIAL_DISTRIBUTION, CONTINIOUS_UNIFORM_DISTRIBUTION, EXPONENTIAL_DISTRIBUTION, GAMMA_DISTRIBUTION, GEOMETRICAL_DISTRIBUTION, NEGATIVE_BINOMIAL_DISTRIBUTION, NORMAL_DISTRIBUTION, PUASSON_DISTRIBUTION } = Distribution;


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
        new PathModel(5, 1, 2000, NORMAL_DISTRIBUTION, 1, 1, 1, 1, 1, 1, 1, 1),
        new PathModel(6, 1, 0, NORMAL_DISTRIBUTION, 1, 1, 1, 1, 1, 1, 1, 1),
        new PathModel(7, 1, 0, NORMAL_DISTRIBUTION, 1, 1, 1, 1, 1, 1, 1, 1),
        new PathModel(8, 1, 0, NORMAL_DISTRIBUTION, 1, 1, 1, 1, 1, 1, 1, 1),
        new PathModel(9, 1, 0, NORMAL_DISTRIBUTION, 1, 1, 1, 1, 1, 1, 1, 1),
        new PathModel(10, 1, 0, NORMAL_DISTRIBUTION, 1, 1, 1, 1, 1, 1, 1, 1),
        new PathModel(11, 1, 10000, NORMAL_DISTRIBUTION, 1, 1, 1, 1, 1, 1, 1, 1),
        new PathModel(12, 1, 1000, NORMAL_DISTRIBUTION, 1, 1, 1, 1, 1, 1, 1, 1),
        new PathModel(13, 1, 0, NORMAL_DISTRIBUTION, 1, 1, 1, 1, 1, 1, 1, 1),
        new PathModel(14, 0.05, 0, NORMAL_DISTRIBUTION, 1, 1, 1, 1, 1, 1, 1, 1),
        new PathModel(15, 1, 0, NORMAL_DISTRIBUTION, 1, 1, 1, 1, 1, 1, 1, 1),
        new PathModel(16, 0.95, 0, NORMAL_DISTRIBUTION, 1, 1, 1, 1, 1, 1, 1, 1),
        new PathModel(17, 1, 0, NORMAL_DISTRIBUTION, 1, 1, 1, 1, 1, 1, 1, 1),
        new PathModel(18, 1, 500, NORMAL_DISTRIBUTION, 1, 1, 1, 1, 1, 1, 1, 1),
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
                            setProbability= {(probability: number) => {
                              let pathes = this.state.pathes;
                              path.probability = probability;
                              this.setState({ pathes: pathes });
                            }}
                            setDistribution={(distribution: Distribution) => {
                              let pathes = this.state.pathes;
                              path.distribution = distribution;
                              this.setState({ pathes: pathes });
                            }}

              />
            )}

          </div>
        </div>
        Результати:
        µ = 12,879, σ<sup>2</sup> = 9,211

      </main>
    );
  }
}
