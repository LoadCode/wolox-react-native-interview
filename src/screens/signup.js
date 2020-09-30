import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {Linking} from 'react-native';
import {Picker} from '@react-native-community/picker';
import {Button, Input, Text, CheckBox} from 'react-native-elements';
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

function TermsAndPolicy(props) {
  return (
    <View style={{paddingLeft: 10, flex: 1}}>
      <Text style={styles.termsAndPolicy}>
        I agree to the My Book Collection
        <LinkText text=" Terms of Service " url="https://www.google.com/" />
        and the
        <LinkText text=" Privacy Policy" url="https://www.google.com/" />
      </Text>
    </View>
  );
}

export default function SignUpForm() {
  const [check, setCheck] = useState(false);
  const [age, setAge] = useState(7);
  let ageValues = [];
  for (let i = 7; i < 120; i++)
    ageValues.push(
      <Picker.Item
        label={i == 7 ? 'Age' : i.toString()}
        value={i == 7 ? 'Age' : i.toString()}
        key={i.toString()}
      />,
    );

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>My Book Collection</Text>
      </View>
      <View style={styles.bodyContainer}>
        <View style={styles.formContainer}>
          <Input
            maxLength={40}
            placeholder="Name"
            textContentType="name"
            inputStyle={styles.textInput}
            placeholderTextColor={COLORS.GREY}
            inputContainerStyle={styles.inputContainer}
          />
          <Input
            maxLength={40}
            placeholder="Lastname"
            textContentType="name"
            inputStyle={styles.textInput}
            placeholderTextColor={COLORS.GREY}
            inputContainerStyle={styles.inputContainer}
          />
          <View style={styles.pickerContainer}>
            <Picker
              selectedValue={age.toString()}
              onValueChange={(value, index) => setAge(value)}>
              {ageValues}
            </Picker>
          </View>
          <Input
            maxLength={40}
            placeholder="Email"
            autoCompleteType="off"
            autoCapitalize="none"
            inputStyle={styles.textInput}
            placeholderTextColor={COLORS.GREY}
            inputContainerStyle={styles.inputContainer}
          />
          <CheckBox
            title={<TermsAndPolicy />}
            checked={check}
            onIconPress={() => setCheck(!check)}
            Component={View}
            containerStyle={styles.checkboxContainer}
            checkedColor="white"
          />
        </View>
      </View>
      <View style={styles.footerContainer}>
        <View style={styles.buttonContainer}>
          <Button
            title="Sign Up"
            titleStyle={styles.termsAndPolicy}
            buttonStyle={styles.button}
            containerStyle={{backgroundColor: 'gold', width: '95%', flex: 0.4}}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.TERTIARY,
  },
  titleContainer: {
    flex: 1,
    // backgroundColor: 'gold',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 26,
    color: COLORS.LIGHT,
  },
  bodyContainer: {
    flex: 3,
    // backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
  },
  formContainer: {
    flex: 0.8,
    flexDirection: 'column',
    width: '90%',
    justifyContent: 'center',
    // backgroundColor: 'red',
  },
  inputContainer: {
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    backgroundColor: COLORS.SECONDARY,
    borderBottomWidth: 0,
  },
  textInput: {
    paddingLeft: 20,
    color: COLORS.LIGHT,
  },
  footerContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: COLORS.PRIMARY,
    // backgroundColor: 'blue',
  },
  button: {
    flex: 1,
    backgroundColor: COLORS.PRIMARY,
  },
  buttonContainer: {
    // backgroundColor: 'grey',
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
    flex: 0.7,
  },
  termsAndPolicy: {
    color: COLORS.LIGHT,
    fontWeight: 'bold',
  },
  checkboxContainer: {
    backgroundColor: COLORS.TERTIARY,
    borderWidth: 0,
  },
  pickerContainer: {
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    backgroundColor: COLORS.SECONDARY,
    paddingLeft: 20,
    width: '94%',
    marginLeft: 10,
    marginBottom: 25,
    // flex: 0.3,
    // flexDirection: 'column',
  },
});
