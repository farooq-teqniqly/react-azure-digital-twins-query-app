import { DigitalTwinsClient } from "@azure/digital-twins-core";
import { InteractiveBrowserCredential } from "@azure/identity";
import { useState } from "react";

const useAuthentication = () => {
  const [authenticated, setAuthenticated] = useState(false);
  const [digitalTwinServiceClient, setDigitalTwinServiceClient] =
    useState<DigitalTwinsClient | null>(null);

  const [error, setError] = useState<Error | null>(null);

  const authenticate = async (digitalTwinServiceUrl: string) => {
    const credential = new InteractiveBrowserCredential({
      clientId: "c12628d1-e7bf-45f9-9491-cab5ebe5739b",
      tenantId: "f59645ca-7c1b-40fe-870d-96cd8328eb83",
    });

    const client = new DigitalTwinsClient(digitalTwinServiceUrl, credential);

    try {
      // Run a test query
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const result = client.queryTwins(
        "SELECT * FROM digitaltwins WHERE $dtId = '00000000-0000-0000-0000-000000000000'",
      );

      console.log(result);

      for await (const item of result) {
        console.log(item);
      }

      // If the query succeeds, we know the instance is valid
      setDigitalTwinServiceClient(client);
      setAuthenticated(true);
    } catch (err: any) {
      console.log(err);
      setAuthenticated(false);
      setError(err.message);
    }
  };

  return {
    authenticated,
    authenticate,
    digitalTwinServiceClient,
    error,
  };
};

export default useAuthentication;
