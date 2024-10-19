import { View, StyleSheet, Text, Image, ScrollView } from "react-native";
import React from "react";
import Card from "./Data/Cards";
import { cards } from "./Data/Data";

const PersonalInfo = () => {
  return (
    <View style={styles.bodyStails}>
      <View>
        <View style={styles.bodyTopContainer}>
          <Image
            style={styles.avatar}
            source={require("../../assets/SofyanAmrabat.jpg")}
          ></Image>
          <View style={styles.bodyTopRight}>
            <Text style={styles.bodyTopTitle}>Descripción sobre mí!</Text>
            <Text>
              Soy profe y me gusta mi trabajo aunque a veces me de por enrevesar
              prácticas para mis queridos alumnos
            </Text>
          </View>
        </View>
        <View style={styles.bodyBottomContainer}>
          <Text style={styles.bodyBottomTitle}>cosas que me gustan mucho:</Text>
          <ScrollView style={{ padding: 10 }}>
            {cards.map((card, index) => (
              <Card body={card.body} key={index}></Card>
            ))}
          </ScrollView>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  bodyBottomContainer: {
    flex: 1,
  },
  bodyStails: {
    width: "100%",
    borderWidth: 2,
    borderColor: "black",
    alignItems: "center",
    justifyContent: "space-between",
    height: "85%",
  },
  avatar: {
    height: 90,
    width: 90,
    borderRadius: 100,
  },
  bodyTopRight: {
    margin: 10,
    backgroundColor: "lightgray",
    padding: 10,
    borderRadius: 10,
    width: "70%",
  },
  bodyTopTitle: {
    textAlign: "center",
    fontWeight: "700",
    fontSize: 20,
  },
  bodyBottomTitle: {
    color: "beriblak",
    fontWeight: "900",
    textTransform: "capitalize",
    fontSize: 20,
    textAlign: "center",
  },
  bodyTopContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
});

export default PersonalInfo;
