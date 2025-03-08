import { TouchableOpacity, Image, Text, Platform } from 'react-native'
import { GoogleSignInButtonProps } from '@/components/types/AuthButtons/types';
import { styles } from './styles'

const Google = require('@/assets/buttons/Google/Google-Logo.wine.png')

const GoogleMobileSignin: React.FC<GoogleSignInButtonProps> = ({ onPress }) => {
  if (Platform.OS === 'web') {
    return null;
  }

  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Image
        source={Google} // Path to your Google icon
        style={styles.icon}
      />
      
    </TouchableOpacity>
  );
};

export { GoogleMobileSignin }