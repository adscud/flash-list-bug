import {Dimensions, StyleSheet, Text, View} from 'react-native';
import React from "react";
import { FlashList } from '@shopify/flash-list';

const { height, width } = Dimensions.get('window')
const data = [1, 2, 3, 4, 5, 6, 7, 8, 9]

export default function App() {
  const renderItem = ({ index }: { index: number }) => {
    return <ListItem index={index} />
  }

  const keyExtractor = (item: any, index: number) => index.toString()

  return (
    <View style={styles.container}>
      <FlashList
        data={data}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        estimatedItemSize={height}
        estimatedListSize={{height, width}}
        pagingEnabled
      />
    </View>
  );
}

function ListItem({index}: {index: number}) {
  // This square is supposed to be present only on the first item
  const [showSquare] = React.useState(index === 0);

  return (
    <View style={[styles.item, {height, width, backgroundColor: index % 2 === 0 ? 'red' : 'yellow'}]}>
      {showSquare && <View style={styles.square} />}
      <Text style={[styles.index, {color: index % 2 === 0 ? 'yellow' : 'red'}]}>
        {index.toString()}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
  },
  index: {
    fontSize: 25,
    fontWeight: 'bold'
  },
  square: {
    position: 'absolute',
    top: 50,
    left: 0,
    width: 100,
    height: 100,
    backgroundColor: 'blue'
  }
});
