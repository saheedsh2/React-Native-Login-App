import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import ConfirmEmailScreen from './src/screens/ConfirmEmailScreen/ConfirmEmailScreen';
import SigninScreen from './src/screens/SigninScreen/SigninScreen';
import SignUpScreen from './src/screens/SignUpScreen/SignUpScreen';
export default function App() {
  return (
 <SafeAreaView style={styles.root}>
    <ConfirmEmailScreen />
 </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#F9FBFC',
  
  },
});
