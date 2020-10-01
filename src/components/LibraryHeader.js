import React, {useState} from 'react';
import {COLORS} from '../config/constants';
import {View, Text, StyleSheet} from 'react-native';
import {SearchBar} from 'react-native-elements';

export default function LibraryHeader(props) {
  const [search, setSearch] = useState('');

  const onSearchUpdate = (_search) => {
    setSearch(_search);
    props.onSearch(_search);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Library</Text>
      <SearchBar
        placeholder="Type here..."
        value={search}
        onChangeText={(ser) => onSearchUpdate(ser)}
        containerStyle={styles.searchBarContainerStyle}
        inputContainerStyle={styles.searchBarInputContainerStyle}
        inputStyle={{margin: 0, padding: 0}}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    backgroundColor: COLORS.PRIMARY,
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  title: {
    // flex: 1,
    backgroundColor: COLORS.PRIMARY,
    padding: 10,
    fontSize: 19,
    color: '#fff',
    fontWeight: 'bold',
  },
  searchBarContainerStyle: {
    width: '70%',
    backgroundColor: COLORS.PRIMARY,
    padding: 0,
    margin: 0,
    borderTopWidth: 0,
    borderBottomWidth: 0,
  },
  searchBarInputContainerStyle: {
    backgroundColor: '#ccc',
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
  },
});
