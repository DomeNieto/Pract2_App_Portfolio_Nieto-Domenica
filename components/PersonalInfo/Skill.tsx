import { View, StyleSheet, Text } from "react-native";
import React from "react";
import { colors } from "../Color/Colors";

export type SkillProps = {
  body: string;
  darkMode: boolean;
};

const Skill = ({ body, darkMode }: SkillProps) => {
  return (
    <View>
      <Text
        style={[
          styles.bodyTextSkills,
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
  bodyTextSkills: {
    fontSize: 14,
    margin: 3,
    padding: 5,
    borderRadius: 5,
  },
});

export default Skill;
