import React from 'react';
import AddedFeature from './AddedFeature';
import { connect } from 'react-redux';

const AddedFeatures = props => {
  console.log('added', props)
  return (
    <div className="content">
      <h6>Added features:</h6>
      {props.carFeatures.length > 0 ? (
        <ol type="1">
          {props.carFeatures.map(item => (
            <AddedFeature key={item.id} feature={item} />
          ))}
        </ol>
      ) : (
        <p>You can purchase items from the store.</p>
      )}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    carFeatures: state.car.features
  };
};

export default connect(mapStateToProps)(AddedFeatures);
