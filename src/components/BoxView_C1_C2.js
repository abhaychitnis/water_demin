import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';

class BoxView_C1_C2 extends Component {
  render() {
    const c1Title = this.props.boxTitles.c1Title || '';
    const c1Value = this.props.boxValues.c1Value || '';
    const c2Title = this.props.boxTitles.c2Title || '';
    const c2Value = this.props.boxValues.c2Value || '';

/*
    return (
      <View>
        <Text>{c1IconThruProp}</Text>
      </View>
    );
*/

    const c1Icon = require('../images/boxView_C1_C2/c1Icon.png');

    const c2Icon = require('../images/boxView_C1_C2/c2Icon.png');

    const {
          c1container, c2container,
          c1TitleStyle, c1ValueStyle,
          c2TitleStyle, c2ValueStyle,
          c1ImageStyle, c2ImageStyle
        } = styles;
    return (
      <View style={{ flexDirection: 'row', flex: 1 }}>
        <View
              style={[c1container,
              this.props.boxContainerStyles.boxContainerStyles.c1container]}
        >
          <Image
              style={[c1ImageStyle,
              this.props.boxContainerStyles.boxContainerStyles.c1ImageStyle]}
              source={c1Icon}
          />
          <Text
              style={[c1TitleStyle,
              this.props.boxContainerStyles.boxContainerStyles.c1TitleStyle]}
          >
            {c1Title}
          </Text>
          <Text
              style={[c1ValueStyle,
              this.props.boxContainerStyles.boxContainerStyles.c1ValueStyle]}
          >
            {c1Value}
          </Text>
        </View>
        <View
              style={[c2container,
              this.props.boxContainerStyles.boxContainerStyles.c2container]}
        >
          <Image
            style={[c2ImageStyle,
            this.props.boxContainerStyles.boxContainerStyles.c2ImageStyle]}
            source={c2Icon}
          />
          <Text
            style={[c2TitleStyle,
            this.props.boxContainerStyles.boxContainerStyles.c2TitleStyle]}
          >
            {c2Title}
          </Text>
          <Text
            style={[c2ValueStyle,
            this.props.boxContainerStyles.boxContainerStyles.c2ValueStyle]}
          >
            {c2Value}
          </Text>
        </View>
      </View>
    );
  }
}

const styles = {
  c1container: {
      backgroundColor: 'cornsilk',
  },
  c2container: {
      backgroundColor: 'cornsilk',
  },
  c1TitleStyle: {
    color: 'grey',
    fontSize: 24,
    fontWeight: 'bold'
  },
  c1ValueStyle: {
    color: 'darkslategrey',
    fontSize: 96,
    fontWeight: 'bold'
  },
  c1ImageStyle: {
    height: 0,
    width: 0
  },
  c2TitleStyle: {
    color: 'grey',
    textDecorationLine: 'underline',
    fontSize: 24,
    fontWeight: 'bold'
  },
  c2ValueStyle: {
    color: 'darkslategrey',
    fontSize: 24,
    fontWeight: 'bold'
  },
  c2ImageStyle: {
    height: 0,
    width: 0
  }
};

export default BoxView_C1_C2;
