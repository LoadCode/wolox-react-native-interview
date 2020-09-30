import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {Picker} from '@react-native-community/picker';
import {Button, Input, Text, CheckBox} from 'react-native-elements';
import {COLORS} from '../config/constants';
import {useAuthUpdate} from '../context/AuthenticationContext';
import {
  getAgePickerItems,
  TermsAndPolicy,
  validateEmail,
} from '../utils/GenericComponents';

export default function LogInForm(props) {
  // State variables to handle form data
  const [name, setName] = useState('Julio');
  const [lastname, setLastname] = useState('Echeverri');
  const [age, setAge] = useState('27');
  const [email, setEmail] = useState('julio.marulanda@outlook.com');
  const [check, setCheck] = useState(false);
  const [buttonLoading, setButtonLoading] = useState(false);

  // Error state variables
  const [nameErrorMessage, setNameErrorMessage] = useState('');
  const [lastnameErrorMessage, setLastnameErrorMessage] = useState('');
  const [emailErrorMessage, setEmailErrorMessage] = useState('');
  const [checkErrorMessage, setCheckErrorMessage] = useState('');
  const [ageErrorMessage, setAgeErrorMessage] = useState('');

  // Use authentication custom hook
  const authUpdate = useAuthUpdate();

  const handleLogin = () => {
    console.log('Handling login');
    // Clear all error messages
    if (nameErrorMessage !== '') setNameErrorMessage('');
    if (lastnameErrorMessage !== '') setLastnameErrorMessage('');
    if (emailErrorMessage !== '') setEmailErrorMessage('');
    if (ageErrorMessage !== '') setEmailErrorMessage('');
    if (checkErrorMessage !== '') setCheckErrorMessage('');

    // Validate form fields before attempting a login operation
    let isValidFormatEmail = false;
    isValidFormatEmail = validateEmail(email);
    if (!isValidFormatEmail) {
      setEmailErrorMessage('Not a valid email  format');
    } else if (name === '' || !isNaN(name)) {
      setNameErrorMessage('We need your name here');
    } else if (lastname === '' || !isNaN(lastname)) {
      setLastnameErrorMessage('We need your lastname here');
    } else if (!check) {
      setCheckErrorMessage('Agree to the Terms of Service');
    } else if (isNaN(age)) {
      setCheckErrorMessage('We need your age');
    } else {
      // Changes the button state to loading while wait for the login to resolve
      setButtonLoading(true);

      // Send a login request
      let signupDocument = {
        name: name,
        lastname: lastname,
        age: age,
        email: email,
        acceptToS: 'yes',
      };
      console.log('signup document');
      console.log(signupDocument);
      authUpdate.login(signupDocument);
    }
  };

  let ageValues = getAgePickerItems(9, 99);

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
            onChangeText={(_name) => setName(_name)}
            errorMessage={nameErrorMessage}
            inputStyle={styles.textInput}
            placeholderTextColor={COLORS.GREY}
            inputContainerStyle={styles.inputContainer}
          />
          <Input
            maxLength={40}
            placeholder="Lastname"
            textContentType="name"
            onChangeText={(_lastname) => setLastname(_lastname)}
            errorMessage={lastnameErrorMessage}
            inputStyle={styles.textInput}
            placeholderTextColor={COLORS.GREY}
            inputContainerStyle={styles.inputContainer}
          />
          <View style={styles.pickerContainer}>
            <Picker
              selectedValue={age}
              onValueChange={(value, index) => setAge(value)}>
              {ageValues}
            </Picker>
          </View>
          <Input
            maxLength={40}
            placeholder="Email"
            autoCompleteType="off"
            autoCapitalize="none"
            onChangeText={(_email) => setEmail(_email)}
            errorMessage={emailErrorMessage}
            inputStyle={styles.textInput}
            placeholderTextColor={COLORS.GREY}
            inputContainerStyle={styles.inputContainer}
          />
          <CheckBox
            title={<TermsAndPolicy style={styles.termsAndPolicy} />}
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
            onPress={handleLogin}
            loading={buttonLoading}
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
