import { describe, expect, test } from "@jest/globals";
import { loremIntl } from "../index";

describe("loremIntl", () => {
  describe("method: latin", () => {
    test("returns short text", () => {
      const loremIpsum = loremIntl.latin("short");
      expect(loremIpsum).toBe(
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      );
    });

    test("returns medium-sized text", () => {
      const loremIpsum = loremIntl.latin("medium");
      expect(loremIpsum).toBe(
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed luctus vestibulum mi, vitae faucibus libero vehicula eu. Fusce in aliquet risus. Suspendisse et venenatis ante, ac interdum magna. Nunc vitae ipsum lacinia, dictum nisl id, posuere turpis."
      );
    });

    test("returns long text", () => {
      const loremIpsum = loremIntl.latin("long");
      expect(loremIpsum).toBe(
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed luctus vestibulum mi, vitae faucibus libero vehicula eu. Fusce in aliquet risus. Suspendisse et venenatis ante, ac interdum magna. Nunc vitae ipsum lacinia, dictum nisl id, posuere turpis. Donec molestie massa ante, nec tristique lectus venenatis suscipit. Suspendisse at nulla bibendum, venenatis mi sit amet, dictum dui. Vivamus ante neque, sollicitudin gravida risus eu, pellentesque volutpat tortor."
      );
    });
  });

  describe("method: mandarin", () => {
    test("returns short text", () => {
      const loremIpsum = loremIntl.mandarin("short");
      expect(loremIpsum).toBe("快速的棕色狐狸跳过懒惰的狗。");
    });

    test("returns medium-sized text", () => {
      const loremIpsum = loremIntl.mandarin("medium");
      expect(loremIpsum).toBe(
        "在一个充满科技和创新的世界中，新的可能性正在涌现。从人工智能到可持续能源解决方案，未来正在被我们共同的愿景和决心所塑造。"
      );
    });

    test("returns long text", () => {
      const loremIpsum = loremIntl.mandarin("long");
      expect(loremIpsum).toBe(
        "当太阳缓缓在地平线上落下，温暖的光芒洒在宁静的风景上，我们沉浸在一种深刻宁静的时刻中。大自然的美丽展现在我们眼前，这是对这个星球上生命复杂织物的见证。每一片草叶，每一片沙沙作响的叶子，以及和谐的鸟的歌声都为存在的交响乐做出了贡献。正是在这些瞬间与自然界的联系中，我们被提醒了所有生物的深刻相互关系和我们珍惜和保护这个脆弱平衡的责任。"
      );
    });
  });

  describe("method: spanish", () => {
    test("returns short text", () => {
      const loremIpsum = loremIntl.spanish("short");
      expect(loremIpsum).toBe(
        "El rápido zorro marrón salta sobre el perro perezoso."
      );
    });

    test("returns medium-sized text", () => {
      const loremIpsum = loremIntl.spanish("medium");
      expect(loremIpsum).toBe(
        "En un mundo donde la tecnología y la innovación se cruzan, emerge una nueva era de posibilidades. Desde la inteligencia artificial hasta soluciones de energía sostenible, el futuro se está moldeando con nuestra visión y determinación colectiva."
      );
    });

    test("returns long text", () => {
      const loremIpsum = loremIntl.spanish("long");
      expect(loremIpsum).toBe(
        "Cuando el sol se pone suavemente sobre el horizonte, arrojando un cálido resplandor sobre el apacible paisaje, nos encontramos inmersos en un momento de profunda serenidad. La belleza de la naturaleza se despliega ante nuestros ojos, un testimonio de la intrincada trama de la vida en este planeta. Cada hoja de hierba, cada hoja que se mece y el armonioso coro del canto de las aves contribuyen a la sinfonía de la existencia. Es en estos efímeros momentos de conexión con el mundo natural que recordamos la profunda interconexión de todas las cosas vivientes y nuestra responsabilidad de apreciar y proteger el delicado equilibrio que nos sostiene."
      );
    });
  });

  describe("method: english", () => {
    test("returns short text", () => {
      const loremIpsum = loremIntl.english("short");
      expect(loremIpsum).toBe("The quick brown fox jumps over the lazy dog.");
    });

    test("returns medium-sized text", () => {
      const loremIpsum = loremIntl.english("medium");
      expect(loremIpsum).toBe(
        "In a world where technology and innovation intersect, a new era of possibilities emerges. From artificial intelligence to sustainable energy solutions, the future is being shaped by our collective vision and determination."
      );
    });

    test("returns long text", () => {
      const loremIpsum = loremIntl.english("long");
      expect(loremIpsum).toBe(
        "As the sun gently sets over the horizon, casting a warm glow across the tranquil landscape, we find ourselves immersed in a moment of profound serenity. Nature's beauty unfolds before our eyes, a testament to the intricate tapestry of life on this planet. Each blade of grass, every rustling leaf, and the harmonious chorus of birdsong all contribute to the symphony of existence. It is in these fleeting moments of connection with the natural world that we are reminded of the profound interconnectedness of all living things and our responsibility to cherish and protect the delicate balance that sustains us."
      );
    });
  });

  describe("method: hindi", () => {
    test("returns short text", () => {
      const loremIpsum = loremIntl.hindi("short");
      expect(loremIpsum).toBe("तेज़ भूरे लोमड़ी आलसी कुतिया के ऊपर कूदती है।");
    });

    test("returns medium-sized text", () => {
      const loremIpsum = loremIntl.hindi("medium");
      expect(loremIpsum).toBe(
        "एक दुनिया में जहाँ प्रौद्योगिकी और नवाचार आपस में मिल जाते हैं, एक नई संभावनाओं की युग उद्भव हो रहा है। कृत्रिम बुद्धिमत्ता से लेकर संवेदनशील ऊर्जा समाधानों तक, भविष्य हमारे संगठन द्वारा दृढ़ दृष्टिकोण और संकल्प के साथ आकार दिया जा रहा है।"
      );
    });

    test("returns long text", () => {
      const loremIpsum = loremIntl.hindi("long");
      expect(loremIpsum).toBe(
        "जब सूरज धीरे-धीरे पश्चिम दिशा की ओर सेट होता है, धीरे-धीरे आकर्षक दृश्य के ऊपर गर्म रौशनी डालता है, तब हम एक गहरी शांति के क्षण में लिपटे होते है। प्राकृतिक सौंदर्य हमारे सामने प्रकट होता है, यह इस प्लैनेट पर जीवन के सूक्ष्म बुनावट का साक्षर है। हरी घास की हर ब्लेड, हर झूलती पत्ती और पक्षियों की मधुर गीतों की मिलीभगत से हम जीवन के संगीत में योगदान करते हैं। इन प्राकृतिक दुनिया के इस चिमुकले अंधार में, जीवन की रचना समृद्धि में उचित समय पर होती है, जो हमें सभी जीवित चीजों के गहरे में जुड़े रहने की गहरी दृढ़ता और संरक्षण की जिम्मेदारी को बचाने की महत्वपूर्ण बातों का स्मरण कराते है।"
      );
    });
  });

  describe("method: arabic", () => {
    test("returns short text", () => {
      const loremIpsum = loremIntl.arabic("short");
      expect(loremIpsum).toBe("الثعلب البني السريع يقفز فوق الكلب الكسول.");
    });

    test("returns medium-sized text", () => {
      const loremIpsum = loremIntl.arabic("medium");
      expect(loremIpsum).toBe(
        "في عالم حيث تتقاطع التكنولوجيا والابتكار، تظهر عصرًا جديدًا من الإمكانيات. من الذكاء الصناعي إلى حلاول الطاقة المستدامة، يتم تشكيل المستقبل برؤيتنا وعزمنا الجماعيين."
      );
    });

    test("returns long text", () => {
      const loremIpsum = loremIntl.arabic("long");
      expect(loremIpsum).toBe(
        "بينما يتدلى الشمس برفق فوق الأفق، مُشعةً بتوهج دافئ عبر المشهد الهادئ، نجد أنفسنا غارقين في لحظة من السكينة العميقة. جمال الطبيعة يكشف نفسه أمام أعيننا، شاهدًا على نسيج معقد للحياة على هذا الكوكب. كل شريحة من العشب، وكل ورقة تتأرجح، وكل تلاوة ملحنة من طيور الغناء تُسهم في سيمفونية الوجود. إنه في هذه اللحظات الزاهية من الاتصال مع العالم الطبيعي التي نُذكر فيها بالترابط العميق لجميع الكائنات الحية ومسؤوليتنا تجاه تقدير وحماية التوازن الهش الذي يسيرينا."
      );
    });
  });

  describe("method: create", () => {
    test("returns new instance with default text set to latin and default size set to short", () => {
      const instance = loremIntl.create({
        defaultLanguage: "latin",
        defaultSize: "short",
      });
      expect(instance.text()).toBe(
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      );
    });

    test("returns new instance with default text set to latin and default size set to medium", () => {
      const instance = loremIntl.create({
        defaultLanguage: "latin",
        defaultSize: "medium",
      });
      expect(instance.text()).toBe(
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed luctus vestibulum mi, vitae faucibus libero vehicula eu. Fusce in aliquet risus. Suspendisse et venenatis ante, ac interdum magna. Nunc vitae ipsum lacinia, dictum nisl id, posuere turpis."
      );
    });

    test("returns new instance with default text set to latin and default size set to long", () => {
      const instance = loremIntl.create({
        defaultLanguage: "latin",
        defaultSize: "long",
      });
      expect(instance.text()).toBe(
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed luctus vestibulum mi, vitae faucibus libero vehicula eu. Fusce in aliquet risus. Suspendisse et venenatis ante, ac interdum magna. Nunc vitae ipsum lacinia, dictum nisl id, posuere turpis. Donec molestie massa ante, nec tristique lectus venenatis suscipit. Suspendisse at nulla bibendum, venenatis mi sit amet, dictum dui. Vivamus ante neque, sollicitudin gravida risus eu, pellentesque volutpat tortor."
      );
    });
  });

  describe("method: text", () => {
    test("returns medium-sized lorem ipsum text by default", () => {
      expect(loremIntl.text()).toBe(
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed luctus vestibulum mi, vitae faucibus libero vehicula eu. Fusce in aliquet risus. Suspendisse et venenatis ante, ac interdum magna. Nunc vitae ipsum lacinia, dictum nisl id, posuere turpis."
      );
    });

    test("returns placeholder text in specified language and size to create instance", () => {
      const instance = loremIntl.create({
        defaultLanguage: "english",
        defaultSize: "short",
      });
      expect(instance.text()).toBe(
        "The quick brown fox jumps over the lazy dog."
      );
    });
  });
});
