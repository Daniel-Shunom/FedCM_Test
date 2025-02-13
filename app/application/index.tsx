/*
Daniel SJ
Feb 12 2024

Description: AI generated boilerplate code for post login screen
Note: No componenets here have any functionality. They just serve
as placeholders.
*/


import { View, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Colors } from '@/constants/Colors';
import { useRouter } from 'expo-router';

export default function HomeScreen() {
    const colorScheme = useColorScheme();
    const router = useRouter();
    const backgroundColor = colorScheme === 'dark' ? Colors.dark.background : Colors.light.background;
    const boxBackground = colorScheme === 'dark' ? '#1E1E1E' : '#ffffff';
    const actionButtonBackground = colorScheme === 'dark' ? '#2D2D2D' : '#f0f0f0';

    return (
        <ScrollView style={[styles.container, { backgroundColor }]}>
            <ThemedView style={styles.header}>
                <View>
                    <ThemedText style={styles.welcomeText}>Welcome Back!</ThemedText>
                    <ThemedText style={styles.subText}>Let's explore what's new today</ThemedText>
                </View>
                <TouchableOpacity 
                    style={styles.logoutButtonHeader}
                    onPress={() => router.replace('/')}
                >
                    <ThemedText style={styles.logoutText}>Logout</ThemedText>
                </TouchableOpacity>
            </ThemedView>

            <View style={styles.bentoGrid}>
                {/* Quick Actions Bento Box */}
                <TouchableOpacity style={[styles.bentoBox, styles.boxLarge, { backgroundColor: boxBackground }]}>
                    <ThemedText style={styles.boxTitle}>Quick Actions</ThemedText>
                    <View style={styles.actionButtons}>
                        <TouchableOpacity style={[styles.actionButton, { backgroundColor: actionButtonBackground }]}>
                            <ThemedText>Start New Project</ThemedText>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.actionButton, { backgroundColor: actionButtonBackground }]}>
                            <ThemedText>View Reports</ThemedText>
                        </TouchableOpacity>
                    </View>
                </TouchableOpacity>

                {/* Statistics Bento Box */}
                <TouchableOpacity style={[styles.bentoBox, styles.boxSmall, { backgroundColor: boxBackground }]}>
                    <ThemedText style={styles.boxTitle}>Statistics</ThemedText>
                    <ThemedText style={styles.statsNumber}>12</ThemedText>
                    <ThemedText style={styles.statsLabel}>Active Projects</ThemedText>
                </TouchableOpacity>

                {/* Notifications Bento Box */}
                <TouchableOpacity style={[styles.bentoBox, styles.boxMedium, { backgroundColor: boxBackground }]}>
                    <ThemedText style={styles.boxTitle}>Recent Updates</ThemedText>
                    <View style={styles.notificationList}>
                        <ThemedText style={styles.notification}>• New feature available</ThemedText>
                        <ThemedText style={styles.notification}>• 2 tasks due today</ThemedText>
                    </View>
                </TouchableOpacity>

                {/* Resources Bento Box */}
                <TouchableOpacity style={[styles.bentoBox, styles.boxMedium, { backgroundColor: boxBackground }]}>
                    <ThemedText style={styles.boxTitle}>Resources</ThemedText>
                    <ThemedText style={styles.resourceText}>Access documentation, guides, and help</ThemedText>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        padding: 24,
        marginBottom: 16,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        position: 'relative',
    },
    welcomeText: {
        fontSize: 32,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    subText: {
        fontSize: 16,
        opacity: 0.7,
    },
    logoutButtonHeader: {
        backgroundColor: '#A1CEDC',
        paddingHorizontal: 16,
        paddingVertical: 8,
        borderRadius: 8,
    },
    logoutText: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#000',
    },
    bentoGrid: {
        padding: 16,
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 16,
    },
    bentoBox: {
        borderRadius: 16,
        padding: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 3,
    },
    boxLarge: {
        width: '100%',
        minHeight: 180,
    },
    boxMedium: {
        width: '48%',
        minHeight: 140,
    },
    boxSmall: {
        width: '48%',
        minHeight: 140,
    },
    boxTitle: {
        fontSize: 18,
        fontWeight: '600',
        marginBottom: 12,
    },
    actionButtons: {
        flexDirection: 'column',
        gap: 12,
    },
    actionButton: {
        padding: 12,
        borderRadius: 8,
        alignItems: 'center',
    },
    statsNumber: {
        fontSize: 36,
        fontWeight: 'bold',
        marginVertical: 8,
    },
    statsLabel: {
        fontSize: 14,
        opacity: 0.7,
    },
    notificationList: {
        gap: 8,
    },
    notification: {
        fontSize: 14,
        opacity: 0.8,
    },
    resourceText: {
        fontSize: 14,
        opacity: 0.8,
        lineHeight: 20,
    },
});