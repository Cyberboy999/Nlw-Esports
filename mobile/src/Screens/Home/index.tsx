import logoImg from '../../assets/logo-nlw-esports.png'
import { Image, FlatList } from 'react-native';
import { Heading } from "../../components/Heading";
import { styles } from './styles';
import { GameCard, GameCardProps } from '../../components/GameCard';
import {useEffect, useState}  from 'react';
import { SafeAreaView } from "react-native-safe-area-context";
import { Background } from "../../components/Background";
import { useNavigation } from "@react-navigation/native";

export function Home() {
  const [games, setgames] = useState<GameCardProps[]>([]);
  
  const navigation = useNavigation();

  function handleOpenGame({id, title, bannerUrl}:GameCardProps) {
    navigation.navigate('game', {id, title, bannerUrl})
  }

  useEffect(() => {
    fetch('http://26.255.118.161:3333/games')
      .then(Response => Response.json())
      .then(data => setgames(data));
  },[]);

  return (

    <Background>
    <SafeAreaView style={styles.container}>
      <Image
        source={logoImg}
        style={styles.logo}
      />

      <Heading 
        title='Encontre o seu duo'
        subtitle='Selecione o game que deseja jogar...'
      />

      <FlatList
        data={games}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <GameCard 
            data={item}
            onPress={() => handleOpenGame(item)}
          />
        )}

          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.contentList}
      />
    </SafeAreaView>
    </Background>
  );
}