import React from "react";
import { View, StyleSheet, Text, Image, ScrollView } from "react-native";

import Skill from "./Skill";
import Technology from "./Technology";
import Project from "./Project";

import { Projects } from "./Data/Projects";
import { Technologies } from "./Data/Technologies";
import { Skills } from "./Data/Skills";

import { colors } from "../Color/Colors";

const PersonalInfo = ({ darkMode }: { darkMode: boolean }) => {
  return (
    <View style={styles.bodyStails}>
      <View style={styles.bodyTopContainer}>
        <Image
          style={[
            styles.avatar,
            {
              borderColor: darkMode ? colors.darkText : colors.darkGreen,
            },
          ]}
          source={require("../../assets/DomenicaNieto.jpeg")}
        />
        <View
          style={[
            styles.backgroundOverlay,
            {
              backgroundColor: darkMode ? colors.cardsDark : colors.mediumGreen,
            },
          ]}
        >
          <Text
            style={[
              styles.bodyTopTitle,
              { color: darkMode ? colors.lightText : colors.darkText },
            ]}
          >
            Doménica Alejandra Nieto León
          </Text>
          <Text
            style={[
              styles.bodyDescription,
              { color: darkMode ? colors.lightText : colors.darkText },
            ]}
          >
            Soy técnico en Desarrollo de Aplicaciones Multiplataforma. Me
            encanta aprender nuevas tecnologías y crear aplicaciones innovadoras
            colaborando en equipo.
          </Text>
        </View>
      </View>

      <View
        style={[
          styles.bodyBottomContainer,
          { backgroundColor: darkMode ? "#333" : colors.lightGreen },
        ]}
      >
        <View style={styles.bodyBottomContainerLeft}>
          <Text
            style={[
              styles.bodyBottomTitle,
              { color: darkMode ? colors.lightText : colors.darkText },
            ]}
          >
            Tecnologías
          </Text>
          <ScrollView style={{ padding: 2, maxHeight: "30%" }}>
            {Technologies.map((tech, index) => (
              <Technology
                body={tech.body}
                title={tech.title}
                key={index}
                darkMode={darkMode}
              />
            ))}
          </ScrollView>
          <Text
            style={[
              styles.bodyBottomTitle,
              { color: darkMode ? colors.lightText : colors.darkText },
            ]}
          >
            Habilidades Blandas
          </Text>
          <ScrollView style={{ padding: 2, maxHeight: "20%" }}>
            {Skills.map((skill, index) => (
              <Skill body={skill.body} key={index} darkMode={darkMode}></Skill>
            ))}
          </ScrollView>
        </View>
        <View style={styles.bodyBottomContainerRight}>
          <Text
            style={[
              styles.bodyBottomTitle,
              { color: darkMode ? colors.lightText : colors.darkText },
            ]}
          >
            Proyectos
          </Text>

          <ScrollView style={{ padding: 2, maxHeight: "30%" }}>
            {Projects.map((pro, index) => (
              <Project
                body={pro.body}
                key={index}
                darkMode={darkMode}
              ></Project>
            ))}
          </ScrollView>
          <Text
            style={[
              styles.bodyBottomTitle,
              { color: darkMode ? colors.lightText : colors.darkText },
            ]}
          >
            Idiomas
          </Text>
          <Text
            style={[
              styles.bodyBottomDescription,
              { color: darkMode ? colors.lightText : colors.darkText },
            ]}
          >
            - Ingles
          </Text>
          <Text
            style={[
              styles.bodyBottomDescription,
              { color: darkMode ? colors.lightText : colors.darkText },
            ]}
          >
            - Español
          </Text>
          <Text
            style={[
              styles.bodyBottomTitle,
              { color: darkMode ? colors.lightText : colors.darkText },
            ]}
          >
            Contacto
          </Text>
          <Text
            style={[
              styles.bodyBottomDescription,
              { color: darkMode ? colors.lightText : colors.darkText },
            ]}
          >
            - domealenietol@gmail.com
          </Text>
          <Text
            style={[
              styles.bodyBottomDescription,
              { color: darkMode ? colors.lightText : colors.darkText },
            ]}
          >
            - 611789880
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  bodyBottomContainer: {
    width: "100%",
    flex: 1,
    flexDirection: "row",
    height: "100%",
  },
  bodyStails: {
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
    height: "100%",
  },
  avatar: {
    height: 100,
    width: 100,
    borderRadius: 100,
    borderWidth: 5,
    zIndex: 1,
    position: "absolute",
  },
  bodyTopContainer: {
    alignItems: "center",
    width: "100%",
  },
  backgroundOverlay: {
    width: "100%",
    alignItems: "center",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    marginTop: 60,
    zIndex: -1,
    paddingTop: "13%",
    paddingBottom: 10,
    paddingLeft: 1,
  },
  bodyTopTitle: {
    textAlign: "center",
    fontWeight: "700",
    fontSize: 17,
  },
  bodyDescription: {
    textAlign: "center",
    marginTop: 5,
    fontSize: 14,
  },
  bodyBottomTitle: {
    fontWeight: "900",
    textTransform: "capitalize",
    fontSize: 18,
    textAlign: "center",
    paddingTop: 20,
  },
  bodyBottomContainerLeft: {
    paddingLeft: 10,
    flex: 1,
  },
  bodyBottomContainerRight: {
    flex: 1,
    paddingRight: 10,
  },
  bodyBottomDescription: {
    fontSize: 14,
    paddingLeft: 15,
  },
});

export default PersonalInfo;
