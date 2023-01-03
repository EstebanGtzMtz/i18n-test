import { Pressable, Text, View } from 'react-native';
import { useTranslation } from "react-i18next";

const languages = [
  { name: "en", label: "English" },
  { name: "es", label: "Español" }
];

const LanguajePicker = () => {

  const { t, i18n } = useTranslation();


  const LanguageItem = ({ name, label }: { name: string; label: string }) => (
    <Pressable
      style={{ paddingVertical: 10, paddingHorizontal: 10 }}
      onPress={() => i18n.changeLanguage(name)}
    >
      <Text>{label}</Text>
    </Pressable>
  );


  return (
    <View>
      <Text>
        {`${t('LOGIN.CHANGE_LANGUAJE')}`}
      </Text>
      <View style={{ flexDirection: 'row' }}>
        {languages.map((lang) => (
          <LanguageItem {...lang} key={lang.name} />
        ))}
      </View>
    </View>
  )
}

export default LanguajePicker