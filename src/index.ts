type Language =
  | "latin"
  | "mandarin"
  | "spanish"
  | "english"
  | "hindi"
  | "arabic";

type Size = "short" | "medium" | "long";

interface Config {
  defaultLanguage: Language;
  defaultSize: Size;
}

class LoremIntl {
  config: Config;
  constructor(config?: Config) {
    this.config = config || {
      defaultSize: "medium",
      defaultLanguage: "latin",
    };
  }

  arabic(size?: Config["defaultSize"]) {
    const map = {
      short: "الثعلب البني السريع يقفز فوق الكلب الكسول.",
      medium:
        "في عالم حيث تتقاطع التكنولوجيا والابتكار، تظهر عصرًا جديدًا من الإمكانيات. من الذكاء الصناعي إلى حلاول الطاقة المستدامة، يتم تشكيل المستقبل برؤيتنا وعزمنا الجماعيين.",
      long: "بينما يتدلى الشمس برفق فوق الأفق، مُشعةً بتوهج دافئ عبر المشهد الهادئ، نجد أنفسنا غارقين في لحظة من السكينة العميقة. جمال الطبيعة يكشف نفسه أمام أعيننا، شاهدًا على نسيج معقد للحياة على هذا الكوكب. كل شريحة من العشب، وكل ورقة تتأرجح، وكل تلاوة ملحنة من طيور الغناء تُسهم في سيمفونية الوجود. إنه في هذه اللحظات الزاهية من الاتصال مع العالم الطبيعي التي نُذكر فيها بالترابط العميق لجميع الكائنات الحية ومسؤوليتنا تجاه تقدير وحماية التوازن الهش الذي يسيرينا.",
    };
    return map[size || this.config.defaultSize];
  }

  hindi(size?: Config["defaultSize"]) {
    const map = {
      short: "तेज़ भूरे लोमड़ी आलसी कुतिया के ऊपर कूदती है।",
      medium:
        "एक दुनिया में जहाँ प्रौद्योगिकी और नवाचार आपस में मिल जाते हैं, एक नई संभावनाओं की युग उद्भव हो रहा है। कृत्रिम बुद्धिमत्ता से लेकर संवेदनशील ऊर्जा समाधानों तक, भविष्य हमारे संगठन द्वारा दृढ़ दृष्टिकोण और संकल्प के साथ आकार दिया जा रहा है।",
      long: "जब सूरज धीरे-धीरे पश्चिम दिशा की ओर सेट होता है, धीरे-धीरे आकर्षक दृश्य के ऊपर गर्म रौशनी डालता है, तब हम एक गहरी शांति के क्षण में लिपटे होते है। प्राकृतिक सौंदर्य हमारे सामने प्रकट होता है, यह इस प्लैनेट पर जीवन के सूक्ष्म बुनावट का साक्षर है। हरी घास की हर ब्लेड, हर झूलती पत्ती और पक्षियों की मधुर गीतों की मिलीभगत से हम जीवन के संगीत में योगदान करते हैं। इन प्राकृतिक दुनिया के इस चिमुकले अंधार में, जीवन की रचना समृद्धि में उचित समय पर होती है, जो हमें सभी जीवित चीजों के गहरे में जुड़े रहने की गहरी दृढ़ता और संरक्षण की जिम्मेदारी को बचाने की महत्वपूर्ण बातों का स्मरण कराते है।",
    };
    return map[size || this.config.defaultSize];
  }

  english(size?: Config["defaultSize"]) {
    const map = {
      short: "The quick brown fox jumps over the lazy dog.",
      medium:
        "In a world where technology and innovation intersect, a new era of possibilities emerges. From artificial intelligence to sustainable energy solutions, the future is being shaped by our collective vision and determination.",
      long: "As the sun gently sets over the horizon, casting a warm glow across the tranquil landscape, we find ourselves immersed in a moment of profound serenity. Nature's beauty unfolds before our eyes, a testament to the intricate tapestry of life on this planet. Each blade of grass, every rustling leaf, and the harmonious chorus of birdsong all contribute to the symphony of existence. It is in these fleeting moments of connection with the natural world that we are reminded of the profound interconnectedness of all living things and our responsibility to cherish and protect the delicate balance that sustains us.",
    };
    return map[size || this.config.defaultSize];
  }

  spanish(size?: Config["defaultSize"]) {
    const map = {
      short: "El rápido zorro marrón salta sobre el perro perezoso.",
      medium:
        "En un mundo donde la tecnología y la innovación se cruzan, emerge una nueva era de posibilidades. Desde la inteligencia artificial hasta soluciones de energía sostenible, el futuro se está moldeando con nuestra visión y determinación colectiva.",
      long: "Cuando el sol se pone suavemente sobre el horizonte, arrojando un cálido resplandor sobre el apacible paisaje, nos encontramos inmersos en un momento de profunda serenidad. La belleza de la naturaleza se despliega ante nuestros ojos, un testimonio de la intrincada trama de la vida en este planeta. Cada hoja de hierba, cada hoja que se mece y el armonioso coro del canto de las aves contribuyen a la sinfonía de la existencia. Es en estos efímeros momentos de conexión con el mundo natural que recordamos la profunda interconexión de todas las cosas vivientes y nuestra responsabilidad de apreciar y proteger el delicado equilibrio que nos sostiene.",
    };
    return map[size || this.config.defaultSize];
  }

  mandarin(size?: Config["defaultSize"]) {
    const map = {
      short: "快速的棕色狐狸跳过懒惰的狗。",
      medium:
        "在一个充满科技和创新的世界中，新的可能性正在涌现。从人工智能到可持续能源解决方案，未来正在被我们共同的愿景和决心所塑造。",
      long: "当太阳缓缓在地平线上落下，温暖的光芒洒在宁静的风景上，我们沉浸在一种深刻宁静的时刻中。大自然的美丽展现在我们眼前，这是对这个星球上生命复杂织物的见证。每一片草叶，每一片沙沙作响的叶子，以及和谐的鸟的歌声都为存在的交响乐做出了贡献。正是在这些瞬间与自然界的联系中，我们被提醒了所有生物的深刻相互关系和我们珍惜和保护这个脆弱平衡的责任。",
    };
    return map[size || this.config.defaultSize];
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
