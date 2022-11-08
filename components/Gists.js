import React, {useEffect, useState} from "react";
import {FlatList, StyleSheet, Text, View} from "react-native";
import Gist from "./Gist";
import Loader from "./Loader";

const Gists = () => {
    const [gists, setGists] = useState([]);
    const [page, setPage] = useState(1);
    let date = new Date();
    date.setHours(0,0,0,0);

    useEffect(() => {
        date && fetchGists(date);
    }, [page]);

    const fetchGists = async (date) => {
        return await fetch(`https://api.github.com/gists/public?since=${date}&per_page=30&page=${page}`)
            .then((res) => res.json())
            .then((res) => setGists([...gists, ...res]));
    }

    const loadMoreGists = () => {
        setPage(page + 1);
    }

    return (
        <View>
            <Text style={styles.title}>Gists</Text>
            <FlatList
                data={gists}
                renderItem={({item}) => <Gist item={item} />}
                keyExtractor={gist => gist.id}
                ListFooterComponent={Loader}
                onEndReached={loadMoreGists}
                onEndReachedThreshold={1}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 20,
        backgroundColor: '#fff',
    },
    title: {
        backgroundColor: "#C8C7CC",
        paddingHorizontal: 16,
        paddingVertical: 8,
        fontSize: 15,
        fontWeight: "bold",
        fontFamily: "HelveticaNeue-Bold"
    }
});


export default Gists;