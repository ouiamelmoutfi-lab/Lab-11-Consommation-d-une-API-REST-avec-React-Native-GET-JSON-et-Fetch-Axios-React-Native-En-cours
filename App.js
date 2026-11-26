
import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  Button,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

export default function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchText, setSearchText] = useState('');
  const [selectedUser, setSelectedUser] = useState(null);

  // Recuperer les utilisateurs depuis l'API
  const fetchUsers = async () => {
    setLoading(true);
    setError(null);

    try {
      const res = await fetch(
        'https://jsonplaceholder.typicode.com/users'
      );

      if (!res.ok) {
        throw new Error('Erreur HTTP');
      }

      const data = await res.json();
      setUsers(data);
    } catch (err) {
      setError('Erreur de connexion');
    } finally {
      setLoading(false);
    }
  };

  // Charger les utilisateurs au demarrage
  useEffect(() => {
    fetchUsers();
  }, []);

  // Rechercher un utilisateur
  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchText.toLowerCase())
  );

  // Afficher les details de l'utilisateur
  if (selectedUser) {
    return (
      <View style={styles.container}>
        <Text style={styles.name}>{selectedUser.name}</Text>
        <Text style={styles.email}>{selectedUser.email}</Text>
        <Text>{selectedUser.address?.city}</Text>

        <Button
          title="Retour"
          onPress={() => setSelectedUser(null)}
        />
      </View>
    );
  }

  return (
    <View style={styles.container}>

      <TextInput
        placeholder="Rechercher un utilisateur..."
        value={searchText}
        onChangeText={setSearchText}
        style={styles.input}
      />

      <Button
        title="Actualiser"
        onPress={fetchUsers}
      />

      {loading ? (
        <View style={styles.loading}>
          <ActivityIndicator size="large" color="#0000ff" />
          <Text>Chargement des utilisateurs...</Text>
        </View>
      ) : error ? (
        <View style={styles.loading}>
          <Text style={styles.error}>{error}</Text>
          <Button title="Reessayer" onPress={fetchUsers} />
        </View>
      ) : (
        <FlatList
          data={filteredUsers}
          keyExtractor={item => item.id.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.card}
              onPress={() => setSelectedUser(item)}
            >
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.email}>{item.email}</Text>
            </TouchableOpacity>
          )}
        />
      )}

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    paddingTop: 50,
    backgroundColor: '#f5f5f5',
  },
  card: {
    backgroundColor: 'white',
    padding: 15,
    marginVertical: 5,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
    backgroundColor: 'white',
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  email: {
    fontSize: 14,
    color: '#666',
  },
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  error: {
    color: 'red',
    fontSize: 16,
    marginBottom: 10,
  },
});
