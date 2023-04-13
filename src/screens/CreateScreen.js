import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Button } from 'react-native';

const CreateScreen = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    
    return (
        <View>
            <Text style={styles.labelStyle}>Enter Title</Text>
            <TextInput 
                value={title}
                onChangeText={setTitle}
                style={styles.inputStyle}
            />
            <Text style={styles.labelStyle}>Enter Content</Text>
            <TextInput 
                value={content}
                onChangeText={setContent}
                style={styles.inputStyle}
            />
            <Button title='Add Post'/>
        </View>
    );
};

const styles = StyleSheet.create({
    inputStyle: {
        fontSize: 18,
        borderWidth: 1,
        borderRadius: 4,
        borderColor: 'black',
        marginHorizontal: 5,
        marginBottom: 15,
        padding: 5
    },
    labelStyle: {
        fontSize: 20,
        marginBottom: 6,
        marginLeft: 5
    }
});

export default CreateScreen;