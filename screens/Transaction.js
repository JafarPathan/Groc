import * as React from 'react';
import { Image, TouchableOpacity, StyleSheet, Text, View } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { RadioButton } from 'react-native-paper';
import { TextInput } from 'react-native-paper';
import { Button } from 'react-native-paper';
import DatePicker from 'react-native-datepicker';

export default function TransactionScreen() {
    const [value, setValue] = React.useState('first');
    const [text, setText] = React.useState('');
    const [textcvv, setTextCvv] = React.useState('');
    const [selectedValue, setSelectedValue] = React.useState('Card Type');
    const [date, setDateValue] = React.useState('2016-05-15');

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
                        borderWidth: 1,
                        borderRadius: 10,
                        marginTop: 10
                    }}>
                    Transaction
                </Text>
            </View>
            <View
                style={{
                    height: '100%',
                    // backgroundColor: '#fff',
                    marginTop: 40
                }}>
                <RadioButton.Group
                    onValueChange={(newValue) => setValue(newValue)}
                    value={value}>
                    <View style={{ flexDirection: 'row' }}>
                        <RadioButton value="card" />
                        <Text
                            style={{
                                textAlignVertical: 'center'
                            }}>
                            Card
                        </Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <RadioButton value="paytm/gpay" />
                        <Text
                            style={{
                                textAlignVertical: 'center'
                            }}>
                            Paytm/G-pay
                        </Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <RadioButton value="gwallet" />
                        <Text
                            style={{
                                textAlignVertical: 'center'
                            }}>
                            G-Wallet
                        </Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <RadioButton value="cash" />
                        <Text
                            style={{
                                textAlignVertical: 'center'
                            }}>
                            Cash/Delivery
                        </Text>
                    </View>
                </RadioButton.Group>
                <View
                    style={{
                        width: '100%',
                        alignItems: 'center'
                    }}>
                    <TextInput
                        style={{
                            width: '80%'
                        }}
                        label="Card No."
                        mode="outlined"
                        value={text}
                        onChangeText={(text) => setText(text)}
                    />
                </View>
                <View
                    style={{
                        width: '100%',
                        display: 'flex'
                    }}>
                    <Picker
                        selectedValue={selectedValue}
                        style={{ height: 50, width: 150 }}
                        onValueChange={(itemValue, itemIndex) =>
                            setSelectedValue(itemValue)
                        }>
                        <Picker.Item label="Card Type" value="Card Type" />
                        <Picker.Item label="Debit Card" value="Debit Card" />
                        <Picker.Item
                            label="Creadit Card"
                            value="Creadit Card"
                        />
                    </Picker>
                    <TextInput
                        style={{
                            width: '60%',
                            flexDirection: 'row',
                            justifyContent: 'flex-end',
                            height: 30
                        }}
                        label="cvv"
                        mode="outlined"
                        value={textcvv}
                        onChangeText={(text) => setTextCvv(text)}
                    />
                </View>
                <View
                    style={{
                        // backgroundColor: 'red'
                        // alignItems: 'center',
                        marginTop: 10
                    }}>
                    <DatePicker
                        style={{
                            width: 200
                        }}
                        date={date}
                        mode="date"
                        placeholder="select date"
                        format="YYYY-MM-DD"
                        minDate="2016-05-01"
                        maxDate="2020-12-31"
                        confirmBtnText="Confirm"
                        cancelBtnText="Cancel"
                        customStyles={{
                            dateIcon: {
                                position: 'absolute',
                                left: 0,
                                top: 4,
                                marginLeft: 0
                            },
                            dateInput: {
                                marginLeft: 36
                            }
                            // ... You can check the source to find the other keys.
                        }}
                        onDateChange={(date) => setDateValue(date)}
                    />
                </View>
                <View
                    style={{
                        // backgroundColor: 'red'
                        alignItems: 'center',
                        marginTop: 50
                    }}>
                    <TextInput
                        style={{
                            width: '80%',
                            height: 40
                        }}
                        underlineColorAndroid="transparent"
                        label="Enter OTP"
                        mode="outlined"
                        value={text}
                        onChangeText={(text) => setText(text)}
                    />
                </View>
                <View
                    style={{
                        flexDirection: 'row',
                        width: '100%',
                        height: 40,
                        marginTop: 40
                    }}>
                    <View
                        style={{
                            width: '50%'
                        }}>
                        <Text
                            style={{
                                height: '100%',
                                textAlignVertical: 'center'
                            }}>
                            Your Transaction is loading !
                        </Text>
                    </View>
                    <View
                        style={{
                            width: '50%'
                        }}>
                        <Button
                            style={{}}
                            color="grey"
                            mode="contained"
                            onPress={() => console.log('Pressed')}>
                            Buy
                        </Button>
                    </View>
                </View>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    }
});
