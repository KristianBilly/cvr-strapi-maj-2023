const { useRouter } = require('next/router')

export const getLocalisedData = (rawStrapiArray) => {
  const router = useRouter()

  const locale = router.locale || router.defaultLocale
  const filteredArticles = rawStrapiArray.data.filter((inputData) =>
    inputData.attributes.locale.includes(locale)
  )

  return filteredArticles
}
