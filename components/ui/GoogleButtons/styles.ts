import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 3,
    gap: 8,
  },
  icon: {
    width:  50,
    height: 50,
  },
  text: {
    fontWeight: '500',
    color: '#777',
  },
});

export { styles }