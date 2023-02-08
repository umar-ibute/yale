import {
  View,
  Text,
  FlatList,
  Pressable,
  TextInput,
  SafeAreaView,
  Image,
  StyleSheet,
} from 'react-native';

DATA = [
  { id: 1, name: 'All Saved Posts', number: 12, color: '#778899' },
  { id: 2, name: 'watchlist', number: 7, color: '#ffb6c1' },
  { id: 3, name: 'Playlist', number: 100, color: '#00fa9a' },
  { id: 4, name: 'Bookshelf', number: 11, color: '#ff69b4' },
  { id: 5, name: 'Destinations', number: 1, color: '#ffd700' },
];

const Home = () => {
  const renderItem = ({ item }) => {
    return (
      <Pressable style={styles.pressable}>
        <View
          style={{
            width: 50,
            height: 70,
            backgroundColor: item.color,
            borderRadius: 10,
          }}
        />
        <View style={{ marginLeft: '5%' }}>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={{ color: '#000000' }}>{item.number} posts</Text>
        </View>
      </Pressable>
    );
  };

  return (
    <SafeAreaView style={{ flex: 1, alignItems: 'center' }}>
      <View style={styles.container}>
        <Text style={{ fontSize: 22, fontWeight: '700', color: '#000000' }}>
          Lists
        </Text>
        <Pressable style={styles.newButton}>
          <Image
            source={require('../assets/Icons/plus-icon.png')}
            style={styles.sumIcon}
          />
          <Text style={{ color: 'white' }}>New</Text>
        </Pressable>
      </View>
      <TextInput
        placeholder='Search Lists and saved posts'
        style={styles.inputField}
      />
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        style={{ width: '100%', alignSelf: 'center' }}
      />
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: '5%',
    marginVertical: 20,
    width: '100%',
  },
  newButton: {
    backgroundColor: '#000000',
    flexDirection: 'row',
    width: 80,
    height: 30,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  sumIcon: { resizeMode: 'stretch', width: 20, height: 20 },
  inputField: {
    backgroundColor: `#d3d3d3`,
    width: '90%',
    borderRadius: 10,
    height: 45,
    padding: 15,
  },
  pressable: {
    flexDirection: 'row',
    marginVertical: 10,
    height: 80,
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '90%',
    alignSelf: 'center',
    paddingHorizontal: '5%',
  },
  name: { fontSize: 14, fontWeight: 'bold', color: '#000000' },
});
