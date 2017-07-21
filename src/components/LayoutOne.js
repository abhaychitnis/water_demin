import React, { Component } from 'react';
//import { connect } from 'react-redux';
import { View, TouchableWithoutFeedback } from 'react-native';
import { Actions } from 'react-native-router-flux';

//import { setContext } from '../actions';

class LayoutOne extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayComponentOne: props.componentOne,
      displayComponentTwo: props.componentTwo,
      displayComponentThree: props.componentThree
    };
  }
  onPress() {
    Actions.tabMain();
  }
  /*
  onRowPress = (props) => {
      let context;
      switch (props) {
        case 'L1Display' :
          context = 'L1Display';
          break;
        case 'L2Display' :
          context = 'L2Display';
          break;
        case 'L3Display' :
          context = 'L3Display';
          break;
        default :
          context = 'L1Display';
          break;
      }
      this.props.setContext({ layout: 'LayoutThree', context });
    };
  */
  render() {
/*
    return (
      <View>
        <Text>{String(this.state.displayComponentOne.componentStyle.boxContainerStyles)}</Text>
      </View>
    );
*/
    const L1Display = this.state.displayComponentOne.componentObject;
    const L2Display = this.state.displayComponentTwo.componentObject;
    const L3Display = this.state.displayComponentThree.componentObject;

    return (
      <View style={{ flex: 1 }}>
        <TouchableWithoutFeedback onPress={this.onPress.bind(this)} style={{ flex: 1 }}>
          <View style={{ flex: 0.25 }} >
            <L1Display
              boxContainerStyles={this.state.displayComponentOne.componentStyle}
              boxIcons={this.state.displayComponentOne.componentIcons}
              boxTitles={this.state.displayComponentOne.componentTitles}
              boxValues={this.state.displayComponentOne.componentValues}
            />
          </View>
        </TouchableWithoutFeedback>
        <View style={{ flex: 0.5 }} >
          <L2Display
            boxContainerStyles={this.state.displayComponentTwo.componentStyle}
            boxIcons={this.state.displayComponentTwo.componentIcons}
            boxTitles={this.state.displayComponentTwo.componentTitles}
            boxValues={this.state.displayComponentTwo.componentValues}
          />
          </View>
        <View style={{ flex: 0.25 }} >
          <L3Display
            boxContainerStyles={this.state.displayComponentThree.componentStyle}
            boxIcons={this.state.displayComponentThree.componentIcons}
            boxTitles={this.state.displayComponentThree.componentTitles}
            boxValues={this.state.displayComponentThree.componentValues}
          />
          </View>
      </View>
    );
  }
}

/*
const mapStateToProps = ({ lone }) => {
  const { layout, context } = lone;
  return { layout, context };
};
*/

export default LayoutOne;
