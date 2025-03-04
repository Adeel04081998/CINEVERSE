import React from "react";
import { View, Text, Image, TouchableOpacity, ScrollView, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import LinearGradient from "react-native-linear-gradient";
import { appColors } from "@theme/colors";
import fonts from "@theme/fonts";
import { IMAGE_BASE_URL, PLACEHOLDER_IMAGE } from "@constants/constants";
import Loader from "@components/molecules/Loader";
import Header from "@components/organisms/Header";
import { goBack } from "@navigation/NavigationService";
import { useMovieDetails } from "./MovieDetail";

const MovieDetailScreen = ({ route }) => {
  const { movieId } = route.params;
  const { movie, trailerUrl, loading } = useMovieDetails(movieId);

  if (loading) {
    return <Loader isVisible={loading} indicatorSize="large" />;
  }

  return (
    <>
      <Header showBackIcon={true} title="Watch" onBackPress={() => goBack()} />
      <ScrollView>
        <View style={styles.posterContainer}>
          <Image
            source={{ uri: movie?.poster_path ? `${IMAGE_BASE_URL}${movie.poster_path}` : PLACEHOLDER_IMAGE }}
            style={styles.posterImage}
            resizeMode="cover"
          />
          <LinearGradient colors={["rgba(0,0,0,0)", "#000"]} style={styles.overlay}>
            <View style={{
              width: '100%', justifyContent: 'center', alignItems: 'center', gap: 10, paddingBottom: 10

            }}>
              <Text style={styles.movieTitle}>{movie?.title}</Text>
              <Text style={styles.releaseDate}>In Theaters {movie?.release_date}</Text>
              <TouchableOpacity style={styles.buttonPrimary}>
                <Text style={styles.buttonText}>Get Tickets</Text>
              </TouchableOpacity>
              {trailerUrl && (
                <TouchableOpacity style={styles.buttonSecondary}>
                  <Text style={styles.buttonText}>▶ Watch Trailer</Text>
                </TouchableOpacity>
              )}
            </View>

          </LinearGradient>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Genres</Text>
          <View style={styles.genreContainer}>
            {movie?.genres.map((genre) => (
              <View key={genre.id} style={[styles.genreBadge, { backgroundColor: getGenreColor(genre.name) }]}>
                <Text style={styles.genreText}>{genre.name}</Text>
              </View>
            ))}
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Overview</Text>
          <Text style={styles.overviewText}>{movie?.overview}</Text>
        </View>
      </ScrollView>
    </>
  );
};

const getGenreColor = (genre: string) => {
  return appColors.genreColors[genre] || "#95a5a6";
};

const styles = StyleSheet.create({
  posterContainer: { position: "relative" },
  posterImage: { width: "100%", height: 450 },
  overlay: { position: "absolute", bottom: 0, width: "100%", alignItems: "center" },
  movieTitle: { color: "#fff", fontSize: 24, fontWeight: "bold" },
  releaseDate: { color: appColors.standardWhite, fontSize: 16, marginVertical: 5, fontWeight: "500" },
  buttonPrimary: { backgroundColor: "#3498db", padding: 12, borderRadius: 8, width: "80%", alignItems: "center" },
  buttonSecondary: { borderColor: "#fff", borderWidth: 2, padding: 12, borderRadius: 8, width: "80%", alignItems: "center" },
  buttonText: { color: "#fff", fontSize: 14, fontWeight: "600", fontFamily: fonts.family.PoppinsExtraBold },
  section: { padding: 20 },
  sectionTitle: { fontSize: 16, fontWeight: "600", marginBottom: 10, fontFamily: fonts.family.PoppinsBlack, color: appColors.Standardblack },
  genreContainer: { flexDirection: "row", flexWrap: "wrap" },
  genreBadge: { paddingHorizontal: 10, paddingVertical: 5, borderRadius: 20, marginRight: 8, marginBottom: 8 },
  genreText: { color: appColors.standardWhite, fontSize: 12, fontWeight: "600", fontFamily: fonts.family.PoppinsMedium },
  overviewText: { fontSize: 12, fontWeight: "400", color: appColors.lightGrey, fontFamily: fonts.family.PoppinsMedium },
});

export default MovieDetailScreen;
