import * as WebBrowser from 'expo-web-browser';
import React, {useEffect, useState, useContext} from 'react';
import {
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import {ThemeContext, Header, ListItem, SearchBar, Button} from "react-native-elements";

const garage = [
  {
    type: 'motorcycle',
    name: 'Benelli Leoncino',
    year: '2019',
  },
  {
    type: 'car',
    name: 'Mercedes Classe A',
    year: '2009',
  },
];

const HomeScreen = () => {

  const { theme } = useContext(ThemeContext);

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.grey0
    }
  });

  const [searchValue, setSearchValue] = useState('');
  const [garageList, setGarageList] = useState(garage);

  const filterGarage = (value) => {

    // Imposto lo stato dell'input
    setSearchValue(value);

    // Filtro la lista originale e ritorno la lista filtrata
    const listFiltered = garage.filter(function(item){
      return item.name.search(value) !== -1;
    });

    // Aggiorno lo stato con la lista filtrata
    setGarageList(listFiltered);

  };

  return (
    <View style={styles.container}>

      <Header
          leftComponent={{ icon: 'menu', color: 'white' }}
          centerComponent={{ text: 'Il mio garage', style: { color: 'white' } }}
          rightComponent={{ icon: 'home', color: 'white' }}
      />

      <SearchBar
          placeholder="Cerca veicolo"
          value={searchValue}
          onChangeText={filterGarage}
          style={styles.SearchBar}
      />

      <ScrollView style={styles.container}>
        {
          garageList.map((item, i) => (
            <ListItem
              key={i}
              title={item.name}
              subtitle={item.year}
              leftIcon={{name: (item.type === 'car' ? 'drive-eta' : 'motorcycle'), color: theme.colors.primary}}
              rightIcon={{name: 'chevron-right'}}
              bottomDivider
            />
          ))
        }
      </ScrollView>

    </View>
  );

};

export default HomeScreen;

HomeScreen.navigationOptions = {
  header: null,
};
