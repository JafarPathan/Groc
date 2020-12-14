import React, { useEffect } from 'react';
import {
    Image,
    TouchableOpacity,
    Button,
    StyleSheet,
    Text,
    View
} from 'react-native';
import AwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { Icon } from 'react-native-elements';

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
            <View style={{ backgroundColor: 'red' }}>
                <Image
                    source={require('../images/profile3.png')}
                    style={{ width: 250, height: 250 }}
                />
            </View>
        </>
    );
}
