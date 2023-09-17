import { Config, Language, Size } from "./types";
import {
  arabic as arabicText,
  english as englishText,
  hindi as hindiText,
  latin as latinText,
  mandarin as mandarinText,
  spanish as spanishText,
} from "./languages";

class LoremIntl {
  config: Config;
  languagesMap: Record<Language, Record<Size, string>>;
  constructor(config?: Config) {
    this.config = config || {
      defaultSize: "medium",
      defaultLanguage: "latin",
    };
    this.languagesMap = {
      arabic: arabicText,
      english: englishText,
      hindi: hindiText,
      latin: latinText,
      mandarin: mandarinText,
      spanish: spanishText,
    };
  }

  arabic(size?: Size) {
    return this.getText("arabic", size);
  }

  hindi(size?: Size) {
    return this.getText("hindi", size);
  }

  english(size?: Size) {
    return this.getText("english", size);
  }

  spanish(size?: Size) {
    return this.getText("spanish", size);
  }

  mandarin(size?: Size) {
    return this.getText("mandarin", size);
  }

  latin(size?: Size) {
    return this.getText("latin", size);
  }

  getText(language?: Language, size?: Size) {
    if (!language) language = this.config.defaultLanguage;
    if (!size) size = this.config.defaultSize;
    return this.languagesMap[language][size];
  }

  text() {
    return this.getText();
  }

  create(config?: Config) {
    return new LoremIntl(config);
  }
}

export default new LoremIntl();
