import { useTranslation } from "react-i18next";

const useGetTranslations = () => {

    const { t } = useTranslation();

    const getTranslation = (path: string) => {
        return `${t(`${path.toUpperCase()}`)}`
    }

    return {
        getTranslation
    }
}

export default useGetTranslations