import { StyleSheet, Text } from "react-native";
import React from "react";

export type CardProps = {
  body: string;
};

const Card = ({ body }: CardProps) => {
  return <Text style={styles.bodyTextHobbies}>{body}</Text>;
};

const styles = StyleSheet.create({
  bodyTextHobbies: {
    borderColor: "black",
    borderWidth: 1,
    borderStyle: "dashed",
    padding: 20,
    color: "darkred",
    textAlign: "center",
    fontWeight: "bold",
    fontStyle: "italic",
    fontSize: 16,
    backgroundColor: "silver",
  },
});

export default Card;
