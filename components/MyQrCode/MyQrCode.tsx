import React from "react";
import { View, StyleSheet } from "react-native";
import QRCode from "react-native-qrcode-svg";
import { colors } from "../Color/Colors";

type MyQRCodeProps = {
  darkMode: boolean;
};
const MyQRCode = ({ darkMode }: MyQRCodeProps) => {
  return (
    <View style={styles.QRContainer}>
      <QRCode
        value="https://github.com/DomeNieto"
        size={200}
        backgroundColor={darkMode ? "#333" : colors.softGreen}
        color={darkMode ? colors.lightText : colors.darkText}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  QRContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: "100%",
  },
});

export default MyQRCode;
