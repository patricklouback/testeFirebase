import React, { useState } from 'react';
import { StyleSheet, View, Button } from 'react-native';

import { createUserWithEmailAndPassword, sendEmailVerification} from "firebase/auth";
import { getFirestore, setDoc, doc, getDocs, collection } from 'firebase/firestore';
import { auth } from '../../firebase';


export function Tela1({navigation}) {

  const [produtos, setProdutos] = useState([])

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

    await setDoc(doc(firestore,'produtos','Caixa Patrick 3'), {
      name: 'Caixa Patrick',
      descricao: 'Contém várias coisas',
      custo: 255.34,
      valorFinal: 59.78,
      uid: 'jdhakdhadjakjhdakhdlaks'
    });

    console.log('deu certo')
  } 

   const LerProduto = async() => {
    
    const firestore = getFirestore();

    //const q = query(collection(firestore, "produtos"), where("uid", "==", 'jdhakdhadjakjhdakhdlaks'));

    const querySnapshot = await getDocs(collection(firestore, "produtos"));
    
    var prod = [];
    querySnapshot.forEach((doc) => {

      const product = {
        id: doc.id,
        name: doc.data().name,
        valorFinal: doc.data().valorFinal,
        custo: doc.data().custo,
        descricao: doc.data().descricao,
        uid: doc.data().uid,
      };
      prod.unshift(product);
    });
    setProdutos(prod);
    if (produtos.length == 0) {
      console.log('deu errado')
    } else {
      console.log(produtos)
    }
  } 

  function abreTelaCamera(){
    navigation.navigate('telaCamera');
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
        <Button
            title='Ler Produtos'
            onPress={LerProduto}
        /> 
        <Button
            title='Abrir Câmera'
            onPress={abreTelaCamera}
        /> 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'gray'
  },
  btn: {
    marginTop: 20
  },
});
