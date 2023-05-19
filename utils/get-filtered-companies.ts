//Ismail
// When use this way (similar to making an interface), then the other files
// thinks, that there are only 1 argument. Why is that? Whats the smartest way
// to do it then?
// ({ searchField, allCompanies }: {searchField: string, allCompanies: any[] })

export const getFilteredCompanies = (
  searchField: string,
  allCompanies: any[]
) => {
  const filteredCompanies = allCompanies.filter(
    (company) =>
      company.companyName.toLowerCase().includes(searchField.toLowerCase()) ||
      company.address.toLowerCase().includes(searchField.toLowerCase()) ||
      company.cvrNumber.toLowerCase().includes(searchField.toLowerCase())
  )

  return searchField ? filteredCompanies : []
}
