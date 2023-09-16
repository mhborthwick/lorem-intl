interface Config {
  defaultSize: "short" | "medium" | "long";
  defaultLanguage: "latin";
}

class LoremIntl {
  config: Config;
  constructor(config?: Config) {
    this.config = config || { defaultSize: "medium", defaultLanguage: "latin" };
  }

  latin(size?: Config["defaultSize"]) {
    const map = {
      short: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      medium:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed luctus vestibulum mi, vitae faucibus libero vehicula eu. Fusce in aliquet risus. Suspendisse et venenatis ante, ac interdum magna. Nunc vitae ipsum lacinia, dictum nisl id, posuere turpis.",
      long: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed luctus vestibulum mi, vitae faucibus libero vehicula eu. Fusce in aliquet risus. Suspendisse et venenatis ante, ac interdum magna. Nunc vitae ipsum lacinia, dictum nisl id, posuere turpis. Donec molestie massa ante, nec tristique lectus venenatis suscipit. Suspendisse at nulla bibendum, venenatis mi sit amet, dictum dui. Vivamus ante neque, sollicitudin gravida risus eu, pellentesque volutpat tortor.",
    };
    return map[size || this.config.defaultSize];
  }

  text() {
    return this[this.config.defaultLanguage](this.config.defaultSize);
  }

  create(config?: Config) {
    return new LoremIntl(config);
  }
}

export default new LoremIntl();
