//import { Actions } from 'react-native-router-flux';
import {
  JOBS_FETCH_SUCCESS
} from './types';
import jobsObject from '../components/jobsObject.json';

export const jobsFetch = () => {
  return (dispatch) => {
    const jobsObjectList = fetchJobsList();
    dispatch({ type: JOBS_FETCH_SUCCESS, payload: jobsObjectList });
  };
};
const fetchJobsList = () => {
  // console.log('fetchJobsList');
  const jobsObjectList = jobsObject;
  return (jobsObjectList);
};
