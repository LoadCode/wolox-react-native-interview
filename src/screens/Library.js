import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import axios from 'axios';
import BookList from './../components/BookList';
import LibraryHeader from './../components/LibraryHeader';
import {COLORS} from '../config/constants';

export default function Library(props) {
  const [bookList, setBookList] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:3000/books')
      .then((res) => {
        setBookList(res.data);
      })
      .catch((err) => console.log('error getting all books' + err));
  }, []);

  const handleOnSearch = (search) => {
    console.log('buscando----->' + search);
    axios
      .get('http://localhost:3000/books/?title_like=' + search)
      .then((res) => {
        setBookList(res.data);
      })
      .catch((err) => console.log('error getting books by filter' + err));
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.SECONDARY,
      }}>
      <LibraryHeader onSearch={handleOnSearch} />
      <BookList bookList={bookList} />
    </View>
  );
}
