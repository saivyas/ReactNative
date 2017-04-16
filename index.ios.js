import React from 'react';
import {
  AppRegistry,
  Text,Button,TouchableHighlight,Navigator
} from 'react-native';
import AppHeader from './src/components/appHeader';
import MainSecene from './src/components/MainSecene';
import WhenSecene from './src/components/WhenSecene';
import WhereSecene from './src/components/WhereSecene';

  class HomeScreen extends React.Component {


     render() {
       return (
 <Navigator initialRoute={{id:'First'}} renderScene={this.navigatirRenderScene}/>

       );
     }
     navigatirRenderScene(route,navigator){

       _navigator=navigator;
       switch (route.id) {
         case 'First':
         return(<AppHeader navigator={navigator} what={'What'} where={'Where'} when={'When'} />);

           case 'Second':
           return(<MainSecene navigator={navigator} data={0} what={'What'} where={'Where'} when={'When'}  title='MainSecene'/>);

           case 1:
           return(<MainSecene navigator={navigator} data={1} what={route.text} where={'Where'} when={'When'} title='Where-Secene'/>);

           case 2:
           return(<MainSecene navigator={navigator} data={2} what={route.prevText} where={route.text} when={'When'} title='Where-Secene'/>);
           case 3:
           return(<AppHeader navigator={navigator} what={route.what} where={route.where} when={route.when} />);


           break;
         default:

       }
     }
   }




AppRegistry.registerComponent('www', () => HomeScreen);
