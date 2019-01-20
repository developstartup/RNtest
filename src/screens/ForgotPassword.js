import React, {Component} from 'react';
import {
    View,
    Text,
    KeyboardAvoidingView,
    StyleSheet,
    ScrollView,
} from 'react-native';
import colors from '../styles/colors';
import InputField from '../components/form/InputField';
import Notification from '../components/buttons/NextArrowButton';
import Loader from '../components/Loader';

export default class ForgotPassword extends Components {
    render(){
        const background = formValid ? colors.green01 : colors.darkOrange;
        return (
            <KeyboardAvoidingView 
                style={[{backgroundColor: background}, styles.wrapper]}
                behavior="padding"
            >
                <View style={styles.scrollViewWrapper}>
                    <ScrollView style={styles.scrollView}>
                        <Text>Forgot your password</Text>
                        <Text>Enter your email to find your account</Text>
                        <InputField/>
                    </ScrollView>
                </View>

            </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
    wrapper: {
        display: 'flex',
        flex: 1,
    },
    scrollViewWrapper: {
        marginTop: 70,
        flex: 1,
    },
    scrollView: {
        paddingLeft: 30,
        paddingRight: 30,
        paddingTop: 20,
        flex: 1,
    },
});