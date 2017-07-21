import React from 'react';
import { View, Text, Image } from 'react-native';
//import BoxDisplay from './BoxDisplay';

const MainPage = (props) => {
  return (
    <View style={{ flex: 1 }} >
      <View style={{ flex: 0.25, backgroundColor: '#055171', flexDirection: 'row' }} >
		<View style={{ flex: 0.4, alignItems: 'center', justifyContent: 'center' }} >
			<Image
				style={{width: 50, height: 50}}
				source={require('../images/JobIcon.png')}
			/>
			<Text style={{ fontFamily: 'roboto', fontSize: 25, color: '#ffffff' }} > 
				Jobs 
			</Text>
		</View>
		<View style={{ flex: 0.6, alignItems: 'center', justifyContent: 'center' }} >
			<Text style={{ fontFamily: 'roboto', fontSize: 40, color: '#ffffff' }} > 
				10 
			</Text>
		</View>
	  </View>
      <View style={{ flex: 0.5, backgroundColor: '#1f6f90' }} />
      <View style={{ flex: 0.25, backgroundColor: '#055171' }} />
    </View>
  );
};

export default MainPage;