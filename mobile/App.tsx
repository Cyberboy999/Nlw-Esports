import { Home } from "./src/Screens/Home";
import { Loading } from "./src/components/Loading";
import { Background } from "./src/components/Background";
import { StatusBar } from "react-native";

import { 
  useFonts, 
  Inter_400Regular, 
  Inter_600SemiBold, 
  Inter_700Bold, 
  Inter_900Black 
} from "@expo-google-fonts/inter";


export default function App() {
  const [fontsloader] = useFonts({
    Inter_400Regular, 
    Inter_600SemiBold, 
    Inter_700Bold, 
    Inter_900Black
  });

  return (
    <Background>
      <StatusBar 
        barStyle='light-content'
        backgroundColor='transparent'
        translucent
      />
      { fontsloader ? <Home /> : <Loading />}
    </Background>
  );
}


