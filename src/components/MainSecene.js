import React, {Component} from 'react';
import {TouchableHighlight,Image,Text,View,StyleSheet} from 'react-native';
import {TabHeading,connectStyle, InputGroup,Input,StyleProvider,Tabs,Tab,Container,Header,Left,Button,Body,Title,Right, Content, ListItem, CheckBox } from 'native-base';
import DatePicker from 'react-native-datepicker';


export default class MainSecene extends Component  {

  onnavigate(event,tabId,history){

    this.props.navigator.push({

      id:tabId,

      text:event,
      prevText:history
    }

    );
if(tabId==2){
     this.refs.date.onPressDate();
     this.setState({

       what:history,
       where:event,
     });
   }


}

  finalnavigate(tabId,what,where,when){

        this.props.navigator.push({

          id:tabId,
          what:what,
          where:where,
          when:when,
        });


  }

  constructor(){
    super()
    this.state={
      what:'What',
      where:'Where',
      when:'When',

      isLoading:true,
    date:"17th April 2017, 12:50:46 am",

  }


    }



    render() {

  if(this.props.what=='What'){var whatcolor='#000';}else {whatcolor='red';}
  if(this.props.where=='Where'){var wherecolor='#000';}else {wherecolor='red';}
  if(this.props.when=='When'){var whencolor='#000';}else {whencolor='red';}

        return (

          <Container>
                  <Tabs initialPage={this.props.data}  tabsStyle={{backgroundColor: '#000'}}  tabBarUnderlineStyle={{backgroundColor:'#000'}}>
                                      <Tab style={{backgroundColor:'#ECEFF1'}}  heading={ <TabHeading style={{backgroundColor:'#BDBDBD',borderRightWidth:1}}><Text style={{color:whatcolor}}>{this.props.what}</Text></TabHeading>}>
                                      <InputGroup regular>
                                      <Input placeholder='Type What you want'  onSubmitEditing={(event) => this.onnavigate(""+event.nativeEvent.text+"",1)}/>
                                      </InputGroup>
                                      </Tab>

                                      <Tab  style={{backgroundColor:'#ECEFF1'}} heading={ <TabHeading style={{backgroundColor:'#BDBDBD',borderRightWidth:1}}><Text style={{color:wherecolor}}>{this.props.where}</Text></TabHeading>}>
                                      <InputGroup regular>
                                      <Input placeholder='Type Where It Is?'  onSubmitEditing={(event) => this.onnavigate(""+event.nativeEvent.text+"",2,this.props.what)}/>
                                      </InputGroup>
                                      </Tab>

  <Tab  style={{backgroundColor:'#ECEFF1'}} heading={ <TabHeading  style={{backgroundColor:'#BDBDBD',borderRightWidth:1}}><Text style={{color:whencolor}}>{this.props.when}</Text></TabHeading>}>

                                      <InputGroup regular>
                                      <Input onFocus={() => this.refs.date.onPressDate()} placeholder='Type What you want' value={this.state.date} onPressCancel={(event) => this.finalnavigate(3,this.props.what,this.props.where,this.state.date)}/>
                                      </InputGroup>

                                      </Tab>


                                  </Tabs>

                                  <DatePicker
                                         style={{width: 0,height:0}}
                                         date={this.state.date}
                                         mode="date"
                                         ref="date"
                                         placeholder="select date"
                                         format="Do MMMM YY"

                                         minDate="2016-05-01"
                                         maxDate="2040-06-01"
                                         confirmBtnText="Confirm"
                                         cancelBtnText="Cancel"
                                         showIcon={false}


                                         onDateChange={(date) => {this.setState({date:date.split(",")[0]}),this.finalnavigate(3,this.state.what,this.state.where,date)}}
                                       />

        </Container>




        );

    }


}

module.export=MainSecene;
