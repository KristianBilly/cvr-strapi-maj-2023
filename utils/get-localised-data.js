const { useRouter } = require('next/router')

export const getLocalisedData = (inputDatas) => {
  const router = useRouter()

  const locale = router.locale || router.defaultLocale
  const filteredArticles = inputDatas.data.filter((inputData) =>
    inputData.attributes.locale.includes(locale)
  )

  return filteredArticles
}
