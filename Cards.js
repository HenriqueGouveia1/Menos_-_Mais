import React, { useState } from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';

export default function Cards({title, desc, info}) {

  const [expandir, setExpandir] = useState(false)

  const inverteExpandir = () => {
    setExpandir(!expandir)
  }

  return (
    <>
      <View backgroundColor={"red"}>
        <TouchableOpacity onPress={inverteExpandir}>
          <Text >{title}</Text>
          <Text>{desc}</Text>
        </TouchableOpacity>
        {expandir &&
          <View>
            <Text>{info}</Text>
          </View>
        }
      </View>
    </>
  );
}
