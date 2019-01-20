import React, {Component} from 'react';
import {transparentHeaderStyle} from '../styles/navigation';
import {LoggedInTabNavigator} from '../navigators/LoggedInTabNavigator';
import {PropTypes} from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome';
import {View, Text, ScrollView, StyleSheet, KeyboardAvoidingView,} from 'react-native';
import colors from '../styles/colors';
import InputField from '../components/form/InputField';
import NextArrowButton from '../components/buttons/NextArrowButton';
import Notification from '../components/Notification';
import Loader from '../components/Loader';


export default class Login extends Component{
    static navigationOptions = () => ({
        headerLeft : null,
        headerStyle: transparentHeaderStyle,
        gesturesEnabled: false,
    });

    constructor(props){
        super(props);
        this.state = {
            formValid: true,
            validEmail: false,
            emailAddress: '',
            password: '',
            validPassword: false,
            loadingVisible: false,
        }
        this.handleCloseNotification = this.handleCloseNotification.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handleNextButton = this.handleNextButton.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.toggleNextButtonState = this.toggleNextButtonState.bind(this);
    }

    handleNextButton(){
        this.setState({ladingVisible: true});
        const { navigate } = this.props.navigation;

        setTimeout(()=>{
            const {emailAddress, password} = this.state;
            if(this.props.logIn(emailaddress, password)) {
                this.setState({formValid: true, loadingVisible: false});
                //navigate('TurnOnNotifications');
            }
            else {
                this.setState({formValid: false, loadingVisible: false});
            }
        }, 2000);
    }

    handleEmailChange(email){
        const emailCheckRegex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
        this.setState({emailAddress: email});

        if(!this.state.validEmail){
            if(emailCheckRegex.test(email)){
                this.setState({validEmail: true});
            }
        }
        else{
            if(!emailCheckRegex.test(email)){
                this.setState({validEmail: false});
            }
        }
    }
    handlePasswordChange(password){
        this.setState({password});
        if(!this.state.validPassword){
            if(password.length > 4){
                this.setState({validPassword: true});
            }
        }
        else if (password <= 4){
            this.setState({validPassword: false});
        }
    }

    toggleNextButtonState(){
        const {validEmail, validPassword} = this.state;
        if (validEmail && validPassword){
            return false;
        }
        return true;
    }

    render(){
        const {formValid, loadingVisible, validEmail, validPassword } = this.state;
        const showNotification = formValid ? false : true;
        const background = formValid ? colors.green01 : colors.darkOrange;
        const notificationMarginTop = showNotification ? 10: 0;
        return(
            <LoggedInTabNavigator/>
            <KeyboardAvoidingView 
                style={[{backgroundColor: background}, styles.wrapper]}
                behavior="padding">
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
                    <NextArrowButton
                        handleNextButton={this.handleNextButton}
                        disabled={this.toggleNextButtonState()}
                    >

                    </NextArrowButton>
                    <View style={[styles.notificationWrapper, {marginTop: notificationMarginTop}]}>
                        <Notification
                            showNotification = {showNotification}
                            handleCloseNotification = {this.handCloseNotification}
                            type="Error"
                            firstLine = "Those credentials don't look right."
                            secondLine = "Please try again."
                        />
                    </View>
                </View>
                <Loader
                    modalVisible = {loadingVisible}
                    animationType = "fade"
                />
            </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
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

