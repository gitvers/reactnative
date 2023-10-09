import { View, Text, Image, ScrollView, StyleSheet } from 'react-native'
import React from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from './Navigation'
import { useRoute } from '@react-navigation/native'


type HomeProps = NativeStackScreenProps<RootStackParamList, 'Screen2'>


const Screen2 = ({ navigation }: HomeProps) => {

    const route = useRoute();
    const t: any = route.params;
    const image = require('./images/img.png');
    return (
        <View>

            <ScrollView>
                <Image style={{ width: '100%', height: 300, backgroundColor: 'black' }} source={t.urls} resizeMode="cover" />
                <Text style={{ marginStart: 10, marginTop: 20, fontSize: 20, fontWeight: 'bold', color: 'black' }}>{t.title}</Text>
                <Text style={{ marginHorizontal: 10, fontSize: 15, marginTop: 20, color: 'black' }}>{t.description}</Text>


                <Text style={{ marginStart: 10, marginTop: 30, fontSize: 22, fontWeight: 'bold', color: 'black' }}>Rating & Reviews</Text>

                

                <Text style={{ marginStart: 10, marginTop: 30, fontSize: 22, fontWeight: 'bold', color: 'black' }}>Related</Text>

                <View style={{ flexDirection: 'row' }}>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>

                        {/* <Text style={styles.InnerText}>One</Text> */}
                        {/* source={require('./images/img.png')}  */}
                        <Image style={[styles.Card]} source={{ uri: "https://bst.icons8.com/wp-content/themes/icons8/app/uploads/2019/05/film-poster-design.png" }} />
                        <Image style={[styles.Card]} source={require('./images/img2.png')} />
                        <Image style={[styles.Card]} source={require('./images/img3.png')} />
                        <Image style={[styles.Card]} source={require('./images/img4.png')} />
                        <Image style={[styles.Card]} source={{ uri: "https://bst.icons8.com/wp-content/themes/icons8/app/uploads/2019/05/film-poster-design.png" }} />


                    </ScrollView>

                </View>


                <View style={{ flexDirection: 'row', marginBottom: 30 }}>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>

                        {/* <Text style={styles.InnerText}>One</Text> */}
                        {/* source={require('./images/img.png')}  */}
                        <Image style={[styles.Card]} source={{ uri: "https://bst.icons8.com/wp-content/themes/icons8/app/uploads/2019/05/film-poster-design.png" }} />
                        <Image style={[styles.Card]} source={require('./images/img2.png')} />
                        <Image style={[styles.Card]} source={require('./images/img3.png')} />
                        <Image style={[styles.Card]} source={require('./images/img4.png')} />
                        <Image style={[styles.Card]} source={{ uri: "https://bst.icons8.com/wp-content/themes/icons8/app/uploads/2019/05/film-poster-design.png" }} />


                    </ScrollView>

                </View>

            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    Card: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 100,
        width: 100,
        borderRadius: 10,
        margin: 10,
    },

    Card2: {
        width: '100%',
        backgroundColor: '#fff',
        height: 250,
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 4,
        marginTop: 10,
        marginBottom: 10,
        overflow: 'hidden'

    },
    CardBack1: {
        backgroundColor: 'red'
    },
    CardBack2: {
        backgroundColor: 'blue'
    },
    CardBack3: {
        backgroundColor: 'green'
    },
    InnerText: {
        color: 'black',
        marginStart: 10,
        marginTop: 8,
        fontSize: 15,
        fontWeight: 'bold'
    }
})


export default Screen2