import React, { Component } from 'react';
import { connect } from 'react-redux';
import BoxView from './BoxView_C1_C2R1_C2R2';
import { nextBoxValues } from '../actions';
import {
        getNewBoxValues,
        getBoxTitles,
        getBoxTitleStyles,
        getBoxValuesStyles,
        getBoxContainerStyles
      } from '../components/BoxComponent';

class BoxDisplay extends Component {

  constructor(props) {
    super();
    setInterval(() => {
      const newBoxValues = getNewBoxValues(this.props.boxValues);
      props.nextBoxValues(newBoxValues);
    }, 30000);
      }

  render() {
    //console.log('In RENDER props is : ');
    //console.log(this.props);
    return (
      <BoxView
        boxValues={this.props.boxValues}
        boxTitles={getBoxTitles()}
        boxTitleStyles={getBoxTitleStyles()}
        boxValuesStyles={getBoxValuesStyles()}
        boxContainerStyles={getBoxContainerStyles()}
      />
  );
}
}

const mapStateToProps = ({ box }) => {
  const { boxValues, boxTitles } = box;
  return { boxValues, boxTitles };
};

export default connect(mapStateToProps, { nextBoxValues })(BoxDisplay);
