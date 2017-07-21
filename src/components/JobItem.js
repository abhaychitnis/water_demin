import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View, StyleSheet } from 'react-native';
//import { Actions } from 'react-native-router-flux';
//import { CardSection } from './common';

class JobItem extends Component {
  onRowPress() {
    console.log('Item Pressed');
    //Actions.employeeEdit({ employee: this.props.employee });
  }

  render() {
    const { jobId, customer, sorDate, startDate } = this.props.jobs;
    //console.log(this.props.jobs);

    return (
      <TouchableWithoutFeedback onPress={this.onRowPress.bind(this)} style={{ flex: 1 }}>
        <View style={styles.containerStyle1}>
          <Text style={styles.titleStyle}>JOB ID : {jobId}</Text>
          <View style={{ flexDirection: 'row', flex: 1 }}>

            <View style={styles.boxStyle}>
              <Text style={styles.labelStyle}>
                CUSTOMER
              </Text>
              <Text style={styles.valueStyle}>
                {customer}
              </Text>
            </View>
            <View style={styles.boxStyle}>
              <Text style={styles.labelStyle}>
                SOR DATE
              </Text>
              <Text style={styles.valueStyle}>
                {sorDate}
              </Text>
            </View>
            <View style={styles.boxStyle}>
              <Text style={styles.labelStyle}>
                START DATE
              </Text>
              <Text style={styles.valueStyle}>
                {startDate}
              </Text>
            </View>

          </View>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = {
  containerStyle1: {
    flex: 1,
    backgroundColor: '#055171'
  },
  containerStyle2: {
    flex: 1,
    backgroundColor: '#0d6285'
  },
  boxStyle: {
    flex: 0.333,
    flexDirection: 'column',
    paddingBottom: 10,
    paddingTop: 10,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#1786a9'
  },
  titleStyle: {
    fontSize: 10,
    color: '#06e5ff',
    fontFamily: 'Roboto',
    paddingTop: 10,
    paddingLeft: 10
  },
  labelStyle: {
    fontSize: 10,
    color: '#06e5ff',
    fontFamily: 'Roboto',
    paddingLeft: 10
  },
  valueStyle: {
    fontSize: 10,
    color: '#ffffff',
    fontFamily: 'Roboto',
    paddingLeft: 10
  }
};

export default JobItem;
