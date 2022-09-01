import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import axios from 'axios';

export default function App() {

  const _userData = [
        "Patrick",
        "patrickmlouback@gmail.com",
        "21",
        "979589060",
        "212988620",
        "14220246797",
        "1234567890",
        "02131080",
        "Rua testss",
       "52",
       "",
       "Niva iguacu",
       "São paulo",
       "file:///data/user/0/host.exp.exponent/cache/ExperienceData/%2540envioz%252FEnvioz/Camera/b78961e7-fc70-4f06-bac2-230c0db17bc8.jpg",
       "file:///data/user/0/host.exp.exponent/cache/ExperienceData/%2540envioz%252FEnvioz/Camera/dc75ce5e-6e64-4e75-87f8-e13801cae818.jpg",
       "123456",
     ]

  const data = new FormData();
  data.append("Email", _userData[1]);
  data.append("CountryCode", "+55");
  data.append("LocalCode", _userData[2]);
  data.append("MobileNumber", _userData[3]);
  data.append("ZipCode", _userData[7]);
  data.append("File", _userData[13]);  

  function clicou(){
    console.log('----------')
    console.log((JSON.stringify(data['_parts']) === '[]'))
    console.log(JSON.stringify(data['_parts'][5][1]))
  }

  return (
      <View style = {{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Olá</Text>
        <TouchableOpacity
        onPress={clicou}
        >
          <Text style={{fontSize:30}}>Clica</Text>
          </TouchableOpacity>

      </View>
  );
}