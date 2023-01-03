import { SafeAreaView, Text, View } from 'react-native';
import LanguajePicker from './src/components/LanguajePicker/LanguajePicker';
import RegisterForm from './src/components/RegisterForm/RegisterForm';
import useGetTranslations from './src/hooks/useGetTranslations';


const App = () => {
  const { getTranslation } = useGetTranslations()

  return (
    <SafeAreaView style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <LanguajePicker />
      <Text style={{ marginBottom: 30 }}>
        {getTranslation('MAIN_TITLE')}
      </Text>
      <View>
        <RegisterForm />
      </View>
    </SafeAreaView>
  )
}

export default App