param location string
param name string
param sku string = 'Free'

resource staticWebApp 'Microsoft.Web/staticSites@2023-01-01' = {
  name: name
  location: location
  properties: {
    provider: 'None'
   }
  sku: {
    name: sku
  }
}
