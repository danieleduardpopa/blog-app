import React, { useContext, useState } from 'react';
import { 
    View, 
    Text, 
    TextInput, 
    StyleSheet ,
    Button
} from 'react-native';
import { Context } from '../context/BlogContext';
import BlogPostForm from '../components/BlogPostForm';

const EditScreen = ({ navigation }) => {
    const { state, editBlogPost } = useContext(Context);
    
    const blogPost = state.find(
        blogPost => blogPost.id === navigation.getParam('id')
    );
        
    const [title, setTitle] = useState(blogPost.title);
    const [content, setContent] = useState(blogPost.content);

    const onPressButton = () => {
        editBlogPost(navigation.getParam('id'), title, content, () => {
            navigation.pop()
        })
    };
    
    return (
        <BlogPostForm 
            titleLabel='Enter New Title'
            contentLabel='Enter New Content'
            title={title}
            setTitle={setTitle}
            content={content}
            setContent={setContent}
            buttonLabel='Submit edit'
            buttonOnPress={onPressButton}
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

export default EditScreen;