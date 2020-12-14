import React, { useEffect } from 'react';
import { Image, TouchableOpacity, StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-paper';
import AwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { Icon } from 'react-native-elements';
import { color } from 'react-native-reanimated';
import { IconButton, Colors } from 'react-native-paper';

export default function AccountScreen() {
    return (
        <>
            <View
                style={{
                    height: 50,
                    width: '100%',
                    alignItems: 'center'
                    // backgroundColor: '#fff'
                }}>
                <Text
                    style={{
                        flex: 1,
                        justifyContent: 'space-evenly',
                        textAlign: 'center',
                        textAlignVertical: 'center',
                        fontSize: 25,
                        width: '50%',
                        marginTop: 10
                    }}>
                    Profile
                </Text>
            </View>
            <View style={{ alignItems: 'center', width: '100%' }}>
                <Image
                    source={require('../images/profile3.png')}
                    style={{ width: '50%', height: 250 }}
                />
            </View>
            <View style={{ alignItems: 'center', width: '100%', height: 40 }}>
                <Text
                    style={{
                        textAlignVertical: 'center',
                        height: '100%',
                        fontSize: 28,
                        fontWeight: 'bold'
                    }}>
                    Tom Hardy
                </Text>
            </View>
            <View>
                <View
                    style={{
                        width: '50%',
                        marginBottom: 20,
                        marginTop: 20,
                        borderWidth: 1,
                        borderRadius: 10
                    }}>
                    <Button
                        labelStyle={{
                            fontWeight: 'bold',
                            fontSize: 18,
                            color: 'black'
                        }}
                        contentStyle={{ flexDirection: 'row-reverse' }}
                        // mode="contained"
                        icon="telegram"
                        onPress={() => console.log('Pressed')}>
                        Activities
                    </Button>
                </View>
                <View
                    style={{
                        width: '50%',
                        marginBottom: 20,
                        borderWidth: 1,
                        borderRadius: 10
                    }}>
                    <Button
                        labelStyle={{
                            fontWeight: 'bold',
                            fontSize: 18,
                            color: 'black'
                        }}
                        contentStyle={{ flexDirection: 'row-reverse' }}
                        // mode="contained"
                        icon="telegram"
                        onPress={() => console.log('Pressed')}>
                        Wish List
                    </Button>
                </View>
                <View
                    style={{ width: '50%', borderWidth: 1, borderRadius: 10 }}>
                    <Button
                        // style={{ width: '100%' }}
                        labelStyle={{
                            fontWeight: 'bold',
                            fontSize: 18,
                            color: 'black'
                        }}
                        contentStyle={{
                            width: '100%',

                            flexDirection: 'row-reverse'
                            // backgroundColor: 'red'
                        }}
                        // mode="contained"
                        icon="telegram"
                        onPress={() => console.log('Pressed')}>
                        Daily Needs
                    </Button>
                </View>

                <View
                    style={{
                        alignItems: 'center',
                        marginTop: 30,
                        width: '100%'
                    }}>
                    <Button
                        labelStyle={{
                            fontWeight: 'bold',
                            fontSize: 18,
                            color: 'black'
                        }}
                        contentStyle={{
                            width: '100%',
                            // color: 'black',
                            borderWidth: 1,
                            borderRadius: 10
                        }}
                        onPress={() => console.log('Pressed')}>
                        Account
                    </Button>
                </View>
            </View>
            <View
                style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0
                }}>
                <IconButton
                    icon="setting"
                    color={Colors.red500}
                    size={30}
                    onPress={() => console.log('Pressed')}
                />
            </View>
            <View
                style={{
                    position: 'absolute',
                    bottom: 0,
                    right: 0
                }}>
                <IconButton
                    icon="adads"
                    color={Colors.red500}
                    size={30}
                    onPress={() => console.log('Pressed')}
                />
            </View>
        </>
    );
}
