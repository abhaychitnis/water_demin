import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';

class BoxView_C1_C2R1_C2R2m extends Component {
  //console.log(props);
  render() {
    const c1Title = this.props.boxTitles.c1Title || '';
    const c1Value = this.props.boxValues.c1Value || '';
    const c2R1Title = this.props.boxTitles.c2R1Title || '';
    const c2R1Value = this.props.boxValues.c2R1Value || '';
    const c2R2mTitle = this.props.boxTitles.c2R2mTitle || '';
    const c2R2mValues = this.props.boxValues.c2R2mValues || '';

/*
    return (
      <View>
        <Text>{c1IconThruProp}</Text>
      </View>
    );
*/

    const c1Icon = require('../images/boxView_C1_C2R1_C2R2m/c1Icon.png');

    const c2R1Icon = require('../images/boxView_C1_C2R1_C2R2m/c2R1Icon.png');

    const c2R2mIcon = require('../images/boxView_C1_C2R1_C2R2m/c2R2mIcon.png');

    const {
          c1container, c2container, c2R1container, c2R2mcontainer,
          c1TitleStyle, c1ValueStyle,
          c2R1TitleStyle, c2R1ValueStyle,
          c2R2mTitleStyle, c2R2mValueStyle,
          c1ImageStyle, c2R1ImageStyle, c2R2mImageStyle
        } = styles;
    const c2R2mView = () => {
      /*
      return (
        <View>
          <Text style={{ color: 'yellow', fontSize: 25 }}>
            {String(c2R2mValues)}
          </Text>
        </View>
      );

      */
      return c2R2mValues.map((data, index) => {
        const styleInd = index % 2;
//
//
        if (styleInd > 0) {
          return (
            <Text
            style={this.props.boxContainerStyles.boxContainerStyles.c2R2mValueStyle.line2Style}
            key={data.id}
            >
              {data.line}
            </Text>
          );
        }
        return (
          <Text
          style={this.props.boxContainerStyles.boxContainerStyles.c2R2mValueStyle.line1Style}
          key={data.id}
          >
            {data.line}
          </Text>
        );
      }
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
          <View style={{ flex: 1 }}>
            <View
                style={[c2R1container,
                  this.props.boxContainerStyles.boxContainerStyles.c2R1container]}
            >
              <Image
                style={[c2R1ImageStyle,
                this.props.boxContainerStyles.boxContainerStyles.c2ImageStyle]}
                source={c2R1Icon}
              />
              <Text
                style={[c2R1TitleStyle,
                this.props.boxContainerStyles.boxContainerStyles.c2TitleStyle]}
              >
                {c2R1Title}
              </Text>
              <Text
                style={[c2R1ValueStyle,
                this.props.boxContainerStyles.boxContainerStyles.c2R1ValueStyle]}
              >
                {c2R1Value}
              </Text>
            </View>
            <View
                  style={[c2R2mcontainer,
                  this.props.boxContainerStyles.boxContainerStyles.c2R2mcontainer]}
            >
              <Image
                style={[c2R2mImageStyle,
                this.props.boxContainerStyles.boxContainerStyles.c2R2mImageStyle]}
                source={c2R2mIcon}
              />
              <Text
                style={[c2R2mTitleStyle,
                this.props.boxContainerStyles.boxContainerStyles.c2R2mTitleStyle]}
              >
                {c2R2mTitle}
              </Text>
              {c2R2mView()}
            </View>
          </View>
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
  c2R1container: {
      backgroundColor: 'cornsilk',
  },
  c2R2mcontainer: {
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
  c2R1TitleStyle: {
    color: 'grey',
    textDecorationLine: 'underline',
    fontSize: 24,
    fontWeight: 'bold'
  },
  c2R1ValueStyle: {
    color: 'darkslategrey',
    fontSize: 24,
    fontWeight: 'bold'
  },
  c2R1ImageStyle: {
    height: 0,
    width: 0
  },
  c2R2mTitleStyle: {
    color: 'grey',
    textDecorationLine: 'underline',
    fontSize: 24,
    fontWeight: 'bold'
  },
  c2R2mValueStyle: {
    color: 'darkslategrey',
    fontSize: 24,
    fontWeight: 'bold'
  },
  c2R2mImageStyle: {
    height: 0,
    width: 0
  },
};

export default BoxView_C1_C2R1_C2R2m;
