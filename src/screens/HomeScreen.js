import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  Alert
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import AuthService from '../services/authService';

const HomeScreen = ({ navigation }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const currentUser = AuthService.getCurrentUser();
    setUser(currentUser);
  }, []);

  const handleLogout = () => {
    Alert.alert(
      'Konfirmasi Logout',
      'Apakah Anda yakin ingin keluar?',
      [
        { text: 'Batal', style: 'cancel' },
        { 
          text: 'Logout', 
          style: 'destructive',
          onPress: async () => {
            const result = await AuthService.logout();
            if (!result.success) {
              Alert.alert('Error', result.error);
            }
          }
        },
      ]
    );
  };

  const MenuItem = ({ icon, title, subtitle, color, onPress }) => (
    <TouchableOpacity style={styles.menuItem} onPress={onPress}>
      <View style={[styles.menuIcon, { backgroundColor: color }]}>
        <Ionicons name={icon} size={28} color="#fff" />
      </View>
      <View style={styles.menuContent}>
        <Text style={styles.menuTitle}>{title}</Text>
        <Text style={styles.menuSubtitle}>{subtitle}</Text>
      </View>
      <Ionicons name="chevron-forward" size={24} color="#999" />
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.greeting}>Selamat Datang,</Text>
          <Text style={styles.userEmail}>{user?.email || 'User'}</Text>
        </View>
        <TouchableOpacity onPress={handleLogout} style={styles.logoutButton}>
          <Ionicons name="log-out-outline" size={24} color="#f44336" />
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <Text style={styles.sectionTitle}>Fitur Aplikasi</Text>

        <MenuItem
          icon="document-text"
          title="Catatan Saya"
          subtitle="Kelola catatan dengan CRUD"
          color="#4CAF50"
          onPress={() => navigation.navigate('Notes')}
        />

        <MenuItem
          icon="partly-sunny"
          title="Cek Cuaca"
          subtitle="Informasi cuaca real-time"
          color="#2196F3"
          onPress={() => navigation.navigate('Weather')}
        />

        <View style={styles.infoCard}>
          <Ionicons name="information-circle" size={24} color="#FF9800" />
          <Text style={styles.infoText}>
            Aplikasi ini dibuat untuk UTS Mobile Programming 2026
          </Text>
        </View>

        <View style={styles.statsContainer}>
          <Text style={styles.sectionTitle}>Informasi</Text>
          <View style={styles.statsRow}>
            <View style={styles.statItem}>
              <Ionicons name="checkbox-outline" size={32} color="#4CAF50" />
              <Text style={styles.statLabel}>Firebase Auth</Text>
            </View>
            <View style={styles.statItem}>
              <Ionicons name="server" size={32} color="#2196F3" />
              <Text style={styles.statLabel}>Firestore CRUD</Text>
            </View>
            <View style={styles.statItem}>
              <Ionicons name="cloudy-night" size={32} color="#FF9800" />
              <Text style={styles.statLabel}>Weather API</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
  },
  greeting: {
    fontSize: 14,
    color: '#666',
  },
  userEmail: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 2,
  },
  logoutButton: {
    padding: 8,
  },
  content: {
    flex: 1,
    padding: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 15,
    marginBottom: 12,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
  },
  menuIcon: {
    width: 50,
    height: 50,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  menuContent: {
    flex: 1,
    marginLeft: 15,
  },
  menuTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  menuSubtitle: {
    fontSize: 13,
    color: '#666',
    marginTop: 2,
  },
  infoCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF3E0',
    borderRadius: 12,
    padding: 15,
    marginTop: 10,
  },
  infoText: {
    flex: 1,
    marginLeft: 10,
    fontSize: 14,
    color: '#E65100',
    lineHeight: 20,
  },
  statsContainer: {
    marginTop: 20,
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  statItem: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 15,
    alignItems: 'center',
    marginHorizontal: 5,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
  },
  statLabel: {
    fontSize: 12,
    color: '#666',
    marginTop: 8,
    textAlign: 'center',
  },
});

export default HomeScreen;