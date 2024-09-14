import { View, Text,StyleSheet, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import { Link, router, Href } from 'expo-router';

interface AppbarProps {
  title?: string;
  href?: Href<string | object> | null;
  backButton: boolean;
}

function handleBackPress(href?: Href<string | object>) {
  if (href) {
    router.push(href);
  } else {
    router.back();
  }
}

const Appbar = ({ title, href, backButton }: AppbarProps) => {
  return (
    <View style={styles.container}>
      {backButton && <TouchableOpacity style={styles.backButton} onPress={() => handleBackPress(href ?? undefined)}>
        <Ionicons name="arrow-back" size={24} color="black" />
      </TouchableOpacity>}
      {title && <Text style={styles.title}>{title}</Text>}
      <Image
        source={require('../assets/images/Appbar-logo.png')}
        style={styles.logo}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    paddingHorizontal: 16,
  },
  backButton: {
    padding: 8,
  },
  title: {
    fontSize: 20,
    fontWeight: 'light',
    flex: 1,
    paddingLeft: 20,
    textAlign: 'left',
  },
  logo: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },
});

export default Appbar;
