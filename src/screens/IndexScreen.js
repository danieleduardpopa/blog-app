import React, { useContext } from 'react';
import { 
    View, 
    Text, 
    StyleSheet, 
    FlatList, 
    Button ,
    TouchableOpacity
} from 'react-native';
import { Context } from '../context/BlogContext';
import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';


const IndexScreen = ({ navigation }) => {
    const { state, addBlogPost, deleteBlogPost } = useContext(Context);
    
    
    return (
        <View>
            
            <Button 
                title="Add Post"
                onPress={addBlogPost}
            />
            <FlatList 
                data={state}
                keyExtractor={(blogPost) => blogPost.title}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity onPress={() => {
                            navigation.navigate('Show', { id: item.id })
                        }}>
                            <View style={styles.rowStyle}>
                                <Text style={styles.titleStyle}>
                                    {item.title} - {item.id}
                                </Text>
                                <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
                                    <Feather name='trash' style={styles.iconStyle} />
                                </TouchableOpacity>
                            </View>
                        </TouchableOpacity>
                    );
                }}
            />
        </View>
    );
};

IndexScreen.navigationOptions = ({ navigation }) => {
    return {
        headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate('Create')}>
                <Ionicons name='add-circle-sharp' size={30} style={{ marginRight: 10 }}/>
            </TouchableOpacity>
        )
    };
}

const styles = StyleSheet.create({
    rowStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 15,
        borderTopWidth: 1,
        borderColor: 'grey',
        paddingHorizontal: 10
    },
    titleStyle: {
        fontSize: 18
    },
    iconStyle: {
        fontSize: 25
    }
});

export default IndexScreen;