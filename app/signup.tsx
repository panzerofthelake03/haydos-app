import { View,  KeyboardAvoidingView, Platform, ScrollView } from 'react-native'
import React, { useState } from 'react'
import Appbar from '@/components/Appbar'
import { FormBody } from '@/components/FormBody'
import { router } from 'expo-router'
import { FormBodyProps } from '@/components/FormBody'
import { validateForm, required, isEmail } from '@/utils/formvalidation'
import { signupRequest, Signup_LoginResponse,  SigninCredentials} from '@/service/userServices'

const SignupScrean = () => {

  const [signupData, setsignupData] = useState({
    phoneNumber: '',
    name: '',
    email: '',
    password: '',
  });


  const validationRules = {
    phoneNumber: [required('Phone Number')],
    name: [required('Name')],
    email: [required('Email'), isEmail],
    password: [required('Password')],
  };


  const [errors, setErrors] = useState({
    phoneNumber: '',
    name: '',
    email: '',
    password: '',
  });

  const [errorlabel, setErrorlabel] = useState('')

  const handleInputChange = (field: keyof typeof signupData) => (value: string) => {
		setsignupData(prev => ({ ...prev, [field]: value }));
		// Clear error when user starts typing
		if (errors[field]) {
			setErrors(prev => ({ ...prev, [field]: '' }));
		}
	};

  const handleSignUp = async () => {
		const newErrors = validateForm(signupData, validationRules);
    //const newErrors = ""
		setErrors(newErrors as { phoneNumber: string; name: string; surname: string; email: string; password: string; });
		if (Object.keys(newErrors).length === 0) {
			// Form is valid, proceed with signup
      const response : Signup_LoginResponse = await signupRequest(signupData)
      console.log('Sign up button pressed')
      console.log('Phone Number:', signupData.phoneNumber)
      console.log('Name:', signupData.name)
      console.log('Email:', signupData.email)
      console.log('Password:', signupData.password)
      if(response.status == 200){
        console.log('signup successful');
        setErrorlabel("");
        router.push('./home');
      } else {
        console.log('SignupUser: Form is not valid');
        //once the services are ready, change the error label to the actual error message
        setErrorlabel("signup failed")
      }
		} else {
			console.log('SignupUser: Form is not valid');
      if(Object.values(signupData).some(value => value.trim() !== '')){
        setErrorlabel(Object.values(newErrors)[0] || '');
      }
    }
  };

  const formBodyProps : FormBodyProps = {
    inputs: [
      {
      iconName: 'phone-portrait',
      placeholder: '05000000000',
      pretext: 'Phone Number',
      secureTextEntry: false,
      value: signupData.phoneNumber,
      onChangeText: handleInputChange('phoneNumber'),
      error: errors.phoneNumber,
    },
    {
      iconName: 'person',
      placeholder: 'John Doe',
      pretext: 'Your Name',
      secureTextEntry: false,
      value: signupData.name,
      onChangeText: handleInputChange('name'),
      error: errors.name,
    },
    {
      iconName: 'mail',
      placeholder: '@std.iyte.edu.tr',
      pretext: 'Your Mail',
      secureTextEntry: false,
      value: signupData.email,
      onChangeText: handleInputChange('email'),
      error: errors.email,
    },
    {
      iconName: 'lock-closed',
      placeholder: '********',
      pretext: 'Password',
      secureTextEntry: true,
      value: signupData.password,
      onChangeText: handleInputChange('password'),
      error: errors.password,
    },
  ],
  buttons: [  
    {
      text: 'SIGN UP',
      onPress: handleSignUp,
    }
  ],
  errorLabel: errorlabel
};

  return (
    <ScrollView 
      contentContainerStyle={{ flexGrow: 1 }}
      style={{ flex: 1, backgroundColor: '#EAECE2' }}
      keyboardShouldPersistTaps="handled"
    >
      <FormBody {...formBodyProps}/>
      <Appbar backButton={true}/>
    </ScrollView>
  )
}

export default SignupScrean