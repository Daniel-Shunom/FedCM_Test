import { View, TouchableOpacity, Text } from "react-native";
import { Switch } from "react-native-web";

export interface ButtonProps {
    BorderRadius?: number | string;
    Color?: string;
    Size?: "small" | "medium" | "large";
    Width?: number | string;
    funcPress?:()=> {} | void | undefined
    Content: string;
}

export const FiboButton:React.FC<ButtonProps> = ({
    BorderRadius = 8,
    Color = '#fff',
    Width,
    Content = 'fibo button',
    funcPress,
    Size = 'medium'
}) => {
    const DefaultSize = () => {
        switch (Size) {
            case "small":
                return 250
            case "medium":
                return 450
            case "large":
                return 650
        }
    };

    return (
        <TouchableOpacity 
            style={{
                color: Color, 
                width: (Width ? Width : DefaultSize()), 
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