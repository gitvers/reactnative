import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'


export default function CustomCard(props: any) {
    let response = props.obj
    return (
        <View style={styles.Card}>

            <View style={{ backgroundColor: 'white', flex: 0.45 }}>

                <Image source={response.image} style={{ height: 140, width: 130, marginVertical: 20, marginHorizontal: 10, borderRadius: 20 }}></Image>

            </View>
            <View style={{ backgroundColor: 'white', flex: 0.7 }}>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 }}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'black', marginStart: 10 }}>{response.name}</Text>
                    <Image source={require('./images/edit-2.png')} style={{ height: 20, width: 20, marginStart: 50 }} />
                    <Image source={require('./images/delete.png')} style={{ height: 20, width: 20, marginEnd: 20 }} />
                </View>


                <View style={{ flexDirection: 'row', marginTop: 10, marginStart: 10 }}>

                    <View style={{ flexDirection: 'row', borderColor: '#F0F0F8', borderWidth: 1, padding: 5, borderRadius: 10 }}>

                        <Image source={require('./images/Vector.png')} style={{ height: 10, width: 10 }} />
                        <Text style={{ textAlign: 'center', color: 'black', marginStart: 10, fontSize: 7 }}>{response.type}</Text>

                    </View>

                    <View style={{ marginStart: 10, flexDirection: 'row', borderColor: '#F0F0F8', borderWidth: 1, padding: 5, borderRadius: 10 }}>

                        <Image source={require('./images/dog.png')} style={{ height: 10, width: 10 }} />
                        <Text style={{ textAlign: 'center', color: 'black', marginStart: 10, fontSize: 7 }}>{response.breed}</Text>

                    </View>

                </View>



                <View style={{ flexDirection: 'row', marginTop: 10, marginStart: 10 }}>

                    <View style={{ flexDirection: 'row', borderColor: '#F0F0F8', borderWidth: 1, padding: 5, borderRadius: 10 }}>

                        <Image source={require('./images/gender.png')} style={{ height: 10, width: 10 }} />
                        <Text style={{ textAlign: 'center', color: 'black', marginStart: 10, fontSize: 7 }}>{response.gender}</Text>

                    </View>

                    <View style={{ marginStart: 10, flexDirection: 'row', borderColor: '#F0F0F8', borderWidth: 1, padding: 5, borderRadius: 10 }}>

                        <Image source={require('./images/size.png')} style={{ height: 10, width: 10 }} />
                        <Text style={{ textAlign: 'center', color: 'black', marginStart: 10, fontSize: 7 }}>100 inch</Text>

                    </View>

                </View>

                <View style={{ flexDirection: 'row', marginTop: 20, marginHorizontal: 10 }}>
                    <Text style={{ textAlign: 'center', color: 'black', marginStart: 10, fontSize: 6 }}>Neutered</Text>
                    <Text style={{ textAlign: 'center', color: 'black', marginStart: 10, fontSize: 6 }}>Vaccinated</Text>
                    <Text style={{ textAlign: 'center', color: 'black', marginStart: 10, fontSize: 6 }}>Friendly with dogs</Text>
                    <Text style={{ textAlign: 'center', color: 'black', marginStart: 10, fontSize: 6 }}>Friendly with cats</Text>

                </View>

            </View>

        </View>
    )
}

const styles = StyleSheet.create({

    Card: {
        height: 170,
        backgroundColor: 'white',
        marginHorizontal: 15,
        marginVertical: 15,
        borderRadius: 20,
        elevation: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        overflow: 'hidden',
        flex: 1
    }
})
