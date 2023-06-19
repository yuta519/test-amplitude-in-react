import * as amplitude from "@amplitude/analytics-browser";

type BrowserOptions = amplitude.Types.BrowserOptions;
export type BrowserClient = amplitude.Types.BrowserClient;

export const DefaultConfiguration: BrowserOptions = {
  plan: {
    version: '1',
    branch: 'main',
    source: 'browser-ts-ampli-v2',
    versionId: 'a61c3908-ca4d-4c8d-8f81-54ad3ba17b9c'
  },
  ...{
    ingestionMetadata: {
      sourceName: 'browser-typescript-ampli',
      sourceVersion: '2.0.0'
    }
  }
};

export class Ampli {
  public amplitude?: BrowserClient;

  public init = (apiKey: string, userId: string) => {
    this.amplitude = amplitude.createInstance();
    return this.amplitude.init(apiKey, userId || undefined, { ...DefaultConfiguration });
  }
}
