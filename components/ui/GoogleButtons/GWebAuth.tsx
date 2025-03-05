import { Platform, View } from 'react-native'
import { useEffect } from "react";
import { GoogleAuth } from '@/protected/types/types';

const GoogleWebButton: React.FC<GoogleAuth> = ({
  scriptSrc,
  onPress,
}) => {
    useEffect(() => {
      if (Platform.OS === 'web') { // Only run on web
        const script = document.createElement("script");
        //script.src = "https://accounts.google.com/gsi/client";
        script.src = scriptSrc;
        script.async = true;
        script.onload = onPress;
        document.body.appendChild(script);
      }
    }, []);

  return Platform.OS === 'web' ? <View id="buttonDiv" /> : null;
};

export { GoogleWebButton }