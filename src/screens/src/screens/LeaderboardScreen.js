import React from 'react';
import { View, Text, FlatList, StyleSheet, Image } from 'react-native';

const DATA = [
  { id: '1', name: 'Alexandre P.', promo: 'B3 Info', points: 1450, avatar: '🥇' },
  { id: '2', name: 'Mélanie L.', promo: 'M1 Com', points: 1200, avatar: '🥈' },
  { id: '3', name: 'Thomas R.', promo: 'B2 Design', points: 950, avatar: '🥉' },
  { id: '4', name: 'Sophie V.', promo: 'B3 Info', points: 800, avatar: '👤' },
];

export default function LeaderboardScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Classement Général</Text>
      <FlatList
        data={DATA}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.row}>
            <Text style={styles.avatar}>{item.avatar}</Text>
            <View style={styles.info}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.promo}>{item.promo}</Text>
            </View>
            <Text style={styles.points}>{item.points} pts</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F9FAFB', padding: 20, paddingTop: 60 },
  header: { fontSize: 24, fontWeight: 'bold', marginBottom: 20, color: '#111827' },
  row: { flexDirection: 'row', backgroundColor: '#fff', padding: 15, borderRadius: 12, marginBottom: 10, alignItems: 'center', elevation: 2 },
  avatar: { fontSize: 24, marginRight: 15 },
  info: { flex: 1 },
  name: { fontWeight: 'bold', fontSize: 16 },
  promo: { color: '#6B7280', fontSize: 12 },
  points: { fontWeight: 'bold', color: '#059669', fontSize: 16 }
});
