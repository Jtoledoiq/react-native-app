import React from 'react';
import { StyleSheet, Text, View, TextInput, Image } from 'react-native';
import { render } from 'react-dom';

export default class LogIn extends React.Component {
    render() {

        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text>Header</Text>
                </View>
                <View style={styles.body}>
                    <View style={{borderWidth:1, borderRadius:50, flex:1, flexDirection:'row', justifyContent:'center', alignItems:'center', width:250, height:10}}>
                        <Image source={require('../img/email.png')} style={{height:40, width:40}}/>
                        <TextInput
                        style={{ width:200, fontSize:30}}
                        onChange={text =>onChangeText(text)}
                        value="sfd"
                        />
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
    alignItems: 'center',
    justifyContent: 'center',
},

header: {
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
},

body: {
    flex:10,
    alignItems: 'center',
    justifyContent: 'center',
},

bottom: {
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
}

});