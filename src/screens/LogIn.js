import React, {Component} from 'react';
import {PropTypes} from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome';
import {View, Text, ScrollView, StyleSheet, KeyboardAvoidingView,} from 'react-native';
import colors from '../styles/colors';
import InputField from '../components/form/InputField';
import NextArrowButton from '../components/buttons/NextArrowButton';

export default class Login extends Component{

    handleEmailChange(){

    }
    handlePasswordChange(){

    }

    render(){
        return(
            <View style={styles.wrapper}>
                <View style={styles.scrollViewWrapper}>
                    <ScrollView style={styles.scrollView}>
                        <Text style={styles.loginHeader}>Login</Text>
                        <InputField
                            labelText= 'Email address'
                            labelTextSize= {14}
                            labelColor= {colors.white}
                            textColor= {colors.white}
                            borderBottomColor= {colors.white}
                            inputType= 'email'
                            customStyle= {{marginBottom: 30}}
                            onChangeText= {this.handleEmailChange}
                       />
                        <InputField
                            labelText='password'
                            labelTextSize={14}
                            labelColor={colors.white}
                            textColor={colors.white}
                            borderBottomColor={colors.white}
                            inputType='password'
                            customStyle={{ marginBottom: 30 }}
                            onChangeText={this.handlePasswordChange}
                        />
                    </ScrollView>
                    <NextArrowButton></NextArrowButton>
                </View>
            </View>
        );
    }
}

//const styles = StyleSheet.create({
    wrapper:{
        display: 'flex',
        flex: 1,
        backgroundColor: colors.green01
    },
    scrollViewWrapper:{
        marginTop: 70,
        flex:1
    },
    scrollView:{
        paddingLeft: 30,
        paddingRight: 30,
        paddingTop: 20,
        flex: 1
    },
    loginHeader:{
        fontSize: 34,
        color: colors.white,
        fontWeight: '300',
        marginBottom: 40,
    }
});

