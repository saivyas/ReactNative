import React, { Component } from 'react';
import { AppRegistry, View ,Text,TouchableHighlight} from 'react-native';

export default class AppHeader extends Component {
  onnavigate(){

    this.props.navigator.push({

      id:'Second'
    }

    );
  }
  render() {

    return (



    <View style={{flex: 1, flexDirection: 'column'}}>

        <View style={{flex: 0, flexDirection: 'row'}}>
          <View style={{flex: 1,height: 50, backgroundColor: '#9E9E9E',alignItems:'center'}}>
<Text style={{ marginTop:20,color:'white'}}>Dashboard</Text>



          </View>

        </View>

        <View style={{flex: 0, flexDirection: 'row'}}>
<TouchableHighlight onPress={this.onnavigate.bind(this)} style={{flex: 1, height: 50, backgroundColor: '#BDBDBD',alignItems:'center',borderRightWidth:1,borderColor:'#000'}}>
            <Text style={{marginTop:20}}>{this.props.what}</Text>

    </TouchableHighlight>

    <TouchableHighlight onPress={this.onnavigate.bind(this)} style={{flex: 1, height: 50, backgroundColor: '#BDBDBD',alignItems:'center',borderRightWidth:1,borderColor:'#000'}}>
                <Text style={{marginTop:20}}>{this.props.where}</Text>

        </TouchableHighlight>

        <TouchableHighlight onPress={this.onnavigate.bind(this)} style={{flex: 1, height: 50, backgroundColor: '#BDBDBD',alignItems:'center',borderRightWidth:1,borderColor:'#000'}}>
                    <Text style={{marginTop:20}}>{this.props.when}</Text>

            </TouchableHighlight>
        </View>


        </View>
  );
  }
};

module.export=AppHeader;
