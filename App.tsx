import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import MyQRCode from "react-native-qrcode-svg";
import Header from "./components/Header/Header";
import PersonalInfo from "./components/PersonalInfo/PersonalInfo";

export default function App() {
  const [displayMyQR, setDisplayMyQR] = useState(true);
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Header setDisplayMyQR={setDisplayMyQR} />
      </View>
      <View style={styles.contentContainer}>
        {displayMyQR ? <PersonalInfo /> : <MyQRCode />}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  headerContainer: {
    height: 100,
    width: "100%",
    backgroundColor: "lightgray",
  },
  contentContainer: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
});
