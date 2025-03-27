import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Avatar, Icon, Image } from '@rneui/base'
import MockupInstagram from './src/views/grid/MockupInstagram';

export default function App() {
  return (
    <View style={styles.container}>
      <MockupInstagram backgroundColor='gray' size1={32} size2={64} size3={90}/>

      <View style={{ flexDirection: 'row',  margin: 8 }}>
        <View style={{ flexDirection: 'row', flexGrow: 1 }}>
          <Avatar
            size={32}
            rounded
            source={{ uri: "https://randomuser.me/api/portraits/men/36.jpg" }}
          />
          <View style={{ flexDirection: 'column', marginHorizontal: 8 }}>
            <Text style={styles.username}>John Doe</Text>
            <Text style={styles.song}>hace 40 minutos</Text>
          </View>
        </View>
        <View>
          <Icon type='material-community' name="dots-vertical" size={16}/>
        </View>
      </View>
      <Image source={{uri:'https://placehold.co/600x400/png'}} style={{width: '100%', height: 400}} />

      <View style={{flexDirection: 'row', justifyContent: 'space-between', margin: 8}}>
        <View style={{ flexDirection: 'row' }}>
          <Icon type='material-community' name="heart" size={24} color={"red"}/>
          <Icon type='material-community' name="message-outline" size={24} marginHorizontal={4}/>
          <Icon type='material-community' name="share-outline" size={24}/>
        </View>
        <Icon type="material-community" name="dots-horizontal"/>
        <Icon type="material-community" name="bookmark-outline"/>
      </View>
      <View style={{ flexDirection: 'row', margin:8 }}>
        <Avatar
          size={24}
          rounded
          source={{ uri: "https://randomuser.me/api/portraits/men/34.jpg" }}
        />
        <Text style={{ marginInlineStart: 8}}>Texto aquí</Text>
      </View>
      <Text style={{ marginInlineStart: 8}}>Texto aquí</Text>
      <Text style={{ marginInlineStart: 8}}>Texto aquí</Text>
      <Text style={{ marginInlineStart: 8}}>Texto aquí</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingVertical: 64
  },
  username: {
    fontSize: 12,
    fontWeight: "bold"
  },
  song: {
    fontSize: 10,
    color: "gray"
  }
});

