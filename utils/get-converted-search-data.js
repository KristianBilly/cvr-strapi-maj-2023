export const getConvertedSearchData = ({
  cvrNumber,
  companyName,
  address,
  status,
  companyType,
  postNoCity,
}) => {
  return [
    { title: companyName, paragraphOne: address, paragraphTwo: postNoCity },
    { title: 'get.converted.search.data.cvr', paragraphOne: cvrNumber },
    { title: 'get.converted.search.data.status', paragraphOne: status },
    {
      title: 'get.converted.search.data.companytype',
      paragraphOne: companyType,
    },
  ]
}
