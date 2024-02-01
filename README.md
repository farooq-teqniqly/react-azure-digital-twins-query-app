# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

## Github

Create a repository secret named `AZURE_STATIC_WEB_APPS_API_TOKEN` whose value is the Azure Static Web App's deployment token.

## Add Azure Digital Twin API Permission

```powershell
az ad app permission add --id c12628d1-e7bf-45f9-9491-cab5ebe5739b --api 0b07f429-9f4b-4714-9392-cc5e8e80c8b0 --api-permissions 4589bd03-58cb-4e6c-b17f-b580e39652f8=Scope

az ad app permission grant --id c12628d1-e7bf-45f9-9491-cab5ebe5739b --api 0b07f429-9f4b-4714-9392-cc5e8e80c8b0 --scope Read.Write
```

https://digitaltwins.azure.net/Read.Write

Add redirect urls:
https://learn.microsoft.com/en-us/azure/healthcare-apis/register-application-cli-rest
