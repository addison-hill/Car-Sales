import React from 'react';
import { connect } from 'react-redux';
import { addFeature } from '../actions';

const AdditionalFeature = props => {

  const handleClick = () => {
    props.addFeature(props.feature)
  }
  return (
    <li>
      <button className="button" onClick={handleClick}>Add</button>
      {props.feature.name} for ${props.feature.price}
    </li>
  );
};

export default connect(null, { addFeature })(AdditionalFeature);
