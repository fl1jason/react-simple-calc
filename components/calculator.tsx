import React from 'react';
import { StyleSheet, Text, View, KeyboardAvoidingView, TextInput, TouchableOpacity} from 'react-native';

export default function App() {

  const [value, setValue] = React.useState<string>("");
  const [result, setResult] = React.useState<string>("");

  const onCalculate = (): void => {

    if (value == ""){
        setResult("Calculation not set ");
        setTimeout(function(){setResult("")}, 2000);
      return;
    }

    let params: string[] = value.split("*");
    let answer: number = 0;
    if (params.length > 1){
        answer = parseInt(params[0]) * parseInt(params[1]);
    }
    
    params = value.split("x");
    if (params.length > 1){
        answer = parseInt(params[0]) * parseInt(params[1]);
    }

    params = value.split("-");
    if (params.length > 1){
        answer = parseInt(params[0]) - parseInt(params[1]);
    }

    params = value.split("+");
    if (params.length > 1){
        answer = parseInt(params[0]) + parseInt(params[1]);
    }

    params = value.split("/");
    if (params.length > 1){
        answer = parseInt(params[0]) / parseInt(params[1]);
    }
    setResult(answer.toString());
    setValue("");
  }
  
  return (

    <KeyboardAvoidingView style={styles.container} behavior="padding">
        <View style={styles.introContainer}>
            <Text style={styles.title}>Simple Calculator</Text>
        </View>
        
        <View style={styles.container}>
            <TextInput 
            placeholder="result"
            value={result}
            style={styles.result}
            />
            <TextInput 
            placeholder="enter your calculation"
            style={styles.input}
            value={value}
            onChangeText={setValue}
            />
            <TouchableOpacity style={styles.buttonContainer}>
                <Text style={styles.buttonText} onPress={onCalculate}>Calculate</Text>
            </TouchableOpacity>
        </View>
        
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#282930',
      alignItems: 'center',
      justifyContent: 'center',
    },

    title: {
        color: '#ffffff',
        marginTop: 10,
        fontSize: 20,
    },

    result: {
        height: 40,
        backgroundColor: 'rgba(255, 255, 255, 0.6)',
        paddingLeft: 10,
        width: 250,
        marginBottom: 10,
    },
    input: {
        height: 40,
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        paddingLeft: 10,
        width: 250,
        marginBottom: 10,
    },
    introContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonContainer: {
        backgroundColor: '#27ae60',
        paddingVertical: 12,
        width: 250,
    },

    buttonText: {
        textAlign: 'center',
        color: '#ffffff',
        fontWeight: 'bold',
    },
  });
