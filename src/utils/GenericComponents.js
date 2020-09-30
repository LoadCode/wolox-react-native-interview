import React from 'react';
import {Picker} from '@react-native-community/picker';
import {View, Linking} from 'react-native';
import {Text} from 'react-native-elements';
import {COLORS} from '../config/constants';

function LinkText(props) {
  return (
    <Text
      style={{color: COLORS.LINK, fontWeight: 'bold'}}
      onPress={() => Linking.openURL(props.url)}>
      {props.text}
    </Text>
  );
}

export function TermsAndPolicy(props) {
  return (
    <View style={{paddingLeft: 10, flex: 1}}>
      <Text style={props.style}>
        I agree to the My Book Collection
        <LinkText text=" Terms of Service " url="https://www.google.com/" />
        and the
        <LinkText text=" Privacy Policy" url="https://www.google.com/" />
      </Text>
    </View>
  );
}

// Verifies that the input string follows a valid email address format (returns true/false)
export function validateEmail(elementValue) {
  var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return emailPattern.test(elementValue);
}

export function getAgePickerItems(start, end) {
  let ageValues = [];
  for (let i = start; i < end; i++)
    ageValues.push(
      <Picker.Item
        label={i == start ? 'Age' : i.toString()}
        value={i.toString()}
        key={i.toString()}
      />,
    );

  return ageValues;
}
