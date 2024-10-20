import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { colors } from "../Color/Colors";

export type PorjectProps = {
  body: string;
  darkMode: boolean;
};

const Project = ({ body, darkMode }: PorjectProps) => {
  return (
    <View>
      <Text
        style={[
          styles.bodyTextProyects,
          {
            backgroundColor: darkMode ? colors.cardsDark : colors.mediumGreen,
            color: darkMode ? colors.lightText : colors.darkText,
          },
        ]}
      >
        {body}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  bodyTextProyects: {
    textAlign: "justify",
    fontSize: 14,
    margin: 3,
    padding: 5,
    borderRadius: 5,
  },
});

export default Project;
