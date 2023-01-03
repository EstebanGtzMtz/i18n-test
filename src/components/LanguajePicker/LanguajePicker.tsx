import { Pressable, Text, View } from 'react-native';
import { useTranslation } from "react-i18next";
import useGetTranslations from '../../hooks/useGetTranslations';

const languages = [
  { name: "en", label: "English" },
  { name: "es", label: "Spanish" }
];

const LanguajePicker = () => {

  const { i18n } = useTranslation();
  const { getTranslation } = useGetTranslations()

  const LanguageItem = ({ name, label }: { name: string; label: string }) => (
    <Pressable
      style={{ paddingVertical: 10, paddingHorizontal: 10 }}
      onPress={() => i18n.changeLanguage(name)}
    >
      <Text>{getTranslation(`LANGUAJES.${label}`)}</Text>
    </Pressable>
  );


  return (
    <View>
      <View style={{ flexDirection: 'row' }}>
        {languages.map((lang) => (
          <LanguageItem {...lang} key={lang.name} />
        ))}
      </View>
    </View>
  )
}

export default LanguajePicker