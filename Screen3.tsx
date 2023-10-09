import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import CustomCard from './CustomCard'


const Screen3 = () => {
    let a = { name: "Tory", image: require('./images/img.png'), type: 'Dog', breed: 'Husky', gender: 'Male' }
    let b = { name: "Night", image: require('./images/img2.png'), type: 'Dog', breed: 'German Shepard', gender: 'female' }
    let c = { name: "Sky", image: require('./images/img3.png'), type: 'Dog', breed: 'Labrador', gender: 'Male' }
    let d = { name: "Day", image: require('./images/img4.png'), type: 'Dog', breed: 'Husky', gender: 'female' }
    let e = { name: "Day", image: require('./images/delete.png'), type: 'Dog', breed: 'Husky', gender: 'female' }
    return (
        <View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <CustomCard obj={a} />
                <CustomCard obj={b} />
                <CustomCard obj={c} />
                <CustomCard obj={d} />
                <CustomCard obj={e} />

            </ScrollView>
        </View>
    )
}

export default Screen3