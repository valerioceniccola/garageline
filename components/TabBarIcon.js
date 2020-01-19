import React, {useContext} from 'react';
import { Ionicons } from '@expo/vector-icons';
import {Icon, ThemeContext} from "react-native-elements";

export default function TabBarIcon(props) {

  const { theme } = useContext(ThemeContext);

  return (
    <Icon
      {...props}
      name={props.name}
      size={26}
      style={{ marginBottom: -3 }}
      color={props.focused ? theme.colors.primary : theme.colors.grey2}
    />
  );
}
