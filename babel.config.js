module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
 
    [
        'module-resolver',
        {
            root: ['./src'],

            alias: {
                '@assets': './src/assets',
                '@components': './src/components',
                '@redux': './src/redux',
                '@screens': './src/screens',
                '@utils': './src/utils',
                '@custom-types': './src/types',
                '@network': './src/network',
                '@constants': './src/constants',
                '@navigation': './src/navigation',
                '@manager': './src/manager',
                '@hooks': './src/hooks',
                '@theme': './src/theme',
                '@styles': './src/styles',
                '@helpers': './src/helpers',
                '@authScreens': './src/screens/AuthStackScreen',
                '@tabScreens': './src/screens/TabStackScreen',

                





            },
        },
    ],
],
};
