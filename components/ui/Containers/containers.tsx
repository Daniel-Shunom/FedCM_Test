import { Children, ReactNode } from "react";
import { View, Image, Text, ImageSourcePropType, Platform } from "react-native"
import { FiboContainerStyle } from "./styles";

interface FiboContainerProps {
    text?: string;
    img?: ImageSourcePropType;
    children?: ReactNode;

}

export const FiboContainer:React.FC<FiboContainerProps> = ({
    text,
    img,
    children
}) =>  {

    return (
        <View style={
            FiboContainerStyle.web ? 
            Platform.OS == 'web' :
            FiboContainerStyle.mobile
        }
        >
            {text && <Text>{text}</Text>}
            {img && <Image source={img}/>}
            {children}
        </View>
    )
} 