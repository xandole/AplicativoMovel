import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  // Estado para controlar a visibilidade do texto
  const [display, setDisplay] = useState('none');

  // Função que alterna entre 'none' e 'block'
  const exibirTexto = () => {
    if (display === 'none') {
      setDisplay('block');
    } else {
      setDisplay('none');
    }
  };

  return (
    <View style={styles.container}>
      <Button title="Exibir Texto" onPress={exibirTexto} />
      <Text style={{ display: display, marginTop: 20 }}>Texto escondido!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});