import { Button, Text, TextInput, View } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import useGetTranslations from '../../hooks/useGetTranslations';

const RegisterForm = () => {
  const { getTranslation } = useGetTranslations();

  const { handleSubmit, control, formState: { errors } } = useForm();
  const onSubmit = (data: any) => console.log(data);

  return (
    <View>
      <Text>{getTranslation('LOGIN.FIRSTNAME')}</Text>
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={{ borderColor: 'black', borderWidth: 1 }}
            onBlur={onBlur}
            onChangeText={value => onChange(value)}
            value={value}
          />
        )}
        name={getTranslation('LOGIN.FIRSTNAME')}
        rules={{ required: true }}
      />

      <Text>{getTranslation('LOGIN.LASTNAME')}</Text>
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={{ borderColor: 'black', borderWidth: 1 }}
            onBlur={onBlur}
            onChangeText={value => onChange(value)}
            value={value}
          />
        )}
        name={getTranslation('LOGIN.LASTNAME')}
        rules={{ required: true }}
      />

      <View>
        <Button
          title={getTranslation('GENERAL_SUBMIT_BUTTON')}
          onPress={handleSubmit(onSubmit)}
        />
      </View>
    </View>
  )
}

export default RegisterForm