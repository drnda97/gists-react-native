import React, {useState} from "react";
import {Image, Pressable, StyleSheet, Text, View} from "react-native";
import ShowImage from "./ShowImage";

const Gist = ({item}) => {
    const [modalVisible, setModalVisible] = useState(false);

    const showModal = () => {
        setModalVisible(true);
    }

    const name = Object.values(item.files)[0];

    return (
        <Pressable  style={styles.itemContainer} onPress={showModal}>
            <Image
                source={{ uri: item.owner.avatar_url }}
                style={styles.image}
                resizeMode="center"
            />
            <View style={styles.text}>
                <Text style={styles.text}>{name && name.filename}</Text>
            </View>
            <ShowImage modalVisible={modalVisible} setModalVisible={setModalVisible} image={item.owner.avatar_url}/>
        </Pressable >
    )
}
const styles = StyleSheet.create({
    itemContainer: {
        flexDirection: "row",
        paddingHorizontal: 10,
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderColor: "#C8C7CC"
    },
    image: {
        margin: 10,
        width: 50,
        height: 50
    },
    text: {
        justifyContent: "center",
        fontSize: 15,
        marginLeft: 10,
        fontFamily: "HelveticaNeue",
        width: "80%"
    }
});

export default Gist;