import React from 'react';
import { Scene, Router, Modal } from 'react-native-router-flux';
import JobList from './components/JobList';
import JobList2 from './components/JobList2';
import EntryForm from './components/EntryForm';
import TopDashboard from './components/TopDashboard';

const RouterComponent = () => {
  return (
    <Router>
      <Scene
        key="modal"
        component={Modal}
        hideNavBar
      >
        <Scene key="auth">
          <Scene
            key="login"
            component={EntryForm}
            hideNavBar
          />
        </Scene>
        <Scene key="main" hideNavBar>
          <Scene
            key="topdashboard"
            component={TopDashboard}
            title="Dashboard"
            navigationBarStyle={styles.navBar}
            titleStyle={styles.titleStyle}
            initial
          />
          <Scene key="tabMain" tabs tabBarPosition="bottom">
            <Scene
              key="OpenJobs"
              back
              component={JobList}
              title="Open Jobs"
              navigationBarStyle={styles.navBar}
              titleStyle={styles.titleStyle}
              hideTabBar={false}
              headerTintColor='white'
            />
            <Scene
              key="AllJobs"
              component={JobList2}
              title="All Jobs"
              back
              navigationBarStyle={styles.navBar}
              titleStyle={styles.titleStyle}
              hideTabBar={false}
              headerTintColor='white'
            />
        </Scene>
      </Scene>
      </Scene>
    </Router>
  );
};


const styles = {
  navBar: {
    backgroundColor: '#01a1d3', // changing navbar color
  },
  titleStyle: {
    color: 'white', // changing navbar title color
    fontWeight: 'bold',
    alignSelf: 'center'
  }
};

export default RouterComponent;
