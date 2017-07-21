import React, { Component } from 'react';
import {
  View, Image, TextInput, Text, ActivityIndicator, TouchableOpacity, Keyboard
  }
  from 'react-native';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged, loginUser } from '../actions';


class EntryLogIn extends Component {

  onEmailChange(text) {
    this.props.emailChanged(text);
  }

  onPasswordChange(text) {
    this.props.passwordChanged(text);
  }

  onButtonPress() {
    const { email, password } = this.props;
    Keyboard.dismiss();
    this.props.loginUser({ email, password });
  }

  Spinner = ({ size }) => {
    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <ActivityIndicator size={size || 'large'} />
      </View>
    );
  };

  renderButton() {
    const Spinner = this.Spinner;
    if (this.props.loading) {
      return <Spinner size="large" />;
    }

    return (
      <TouchableOpacity onPress={this.onButtonPress.bind(this)} style={styles.buttonStyle}>
        <Text style={styles.textStyle}>
          LOG IN
        </Text>
      </TouchableOpacity>

    );
  }

  render() {
    return (
    <View style={{ flex: 1 }}>
      <View
        style={styles.userIdStyle}
      >
        <View
          style={{
            flex: 0.15,
            paddingLeft: 20,
            paddingRight: 20
          }}
        >
          <Image
            style={{
              height: 20,
              width: 20,
            }}
            source={require('../images/LogIn/UserIcon.png')}
          />
        </View>

        <View
          style={{
            flex: 0.85
          }}
        >

          <TextInput
            secureTextEntry={false}
            placeholder='USERNAME'
            autoCorrect={false}
            style={{
              flex: 1,
              fontSize: 10,
              fontFamily: 'roboto',
              color: '#a0a0a0',
            }}
            onChangeText={this.onEmailChange.bind(this)}
            value={this.props.email}
          />

        </View>

      </View>

      <View
        style={styles.passwordStyle}
      >
        <View
          style={{
            flex: 0.15,
            paddingLeft: 20,
            paddingRight: 20
          }}
        >
          <Image
            style={{
            height: 20,
            width: 20
          }}
          source={require('../images/LogIn/PasswordIcon.png')}
          />
        </View>

        <View
          style={{
          flex: 0.85
          }}
        >
          <TextInput
            secureTextEntry
            placeholder='PASSWORD'
            autoCorrect={false}
            style={{
              flex: 1,
              fontSize: 10,
              fontFamily: 'roboto',
              color: '#a0a0a0'
            }}
            onChangeText={this.onPasswordChange.bind(this)}
            value={this.props.password}
          />
        </View>

      </View>

      {this.renderButton()}

      <Text style={styles.errorTextStyle}>
            {this.props.error}
      </Text>


    </View>
    );
  }
}

const styles = {
  userIdStyle: {
    marginBottom: 12,
    backgroundColor: 'white',
    borderColor: 'white',
    borderBottomWidth: 2,
    borderTopWidth: 2,
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
    flex: 1
  },
  passwordStyle: {
    marginBottom: 25,
    backgroundColor: 'white',
    borderColor: 'white',
    borderBottomWidth: 2,
    borderTopWidth: 2,
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
    flex: 1
  },
  buttonStyle: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#045171',
  },
  textStyle: {
    alignSelf: 'center',
    fontFamily: 'roboto',
    fontSize: 14,
    color: '#ffffff',
  }
};

const mapStateToProps = ({ auth }) => {
  const { email, password, error, loading } = auth;

  return { email, password, error, loading };
};

export default connect(mapStateToProps, {
  emailChanged, passwordChanged, loginUser
})(EntryLogIn);
