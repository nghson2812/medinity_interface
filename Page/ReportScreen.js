import React, {Component} from "react";
import {StyleSheet, Image, SafeAreaView, Text, View, TouchableOpacity} from "react-native";
import ProfileScreen from "./ProfileScreen";
import settingIcon from "../materials/more_icon.png";
import heartRate from "../materials/heart_rate.png";
import humanIcon from "../materials/accessibility_outline.png";
import bloodIcon from "../materials/blood_outline.png";
import documentIcon from "../materials/document_text_outline.png";

const ReportScreen = ({navigation}) => {
    const info = [
        {
            heartRate: "96",
            blood: "A+",
            weight: "80",
            document: "8 Files"
        }
    ]
    return (
        <SafeAreaView style={{backgroundColor:"white", height:"100%"}}>
            <View style={{marginLeft:"5%", marginRight:"5%"}}>
                <View style={{flexDirection:"row", marginTop:"5%", justifyContent:"space-between"}}>
                    <Text style={{fontSize:27, fontWeight:"500", marginTop:7}}>Report</Text>
                    <Image style={{height:30, width:30}} source={settingIcon}></Image>
                </View>
                <View style={style.infoBox}>
                    <View style={{width:"50%", marginLeft:"10%", justifyContent:"center"}}>
                        <Text style={{fontSize:16, fontWeight:"400"}}>Heart Rate</Text>
                        <Text style={{fontSize:20, marginTop:10}}>
                            <Text style={{fontSize:50, fontWeight:"400"}}>{info[0]["heartRate"]}</Text><Text>{' '}</Text>bpm
                        </Text>
                    </View>
                    <View style={{justifyContent:"center"}}>
                        <Image source={heartRate} style={{tintColor:"#1C6BA4", width:150, height:150}}/>
                    </View>
                </View>
                <View style={{flexDirection:"row", justifyContent:"space-between"}}>
                    <View style={[style.smallInfoBox, {backgroundColor: "#F5E1E9"}]}>
                        <View style={{width:"50%", marginLeft:"10%", justifyContent:"center"}}>
                            <Image source={bloodIcon} style={{tintColor:"#9D4C6C", width:32, height:32}}/>
                            <Text style={style.smallBoxTitle}>Blood Group</Text>
                            <Text style={{marginTop:10, fontSize:28, fontWeight:"400"}}>
                                {info[0]["blood"]}
                            </Text>
                        </View>
                        <View style={{width:"30%", flexDirection:"row", justifyContent:"flex-end"}}>
                            <Image source={settingIcon} style={{width:16, height:16}}/>
                        </View>
                    </View>
                    <View style={[style.smallInfoBox, {backgroundColor: "#FAF0DB"}]}>
                        <View style={{width:"50%", marginLeft:"10%", justifyContent:"center"}}>
                            <Image source={humanIcon} style={{tintColor:"#E09F1F", width:32, height:32}}/>
                            <Text style={style.smallBoxTitle}>Weight</Text>
                            <Text style={{fontSize:14, marginTop:10}}>
                                <Text  style={{fontSize:28, fontWeight:"400"}} >{info[0]["weight"]}</Text><Text>{' '}</Text>kg
                            </Text>
                        </View>
                        <View style={{width:"30%", flexDirection:"row", justifyContent:"flex-end"}}>
                            <Image source={settingIcon} style={{width:16, height:16}}/>
                        </View>
                    </View>
                </View>
                <Text style={{
                    marginTop:27,
                    fontSize:17,
                    fontWeight:"700"}}>Latest Report</Text>
                <TouchableOpacity style={[style.box]}>
                    <View style={[style.boxIconCover]}>
                        <Image style={[style.boxIcon]} source={documentIcon} />
                    </View>
                    <View>
                        <Text style={[style.boxHeading]}>General Health</Text>
                        <Text style={[style.boxText]}>{info[0]["document"]}</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={[style.box]}>
                    <View style={[style.boxIconCover]}>
                        <Image style={[style.boxIcon]} source={documentIcon} />
                    </View>
                    <View>
                        <Text style={[style.boxHeading]}>General Health</Text>
                        <Text style={[style.boxText]}>{info[0]["document"]}</Text>
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
        borderRadius:18,
        height:170
    },
    smallInfoBox: {
        flexDirection:"row",
        marginTop:30,
        padding: 10,
        backgroundColor:"#DCEDF9",
        borderRadius:18,
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
        borderRadius:28
    },
    box: {
        shadowColor: 'rgba(107, 134, 179, 0.25)',
        shadowOffset: {width: 6, height: 0},
        shadowRadius: 24,
        borderWidth: 1,
        borderStyle: "solid",
        borderColor: "#D7DDEA",
        borderRadius:28,
        flexDirection:"row",
        justifyContents:"center",
        height:93,
        alignItems:"center",
        paddingLeft:"3%",
        paddingRight:"3%",
        marginTop:16
    },
    boxIconCover: {
        width:64,
        height:64,
        borderRadius:20,
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
    }
})

export default ReportScreen;