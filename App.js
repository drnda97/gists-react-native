import {Platform, SafeAreaView, StatusBar, StyleSheet, View} from 'react-native';
import Loader from "./components/Loader";
import { useFonts } from 'expo-font';
import Gists from "./components/Gists";


const App = () => {
  const [fontsLoaded] = useFonts({
    'HelveticaNeue-Bold': require('./assets/fonts/HelveticaNeue-Bold.otf'),
    'HelveticaNeue': require('./assets/fonts/HelveticaNeue.otf'),
  });

  if(!fontsLoaded) {
    return <Loader />
  }

  if(Platform.OS === "ios") {
    return (
        <SafeAreaView style={styles.container}>
          <Gists />
        </SafeAreaView>
    )
  }

  return (
    <View style={[styles.container, {marginTop: StatusBar.currentHeight}]}>
      <Gists />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default App;