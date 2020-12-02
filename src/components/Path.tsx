import * as React from 'react';

interface IProps {
  id: number;
  initialProbability: number;
  initialAdditiveParameter: number;
}

interface IState {
  probability: number;
  additiveParameter: number;
}

export default class Path extends React.Component<IProps, IState> {
  constructor(props) {
    super(props);
    this.state = {
      probability: props.initialProbability,
      additiveParameter: props.initialAdditiveParameter
    };
  }

  render() {
    const {id} = this.props;
    const {probability, additiveParameter} = this.state;
    return (
      <div style={{
        backgroundColor: 'sandybrown',
        display: 'inline-block',
        width: '150px',
        margin: '0.5rem',
        padding: '0.25rem'
      }}>
        <h3>Номер дуги: {id}</h3>
        <span>Вартість, грн.:<br/></span>
        <input type="number" onChange={event => this.setState({ additiveParameter: Number(event.target.value) })}
               value={additiveParameter.toString()} min={0} step={0.01}
               style={{width: '100px'}}
        />
        <br/>
        <span>Ймовірність: <strong> {probability}</strong><br/></span>
        <input type={'range'} onChange={event => this.setState({ probability: Number(event.target.value) })}
               value={probability.toString()} min={0} max={1} step={0.01}/>
      </div>
    );
  }
}
