import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { ThemedText } from '@/components/ThemedText';

interface ProfileSectionProps {
  session?: any;
  sessionProps?: JSON;
  name?: string;
  role?: string;
  backgroundColor: string;
  stats?: {
    courses: number;
    progress: string;
  };
}

export const ProfileSection: React.FC<ProfileSectionProps> = ({ 
  session = sessionStorage.getItem('Fibo_Session'),
  sessionProps = JSON.parse(session),
  name = sessionProps.name, 
  role = "Student",
  backgroundColor,
  stats = { courses: 12, progress: "85%" }
}) => {
  const picture = sessionProps?.picture;

  return (
    <View style={[styles.container, { backgroundColor }]}>
      <View style={styles.profileInfo}>
        <View style={styles.avatarContainer}>
          {picture ? (
            <Image source={{ uri: picture }} style={styles.avatar} />
          ) : (
            <View style={styles.avatar} /> // Fallback if no picture
          )}
        </View>
        <View style={styles.profileText}>
          <ThemedText style={styles.profileName}>{name}</ThemedText>
          <ThemedText style={styles.profileRole}>{role}</ThemedText>
        </View>
      </View>
      
      <View style={styles.profileStats}>
        <View style={styles.statItem}>
          <ThemedText style={styles.statNumber}>{stats.courses}</ThemedText>
          <ThemedText style={styles.statLabel}>Courses</ThemedText>
        </View>
        <View style={styles.statItem}>
          <ThemedText style={styles.statNumber}>{stats.progress}</ThemedText>
          <ThemedText style={styles.statLabel}>Progress</ThemedText>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 16,
    padding: 20,
    marginBottom: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  profileInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  avatarContainer: {
    width: 64,
    height: 64,
    borderRadius: 32,
    //backgroundColor: '#f0f0f0',
    overflow: 'hidden',
  },
  avatar: {
    width: '100%',
    height: '100%',
    backgroundColor: '#A1CEDC',
  },
  profileText: {
    gap: 4,
  },
  profileName: {
    fontSize: 20,
    fontWeight: '600',
  },
  profileRole: {
    fontSize: 14,
    opacity: 0.7,
  },
  profileStats: {
    flexDirection: 'row',
    gap: 24,
  },
  statItem: {
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 24,
    fontWeight: '600',
  },
  statLabel: {
    fontSize: 12,
    opacity: 0.7,
  },
});