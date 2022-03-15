import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack'
import HomeScreen from './src/screens/HomeScreen';
import ResultsShowScreen from './src/screens/ResultsShowScreen';

const navigator = createStackNavigator({
  Home: HomeScreen,
  Details: ResultsShowScreen
}, {
  initialRouteName: 'Home',
  defaultNavigationOption: {
    title: 'Business Search'
  }
})

export default createAppContainer(navigator);