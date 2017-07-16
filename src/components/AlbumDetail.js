import React from 'react';
import { Text, View, Image, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

const AlbumDetail = ({ data }) => {
    const { title, artist, thumbnail_image, image, url} = data;
    const { thumbnailStyle, headerContentStyle, thumbnailContainerStyle, headerTextStyle, imageStyle } = styles;
    return(
        <Card>
            <CardSection>
            <View style = { thumbnailContainerStyle }>
                <Image style={ thumbnailStyle } source= {{ uri : thumbnail_image }} />
            </View>
            <View style={ headerContentStyle}>  
                <Text style = { headerTextStyle }>{title}</Text>
                <Text>{ artist }</Text>
            </View>
            </CardSection>
            <CardSection>
                <Image  style = { imageStyle } source = {{ uri : image }} />
            </CardSection>

            <CardSection>
                <Button link= {() => Linking.openURL(url)} >
                    Buy Now
                </Button>
            </CardSection>
        </Card>
    );
};

const styles = {
    headerContentStyle : {
        flexDirection : 'column',
        justifyContent : 'space-around' 
    },

    headerTextStyle : {
        fontSize : 20
    },

    thumbnailStyle: {
        height : 60,
        width : 50
    },

    thumbnailContainerStyle : {
        justifyContent : 'center',
        alignItems : 'center',
        marginLeft : 4,
        marginRight : 10
    },

    imageStyle : {
        flex : 1,
        height : 300,
        width : null
    }
};

export default AlbumDetail;
