import * as React from 'react';
import PathModel from '@/models/PathModel';

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
    const { id, probability, additiveParameter, distribution, setAdditiveParameter, setProbability, setDistribution } = this.props;
    return (
      <div style={{
        backgroundColor: 'sandybrown',
        display: 'inline-block',
        width: '150px',
        margin: '0.5rem',
        padding: '0.25rem',
      }}>
        <h3>Номер дуги: {id}</h3>
        <span>Вартість, грн.:<br/></span>
        <input type="number" onChange={event => setAdditiveParameter(Number(event.target.value))}
               value={additiveParameter.toString()} min={0} step={0.01}
               style={{ width: '100px' }}
        />
        <br/>
        <span>Ймовірність: <strong> {probability}</strong><br/></span>
        <input type={'range'} onChange={event => setProbability(Number(event.target.value))}
               value={probability.toString()} min={0} max={1} step={0.01}/>
      </div>
    );
  }
}
