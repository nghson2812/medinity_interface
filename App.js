import 'react-native-gesture-handler';

import HomeScreen from "./Page/HomeScreen";
import ScheduleScreen from "./Page/ScheduleScreen";
import ReportScreen from "./Page/ReportScreen";
import NotificationScreen from "./Page/NotificationScreen";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import AppIntroSlider from "react-native-app-intro-slider";

const Tab = createBottomTabNavigator();
import { createStackNavigator } from '@react-navigation/stack';
import ProfileScreen from "./Page/ProfileScreen";
import {NavigationContainer} from "@react-navigation/native";
import {Image, Text, View} from "react-native";
import {useState} from "react";
import SplashScreen from "./Page/SplashScreen";

const Stack = createStackNavigator();
const HomeScreenStack = () => {
  return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={HomeScreen} options={({route}) => ({
                tabBarIcon: ({ focused }) => {
                    return (
                        <View>
                            <Image
                                source={require("./materials/home_icon.png")}
                                resizeMode="contain"
                                style={{ width: 25 }}
                            />
                        </View>
                    );
                }, headerShown:false})}/>
            <Tab.Screen name="Schedule" component={ScheduleScreen} options={({route}) => ({
                tabBarIcon: ({ focused }) => {
                    return (
                        <View>
                            <Image
                                source={require("./materials/calendar_icon.png")}
                                resizeMode="contain"
                                style={{ width: 25 }}
                            />
                        </View>
                    );
                }, headerShown:false})}/>
            <Tab.Screen name="Report" component={ReportScreen} options={({route}) => ({
                tabBarIcon: ({ focused }) => {
                    return (
                        <View>
                            <Image
                                source={require("./materials/document_icon.png")}
                                resizeMode="contain"
                                style={{ width: 25 }}
                            />
                        </View>
                    );
                }, headerShown:false})}/>
            <Tab.Screen name="Notification" component={NotificationScreen} options={({route}) => ({
                tabBarIcon: ({ focused, pressed }) => {
                    return (
                        <View>
                            <Image
                                source={require("./materials/notifications_icon.png")}
                                resizeMode="contain"
                                style={{ width: 25, tintColor: pressed ? 'white' : 'black' }}
                            />
                        </View>
                    );
                }, headerShown:false})}/>
        </Tab.Navigator>
  )
}


export default function App() {
  return (
      <NavigationContainer>
          <Stack.Navigator intialRouteName="SplashScreen">
              <Stack.Screen name="SplashScreen" component={SplashScreen} options={{headerShown:false}}/>
              <Stack.Screen name="Home" component={HomeScreenStack} options={{headerShown:false}}/>
              <Stack.Screen name="Profile" component={ProfileScreen} options={{headerShown:false}}/>
          </Stack.Navigator>
      </NavigationContainer>
  )
}