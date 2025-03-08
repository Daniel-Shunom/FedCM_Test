import { View, TouchableOpacity, Text } from "react-native";

export interface ButtonProps {
    BorderRadius?: number | string;
    Color?: string;
    Size?: "small" | "medium" | "large";
    Width?: number | string;
    funcPress?:(()=> void) | void;
    Content: string;
}

export const FiboButton:React.FC<ButtonProps> = ({
    BorderRadius,
    Color,
    Width,
    Content,
    funcPress
}) => {
    return (
        <TouchableOpacity 
            style={{
                color: Color, 
                width: Width, 
                borderRadius: BorderRadius,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: Color,
                //borderRadius: 8,
                paddingVertical: 12,
                paddingHorizontal: 16,
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.2,
                shadowRadius: 2,
                elevation: 3,
                gap: 8,
                margin: 4
            }}
            onPress={funcPress}
        >
            <Text>
                {Content}
            </Text>
        </TouchableOpacity>
    )
}