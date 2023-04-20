import React from 'react';
import { 
    View, 
    Text, 
    TextInput, 
    StyleSheet ,
    Button
} from 'react-native';

const BlogPostForm = ({ 
    titleLabel, 
    contentLabel,
    title,
    setTitle,
    content,
    setContent,
    buttonLabel,
    buttonOnPress
}) => {
    return (
        <View>
            <Text style={styles.labelStyle}>{titleLabel}</Text>
            <TextInput 
                value={title}
                onChangeText={(text) => setTitle(text.toUpperCase())}
                style={styles.inputStyle}
            />
            <Text style={styles.labelStyle}>{contentLabel}</Text>
            <TextInput 
                value={content}
                onChangeText={setContent}
                style={styles.inputStyle}
            />
            <Button 
                title={buttonLabel}
                onPress={buttonOnPress}
            />
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

export default BlogPostForm;