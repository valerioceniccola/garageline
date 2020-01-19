import React, {useContext} from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';

import {ThemeContext, Header, Button, Input, Icon} from "react-native-elements";
import colors from '../constants/Colors';

export default function LinksScreen() {

  const { theme } = useContext(ThemeContext);

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.grey0
    },
    scrollView: {
      marginTop: 30,
      marginBottom: 30,
    }
  });

  return (
      <View style={styles.container}>

        <ScrollView style={styles.scrollView}>
          <Input label="Nome"/>
          <Input label="Tipo" />
          <Input label="Anno" />
        </ScrollView>

      </View>
  );
}

LinksScreen.navigationOptions = {
  title: 'Aggiungi nuovo veicolo',
  headerStyle: {
    backgroundColor: colors.grey0,
  },
  headerTintColor: 'white',
};