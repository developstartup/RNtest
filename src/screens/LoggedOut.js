import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableHighlight
} from 'react-native';
import colors from '../styles/colors';
import RoundedButton from '../components/buttons/RoundedButton';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class LoggedOut extends Component<Props>{

    onFacebookPress(){
        alert('onFacebook');
    }
    onCreateAccountPress(){
        alert('onCreateAccountPress');
    }
    OnMoreOptionsPress(){
        alert('onMoreOptionsPress')
    }
    moveToLogin(){
        alert('m')
    }

    render(){
        return(
            <View style={styles.wrapper}>
                <View style={styles.welcomeWrapper}>
                    <Image 
                        source={require('../img/airbnb-logo.png')}
                        style={styles.logo} />
                    <Text style={styles.welcomeText}>Welcome to Airbnb</Text>
                    <RoundedButton
                        text="Continue with the facebook"
                        textColor={colors.green01}
                        background={colors.white}
                        icon={<Icon name = "facebook" size={20} style={styles.facebookBtnIcon}/>}
                        handleOnPress={this.onFacebookPress}
                    />
                    <RoundedButton
                        text="Login"
                        textColor={colors.white}
                        handleOnPress={this.moveToLogin}
                        icon={<Icon name="late" size={20} style={styles.LoginBtnIcon}/>}
                        >
                    </RoundedButton>
                    <RoundedButton
                        text="Create Account"
                        textColor={colors.white}
                        handleOnPress={this.onCreateAccountPress}
                    />
                    <TouchableHighlight
                        style={styles.OnMoreOptionsBtn}
                        onPress={this.OnMoreOptionsPress}
                        >
                        <Text
                            style={styles.moreOptionBtnText}>
                            More Option
                        </Text>
                    </TouchableHighlight>

                    <View style={styles.termsAndConditions}>
                        <Text style={styles.termsText}>By tapping Continue, Create Account or More</Text>
                        <Text style={styles.termsText}>options, </Text>
                        <Text style={styles.termsText}>I agree to Airbnb's </Text>
                        <TouchableHighlight style={styles.linkButton}>
                            <Text style={styles.termsText}>Terms of Service</Text>
                        </TouchableHighlight>
                        <Text style={styles.termsText}>, </Text>
                        <TouchableHighlight style={styles.linkButton}>
                            <Text style={styles.termsText}>Payments Terms of Service</Text>
                        </TouchableHighlight>
                        <Text style={styles.termsText}>, </Text>
                        <TouchableHighlight style={styles.linkButton}>
                            <Text style={styles.termsText}>Privacy Policy</Text>
                        </TouchableHighlight>
                        <Text style={styles.termsText}>, and </Text>
                        <TouchableHighlight style={styles.linkButton}>
                            <Text style={styles.termsText}>Nondiscrimination Policy</Text>
                        </TouchableHighlight>
                        <Text style={styles.termsText}>.</Text>
                    </View>
                    
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        display: 'flex',
        backgroundColor: colors.green01
    },
    logo:{
        width: 50,
        height: 50,
        marginTop: 5,
        marginBottom: 40
    },
    welcomeWrapper:{
        flex: 1,
        display: 'flex',
        marginTop: 30,
        padding: 20
    },
    welcomeText:{
        fontSize: 30,
        color: colors.white,
        fontWeight: '300',
        marginBottom: 40,
    },
    facebookBtnIcon:{
        color: colors.green01,
        position: 'relative',
        left: 20,
        zIndex: 8
    },
    LoginBtnIcon: {
        color: colors.white,
        position: 'relative',
        left: 20,
        zIndex: 8
    },
    moreOptionBtn:{
        marginTop: 10
    },
    moreOptionBtnText: {
        fontSize: 16,
        color: colors.white,
    },
    termsAndConditions: {
        flexWrap: 'wrap',
        alignItems: 'flex-start',
        flexDirection: 'row',
        marginTop: 30,
    },
    termsText: {
        color: colors.white,
        fontSize: 13,
        fontWeight: '600',
    },
    linkButton: {
        borderBottomWidth: 1,
        borderBottomColor: colors.white,
    }
})