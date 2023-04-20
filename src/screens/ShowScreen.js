import React, { useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Context } from '../context/BlogContext';
import { MaterialIcons } from '@expo/vector-icons';


const ShowScreen = ({ navigation }) => {
    const { state } = useContext(Context);

    const blogPost = state.find(
        (blogPost) => blogPost.id === navigation.getParam('id')
    );
    
    return (
        <View>
            <Text style={styles.titleStyle}>{blogPost.title.toUpperCase()}:</Text>
            <Text style={styles.contentStyle}>{blogPost.content}</Text>
        </View>
    );
};

ShowScreen.navigationOptions = ({ navigation }) => {
    return {
        headerRight: () => (
            <TouchableOpacity 
                onPress={() => navigation.navigate(
                    'Edit', { id: navigation.getParam('id') }
                )}
            >
                <MaterialIcons name='edit' size={30} style={{ marginRight: 10 }} />
            </TouchableOpacity>
        )
    };
};

const styles = StyleSheet.create({
    titleStyle: {
        fontSize: 20,
        marginLeft: 5,
        marginBottom: 15,
        marginTop: 10
        
    },
    contentStyle: {
        fontSize: 16,
        marginHorizontal: 5,
        padding: 10,
        borderWidth: 1,
        borderRadius: 4,
        borderColor: 'black'
    }
});

export default ShowScreen;