import React from 'react';
import {FlatList,StyleSheet,TouchableOpacity} from "react-native";
import Cover from "../screens/Cover"

const CoverList = ({images}) => {
    const renderCover = ({item}) => {
        return(
            <TouchableOpacity>
                <Cover small image={item.imagesSrc}/>
            </TouchableOpacity>
        );
    };
    return(
        <FlatList
            data={images}
            horizontal={true}
            renderItem={(item) => renderCover(item)}
            keyExtractor={item => item.id}
        />
    )
}

const styles = StyleSheet.create({

});

export default CoverList;