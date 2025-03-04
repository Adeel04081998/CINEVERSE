import svgs from '@assets/svgs';
import { appColors } from '@theme/colors';
import fonts from '@theme/fonts';
import React from 'react';
import { View, Text, StyleSheet, ViewStyle, TextStyle, ActivityIndicator } from 'react-native';
import { SvgXml } from 'react-native-svg';

interface NestableHeaderProps {
    isVisible?: boolean; // The text to display in the header
    Containerstyle?: ViewStyle; // Optional custom styles for the container
    indicatorSize?: number | string,
    color?:string


}

const Loader: React.FC<NestableHeaderProps> = ({ isVisible = false, Containerstyle, indicatorSize = 20 ,color=appColors.purpleHexShade}) => {
    return (
        <View style={[styles.container, Containerstyle]}>
            {isVisible && <ActivityIndicator size={indicatorSize} color={color} />}

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },

});

export default Loader;
