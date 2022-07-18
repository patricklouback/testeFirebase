import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { createUserWithEmailAndPassword, sendEmailVerification} from "firebase/auth";
import { getFirestore, setDoc, doc, addDoc } from 'firebase/firestore';
import { app, auth } from './firebase';

export default function App() {
  app;

  const cadastrar = () => {
    createUserWithEmailAndPassword(auth, 'teste@gmail.com', '123456')
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user["stsTokenManager"]["accessToken"])
        sendEmailVerification(user)
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  }

  const enviarProduto = async() => {
    
    const firestore = getFirestore();

    await setDoc(doc(firestore,'produtos','Caixa Patrick'), {
      name: 'Caixa Patrick',
      descricao: 'Contém várias coisas',
      custo: 255.34,
      valorFinal: 59.78,
      uid: 'jdhakdhadjakjhdakhdlaks'
    });
  }

  return (
    <View style={styles.container}>
      <Button
      title='Cadastrar Novo Usuário'
      onPress={cadastrar}
      />
      <Button
      title='Cadastrar Produtos'
      onPress={enviarProduto}
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
  btn: {
    marginTop: 20
  }
});
