import React from 'react';
import {View, Text, SafeAreaView, Platform} from 'react-native';
import {platforms} from "react-native/react-native.config";


class SplashScreen extends React.Component {
    performTimeConsumingTask = async() => {
        return new Promise((resolve) =>
            setTimeout(
                () => { resolve('result') },
                3000
            )
        )
    }
    async componentDidMount() {
        // Preload data from an external API
        // Preload data using AsyncStorage
        const data = await this.performTimeConsumingTask();
        if (data !== null) {
            this.props.navigation.navigate('Home');
        }
    }
    render() {
        return (
            <SafeAreaView style={[styles.droidSafeArea, {height:"100%", backgroundColor:"white"}]}>
                <View style={styles.viewStyles}>
                    <Text style={styles.textStyles}>Welcome to</Text>
                    <Text style={styles.headingStyles}>Medinity</Text>
                </View>
                <View style={[styles.bottomText]}>
                    <Text>@A product by Medinity team</Text>
                </View>
            </SafeAreaView>
        );
    }
}
const styles = {
    viewStyles: {
        flexDirection:"column",
        alignItems: 'center',
        justifyContent: 'center',
        height:"100%"
    },
    textStyles: {
        color: 'black',
        fontSize: 24,
        fontWeight: '600'
    },
    headingStyles: {
        color: 'black',
        fontSize: 40,
        fontWeight: 'bold'
    },
    bottomText: {
        flexDirection:"column",
        justifyContent: "flex-end",
        alignItems: "center"
    },
    droidSafeArea: {
        flex: 1,
        paddingTop: Platform.OS === 'android' ? 25 : 0
    }
}
export default SplashScreen;