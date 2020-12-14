import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button, Title, Paragraph, Card, TextInput } from 'react-native-paper';
import { firestore, auth } from '../firebase';

class LoginScreen extends Component {
    state = {
        email: '',
        password: ''
    };

    signinhandler = (event) => {
        event.preventDefault();
        auth.signInWithEmailAndPassword(this.state.email, this.state.password)
            .then((res) => {
                if (res.user.uid) {
                    let userData;
                    firestore
                        .collection('user')
                        .doc(res.user.uid)
                        .get()
                        .then((data) => {
                            userData = data.data();
                            this.props.navigation.navigate('MentorDash');
                        });
                }
            })
            .catch((error) => {
                // Handle Errors here.
                if (error.code == 'auth/user-not-found')
                    this.setState({ emailError: error.message });
                if (error.code === 'auth/wrong-password')
                    this.setState({ passError: error.message });
            });
    };

    render() {
        return (
            <View style={styles.screen}>
                <Card>
                    <Card.Title title="Welcome" />
                    <Card.Content>
                        <TextInput
                            theme={{
                                colors: {
                                    primary: '#02B8BF',
                                    underlineColor: 'transparent'
                                }
                            }}
                            mode="outlined"
                            label="Email"
                            value={this.state.email}
                            onChangeText={(value) =>
                                this.setState({ email: value })
                            }
                        />
                        <TextInput
                            theme={{
                                colors: {
                                    primary: '#02B8BF',
                                    underlineColor: 'transparent'
                                }
                            }}
                            mode="outlined"
                            label="Password"
                            Type="outlined"
                            secureTextEntry={true}
                            value={this.state.password}
                            onChangeText={(value) =>
                                this.setState({ password: value })
                            }
                        />
                    </Card.Content>
                    <Card.Actions>
                        <Button
                            style={styles.btn}
                            mode="contained"
                            dark={true}
                            onPress={this.signinhandler}
                            title="Submit"
                            color="#009387">
                            Submit
                        </Button>
                    </Card.Actions>
                </Card>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    screen: {
        flex: 2,
        justifyContent: 'center'
    },
    btn: {
        flex: 1,
        justifyContent: 'space-between',
        marginTop: 10
    }
});

export default LoginScreen;
