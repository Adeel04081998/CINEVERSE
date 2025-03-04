import React from 'react'
import { Dimensions, FlatList, ImageBackground, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import Header from '@components/organisms/Header'
import Loader from '@components/molecules/Loader'
import { appColors } from '@theme/colors'
import fonts from '@theme/fonts'
import { IMAGE_BASE_URL, PLACEHOLDER_IMAGE } from '@constants/constants'
import useWatchLogic from './WatchLogic'

const { width } = Dimensions.get('window');

const WatchScreen = () => {
    const { movies, loading, handleSearchPress, handleMoviePress } = useWatchLogic();

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "rgba(255, 255, 255, 1)", overflow: 'hidden' }}>
            <Header title={'Watch'}
                titleStyle={{ color: appColors.Standardblack }}
                isSearchActive={false} onSearchPress={handleSearchPress} />
            <View style={{ flex: 1, backgroundColor: appColors.SecondaryBg }}>
                {loading ? (
                    <Loader isVisible={loading} indicatorSize={34} />
                ) : (
                    <FlatList
                        data={movies}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={({ item }) => (
                            <TouchableOpacity style={styles.movieContainer} onPress={() => handleMoviePress(item.id)}>
                                <ImageBackground
                                    source={{ uri: item.poster_path ? `${IMAGE_BASE_URL}${item.poster_path}` : PLACEHOLDER_IMAGE }}
                                    style={styles.movieImage}
                                >
                                    <LinearGradient
                                        colors={["rgba(0, 0, 0, 0)", "rgba(0, 0, 0, 1)"]}
                                        style={styles.labelContainer}
                                    >
                                        <Text style={styles.movieTitle}>{item.title}</Text>
                                    </LinearGradient>
                                </ImageBackground>
                            </TouchableOpacity>
                        )}
                    />
                )}
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    movieContainer: {
        width: width - 40,
        height: 180,
        borderRadius: 10,
        marginVertical: 10,
        alignSelf: "center",
        overflow: "hidden",
    },
    movieImage: {
        width: "100%",
        height: "100%",
        borderRadius: 10,
    },
    labelContainer: {
        position: "absolute",
        bottom: 0,
        width: "100%",
        height: 70,
        justifyContent: 'center',
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        alignContent: 'center',
        alignSelf: 'center',
    },
    movieTitle: {
        color: appColors.standardWhite,
        fontSize: 18,
        fontWeight: "500",
        marginHorizontal: 5,
        fontFamily: fonts.family.PoppinsExtraBold
    },
})

export default WatchScreen
