import * as React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button
} from 'react-native';
import { Appbar } from 'react-native-paper';

function CustomNavigationBar({scene, navigation, previous}) {
  // Set title in Navigation Bar
  const { options } = scene.descriptor;
  const title =
    options.headerTitle !== undefined
      ? options.headerTitle
      : options.title !== undefined
      ? options.title
      : scene.route.name;
  return (
    <Appbar.Header>
      {previous ? <Appbar.BackAction onPress={navigation.goBack} /> : null}
      <Appbar.Content title={title}/>
    </Appbar.Header>
  );
}

export {CustomNavigationBar};