import React, { useState } from "react";
import { StyleSheet, View } from "react-native";

import Header from "./components/Header/Header";
import PersonalInfo from "./components/PersonalInfo/PersonalInfo";
import MyQRCode from "./components/MyQrCode/MyQrCode";
import { colors } from "./components/Color/Colors";

export default function App() {
  const [displayMyQR, setDisplayMyQR] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  return (
    <View
      style={[
        (styles.container,
        { backgroundColor: darkMode ? "#333" : colors.softGreen }),
      ]}
    >
      <Header
        setDisplayMyQR={setDisplayMyQR}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />
      {displayMyQR ? <PersonalInfo /> : <MyQRCode />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
