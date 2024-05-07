import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet } from 'react-native';
import { styles } from '../AppComponents/styles'
import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';

export default function ModalScreen() {
  return (
    // <view>
//     <View style={styles.titleContainer}>
//     <Text style={styles.titleText}>Scan Your Receipt</Text>
// </View>

<View style={styles.textContainer}>
<View style={styles.titleContainer}>
                <Text style={[styles.text, { fontSize: 35, color: 'white' }]}>Receipt History</Text>
                <Text style={[styles.text, { fontSize: 80 }]}></Text>
            </View>
            <Text style={styles.text}>-   Simple as a Snap: Hold your phone steady and capture a clear picture of your receipt.</Text>
            <Text style={styles.text}>-   Focus on Details: Ensure the entire receipt is visible within the frame, including the merchant name, date, and amount.</Text>
           <Text style={styles.text}>-   Multiple Angles? No Problem!: If the receipt is long, take multiple pictures and we'll stitch them together for you.</Text>
</View>

  );
}


