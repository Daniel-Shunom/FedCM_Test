import { StyleSheet, Platform } from "react-native";

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 4,
    elevation: 4,
    gap: 10,
  },
  icon: {
    width: "40%",
    height: 50,
    resizeMode: Platform.OS === 'ios' ? 'contain' : 'cover',
  },
  text: {
    fontWeight: '600',
    color: '#444',
    fontSize: 16,
  },
});

export { styles };