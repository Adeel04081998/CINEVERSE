import React from 'react';
import { FlatList, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Header from '@components/organisms/Header';
import Loader from '@components/molecules/Loader';
import LinearGradient from 'react-native-linear-gradient';
import { appColors } from '@theme/colors';
import { goBack } from '@navigation/NavigationService';
import { PLACEHOLDER_IMAGE, useSearchCategories } from './SearchCategoriesLogic';
import { IMAGE_BASE_URL } from '@constants/constants';

interface SearchCategoriesScreenProps {
  route: {
    params: {
      data: Movie[];
    };
  };
}

const SearchCategoriesScreen: React.FC<SearchCategoriesScreenProps> = ({ route }) => {
  const { data } = route.params;

  const { loading, filteredMovies, searchText, handleSearch, setFilteredMovies, setSearchText } = useSearchCategories(data);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "rgba(255, 255, 255, 1)", overflow: 'hidden' }}>
      <Header
        isSearchActive={true}
        searchVal={searchText}
        onSearchChange={handleSearch}
        onSearchClose={() => {
          setSearchText('');
          setFilteredMovies(data);
          goBack();
        }}
      />

      <View style={{ flex: 1, backgroundColor: appColors.SecondaryBg }}>
        {loading ? (
          <Loader isVisible={loading} indicatorSize={34} />
        ) : (
          <FlatList
            data={filteredMovies}
            keyExtractor={(item) => item.id.toString()}
            numColumns={2}
            contentContainerStyle={styles.gridContainer}
            renderItem={({ item }) => (
              <TouchableOpacity style={styles.categoryItem}>
                <Image
                  source={{ uri: item.poster_path ? `${IMAGE_BASE_URL}${item.poster_path}` : PLACEHOLDER_IMAGE }}
                  style={styles.categoryImage}
                />
                <LinearGradient colors={["rgba(0,0,0,0)", "#000"]} style={styles.labelContainer}>
                  <Text style={styles.categoryTitle}>{item.title}</Text>
                </LinearGradient>
              </TouchableOpacity>
            )}
          />
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  categoryTitle: {
    color: "white",
    fontSize: 14,
    fontWeight: "bold",
    marginHorizontal: 8
  },
  gridContainer: {
    paddingHorizontal: 10,
    paddingBottom: 80,
  },
  categoryItem: {
    flex: 1,
    margin: 8,
    borderRadius: 10,
    overflow: "hidden",
  },
  categoryImage: {
    width: "100%",
    height: 120,
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
  },
});

export default SearchCategoriesScreen;
