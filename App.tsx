import { ImageBackground, StyleSheet } from 'react-native';
import { CreditCard } from './src/components/CreditCard';

export default function App() {
  return (
    <ImageBackground style={styles.container} source={require("./src/assets/bg.png")} resizeMode='cover'>
      <CreditCard />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24
  },
});
