import React, {Component} from "react";
import {Image, Platform, SafeAreaView, StyleSheet, Text, TouchableOpacity, View} from "react-native";

const NotificationScreen = ({navigation}) => {
    const info = [
        {
            title: "3 Schedules",
            details: "Check your schedule today",
            icon: require("../materials/calendar_icon.png"),
            iconColor: "#1C6BA4",
            color: "#DCEDF9"
        },
        {
            title: "14 Messages",
            details: "Check your messages here",
            icon: require("../materials/chatbox_filled.png"),
            iconColor: "#F73859",
            color: "rgba(247,56,89,0.15)"
        },
        {
            title: "Medicine",
            details: "Check your medicine list",
            icon: require("../materials/bandage_filled.png"),
            iconColor: "#E09F1F",
            color: "#FAF0DB"
        },
        {
            title: "Vaccine Update",
            details: "Check your vaccine status here",
            icon: require("../materials/thermometer_filled.png"),
            iconColor: "#009DC7",
            color: "#D6F6FF"
        },
        {
            title: "App Update",
            details: "Check App Version",
            icon: require("../materials/construct_filled.png"),
            iconColor: "#9D4C6C",
            color: "#F2E3E9"
        }
    ]
    return (
        <SafeAreaView style={[style.droidSafeArea, {backgroundColor:"white", height:"100%"}]}>
            <View style={{marginLeft:"5%", marginRight:"5%", overflow:"hidden"}}>
                <View style={{marginTop:"5%"}}>
                    <Text style={{fontSize:27, fontWeight:"700", marginTop:7}}>Notifications</Text>
                </View>
                <TouchableOpacity style={[style.box]}>
                    <View style={[style.boxIconCover, {backgroundColor:info[0]["color"]}]}>
                        <Image style={[style.boxIcon, {tintColor: info[0]["iconColor"]}]} source={info[0]["icon"]} />
                    </View>
                    <View>
                        <Text style={[style.boxHeading]}>{info[0]["title"]}</Text>
                        <Text style={[style.boxText]}>{info[0]["details"]}</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={[style.box]}>
                    <View style={[style.boxIconCover, {backgroundColor:info[1]["color"]}]}>
                        <Image style={[style.boxIcon, {tintColor: info[1]["iconColor"]}]} source={info[1]["icon"]} />
                    </View>
                    <View>
                        <Text style={[style.boxHeading]}>{info[1]["title"]}</Text>
                        <Text style={[style.boxText]}>{info[1]["details"]}</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={[style.box]}>
                    <View style={[style.boxIconCover, {backgroundColor:info[2]["color"]}]}>
                        <Image style={[style.boxIcon, {tintColor: info[2]["iconColor"]}]} source={info[2]["icon"]} />
                    </View>
                    <View>
                        <Text style={[style.boxHeading]}>{info[2]["title"]}</Text>
                        <Text style={[style.boxText]}>{info[2]["details"]}</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={[style.box]}>
                    <View style={[style.boxIconCover, {backgroundColor:info[3]["color"]}]}>
                        <Image style={[style.boxIcon, {tintColor: info[3]["iconColor"]}]} source={info[3]["icon"]} />
                    </View>
                    <View>
                        <Text style={[style.boxHeading]}>{info[3]["title"]}</Text>
                        <Text style={[style.boxText]}>{info[3]["details"]}</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={[style.box]}>
                    <View style={[style.boxIconCover, {backgroundColor:info[4]["color"]}]}>
                        <Image style={[style.boxIcon, {tintColor: info[4]["iconColor"]}]} source={info[4]["icon"]} />
                    </View>
                    <View>
                        <Text style={[style.boxHeading]}>{info[4]["title"]}</Text>
                        <Text style={[style.boxText]}>{info[4]["details"]}</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

const style = StyleSheet.create({
    infoBox: {
        flexDirection:"row",
        marginTop:30,
        paddingRight:"10%",
        backgroundColor:"#DCEDF9",
        borderTopLeftRadius:18,
        borderTopRightRadius:18,
        borderBottomLeftRadius:18,
        borderBottomRightRadius:18,
        height:170
    },
    smallInfoBox: {
        flexDirection:"row",
        marginTop:30,
        padding: 10,
        backgroundColor:"#DCEDF9",
        borderTopLeftRadius:18,
        borderTopRightRadius:18,
        borderBottomLeftRadius:18,
        borderBottomRightRadius:18,
        height:135,
        width: "48%"
    },
    smallBoxTitle: {
        fontSize:14,
        fontWeight:"400",
        marginTop:15
    },
    shadowProps: {
        shadowColor: 'rgba(107, 134, 179, 0.25)',
        shadowOffset: {width: 6, height: 0},
        shadowRadius: 24
    },
    borderProps: {
        borderWidth: 1,
        borderStyle: "solid",
        borderColor: "#D7DDEA",
        borderTopLeftRadius:28,
        borderTopRightRadius:28,
        borderBottomLeftRadius:28,
        borderBottomRightRadius:28
    },
    box: {
        shadowColor: 'rgba(107, 134, 179, 0.25)',
        shadowOffset: {width: 6, height: 0},
        shadowRadius: 24,
        borderWidth: 1,
        borderStyle: "solid",
        borderColor: "#D7DDEA",
        borderTopLeftRadius:28,
        borderTopRightRadius:28,
        borderBottomLeftRadius:28,
        borderBottomRightRadius:28,
        flexDirection:"row",
        justifyContents:"center",
        height:100,
        alignItems:"center",
        paddingLeft:"3%",
        paddingRight:"3%",
        marginTop:30
    },
    boxIconCover: {
        width:64,
        height:64,
        borderTopLeftRadius:20,
        borderTopRightRadius:20,
        borderBottomLeftRadius:20,
        borderBottomRightRadius:20,
        backgroundColor:"#DCEDF9",
        justifyContent:"center",
        alignItems:"center",
        marginRight:16
    },
    boxIcon: {
        tintColor:"#1C6BA4",
        width:26,
        height:26
    },
    boxHeading: {
        fontSize:18,
        fontWeight:"700"
    },
    boxText: {
        fontSize:14,
        marginTop:8
    },
    droidSafeArea: {
        flex: 1,
        paddingTop: Platform.OS === 'android' ? 25 : 0
    }
})

export default NotificationScreen;