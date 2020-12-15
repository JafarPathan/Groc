import React, { useEffect } from "react";
import { Image, TouchableOpacity, StyleSheet, Text, View } from "react-native";
import Icon from "react-native-vector-icons/Feather";
import RS from "react-native-vector-icons/FontAwesome";

export default function HomeScreen() {
    return (
        <View>
            <View
                style={{
                    flex: 1,
                    flexDirection: "column",
                    marginTop: 200,
                }}
            >
                <View
                    style={{
                        width: 50,
                        height: 50,
                        backgroundColor: "#000000",
                    }}
                >
                    <Icon
                        name="user"
                        size={30}
                        color="white"
                        style={{
                            margin: 10,
                        }}
                    />
                </View>
                <View
                    style={{
                        width: 50,
                        height: 50,
                        backgroundColor: "#000000",
                    }}
                >
                    <Icon
                        name="shopping-cart"
                        size={30}
                        color="white"
                        style={{
                            margin: 10,
                        }}
                    />
                </View>
                <View
                    style={{
                        width: 50,
                        height: 50,
                        backgroundColor: "#000000",
                    }}
                >
                    <Icon
                        name="heart"
                        size={30}
                        color="white"
                        style={{
                            margin: 10,
                        }}
                    />
                </View>
                <View
                    style={{
                        width: 50,
                        height: 50,
                        backgroundColor: "#000000",
                    }}
                >
                    <Icon
                        name="file-text"
                        size={30}
                        color="white"
                        style={{
                            margin: 10,
                        }}
                    />
                </View>
                <View
                    style={{
                        width: 50,
                        height: 70,
                        backgroundColor: "#000000",
                    }}
                >
                    <RS
                        name="inr"
                        size={30}
                        color="white"
                        style={{
                            margin: 15,
                        }}
                    />
                </View>
            </View>
        </View>
    );
}
