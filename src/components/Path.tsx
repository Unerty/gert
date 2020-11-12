import * as React from 'react';

interface IProps {
  id: number;
  initialProbability: number;
}

interface IState {
  probability: number;
}

export default class Path extends React.Component<IProps, IState> {
  constructor(props) {
    super(props);
    this.state = { probability: props.initialProbability};
  }

  render() {
    const {id} = this.props;
    const {probability} = this.state;
    return (
      <div style={{
        backgroundColor: 'sandybrown',
        display: 'inline-block',
        width: '150px',
        margin: '0.5rem',
        padding: '0.25rem'
      }}>
        <h3>Path number {id}</h3>
        <span>Probabillity: <strong> {probability}</strong><br/></span>
        <input type={'range'} onChange={event => this.setState({ probability: Number(event.target.value) })}
               value={probability.toString()} min={0} max={1} step={0.01}/>
      </div>
    );
  }
}
