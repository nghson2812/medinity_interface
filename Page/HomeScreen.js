import React from "react";
import {Button, Image, Platform, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";
import userAvatar from "../materials/user_avatar.jpeg";
import searchIcon from "../materials/search_icon.png";
import optionIcon from "../materials/filter_icon.png";
import doctor from "../materials/doctor.png";
import symptomChecker from "../materials/colored_symptom_checker.png";

const HomeScreen = ({navigation}) => {
        return (
                <SafeAreaView style={[style.droidSafeArea, {backgroundColor:"white", height:"100%"}]}>
                    <View style={{marginLeft:"5%", marginRight:"5%"}}>
                        <View style={{flexDirection:"row", marginTop:"5%", justifyContent:"space-between"}}>
                            <View>
                                <Text style={{fontSize:16, fontWeight:"600"}}>Hello!</Text>
                                <Text style={{fontSize:27, fontWeight:"700", marginTop:7}}>Shahin Alam</Text>
                            </View>
                            <View>
                                <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
                                    <Image style={{
                                        borderTopLeftRadius:18,
                                        borderTopRightRadius:18,
                                        borderBottomLeftRadius:18,
                                        borderBottomRightRadius:18,
                                        height:50, width:50, overflow:"hidden"}} source={userAvatar}></Image>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={{
                            height:70,
                            marginTop:24,
                            borderTopLeftRadius:18,
                            borderTopRightRadius:18,
                            borderBottomLeftRadius:18,
                            borderBottomRightRadius:18,
                            backgroundColor:"#EEF6FC",
                            flexDirection:"row",
                            alignItems:"center",
                            justifyContent:"space-between"}}>
                            <View style={{flexDirection:"row"}}>
                                <Image source={searchIcon} style={{marginRight:10, marginLeft:15, height:24, width:24}}/>
                                <TextInput placeholder="Search medical..." placeholderTextColor="#8AA0BC"/>
                            </View>
                            <TouchableOpacity style={{marginRight:18}}>
                                <Image source={optionIcon} style={{height:24, width:24}}/>
                            </TouchableOpacity>
                        </View>
                        <View style={{marginTop:23}}>
                            <Text style={{fontSize:17, fontWeight:"700"}}>Services</Text>
                            <TouchableOpacity style={[style.box]}>
                                <View style={{width:"50%", marginLeft:"10%", justifyContent:"center"}}>
                                    <Text style={{fontSize:20, fontWeight:"600"}}>Find the nearest Medical Service Providers</Text>
                                    <Text style={{fontSize:11, marginTop:10}}>Pharmacy, Hospital, Clinic,...</Text>
                                </View>
                                <View>
                                    <Image source={doctor} style={{position:"absolute", bottom:0, width:150, height:150}}/>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View style={{marginTop:40}}>
                            <Text style={{fontSize:17, fontWeight:"700"}}>Symptom Checker</Text>
                            <TouchableOpacity style={[style.box, {backgroundColor: "#FAF0DB"}]}>
                                <View style={{width:"50%", marginLeft:"10%", justifyContent:"center"}}>
                                    <Text style={{fontSize:20, fontWeight:"600"}}>Let's check your health condition today</Text>
                                    <Text style={{fontSize:11, marginTop:10}}>Provide your current status to analyze your health</Text>
                                </View>
                                <View>
                                    <Image source={symptomChecker} style={{position:"absolute", bottom:0, width:140, height:140}}/>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                </SafeAreaView>
        )
}

const style = StyleSheet.create({
    box: {
        flexDirection:"row",
        marginTop:30,
        backgroundColor:"#DCEDF9",
        borderTopLeftRadius:18,
        borderTopRightRadius:18,
        borderBottomLeftRadius:18,
        borderBottomRightRadius:18,
        height:170
    },
    smallBoxTitle: {
        fontSize:14,
        fontWeight:"400",
        marginTop:15
    },
    droidSafeArea: {
        flex: 1,
        paddingTop: Platform.OS === 'android' ? 25 : 0
    }
})

export default HomeScreen;