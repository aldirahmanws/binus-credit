import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { FlatGrid } from 'react-native-super-grid';


function Home() {
  const [items, setItems] = React.useState([
    { name: 'RENOVASI Kary' },
    { name: 'MULTIGUNA Kary' },
    { name: 'KAI PRIORITY NEW' },
    { name: 'KAI PRIORITY KARY NEW' },
    { name: 'MULTIGUNA' },
    { name: 'KAI PRIORITY 2X' }
  ]);
  return (
    <View style={styles.bg_color}>
      <View style={[styles.card, styles.padding_1]}>
        <Text style={styles.red}>Credit</Text>
      </View>
      <View style={[styles.card, styles.padding_1, styles.margin_1, {border: '1px solid grey'}] }>
        <View style={styles.text_center}>
          <Text style={styles.bold}>Kemampuan Angsur</Text>
          <Text>Rp 30,000,000</Text>
        </View>
      </View>
      <View style={styles.container}>
        <Text style={[styles.green, styles.text_right]}>Apa itu Saldo ?</Text>
        <Text style={styles.bold}>Tips</Text>
        <Text>- Balance saldo didapatkan dari informasi gaji dan pinjaman</Text>
        <Text>- Balance saldo didapatkan dari informasi gaji dan pinjaman</Text>
        <br></br>
        <Text style={styles.bold}>KAS - Product for you Needs</Text>
        <FlatGrid
          itemDimension={130}
          data={items}
          style={styles.gridView}
          // staticDimension={300}
          // fixed
          spacing={10}
          renderItem={({ item }) => (
            <View style={[styles.itemContainer]} >
              <Text style={styles.itemName}>{item.name}</Text>
            </View>
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  bg_color: {
    backgroundColor: '#f8f9ff',
  },
  container: {
    paddingLeft: 10,
    paddingRight: 10,
  },
  card: {
    backgroundColor: 'white'
  },
  green: {
    color: 'green',
  },
  padding_1: {
    padding: 20,
  },
  margin_1: {
    margin: 10,
  },
  bold: {
    fontWeight: 'bold',
  },
  text_center: {
    textAlign: 'center',
  },
  text_right: {
    textAlign: 'right',
  },
  container_2: {
    flex: 3,
    padding: 20,
  },
  itemContainer: {
    padding: 10,
    width: 150, height: 100,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    border: '1px dashed grey'
  }
});

export default Home
