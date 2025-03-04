import React from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ViewStyle, TextStyle } from "react-native";
import { SvgXml } from "react-native-svg";
import svgs from "@assets/svgs";
import { appColors } from "@theme/colors";
import fonts from "@theme/fonts";

interface HeaderProps {
    title?: string;
    isSearchActive?: boolean;
    searchVal?: string;
    onSearchPress?: () => void;
    onSearchChange?: (text: string) => void;
    onSearchClose?: () => void;
    showBackIcon?: boolean;
    onBackPress?: () => void;
    containerStyle?: ViewStyle;
    titleStyle?: TextStyle;
    searchInputStyle?: TextStyle;
    backButtonStyle?: ViewStyle;
}

const Header: React.FC<HeaderProps> = ({
    title,
    isSearchActive,
    searchVal,
    onSearchPress,
    onSearchChange,
    onSearchClose,
    showBackIcon,
    onBackPress,
    containerStyle,
    titleStyle,
    searchInputStyle,
    backButtonStyle,
}) => {
    return (
        <View style={[styles.container, containerStyle]}>
            {showBackIcon ? (
                <View style={[styles.backContainer, backButtonStyle]}>
                    <TouchableOpacity onPress={onBackPress}>
                        <SvgXml xml={svgs.BackIcon(appColors.standardWhiteHex)} />
                    </TouchableOpacity>
                    <Text style={[styles.title, titleStyle]}>{title}</Text>
                </View>
            ) : isSearchActive ? (
                <View style={styles.searchContainer}>
                    <SvgXml xml={svgs.SearchIcon()} />
                    <TextInput
                        style={[styles.searchInput, searchInputStyle]}
                        placeholder="TV shows, movies and more"
                        onChangeText={onSearchChange}
                        value={searchVal}
                        autoFocus
                    />
                    <TouchableOpacity onPress={onSearchClose}>
                        <SvgXml xml={svgs.CrossIcon()} />
                    </TouchableOpacity>
                </View>
            ) : (
                <>
                    <Text style={[styles.title, titleStyle]}>{title}</Text>
                    <TouchableOpacity onPress={onSearchPress}>
                        <SvgXml xml={svgs.SearchIcon()} />
                    </TouchableOpacity>
                </>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        padding: 16,
        backgroundColor: "white",
    },
    backContainer: {
        flexDirection: "row",
        alignItems: "center",
        width: 90,
        top: 55,
        zIndex: 99,
    },
    title: {
        fontSize: 16,
        fontWeight: "500",
        marginLeft: 8,
        lineHeight: 20,
        color: appColors.standardWhiteHex,
        fontFamily: fonts.family.PoppinsMedium,
    },
    searchContainer: {
        flexDirection: "row",
        alignItems: "center",
        flex: 1,
        backgroundColor: appColors.SecondaryBg,
        borderRadius: 30,
        paddingHorizontal: 8,
        width: 334,
        height: 52,
        borderWidth: 1,
        borderColor: appColors.commonBorder,
    },
    searchInput: {
        flex: 1,
        padding: 8,
        borderWidth: 0,
    },
});

export default Header;
