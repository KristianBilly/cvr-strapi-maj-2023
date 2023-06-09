// @ts-nocheck

import { useRouter } from 'next/router'
import da from '@/translations/da.json'
import en from '@/translations/en.json'
import { useMemo } from 'react'

const locales = { da, en }

export const useTranslate = () => {
  const router = useRouter()
  const locale: string = router.locale || router.defaultLocale

  const languageStrings = useMemo(() => {
    if (!locales[locale]) {
      return {}
    }

    return locales[locale]
  }, [locale])

  const checkIfKeyExist = (objectName: string, keyName: string) => {
    let keyExist = Object.keys(objectName).some((key) => key === keyName)
    return keyExist
  }

  const t = (translationKey: string) => {
    const isNotATranslationKey = !checkIfKeyExist(
      languageStrings,
      translationKey
    )

    if (isNotATranslationKey) {
      return translationKey
    }

    return (
      languageStrings[translationKey] ||
      `Missing translation for key: ${translationKey} (${locale})`
    )
  }

  return { t }
}
