import { GoogleAuth, JWT } from "google-auth-library";
import { getEnvironmentVariable } from "../util/getEnvironmentVariable";

export interface GooglePalmBaseOptions {
  apiKey?: string;
}

export class GooglePalmBase {
  private apiKey: string | undefined;

  authClient: JWT;

  constructor({ apiKey }: GooglePalmBaseOptions) {
    this.apiKey = apiKey || getEnvironmentVariable("GOOGLE_PALM_API_KEY");

    if (typeof this.apiKey === "undefined") {
      throw Error();
    }

    this.authClient = new GoogleAuth().fromAPIKey(this.apiKey);
  }
}
