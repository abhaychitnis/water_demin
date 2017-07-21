import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, ListView } from 'react-native';
import { jobsFetch } from '../actions';
import JobItem from './JobItem';

class JobList2 extends Component {
  componentWillMount() {
    this.props.jobsFetch();

    this.createDataSource(this.props);
  }

  componentWillReceiveProps(nextProps) {
    // nextProps are the next set of props that this component
    // will be rendered with
    // this.props is still the old set of props

    this.createDataSource(nextProps);
  }

  createDataSource({ jobs }) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.dataSource = ds.cloneWithRows(jobs);
  }

  renderRow(jobs) {
    //console.log('I am in render row');
    return (
      <View style={{ flex: 1 }}>
        <JobItem jobs={jobs} />
      </View>
    );
  }

  render() {
    return (
      <ListView
        enableEmptySections
        dataSource={this.dataSource}
        renderRow={this.renderRow}
      />
    );
  }
}

const mapStateToProps = state => {
  //console.log(state.job);
  const jobs = _.map(state.job, (value) => {
    return (value);
  });

  return { jobs };
};

export default connect(mapStateToProps, { jobsFetch })(JobList2);
