import { SafeAreaView, Text } from 'react-native';
import { useTranslation } from "react-i18next";
import LanguajePicker from './src/components/LanguajePicker';


const App = () => {
  const { t } = useTranslation();

  return (
    <SafeAreaView style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ marginBottom: 30 }}>
        {`${t('HELLO')}`} {`${t('LOGIN.NAME')}`} !!!
      </Text>
      <LanguajePicker />
    </SafeAreaView>
  )
}

export default App