import { View, Text, Image, StyleSheet, ImageBackground, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'

const Login = () => {
    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}  >
            <ImageBackground source={require('./images/grad.png')} style={{ width: '100%', height: 335 }}>
                <View >

                    <Text style={{ color: 'white', fontSize: 40, fontWeight: 'bold', marginTop: 60, marginStart: 20 }}>Login</Text>
                    <View style={styles.Card}>

                        <Text style={{ marginStart: 20, marginTop: 20, fontWeight: 'bold' }}>Email</Text>
                        <TextInput style={{ borderBottomWidth: 1, marginHorizontal: 20, borderBottomColor: '#F0F0F8', height: 35 }} />

                        <Text style={{ marginStart: 20, marginTop: 20, fontWeight: 'bold' }}>Password</Text>
                        <TextInput style={{ borderBottomWidth: 1, marginHorizontal: 20, borderBottomColor: '#F0F0F8', height: 35 }} />

                        <Text style={{ textAlign: 'right', marginHorizontal: 20, fontSize: 13, color: '#4552CB', marginTop: 10 }}>Do not remember the password?</Text>

                        <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center', backgroundColor: '#4552CB', height: 46, marginHorizontal: 20, marginTop: 20, borderRadius: 30 }} ><Text style={{ color: 'white', fontWeight: 'bold' }}>Sign in</Text></TouchableOpacity>

                    </View>

                    <Text style={{ textAlign: 'center', marginTop: 40, fontSize: 17, color: 'black' }}>or continue with</Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginHorizontal: 30, marginTop: 20 }}>
                        <Image source={require('./images/fb.png')} style={{ height: 55, width: 55 }} />
                        <Image source={require('./images/google.png')} style={{ height: 55, width: 55 }} />
                    </View>

                    <View style={{ flexDirection: 'row', justifyContent: 'center', marginHorizontal: 30, marginTop: 20 }}>
                        <Text style={{ marginTop: 40, fontSize: 15, color: 'black' }}>Don't have account yet?</Text>
                        <Text style={{ marginTop: 40, fontSize: 15, color: '#4552CB', fontWeight: 'bold' }}> Registration</Text>
                    </View>

                </View>

            </ImageBackground >
        </ScrollView >
    )
}

const styles = StyleSheet.create({

    Card: {
        backgroundColor: 'white',
        height: 270,
        elevation: 10,
        marginTop: 60,
        marginHorizontal: 20,
        borderRadius: 20
    }

})

export default Login
