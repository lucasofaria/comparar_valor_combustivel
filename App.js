import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput, Keyboard, Modal } from 'react-native';

export default function App() {
  const [valorAlcool, setValorAlcool] = useState('');
  const [valorGasolina, setValorGasolina] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [resultado, setResultado] = useState('');
  
  function calcular(){    
    
    const valorCalculado = (valorAlcool / valorGasolina);

    if(valorAlcool === 0 || valorGasolina === 0 || valorAlcool === '' || valorGasolina === ''){
      alert('Informe um valor correto para prosseguir!')
      return;
    }

    setModalVisible(true)  

    if(valorCalculado < 0.7){
      setResultado("Compensa usar Álcool")
      return;
    }else{
      setResultado("Compensa usar Gasolina")
    }   
    
  }

  function fechar(){
    setModalVisible(false);
    setValorAlcool('');
    setValorGasolina('');
  }

  return (
    <View style={styles.container}>
      <View style={styles.areaImg}>
        <Image
          style={styles.img} 
          source={require('./assets/logo.png')}
        />
      </View>

      <View style={styles.areaTitulo}>
        <Text style={styles.titulo}>Qual melhor opção?</Text>
      </View>

      <View style={styles.areaTexto}>
        <Text style={styles.text}>Álcool (preço por litro):</Text>
      </View>  

      <View style={styles.areaInput}>
        <TextInput
          style={styles.input} 
          placeholder='Ex.: 3.75'
          keyboardType='numeric'
          value={valorAlcool}
          onChangeText={(valorAlcool) => setValorAlcool(valorAlcool)}
          />
      </View>  
      <View style={styles.areaTexto}>  
        <Text style={styles.text}>Gasolina (preço por litro):</Text>
      </View>

      <View style={styles.areaInput}>
        <TextInput
          style={styles.input} 
          placeholder='Ex.: 4.75'
          keyboardType='numeric'
          value={valorGasolina}
          onChangeText={(valorGasolina) => setValorGasolina(valorGasolina)}
          />
      </View>

        <TouchableOpacity style={styles.btn} onPress={() => calcular()}>
          <Text style={styles.textBtn}>Calcular</Text>
        </TouchableOpacity>
      

        <Modal 
          animationType='slide'
          transparent={false}
          visible={modalVisible}
          onRequestClose={() => setModalVisible(!modalVisible)}
        >
          <View style={styles.container}>
          
            <View style={styles.areaImg}>
              <Image
                style={styles.img} 
                source={require('./assets/gas.png')}
              />
            </View>  

            <View style={styles.areaTitulo}>
              <Text style={styles.tituloModal}> {resultado} </Text>
            </View>

            <View style={styles.textoModal}>
              <Text style={styles.text}>Com os preços:</Text>
              
              <Text style={styles.text}>Gasolina: R$ {valorGasolina}</Text>
              <Text style={styles.text}>Álcool: R$ {valorAlcool} </Text>
            </View>
              
            <TouchableOpacity style={styles.btnModal} onPress={() => fechar()}>
              <Text style={styles.textBtn}>Calcular novamente</Text>
            </TouchableOpacity>
          </View>  
        </Modal>  

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212'
  },
  areaImg:{
    alignItems: 'center',
    justifyContent: 'center'
  },
  img: {
    marginTop: 80,
    marginBottom: 10,
    width: 150,
    height: 150
  },
  areaTitulo:{
    alignItems: 'center',
    marginBottom: 30,
    padding: 10
  },
  titulo:{
    fontSize: 20,
    color: '#FFF',
    fontWeight: 'bold'
  },
  tituloModal:{
    fontSize: 20,
    color: '#70e000',
    fontWeight: 'bold'
  },
  areaTexto:{
    alignItems: 'flex-start',
    marginLeft: 20
  },
  text:{
    fontSize: 18,
    color: '#FFF',
    marginBottom: 10
  },
  textoModal:{
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 20
  },
  areaInput:{
    alignItems: 'center',
    justifyContent: 'center'
  },
  input:{
    backgroundColor: '#CCC',
    width: '90%',
    height: 50,
    padding: 10,
    marginBottom: 20,
    borderRadius: 8
  },
  btn:{
    width: '90%',
    height: 50,
    backgroundColor: '#d00000',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    marginLeft: 20
  },
  textBtn:{
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFF'
  },
  btnModal:{
    width: '90%',
    height: 50,
    backgroundColor: '#d00000',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    marginLeft: 20,
    marginTop: 20
  },
});
