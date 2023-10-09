import React from 'react';
import { View, ToastAndroid, StyleSheet, Button, Alert, ActionSheetIOS } from 'react-native';

const showToast = () => {
    ToastAndroid.show('PLz do not click this button', ToastAndroid.SHORT);
}

const showAlert = () =>
    Alert.alert(
        'Alert Title',
        'My Alert Msg',
        [
            {
                text: 'Cancel',
                style: 'cancel',
            },
        ],
        {
            cancelable: true,
            onDismiss: () =>
                Alert.alert(
                    'This alert was dismissed by tapping outside of the alert dialog.',
                ),
        },
    );

const Dialog = () => (

    <View style={styles.container}>
        <Button title="Simple alert" onPress={showToast} />
    </View>
);

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 30,
        marginTop: 30
    },
});

export default Dialog;
