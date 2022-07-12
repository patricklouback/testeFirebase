import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

export default function App() {

  const handleSignUp = () => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, 'patrick@teste.com', '123456')
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  }



  return (
    <View style={styles.container}>
      <Button
      title='Salvar'
      onPress={handleSignUp}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
