import React, { useState, useContext } from 'react';
import { View, Text, TextInput, StyleSheet, Button } from 'react-native';
import { Context } from '../context/BlogContext';
import BlogPostForm from '../components/BlogPostForm';

const CreateScreen = ({ navigation }) => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const { addBlogPost } = useContext(Context);

    const onPressButton = () => {
        addBlogPost(title, content, () => {
            navigation.navigate('Index');
        });
    }
    return (
        <BlogPostForm 
            titleLabel='Enter Title'
            contentLabel='Enter Content'
            title={title}
            setTitle={setTitle}
            content={content}
            setContent={setContent}
            buttonOnPress={onPressButton}
            buttonLabel='ADD POST'
        />
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