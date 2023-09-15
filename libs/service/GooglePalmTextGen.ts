import { TextServiceClient } from "@google-ai/generativelanguage";
import { GooglePalmBase } from "./GooglePalmBase";
import type { GooglePalmBaseOptions } from "./GooglePalmBase";

interface GooglePalmTextOptions extends GooglePalmBaseOptions {
  modelName?: string;
}

export class GooglePalmText extends GooglePalmBase {
  defaultModel = "models/text-bison-001";

  private client: TextServiceClient;

  modelName: string;

  constructor({ apiKey, modelName }: GooglePalmTextOptions) {
    super({ apiKey });
    this.client = new TextServiceClient({ authClient: this.authClient });
    this.modelName = modelName || this.defaultModel;
  }

  async generate(prompt: string) {
    const generated = await this.client.generateText({
      model: this.modelName,
      prompt: { text: prompt },
    });

    return generated;
  }
}
