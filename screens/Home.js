import React, { useEffect } from 'react';
import { Image, TouchableOpacity, StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import RS from 'react-native-vector-icons/FontAwesome';
import { IconButton, Colors } from 'react-native-paper';

export default function HomeScreen() {
    return (
        <View
            style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between'
            }}>
            <View
                style={{
                    width: '13%',
                    flexDirection: 'column',
                    justifyContent: 'center'
                }}>
                <View
                    style={{
                        width: '100%',
                        height: 50,
                        borderRightWidth: 2,
                        borderTopWidth: 2
                    }}>
                    <Icon
                        name="user"
                        size={30}
                        color="black"
                        style={{
                            margin: 10
                        }}
                    />
                </View>
                <View
                    style={{
                        width: '100%',
                        height: 50,
                        borderRightWidth: 2
                    }}>
                    <Icon
                        name="shopping-cart"
                        size={30}
                        color="black"
                        style={{
                            margin: 10
                        }}
                    />
                </View>
                <View
                    style={{
                        width: '100%',
                        height: 50,
                        borderRightWidth: 2
                    }}>
                    <Icon
                        name="heart"
                        size={30}
                        color="black"
                        style={{
                            margin: 10
                        }}
                    />
                </View>
                <View
                    style={{
                        width: '100%',
                        height: 50,
                        borderRightWidth: 2
                    }}>
                    <Icon
                        name="file-text"
                        size={30}
                        color="black"
                        style={{
                            margin: 10
                        }}
                    />
                </View>
                <View
                    style={{
                        width: '100%',
                        height: 70,
                        borderRightWidth: 2,
                        borderBottomWidth: 2
                    }}>
                    <RS
                        name="inr"
                        size={30}
                        color="black"
                        style={{
                            margin: 15
                        }}
                    />
                </View>
            </View>
            <View
                style={{
                    width: '40%',
                    justifyContent: 'space-evenly'
                }}>
                <View
                    style={{
                        height: 150,
                        // borderWidth: 1,
                        alignItems: 'center',
                        marginBottom: 20
                    }}>
                    <Image
                        source={require('../images/chilli-powder.png')}
                        style={{ width: '50%', height: '80%' }}
                    />
                    <View
                        style={{
                            height: '100%',
                            position: 'absolute',
                            right: 0,
                            alignItems: 'center',
                            justifyContent: 'flex-end'
                        }}>
                        <Icon
                            name="shopping-cart"
                            size={30}
                            color="black"
                            style={{
                                margin: 1
                            }}
                        />
                    </View>
                    <View
                        style={{
                            position: 'absolute',
                            bottom: 5,
                            alignItems: 'center'
                        }}>
                        <View
                            style={{
                                height: 20,
                                display: 'flex',
                                flexDirection: 'row',
                                justifyContent: 'center'
                            }}>
                            <Text
                                style={{
                                    marginRight: 10,
                                    fontSize: 20,
                                    fontWeight: 'bold',
                                    textAlignVertical: 'center'
                                }}>
                                45
                            </Text>
                            <RS name="inr" size={20} color="black" />
                        </View>
                    </View>
                    <View
                        style={{
                            position: 'absolute',
                            bottom: -17,
                            alignItems: 'center',
                            width: '80%'
                        }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 18 }}>
                            Chilli Powder
                        </Text>
                    </View>
                </View>
                <View
                    style={{
                        height: 150,
                        // borderWidth: 1,
                        alignItems: 'center',
                        marginBottom: 20
                    }}>
                    <Image
                        source={require('../images/Coriander-Powder.png')}
                        style={{ width: '50%', height: '80%' }}
                    />
                    <View
                        style={{
                            height: '100%',
                            position: 'absolute',
                            right: 0,
                            alignItems: 'center',
                            justifyContent: 'flex-end'
                        }}>
                        <Icon
                            name="shopping-cart"
                            size={30}
                            color="black"
                            style={{
                                margin: 1
                            }}
                        />
                    </View>
                    <View
                        style={{
                            position: 'absolute',
                            bottom: 5,
                            alignItems: 'center'
                        }}>
                        <View
                            style={{
                                height: 20,
                                display: 'flex',
                                flexDirection: 'row',
                                justifyContent: 'center'
                            }}>
                            <Text
                                style={{
                                    marginRight: 10,
                                    fontSize: 20,
                                    fontWeight: 'bold',
                                    textAlignVertical: 'center'
                                }}>
                                50
                            </Text>
                            <RS name="inr" size={20} color="black" />
                        </View>
                    </View>
                    <View
                        style={{
                            position: 'absolute',
                            bottom: -17,
                            alignItems: 'center',
                            width: '80%'
                        }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 18 }}>
                            Coriander Powder
                        </Text>
                    </View>
                </View>
                <View
                    style={{
                        height: 150,
                        // borderWidth: 1,
                        alignItems: 'center',
                        marginBottom: 20
                    }}>
                    <Image
                        source={require('../images/turmeric.png')}
                        style={{ width: '50%', height: '80%' }}
                    />
                    <View
                        style={{
                            height: '100%',
                            position: 'absolute',
                            right: 0,
                            alignItems: 'center',
                            justifyContent: 'flex-end'
                        }}>
                        <Icon
                            name="shopping-cart"
                            size={30}
                            color="black"
                            style={{
                                margin: 1
                            }}
                        />
                    </View>
                    <View
                        style={{
                            position: 'absolute',
                            bottom: 5,
                            alignItems: 'center'
                        }}>
                        <View
                            style={{
                                height: 20,
                                display: 'flex',
                                flexDirection: 'row',
                                justifyContent: 'center'
                            }}>
                            <Text
                                style={{
                                    marginRight: 10,
                                    fontSize: 20,
                                    fontWeight: 'bold',
                                    textAlignVertical: 'center'
                                }}>
                                18
                            </Text>
                            <RS name="inr" size={20} color="black" />
                        </View>
                    </View>
                    <View
                        style={{
                            position: 'absolute',
                            bottom: -17,
                            alignItems: 'center',
                            width: '80%'
                        }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 18 }}>
                            Turmeric Powder
                        </Text>
                    </View>
                </View>
                <View
                    style={{
                        height: 150,
                        // borderWidth: 1,
                        alignItems: 'center',
                        marginBottom: 20
                    }}>
                    <Image
                        source={require('../images/salt.png')}
                        style={{ width: '50%', height: '80%' }}
                    />
                    <View
                        style={{
                            height: '100%',
                            position: 'absolute',
                            right: 0,
                            alignItems: 'center',
                            justifyContent: 'flex-end'
                        }}>
                        <Icon
                            name="shopping-cart"
                            size={30}
                            color="black"
                            style={{
                                margin: 1
                            }}
                        />
                    </View>
                    <View
                        style={{
                            position: 'absolute',
                            bottom: 5,
                            alignItems: 'center'
                        }}>
                        <View
                            style={{
                                height: 20,
                                display: 'flex',
                                flexDirection: 'row',
                                justifyContent: 'center'
                            }}>
                            <Text
                                style={{
                                    marginRight: 10,
                                    fontSize: 20,
                                    fontWeight: 'bold',
                                    textAlignVertical: 'center'
                                }}>
                                40
                            </Text>
                            <RS name="inr" size={20} color="black" />
                        </View>
                    </View>
                    <View
                        style={{
                            position: 'absolute',
                            bottom: -17,
                            alignItems: 'center',
                            width: '80%'
                        }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 18 }}>
                            TATA Salt
                        </Text>
                    </View>
                </View>
            </View>
            <View
                style={{
                    width: '40%',
                    justifyContent: 'space-evenly'
                }}>
                <View
                    style={{
                        height: 150,
                        // borderWidth: 1,
                        alignItems: 'center',
                        marginBottom: 20
                    }}>
                    <Image
                        source={require('../images/chatpat.png')}
                        style={{ width: '50%', height: '80%' }}
                    />
                    <View
                        style={{
                            height: '100%',
                            position: 'absolute',
                            right: 0,
                            alignItems: 'center',
                            justifyContent: 'flex-end'
                        }}>
                        <Icon
                            name="shopping-cart"
                            size={30}
                            color="black"
                            style={{
                                margin: 1
                            }}
                        />
                    </View>
                    <View
                        style={{
                            position: 'absolute',
                            bottom: 5,
                            alignItems: 'center'
                        }}>
                        <View
                            style={{
                                height: 20,
                                display: 'flex',
                                flexDirection: 'row',
                                justifyContent: 'center'
                            }}>
                            <Text
                                style={{
                                    marginRight: 10,
                                    fontSize: 20,
                                    fontWeight: 'bold',
                                    textAlignVertical: 'center'
                                }}>
                                45
                            </Text>
                            <RS name="inr" size={20} color="black" />
                        </View>
                    </View>
                    <View
                        style={{
                            position: 'absolute',
                            bottom: -17,
                            alignItems: 'center',
                            width: '80%'
                        }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 18 }}>
                            Chilli Powder
                        </Text>
                    </View>
                </View>
                <View
                    style={{
                        height: 150,
                        // borderWidth: 1,
                        alignItems: 'center',
                        marginBottom: 20
                    }}>
                    <Image
                        source={require('../images/kanda.png')}
                        style={{ width: '50%', height: '80%' }}
                    />
                    <View
                        style={{
                            height: '100%',
                            position: 'absolute',
                            right: 0,
                            alignItems: 'center',
                            justifyContent: 'flex-end'
                        }}>
                        <Icon
                            name="shopping-cart"
                            size={30}
                            color="black"
                            style={{
                                margin: 1
                            }}
                        />
                    </View>
                    <View
                        style={{
                            position: 'absolute',
                            bottom: 5,
                            alignItems: 'center'
                        }}>
                        <View
                            style={{
                                height: 20,
                                display: 'flex',
                                flexDirection: 'row',
                                justifyContent: 'center'
                            }}>
                            <Text
                                style={{
                                    marginRight: 10,
                                    fontSize: 20,
                                    fontWeight: 'bold',
                                    textAlignVertical: 'center'
                                }}>
                                50
                            </Text>
                            <RS name="inr" size={20} color="black" />
                        </View>
                    </View>
                    <View
                        style={{
                            position: 'absolute',
                            bottom: -17,
                            alignItems: 'center',
                            width: '80%'
                        }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 18 }}>
                            Coriander Powder
                        </Text>
                    </View>
                </View>
                <View
                    style={{
                        height: 150,
                        // borderWidth: 1,
                        alignItems: 'center',
                        marginBottom: 20
                    }}>
                    <Image
                        source={require('../images/garam.png')}
                        style={{ width: '50%', height: '80%' }}
                    />
                    <View
                        style={{
                            height: '100%',
                            position: 'absolute',
                            right: 0,
                            alignItems: 'center',
                            justifyContent: 'flex-end'
                        }}>
                        <Icon
                            name="shopping-cart"
                            size={30}
                            color="black"
                            style={{
                                margin: 1
                            }}
                        />
                    </View>
                    <View
                        style={{
                            position: 'absolute',
                            bottom: 5,
                            alignItems: 'center'
                        }}>
                        <View
                            style={{
                                height: 20,
                                display: 'flex',
                                flexDirection: 'row',
                                justifyContent: 'center'
                            }}>
                            <Text
                                style={{
                                    marginRight: 10,
                                    fontSize: 20,
                                    fontWeight: 'bold',
                                    textAlignVertical: 'center'
                                }}>
                                18
                            </Text>
                            <RS name="inr" size={20} color="black" />
                        </View>
                    </View>
                    <View
                        style={{
                            // backgroundColor: 'grey',
                            position: 'absolute',
                            bottom: -17,
                            alignItems: 'center'
                        }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 18 }}>
                            Turmeric Powder
                        </Text>
                    </View>
                </View>
                <View
                    style={{
                        height: 150,
                        // borderWidth: 1,
                        alignItems: 'center',
                        marginBottom: 20
                    }}>
                    <Image
                        source={require('../images/goda.png')}
                        style={{ width: '50%', height: '80%' }}
                    />
                    <View
                        style={{
                            height: '100%',
                            position: 'absolute',
                            right: 0,
                            alignItems: 'center',
                            justifyContent: 'flex-end'
                        }}>
                        <Icon
                            name="shopping-cart"
                            size={30}
                            color="black"
                            style={{
                                margin: 1
                            }}
                        />
                    </View>
                    <View
                        style={{
                            position: 'absolute',
                            bottom: 5,
                            alignItems: 'center'
                        }}>
                        <View
                            style={{
                                height: 20,
                                display: 'flex',
                                flexDirection: 'row',
                                justifyContent: 'center'
                            }}>
                            <Text
                                style={{
                                    marginRight: 10,
                                    fontSize: 20,
                                    fontWeight: 'bold',
                                    textAlignVertical: 'center'
                                }}>
                                40
                            </Text>
                            <RS name="inr" size={20} color="black" />
                        </View>
                    </View>
                    <View
                        style={{
                            // backgroundColor: 'grey',
                            position: 'absolute',
                            bottom: -17,
                            alignItems: 'center',
                            width: '80%'
                        }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 18 }}>
                            TATA Salt
                        </Text>
                    </View>
                </View>
            </View>
        </View>
    );
}
