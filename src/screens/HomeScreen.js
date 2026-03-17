import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { Clock, Camera, CheckCircle2 } from 'lucide-react-native';

export default function HomeScreen() {
  const [isAvailable, setIsAvailable] = useState(false);
  const [hasParticipated, setHasParticipated] = useState(false);

  useEffect(() => {
    const checkTime = () => {
      const now = new Date();
      // Active le défi si il est après 13h
      if (now.getHours() >= 13) {
        setIsAvailable(true);
      }
    };
    checkTime();
  }, []);

  const validateChallenge = async () => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert("Permission refusée", "Nous avons besoin de la caméra pour valider le défi.");
      return;
    }

    let result = await ImagePicker.launchCameraAsync({ quality: 0.5 });
    
    if (!result.canceled) {
      setHasParticipated(true);
      Alert.alert("Succès !", "Ta preuve est en cours de modération. +25 points !");
    }
  };

  if (!isAvailable) {
    return (
      <View style={styles.centered}>
        <Clock size={60} color="#9ca3af" />
        <Text style={styles.lockedText}>Le défi arrive à 13h00 !</Text>
        <Text style={styles.subLocked}>Prépare-toi à être le plus rapide.</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.hero}>
        <Text style={styles.badge}>DÉFI ACTIF ⚡</Text>
        <Text style={styles.title}>🌱 Défi "Campus Propre"</Text>
        <Text style={styles.desc}>
          Ramasse 3 déchets oubliés dans le hall principal et jette-les dans le bac de tri approprié.
        </Text>
      </View>

      <View style={styles.actionSection}>
        {hasParticipated ? (
          <View style={styles.doneCard}>
            <CheckCircle2 color="#fff" size={30} />
            <Text style={styles.doneText}>Défi validé pour aujourd'hui !</Text>
          </View>
        ) : (
          <TouchableOpacity style={styles.btnAction} onPress={validateChallenge}>
            <Camera color="#fff" size={24} />
            <Text style={styles.btnText}>Prendre la photo (Preuve)</Text>
          </TouchableOpacity>
        )}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  centered: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
  hero: { backgroundColor: '#f0fdf4', padding: 40, borderBottomLeftRadius: 30, borderBottomRightRadius: 30 },
  badge: { color: '#15803d', fontWeight: 'bold', letterSpacing: 1, marginBottom: 10 },
  title: { fontSize: 28, fontWeight: 'bold', color: '#166534' },
  desc: { fontSize: 18, color: '#374151', marginTop: 15, lineHeight: 26 },
  lockedText: { fontSize: 22, fontWeight: 'bold', marginTop: 20, color: '#4b5563' },
  subLocked: { color: '#9ca3af', marginTop: 5 },
  actionSection: { padding: 25 },
  btnAction: { backgroundColor: '#059669', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', padding: 20, borderRadius: 15 },
  btnText: { color: '#fff', fontSize: 18, fontWeight: 'bold', marginLeft: 10 },
  doneCard: { backgroundColor: '#15803d', padding: 20, borderRadius: 15, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' },
  doneText: { color: '#fff', fontSize: 16, fontWeight: 'bold', marginLeft: 10 }
});
