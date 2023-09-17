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

  /**
   *
   * @param size
   * @returns arabic text
   */
  arabic(size?: Size) {
    return this.getText("arabic", size);
  }

  /**
   *
   * @param size
   * @returns hindi text
   */
  hindi(size?: Size) {
    return this.getText("hindi", size);
  }

  /**
   *
   * @param size
   * @returns english text
   */
  english(size?: Size) {
    return this.getText("english", size);
  }

  /**
   *
   * @param size
   * @returns spanish text
   */
  spanish(size?: Size) {
    return this.getText("spanish", size);
  }

  /**
   *
   * @param size
   * @returns mandarin chinese text
   */
  mandarin(size?: Size) {
    return this.getText("mandarin", size);
  }

  /**
   *
   * @param size
   * @returns latin (lorem ipsum) text
   */
  latin(size?: Size) {
    return this.getText("latin", size);
  }

  /**
   *
   * @param language
   * @param size
   * @returns placeholder text by language and size
   */
  getText(language?: Language, size?: Size) {
    if (!language) language = this.config.defaultLanguage;
    if (!size) size = this.config.defaultSize;
    return this.languagesMap[language][size];
  }

  /**
   *
   * @returns default placeholder text
   */
  text() {
    return this.getText();
  }

  /**
   *
   * @param config
   * @returns new instance of LoremIntl
   */
  create(config?: Config) {
    return new LoremIntl(config);
  }
}

export default new LoremIntl();
