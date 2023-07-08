import { Console } from "as-wasi/assembly";
import { memory } from "@blockless/sdk/assembly";
import { getSecret } from "@blockless/hashi-vault/getSecet";

let envVars = new memory.EnvVars().read().toJSON();
if (envVars) {
  let authToken = envVars.get("BLS_HCP_TOKEN");
  if (authToken) {
    if (authToken != null) {
      const atString = authToken.toString();
      // get secret from the vault
      let OrgId = "4ab41091-31wd-4628-aca4-04b5995cb2sfa";
      let ProjId = "d8565wqeb3-5qe7-494f-9914-90dbe5cwe448";
      let AppName = "test-application";
      let SecretKey = "testsecret";

      let secret = getSecret(OrgId, ProjId, AppName, SecretKey, atString);
      Console.log(secret.toString());
    }
  }
}
