import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';

class BoxView_C1_C2m extends Component {
  //console.log(props);
  render() {

    const c1Title1 = this.props.boxTitles.c1Title1 || '';
    const c1Title2 = this.props.boxTitles.c1Title2 || '';
    const c1Value = this.props.boxValues.c1Value || '';
    const c2mTitle = this.props.boxTitles.c2mTitle || '';
    const c2mValues = this.props.boxValues.c2mValues || '';
    const c2mValueStyle =
    this.props.boxContainerStyles.boxContainerStyles.c2mValueStyle;
    const c2mImageStyle =
    this.props.boxContainerStyles.boxContainerStyles.c2mImageStyle;

/*
    return (
      <View>
        <Text>{c1IconThruProp}</Text>
      </View>
    );
*/

    const c1Icon = require('../images/boxView_C1_C2m/c1Icon.png');

    const c2m1Icon = require('../images/boxView_C1_C2m/c2m1Icon.jpg');

    const c2m2Icon = require('../images/boxView_C1_C2m/c2m2Icon.jpg');

    const {
          c1container, c2mcontainer,
          c1TitleStyle, c1ValueStyle,
          c1ImageStyle
        } = styles;
    const renderImage = (imageToRender) => {
      return (
        <Image
          style={c2mImageStyle}
          source={imageToRender}
        />
      );
    };
    const c2mView = () => {
      return (
        <View style={{ flex: 1 }}>
            <View style={{ flex: 1, flexDirection: 'row' }}>
              <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }} >
                {renderImage(c2m1Icon)}
              </View>
              <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }} >
                <Text style={c2mValueStyle.line1}>
                  {c2mValues.line1}
                </Text>
                <Text style={c2mValueStyle.line2}>
                  {c2mValues.line2}
                </Text>
              </View>
            </View>
            <View style={{ flex: 1, flexDirection: 'row' }}>
              <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }} >
                {renderImage(c2m2Icon)}
              </View>
              <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }} >
                <Text style={c2mValueStyle.line3}>
                  {c2mValues.line3}
                </Text>
                <Text style={c2mValueStyle.line4}>
                  {c2mValues.line4}
                </Text>
              </View>
            </View>
        </View>
      );
    };
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
            {c1Title1}
          </Text>
          <Text
              style={[c1TitleStyle,
              this.props.boxContainerStyles.boxContainerStyles.c1TitleStyle]}
          >
            {c1Title2}
          </Text>
          <Text
              style={[c1ValueStyle,
              this.props.boxContainerStyles.boxContainerStyles.c1ValueStyle]}
          >
            {c1Value}
          </Text>
        </View>
        <View
          style={[c2mcontainer,
            this.props.boxContainerStyles.boxContainerStyles.c2mcontainer]}
        >
          {c2mView()}
        </View>
      </View>
    );
  }
}

const styles = {
  c1container: {
      backgroundColor: 'cornsilk',
  },
  c2mcontainer: {
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
  c2mTitleStyle: {
    color: 'grey',
    textDecorationLine: 'underline',
    fontSize: 24,
    fontWeight: 'bold'
  },
  c2mValueStyle: {
    color: 'darkslategrey',
    fontSize: 24,
    fontWeight: 'bold'
  },
  c2mImageStyle: {
    height: 0,
    width: 0
  }
};

export default BoxView_C1_C2m;
