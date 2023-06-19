import mixpanel, { OverridedMixpanel} from "mixpanel-browser";

export class Mixpanel {
  public client?: OverridedMixpanel;

  constructor(apiKey: string) {
    this.client = mixpanel.init(apiKey, { debug: true })
  }

  public init() {
    return this.client
  }
}
