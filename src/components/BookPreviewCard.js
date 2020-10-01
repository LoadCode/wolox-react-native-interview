import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Image} from 'react-native-elements';
import {COLORS} from '../config/constants';

export default function BookPreviewCard(props) {
  return (
    <View style={styles.card}>
      <Image
        style={styles.bookPicture}
        source={{
          uri: props.book.image_url,
        }}
      />
      <View style={styles.bookInfoContainer}>
        <Text style={styles.bookTitle}>{props.book.title}</Text>
        <Text style={styles.bookAuthor}>{props.book.author}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 15,
    flexDirection: 'row',
    backgroundColor: COLORS.TERTIARY,
    marginBottom: 10,
    borderBottomRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderTopRightRadius: 5,
    borderTopLeftRadius: 5,
  },
  bookPicture: {
    width: 77,
    height: 115,
    marginEnd: 20,
  },
  bookInfoContainer: {
    // backgroundColor: 'yellow',
  },
  bookTitle: {
    fontWeight: 'bold',
    fontSize: 18,
    color: COLORS.DARK,
    marginBottom: 10,
    // backgroundColor: 'violet',
  },
  bookAuthor: {
    fontSize: 14,
    color: COLORS.DARK,
    // backgroundColor: 'grey',
  },
});
