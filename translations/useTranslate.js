import { useRouter } from 'next/router'
import da from 'translations/da.json'
import en from 'translations/en.json'
import { useMemo } from 'react'

const locales = { da, en }

export const useTranslate = () => {
  const router = useRouter()
  const locale = router.locale || router.defaultLocale

  const languageStrings = useMemo(() => {
    if (!locales[locale]) {
      return {}
    }

    return locales[locale]
  }, [locale])

  const t = (translationKey) => {
    return (
      languageStrings[translationKey] ||
      `Missing translation for key: ${translationKey} (${locale})`
    )
  }
  return { t }
}
