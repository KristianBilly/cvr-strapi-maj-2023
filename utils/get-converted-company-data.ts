interface ConvertedCompanyData {
  cvrNumber: string
  address: string
  postNoCity: string
  companyType: string
}

export const getConvertedCompanyData = ({
  cvrNumber,
  address,
  postNoCity,
  companyType,
}: ConvertedCompanyData) => {
  return [
    { title: 'get.converted.company.cvr', field: cvrNumber },
    { title: 'get.converted.company.address', field: address },
    { title: 'get.converted.company.postcode.city', field: postNoCity },
    { title: 'get.converted.company.companytype', field: companyType },
  ]
}
