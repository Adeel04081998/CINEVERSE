import { Platform } from "react-native";
const Poppins = {
    PoppinsBlack: "Poppins-Black",
    PoppinsBlackItalic: "Poppins-BlackItalic",
    PoppinsBold: "Poppins-Bold",
    PoppinsBoldItalic: "Poppins-BoldItalic",
    PoppinsExtraBold: "Poppins-ExtraBold",
    PoppinsExtraBoldItalic: "Poppins-ExtraBoldItalic",
    PoppinsExtraLight: "PoppinsExtraLight",
    PoppinsExtraLightItalic: "PoppinsExtraLightItalic",
    PoppinsItalic: "Poppins-Italic",
    PoppinsLight: "Poppins-Light",
    PoppinsLightItalic: "Poppins-LightItalic",
    PoppinsMedium: "Poppins-Medium",
    PoppinsMediumItalic: "Poppins-MediumItalic",
    PoppinsRegular: "Poppins-Regular",
    PoppinsSemiBold:"Poppins-SemiBold",
    PoppinsSemiBoldItalic:"Poppins-SemiBoldItalic",
    PoppinsThin:"Poppins-Thin",
    PoppinsThinItalic:"Poppins-ThinItalic",



}
const Weight = {
    "100":'100',
    "200":'200',
    "300":'300',
    "400":'400',
    "500":'500',
    "bold":'bold',


}


export default {
    // Poppins: Platform.OS === "ios" ? IOS_OBJ : ANDROID_OBJ,
    family: Poppins,
    Weight:Weight
}//end of EXPORT DEFAULT