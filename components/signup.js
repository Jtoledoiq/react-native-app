import React from 'react';
import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity } from 'react-native';
import { render } from 'react-dom';

export default class SignUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            password: ''
        }
    }
    render() {


        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text>Header</Text>
                </View>
                <View style={styles.body}>
                    <View><Text>Sign up</Text></View>
                    <View style={{alignItems:'center', justifyContent:'center'}}>
                        <View style={{borderWidth:1, borderRadius:50, flexDirection:'row', justifyContent:'center', alignItems:'center', width:250, height:50, margin:5}}>
                            <Image source={require('../img/person.png')} style={{height:30, width:30, marginLeft:20}}/>
                            <TextInput
                            style={{ width:200, fontSize:18, marginLeft:10}}
                            onChangeText={textInputValue =>this.setState({name: textInputValue})}
                            placeholder="Name"
                            />
                        </View>

                        <View style={{borderWidth:1, borderRadius:50, flexDirection:'row', justifyContent:'center', alignItems:'center', width:250, height:50, margin:5}}>
                            <Image source={require('../img/email.png')} style={{height:30, width:30, marginLeft:20}}/>
                            <TextInput
                            style={{ width:200, fontSize:18, marginLeft:10}}
                            onChangeText={textInputValue =>this.setState({email: textInputValue})}
                            placeholder="E-mail"
                            />
                        </View>

                        <View style={{borderWidth:1, borderRadius:50, flexDirection:'row', justifyContent:'center', alignItems:'center', width:250, height:50, margin:5}}>
                            <Image source={require('../img/key.png')} style={{height:30, width:30, marginLeft:20}}/>
                            <TextInput
                            style={{ width:200, fontSize:18, marginLeft:10}}
                            onChangeText={textInputValue =>this.setState({password: textInputValue})}
                            placeholder="Password"
                            />
                        </View>

                        <TouchableOpacity 
                            style={{width:180, height:50, backgroundColor:'lightblue', borderRadius:50, alignItems:'center', justifyContent:'center', marginTop:20}}
                            onPress={()=>console.log(this.state.name)}
                            >
                            <Text>Create Account</Text>
                        </TouchableOpacity>

                    </View>

                    <View style={{flexDirection:'row', alignItems: 'center', justifyContent: 'center', marginTop:10}}>
                        <Text>Already have and account? </Text>
                        <TouchableOpacity><Text style={{color:'lightblue'}}>Sign in</Text></TouchableOpacity>
                    </View>

                </View>
                <View style={styles.bottom}>
                    <Text>Bottom</Text>
                </View>
            </View>
            );
    }
}

const styles = StyleSheet.create({
container: {
    flex: 1,
    backgroundColor: '#fff',
},

header: {
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'lightblue',
},

body: {
    flex:10,
    alignItems: 'center',
    justifyContent: 'space-around',
    
},

bottom: {
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'lightblue',

}

});