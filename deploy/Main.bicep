targetScope = 'subscription'

param location string
param resourceGroupName string
param staticWebAppName string
param sku string

resource resourceGroupDeploy 'Microsoft.Resources/resourceGroups@2023-07-01' = {
  name: resourceGroupName
  location: location
}

module staticWebAppDeploy 'StaticWebApp.bicep' = {
  name: 'staticWebAppDeploy'
  scope: resourceGroupDeploy
  params: {
    location: location
    name: staticWebAppName
    sku: sku
  }
}
