import React, {Component} from "react";
import {Button, Image, SafeAreaView, Text, View} from "react-native";
import ProfileScreen from "./ProfileScreen";
import calendarOutline from "../materials/calendar_outline.png";

const ScheduleScreen = ({navigation}) => {
    return (
        <SafeAreaView style={{backgroundColor:"white", height:"100%"}}>
            <View style={{marginLeft:"5%", marginRight:"5%"}}>
                <View style={{flexDirection:"row", marginTop:"5%", justifyContent:"space-between"}}>
                    <View>
                        <Text style={{fontSize:27, fontWeight:"500", marginTop:7}}>Schedule</Text>
                    </View>
                    <View style={{}}>
                        <Image style={{height:26, width:26}} source={calendarOutline}></Image>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default ScheduleScreen;