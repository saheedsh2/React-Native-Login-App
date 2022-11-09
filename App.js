import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import SigninScreen from './src/screens/SigninScreen/SigninScreen';
import SignUpScreen from './src/screens/SignUpScreen/SignUpScreen';
export default function App() {
  return (
 <SafeAreaView style={styles.root}>
   <SignUpScreen />
 </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#F9FBFC',
  
  },
});
