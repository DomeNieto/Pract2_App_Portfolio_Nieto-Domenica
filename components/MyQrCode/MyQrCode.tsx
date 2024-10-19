import React from "react";
import { View, StyleSheet } from "react-native";
import QRCode from "react-native-qrcode-svg";

const MyQRCode = () => {
  return (
    <View style={styles.QRContainer}>
      <QRCode value="https://github.com/adhernea" />
    </View>
  );
};

const styles = StyleSheet.create({
  QRContainer: {
    justifyContent: "center",
    borderWidth: 1,
    flex: 1,
    width: "100%",
    height: 100,
    alignItems: "center",
  },
});

export default MyQRCode;
