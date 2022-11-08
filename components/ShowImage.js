import React, {useEffect} from "react";
import {Modal, View, StyleSheet, Image} from "react-native";

const ShowImage = ({modalVisible, setModalVisible, image}) => {

    useEffect(() => {
        setTimeout(() => setModalVisible(false), 1000);
    }, [modalVisible]);

    return (
        <View style={styles.centeredView}>
            <Modal
                animationType="fade"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => setModalVisible(false)}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Image
                            source={{ uri: image }}
                            style={styles.image}
                            resizeMode="center"
                        />
                    </View>
                </View>
            </Modal>
        </View>
    );
}

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    image: {
        margin: 10,
        width: 100,
        height: 100
    },
});


export default ShowImage;