import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from './Navigation'

type HomeProps = NativeStackScreenProps<RootStackParamList, 'Screen1'>




const Screen1 = ({ navigation }: HomeProps) => {

    // const handleCardPress = (imageData: any) => {
    //     navigation.push('Screen2', imageData);
    // };


    const cardData = [
        {
            imageUrl: 'https://example.com/image1.jpg',
            title: 'Image 1 Title',
            description: 'Description for Image 1...',
        },
        {
            imageUrl: 'https://example.com/image2.jpg',
            title: 'Image 2 Title',
            description: 'Description for Image 2...',
        },
        // Add more card data here...
    ];



    return (

        <View style={{ flex: 1, flexDirection: 'column' }}>

            <ScrollView showsVerticalScrollIndicator={false}>

                <Text style={{ fontSize: 22, fontWeight: 'bold', color: 'black', marginStart: 10, marginTop: 20 }}>Trending</Text>

                <View style={{ flexDirection: 'row' }}>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>

                        {/* <Text style={styles.InnerText}>One</Text> */}
                        {/* source={require('./images/img.png')}  */}
                        <Image style={[styles.Card]} source={{ uri: "https://bst.icons8.com/wp-content/themes/icons8/app/uploads/2019/05/film-poster-design.png" }} />
                        <Image style={[styles.Card]} source={require('./images/img2.png')} />
                        <Image style={[styles.Card]} source={require('./images/img3.png')} />
                        <Image style={[styles.Card]} source={require('./images/img4.png')} />


                    </ScrollView>

                </View>

                <Text style={{ fontSize: 22, fontWeight: 'bold', color: 'black', marginStart: 10, marginTop: 20 }}>Hot</Text>


                <View style={{ flexDirection: 'column', padding: 10 }}>

                    {/* 
                    <View style={[styles.Card2, styles.CardBack1]}>
                        <Text style={styles.InnerText}>One</Text>
                    </View>

                    <View style={[styles.Card2, styles.CardBack2]}>
                        <Text style={styles.InnerText} >Two</Text>
                    </View>

                    <View style={[styles.Card2, styles.CardBack3]}>
                        <Text style={styles.InnerText}>Three</Text>
                    </View>

                    <View style={[styles.Card2, styles.CardBack3]}>
                        <Text style={styles.InnerText}>Three</Text>
                    </View>
                    
 */}


                    <TouchableOpacity style={[styles.Card2]} activeOpacity={1} onPress={() => navigation.navigate('Screen2', { urls: require('./images/img.png'), title: 'The Exorcist (1973)', description: 'Horror films may incorporate incidents of physical violence and psychological terror; they may be studies of deformed, disturbed, psychotic, or evil characters.' })}>
                        <Image style={{ width: '100%', height: 160, borderTopLeftRadius: 8, borderTopRightRadius: 8 }} source={require('./images/img.png')} resizeMode="cover" />
                        <Text style={styles.InnerText}>The Exorcist (1973)</Text>
                        <Text style={{ color: 'black', marginHorizontal: 10, marginTop: 5 }} numberOfLines={2}>Horror films may incorporate incidents of physical violence and psychological terror; they may be studies of deformed, disturbed, psychotic, or evil characters.</Text>

                    </TouchableOpacity>

                    <TouchableOpacity activeOpacity={1} onPress={() => navigation.navigate('Screen2', { urls: require('./images/img2.png'), title: 'The Exorcist (1973)', description: 'Horror films may incorporate incidents of physical violence and psychological terror; they may be studies of deformed, disturbed, psychotic, or evil characters.' })}>
                        <View style={styles.Card2}>
                            <Image style={{ width: '100%', height: 160, borderTopLeftRadius: 8, borderTopRightRadius: 8 }} source={require('./images/img2.png')} resizeMode='cover' />
                            <Text style={styles.InnerText}>The Exorcist (1973)</Text>
                            <Text style={{ color: 'black', marginHorizontal: 10, marginTop: 5, }} numberOfLines={2} >Horror films may incorporate incidents of physical violence and psychological terror; they may be studies of deformed, disturbed, psychotic, or evil characters.</Text>
                        </View>

                    </TouchableOpacity>

                    <TouchableOpacity style={[styles.Card2]} activeOpacity={1} onPress={() => navigation.navigate('Screen2', { urls: require('./images/img3.png'), title: 'The Exorcist (1973)', description: 'Horror films may incorporate incidents of physical violence and psychological terror; they may be studies of deformed, disturbed, psychotic, or evil characters.' })}>
                        <Image style={{ width: '100%', height: 160, borderTopLeftRadius: 8, borderTopRightRadius: 8 }} source={require('./images/img3.png')} resizeMode="cover" />
                        <Text style={styles.InnerText}>The Exorcist (1973)</Text>
                        <Text style={{ color: 'black', marginHorizontal: 10, marginTop: 5 }} numberOfLines={2}>Horror films may incorporate incidents of physical violence and psychological terror; they may be studies of deformed, disturbed, psychotic, or evil characters.</Text>


                    </TouchableOpacity>

                    <TouchableOpacity style={[styles.Card2]} activeOpacity={1} onPress={() => navigation.navigate('Screen2', { urls: require('./images/img4.png'), title: 'The Exorcist (1973)', description: 'Horror films may incorporate incidents of physical violence and psychological terror; they may be studies of deformed, disturbed, psychotic, or evil characters.' })}>
                        <Image style={{ width: '100%', height: 160, borderTopLeftRadius: 8, borderTopRightRadius: 8 }} source={require('./images/img4.png')} resizeMode="cover" />
                        <Text style={styles.InnerText}>The Exorcist (1973)</Text>
                        <Text style={{ color: 'black', marginHorizontal: 10, marginTop: 5 }} numberOfLines={2}>Horror films may incorporate incidents of physical violence and psychological terror; they may be studies of deformed, disturbed, psychotic, or evil characters.</Text>


                    </TouchableOpacity>


                    {/* <Image style={[styles.Card2]} source={require('./images/img2.png')} resizeMode='cover' />
                    <Image style={[styles.Card2]} source={require('./images/img3.png')} resizeMode="cover" />
                    <Image style={[styles.Card2]} source={require('./images/img4.png')} resizeMode="cover" /> */}

                </View>
            </ScrollView>

        </View >



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

export default Screen1