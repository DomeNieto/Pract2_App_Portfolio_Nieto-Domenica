import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { colors } from "../Color/Colors";

type HeaderProps = {
  setDisplayMyQR: (value: boolean) => void;
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
};

const Header = ({ setDisplayMyQR, darkMode, setDarkMode }: HeaderProps) => {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.headerTitle}>
        <Text
          style={[
            styles.headerText,
            {
              color: darkMode ? colors.lightText : colors.darkText,
              backgroundColor: darkMode ? "#555" : colors.mediumGreen,
            },
          ]}
        >
          {" "}
          My Portfolio App
        </Text>
      </View>
      <View style={styles.headerButtoms}>
        <Pressable onPress={() => setDisplayMyQR(true)}>
          <Text
            style={[
              styles.pressable,
              {
                color: darkMode ? colors.lightText : colors.darkText,
                backgroundColor: darkMode ? "#555" : colors.lightGreen,
              },
            ]}
          >
            Mi info
          </Text>
        </Pressable>
        <Pressable onPress={() => setDisplayMyQR(false)}>
          <Text
            style={[
              styles.pressable,
              {
                color: darkMode ? colors.lightText : colors.darkText,
                backgroundColor: darkMode ? "#555" : colors.lightGreen,
              },
            ]}
          >
            Mi Repo
          </Text>
        </Pressable>
        <Pressable
          onPress={() => setDarkMode(!darkMode)}
          style={[
            styles.pressable,
            { backgroundColor: darkMode ? "#555" : colors.lightGreen },
          ]}
        >
          <Ionicons
            name={
              darkMode ? "radio-button-off-outline" : "radio-button-on-outline"
            }
            color={darkMode ? "#FFF" : "black"}
            size={24}
          ></Ionicons>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    height: "13%",
    paddingTop: 30,
    width: "100%",
  },
  headerTitle: {},
  headerText: {
    textAlign: "center",
    fontWeight: "bold",
    textAlignVertical: "center",
    fontSize: 30,
  },
  headerButtoms: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    padding: 5,
  },
  buttonruta: {
    width: "50%",
  },
  shadoxboxing: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.43,
    shadowRadius: 9.51,

    elevation: 15,
  },
  pressable: {
    width: 80,
    height: 35,
    textAlign: "center",
    textAlignVertical: "center",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 4,
    elevation: 15,
    shadowOpacity: 1,
    shadowRadius: 9.51,
  },
});

export default Header;
