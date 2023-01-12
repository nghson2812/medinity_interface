import {Image, Platform, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";
import React from "react";
import settingIcon from "../materials/settings_outline.png";
import compassIcon from "../materials/compass_outline.png";
import cardIcon from "../materials/card_outline.png";
import logOutIcon from "../materials/log_out_outline.png";

export default function ProfileScreen() {
    const info = [
        {
            name: "Shahin Alam",
            job: "UI Designer",
            avt: require("../materials/user_avatar.jpeg")
        }
    ]
    return (
        <SafeAreaView style={[style.droidSafeArea, {backgroundColor:"#1C6BA4", height:"100%"}]}>
            <View style={{marginLeft:"5%", marginRight:"5%", marginTop:"20%"}}>
                <View style={{flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
                    <Image style={[style.avt]} source={info[0]["avt"]} ></Image>
                    <Text style={[style.name]}>{info[0]["name"]}</Text>
                    <Text style={[style.job]}>{info[0]["job"]}</Text>
                </View>
                <TouchableOpacity style={[style.button]}>
                    <View style={{flexDirection:"row"}}>
                        <Image source={settingIcon} style={[style.icon]}/>
                        <Text style={[style.buttonText]}>Account Settings</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={[style.button]}>
                    <View style={{flexDirection:"row"}}>
                        <Image source={compassIcon} style={[style.icon]}/>
                        <Text style={[style.buttonText]}>Privacy Policy</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={[style.button]}>
                    <View style={{flexDirection:"row"}}>
                        <Image source={cardIcon} style={[style.icon]}/>
                        <Text style={[style.buttonText]}>Payment Settings</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={[style.button]}>
                    <View style={{flexDirection:"row"}}>
                        <Image source={cardIcon} style={[style.icon]}/>
                        <Text style={[style.buttonText]}>Payment Settings</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={{flexDirection:"row", justifyContent:"center", marginTop:76}}>
                    <Image source={logOutIcon} style={{tintColor:"#BECADA", height:24, width:24}}/>
                    <Text style={{
                        paddingLeft:17,
                        fontSize:17,
                        fontWeight:"600",
                        lineHeight:24,
                        color:"#BECADA"}}>Log out</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

const style = StyleSheet.create({
    avt: {
        borderTopLeftRadius:18,
        borderTopRightRadius:18,
        borderBottomLeftRadius:18,
        borderBottomRightRadius:18,
        height:77,
        width:77
    },
    name: {
        marginTop:20,
        fontSize:24,
        fontWeight:"700",
        color:"white"
    },
    job: {
        marginTop:20,
        marginBottom: 39,
        fontSize:16,
        color:"white"
    },
    button: {
        height:70,
        marginTop:24,
        borderTopLeftRadius:18,
        borderTopRightRadius:18,
        borderBottomLeftRadius:18,
        borderBottomRightRadius:18,
        backgroundColor:"#EEF6FC",
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between"
    },
    icon: {
        marginRight:18,
        marginLeft:15,
        height:24,
        width:24
    },
    buttonText: {
        fontSize:18,
        fontWeight:"700"
    },
    droidSafeArea: {
        flex: 1,
        paddingTop: Platform.OS === 'android' ? 25 : 0
    }
})