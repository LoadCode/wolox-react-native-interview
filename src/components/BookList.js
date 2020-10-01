import React, {useEffect, useState} from 'react';
import {FlatList, View, TouchableHighlight} from 'react-native';
import BookPreviewCard from './BookPreviewCard';

export default function BookList(props) {
  const [bookList, setBookList] = useState([]);

  // Clean book list everytime the list is updated to remove unwanted characters
  useEffect(() => {
    let cleanBookList = props.bookList.map((bookDoc) => {
      return {
        author: bookDoc.author
          ? bookDoc.author.replace(/(\r\n|\n|\r)/gm, '')
          : bookDoc.author,
        title: bookDoc.title
          ? bookDoc.title.replace(/(\r\n|\n|\r)/gm, '')
          : bookDoc.title,
        genre: bookDoc.genre
          ? bookDoc.genre.replace(/(\r\n|\n|\r)/gm, '')
          : bookDoc.genre,
        publisher: bookDoc.publisher
          ? bookDoc.publisher.replace(/(\r\n|\n|\r)/gm, '')
          : bookDoc.publisher,
        year: bookDoc.year,
        image_url: bookDoc.image_url,
        id: bookDoc.id,
      };
    });
    setBookList(cleanBookList);
  }, [props.bookList]);

  // Gets the clicked Conversation Summary card information
  const onClickBookItem = (bookItem) => {
    console.log('item clickado...');
    console.log(bookItem);
  };

  return (
    <FlatList
      data={bookList}
      renderItem={({item}) => (
        <TouchableHighlight
          onPress={() => onClickBookItem(item)}
          underlayColor="white">
          <BookPreviewCard book={item} />
        </TouchableHighlight>
      )}
      keyExtractor={(item) => item.id.toString()}
      //   ItemSeparatorComponent={renderSeparator}
    />
  );
}
