const { useRouter } = require('next/router')

//Ismail. How is the stuff beneath made?
export const getLocalisedData = (rawStrapiArray: any) => {
  const router = useRouter()

  const locale = router.locale || router.defaultLocale
  const filteredArticles = rawStrapiArray.data.filter((inputData: any) =>
    inputData.attributes.locale.includes(locale)
  )

  return filteredArticles
}
