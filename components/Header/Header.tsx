import { View, Text, StyleSheet, Button, Pressable } from "react-native";

type HeaderProps = {
  setDisplayMyQR: (value: boolean) => void;
};

const Header = ({ setDisplayMyQR }: HeaderProps) => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerTitle}> My Portfolio App</Text>
      <View style={styles.headerButtoms}>
        <Pressable
          style={styles.buttonruta}
          onPress={() => setDisplayMyQR(true)}
        >
          <Text style={styles.shadoxboxing}>Mi info</Text>
        </Pressable>
        <Button
          onPress={() => setDisplayMyQR(false)}
          title="Mi Repo"
          color="light-gray"
          accessibilityLabel="Un botón pal QR"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    height: 100,
    paddingTop: 50,
    width: "100%",
  },
  headerTitle: {
    backgroundColor: "gray",
    textAlign: "center",
    fontWeight: "bold",
    textAlignVertical: "center",
    fontSize: 30,
  },
  headerButtoms: {
    flexDirection: "row",
    backgroundColor: "darkgray",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonruta: {
    width: "50%",
  },
  shadoxboxing: {
    color: "white",
    fontWeight: "bold",
    textTransform: "uppercase",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.43,
    shadowRadius: 9.51,
    elevation: 15,
  },
});

export default Header;
