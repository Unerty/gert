import * as React from 'react';
import Path from '@/components/Path';

interface IProps {
}

interface IState {
}

export default class App extends React.Component<IProps, IState> {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <main style={{display: 'flex'}}>
        <div style={{width: '50%'}}>
        <img src={"https://github.com/Unerty/gert/blob/main/static/ris4.png?raw=true"} width={'75%'}/>
        <img src={"https://github.com/Unerty/gert/blob/main/static/ris5.png?raw=true"} width={'25%'}/>
        </div>
        <div style={{width: '50%'}}>
          <Path id={1} initialProbability={1} />
          <Path id={2} initialProbability={1} />
          <Path id={3} initialProbability={1} />
          <Path id={4} initialProbability={1} />
          <Path id={5} initialProbability={1} />

          <Path id={6} initialProbability={1} />
          <Path id={7} initialProbability={1} />
          <Path id={8} initialProbability={1} />
          <Path id={9} initialProbability={1} />
          <Path id={10} initialProbability={1} />

          <Path id={11} initialProbability={1} />
          <Path id={12} initialProbability={1} />
          <Path id={13} initialProbability={1} />
          <Path id={14} initialProbability={0.05} />
          <Path id={15} initialProbability={1} />

          <Path id={16} initialProbability={0.95} />
          <Path id={17} initialProbability={1} />
          <Path id={18} initialProbability={1} />
        </div>

      </main>
    );
  }
}
