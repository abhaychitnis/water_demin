import React, { Component } from 'react';
import { View } from 'react-native';
//import { connect } from 'react-redux';
import LayoutOne from './LayoutOne';
import BoxView_C1_C2 from './BoxView_C1_C2';
import BoxView_C1_C2R1_C2R2m from './BoxView_C1_C2R1_C2R2m';
import BoxView_C1_C2m from './BoxView_C1_C2m';
import ComponentOneContents from './ComponentOneContents.json';
import ComponentOneStyle from './ComponentOneStyle.json';
import ComponentTwoContents from './ComponentTwoContents.json';
import ComponentTwoStyle from './ComponentTwoStyle.json';
import ComponentThreeContents from './ComponentThreeContents.json';
import ComponentThreeStyle from './ComponentThreeStyle.json';


class TopDashboard extends Component {

  render() {
    /*
    return (
      <View>
        <Text>{String(ComponentOneStyle.boxContainerStyles.c1container.flex)}</Text>
      </View>
    );

    const boxObject = {
      boxFunction: BoxView_C1_C2
    };
    */

		const getComponentOneValues = () => {
			const boxValues = {
				c1Value: '',
				c2Value: String('10')
			};
			return boxValues;
		};
    const getCurrMMDD = () => {
      let today = new Date();
      let dd = today.getDate();
      let mm = today.getMonth() + 1; //January is 0!

      if (dd < 10) {
          dd = '0' + dd;
      }

      if (mm < 10) {
          mm = '0' + mm;
      }

      today = mm + '/' + dd;
      return (today);
    };

    const getComponentTwoValues = () => {
			const boxValues = {
				c1Value: '',
				c2R1Value: getCurrMMDD(),
        c2R2mValues: [{ id: 1, line: '09:30 AM' },
          { id: 2, line: 'Visit to Pune' },
          { id: 3, line: '10.45 AM' },
          { id: 4, line: 'Visit to Bangalore' },
          { id: 5, line: '02:00 AM' },
          { id: 6, line: 'Visit to Delhi' }
        ]
			};
			return boxValues;
		};
    const getComponentThreeValues = () => {
			const boxValues = {
				c1Value: '',
        c2mValues: {
          line1: 'Aniket Desai',
          line2: '8210349561',
          line3: 'Kishor Javeri',
          line4: '7334196622'
        }
      };
			return boxValues;
		};
		const displayComponentOne = {
			componentObject: BoxView_C1_C2,
			componentStyle: ComponentOneStyle,
			componentTitles: ComponentOneContents,
			componentValues: getComponentOneValues()
		};
		const displayComponentTwo = {
			componentObject: BoxView_C1_C2R1_C2R2m,
			componentStyle: ComponentTwoStyle,
      componentTitles: ComponentTwoContents,
			componentValues: getComponentTwoValues()
		};
		const displayComponentThree = {
			componentObject: BoxView_C1_C2m,
			componentStyle: ComponentThreeStyle,
      componentTitles: ComponentThreeContents,
			componentValues: getComponentThreeValues()
		};
    return (
		<View style={{ flex: 1 }}>
			<LayoutOne
				componentOne={displayComponentOne}
				componentTwo={displayComponentTwo}
				componentThree={displayComponentThree}
			/>
		</View>
        );
    }
  }

export default TopDashboard;
