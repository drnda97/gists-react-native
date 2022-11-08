import {ActivityIndicator, StyleSheet, View} from "react-native";

const Loader = () => {
    return (
        <View style={styles.container}>
            <ActivityIndicator size={"large"} color={"#C8C7CC"}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 15,
        paddingVertical: 15,
    },
});


export default Loader;