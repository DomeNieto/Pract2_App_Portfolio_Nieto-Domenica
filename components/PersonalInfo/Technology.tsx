import { View, StyleSheet, Text } from "react-native";
import React from "react";
import { colors } from "../Color/Colors";

export type TechnologiesProps = {
  body: string;
  title: string;
  darkMode: boolean;
};

const Technology = ({ body, title, darkMode }: TechnologiesProps) => {
  return (
    <View>
      <Text
        style={[
          styles.bodyTitleTech,
          { color: darkMode ? colors.lightText : colors.darkText },
        ]}
      >
        {title}
      </Text>
      <Text
        style={[
          styles.bodyTextTech,
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
  bodyTextTech: {
    padding: 5,
    color: "black",
    textAlign: "justify",
    fontSize: 14,
    borderRadius: 5,
  },
  bodyTitleTech: {
    fontSize: 13,
    width: "100%",
    fontWeight: "300",
    margin: 2,
  },
});

export default Technology;
