// "Découvrir" content hub — one long-form article per menu dish, explaining
// where it comes from, how it's made, and a few genuine facts/trivia. Built
// because a lot of visitors here are Moroccan and may not know Indian
// cuisine well; the Menu page's job is "help me order", this hub's job is
// "help me understand what I'm ordering" — different intent, different
// page, cross-linked both ways (see the `guideSlug` field on
// MenuHighlightItem in menu-highlights.ts, and the "back to menu" CTA on
// the guide page itself).
//
// Content sourced from real culinary-history reporting (Moti Mahal's own
// account, NPR's 2024 coverage of the Gujral/Jaggi court dispute — see
// citations kept in the project notes) — not invented. Same honesty
// standard the rest of the site holds to for photos applies here to facts:
// a claim with no real source doesn't go in, and the one genuinely
// contested detail (which "Kundan Lal" actually invented the dish) is
// presented as contested, not settled.
//
// One article exists today (Butter Chicken). More get appended here as
// they're written — the [slug].astro route and DishGuideContent.astro
// template are already built to handle any number of entries with zero
// further code changes.
import type { LocalizedText } from '../i18n/languages';

export interface DishGuide {
  slug: string;
  // Matches the `name` field on the corresponding item in
  // menu-highlights.ts — that's how the Menu page finds which guide to
  // link to for a given dish, with no second hand-maintained mapping to
  // keep in sync.
  dishName: string;
  title: LocalizedText;
  kicker: LocalizedText;
  metaTitle: LocalizedText;
  metaDescription: LocalizedText;
  intro: LocalizedText;
  originHeading: LocalizedText;
  originParagraphs: LocalizedText[];
  preparationHeading: LocalizedText;
  preparationParagraphs: LocalizedText[];
  funFactsHeading: LocalizedText;
  funFacts: LocalizedText[];
  // Short teaser shown as the card excerpt on the /decouvrir hub page.
  teaser: LocalizedText;
}

export const dishGuides: DishGuide[] = [
  {
    slug: 'butter-chicken',
    dishName: 'Butter Chicken',
    title: { fr: 'Butter Chicken', en: 'Butter Chicken', ar: 'دجاج بالزبدة (Butter Chicken)' },
    kicker: { fr: 'Le plat culte', en: 'The iconic dish', ar: 'الطبق الأيقوني' },
    metaTitle: {
      fr: 'Butter Chicken : origine, histoire et recette',
      en: 'Butter Chicken: Origin, History & Recipe',
      ar: 'دجاج بالزبدة: الأصل والتاريخ والوصفة',
    },
    metaDescription: {
      fr: "Découvrez l'histoire du butter chicken, plat indien culte né à Delhi : origine, recette traditionnelle et anecdotes. À déguster chez Indian Flavors, restaurant indien à Rabat.",
      en: 'Discover the story behind butter chicken, the iconic Indian dish born in Delhi: its origin, traditional recipe and fun facts. A classic to try at Indian Flavors, an Indian restaurant in Rabat.',
      ar: 'اكتشفوا قصة دجاج بالزبدة، الطبق الهندي الأيقوني الذي وُلد في دلهي: أصله ووصفته التقليدية ومعلومات ممتعة عنه. طبق كلاسيكي يستحق التجربة في مطعم Indian Flavors، المطعم الهندي في الرباط.',
    },
    teaser: {
      fr: "Crémeux, épicé, né à Delhi par pur hasard de cuisine — voici comment le plat indien le plus connu au monde a vu le jour.",
      en: 'Creamy, spiced, and born out of a kitchen accident in Delhi — here\'s how the world\'s most famous Indian dish came to be.',
      ar: 'كريمي ومتبّل، وُلد في دلهي نتيجة صدفة في المطبخ — إليكم كيف ظهر إلى الوجود أشهر طبق هندي في العالم.',
    },
    intro: {
      fr: 'Le butter chicken — ou murgh makhani — est sans doute le plat indien le plus connu au monde : crémeux, légèrement sucré-épicé, et souvent le tout premier contact de beaucoup de gens avec la cuisine indienne. Voici son histoire, sa vraie préparation, et quelques anecdotes que même certains habitués ignorent.',
      en: "Butter chicken — also known as murgh makhani — is arguably the most famous Indian dish in the world: creamy, mildly sweet and spiced, and often people's very first taste of Indian cuisine. Here's its story, how it's actually made, and a few facts even regulars might not know.",
      ar: 'يُعدّ طبق دجاج بالزبدة — المعروف أيضًا باسم مرغ مخني (Murgh Makhani) — على الأرجح أشهر طبق هندي في العالم: طبق كريمي، خفيف الحلاوة والتوابل، وغالبًا ما يكون أول تجربة للناس مع المطبخ الهندي. إليكم قصته، وطريقة تحضيره الحقيقية، وبعض المعلومات التي قد يجهلها حتى رواد المطعم.',
    },
    originHeading: { fr: 'Aux origines du plat', en: 'The origins of the dish', ar: 'أصل الطبق' },
    originParagraphs: [
      {
        fr: "L'histoire commence avant l'indépendance de l'Inde, dans la ville de Peshawar (aujourd'hui au Pakistan), où un restaurateur du nom de Kundan Lal Gujral tenait déjà un établissement reconnu pour son poulet cuit au four tandoor.",
        en: "The story begins before India's independence, in the city of Peshawar (now in Pakistan), where a restaurateur named Kundan Lal Gujral already ran an establishment known for its tandoor-cooked chicken.",
        ar: 'تبدأ القصة قبل استقلال الهند، في مدينة بيشاور (الواقعة اليوم في باكستان)، حيث كان صاحب مطعم يُدعى كوندان لال غوجرال يدير بالفعل مطعمًا معروفًا بدجاجه المطهو في فرن التندور.',
      },
      {
        fr: "En 1947, la partition de l'Inde pousse Kundan Lal Gujral à fuir vers Delhi. Il y ouvre un nouveau restaurant, le Moti Mahal, dans le quartier de Daryaganj — un établissement resté célèbre encore aujourd'hui comme le « berceau » du poulet tandoori popularisé en Inde.",
        en: "In 1947, the partition of India forced Kundan Lal Gujral to flee to Delhi. There, he opened a new restaurant, Moti Mahal, in the Daryaganj neighborhood — an establishment still celebrated today as the birthplace of the tandoori chicken that became popular across India.",
        ar: 'في عام 1947، دفعت عملية تقسيم الهند كوندان لال غوجرال إلى الفرار نحو دلهي. هناك افتتح مطعمًا جديدًا، موتي محل، في حي داريا غانج — وهو مطعم لا يزال يُعرف حتى اليوم بأنه "مهد" الدجاج التندوري الذي انتشر لاحقًا في جميع أنحاء الهند.',
      },
      {
        fr: "C'est dans ce restaurant qu'est né le butter chicken, par nécessité plus que par inspiration soudaine : les morceaux de poulet cuits au tandoor, préparés à l'avance, avaient tendance à sécher en fin de service. Plutôt que de les jeter, Kundan Lal Gujral a eu l'idée de les faire mijoter dans une sauce à base de tomates, de beurre et de crème — la fameuse sauce « makhani ». Le résultat a immédiatement plu, et le plat est resté à la carte.",
        en: "It was at this restaurant that butter chicken was born, more out of necessity than sudden inspiration: tandoor-cooked chicken pieces, prepared ahead of service, tended to dry out by the end of the night. Rather than throw them away, Kundan Lal Gujral had the idea to simmer them in a sauce made from tomatoes, butter and cream — the now-famous 'makhani' sauce. The result was an instant hit, and the dish stuck around.",
        ar: 'وفي هذا المطعم بالذات وُلد طبق دجاج بالزبدة، عن ضرورة أكثر منه عن إلهام مفاجئ: كانت قطع الدجاج المطهوة في التندور والمُحضّرة مسبقًا تميل إلى الجفاف مع نهاية المساء. وبدلًا من التخلص منها، خطرت لكوندان لال غوجرال فكرة طهيها ببطء في صلصة من الطماطم والزبدة والقشدة — وهي صلصة "ماخني" الشهيرة. لاقت النتيجة نجاحًا فوريًا، واستمر الطبق على القائمة منذ ذلك الحين.',
      },
    ],
    preparationHeading: { fr: 'Comment il est préparé', en: 'How it\'s made', ar: 'طريقة التحضير' },
    preparationParagraphs: [
      {
        fr: "La recette traditionnelle se prépare en deux temps. D'abord, les morceaux de poulet marinent plusieurs heures dans un mélange de yaourt, de jus de citron et d'épices (gingembre, ail, garam masala, piment), puis sont cuits au four tandoor à très haute température — ce qui leur donne ce léger goût fumé caractéristique.",
        en: 'The traditional recipe comes together in two stages. First, chicken pieces marinate for several hours in a mix of yogurt, lemon juice and spices (ginger, garlic, garam masala, chili), then get cooked in a tandoor oven at very high heat — which gives them that signature light smokiness.',
        ar: 'يُحضَّر الطبق التقليدي على مرحلتين. أولًا، تُتبَّل قطع الدجاج لساعات عدة في خليط من اللبن الزبادي وعصير الليمون والتوابل (الزنجبيل، الثوم، غارام ماسالا، الفلفل الحار)، ثم تُطهى في فرن التندور على حرارة عالية جدًا — ما يمنحها تلك النكهة المدخنة الخفيفة المميزة.',
      },
      {
        fr: "Ensuite vient la sauce « makhani » : des tomates mijotées longuement jusqu'à réduction, enrichies de beurre, de crème fraîche et d'un mélange d'épices plus doux (cardamome, cannelle, fenugrec). Le poulet tandoori est ensuite ajouté à cette sauce et laissé mijoter quelques minutes, le temps qu'il s'imprègne de tous les arômes.",
        en: "Next comes the 'makhani' sauce: tomatoes slow-simmered down until reduced, enriched with butter, cream and a gentler blend of spices (cardamom, cinnamon, fenugreek). The tandoori chicken is then added to this sauce and left to simmer for a few minutes, soaking up all the flavor.",
        ar: 'بعد ذلك تأتي صلصة "ماخني": طماطم تُطهى ببطء حتى تتركز، ثم تُغنى بالزبدة والقشدة الطازجة ومزيج ألطف من التوابل (الهيل، القرفة، الحلبة). تُضاف قطع الدجاج التندوري إلى هذه الصلصة وتُترك لتُطهى بضع دقائق حتى تمتص جميع النكهات.',
      },
      {
        fr: "Chez Indian Flavors, nous suivons ce même principe : rien n'est préparé à l'avance, et chaque portion de butter chicken est assemblée à la commande — la sauce mijote en cuisine, jamais réchauffée d'un service à l'autre.",
        en: 'At Indian Flavors, we follow the same principle: nothing is prepared in advance, and every portion of butter chicken is assembled to order — the sauce simmers in the kitchen, never reheated from one service to the next.',
        ar: 'في مطعم Indian Flavors، نتبع المبدأ نفسه: لا شيء يُحضَّر مسبقًا، وكل طبق من دجاج بالزبدة يُجهَّز عند الطلب — تُطهى الصلصة في المطبخ، ولا تُسخَّن أبدًا من خدمة إلى أخرى.',
      },
    ],
    funFactsHeading: { fr: 'Le saviez-vous ?', en: 'Did you know?', ar: 'هل تعلم؟' },
    funFacts: [
      {
        fr: "Le nom « makhani » vient tout simplement du mot hindi pour « beurre » (makhan).",
        en: "The name 'makhani' simply comes from the Hindi word for 'butter' (makhan).",
        ar: 'اسم "ماخني" مشتق ببساطة من الكلمة الهندية التي تعني "الزبدة" (makhan).',
      },
      {
        fr: "Le butter chicken est parfois confondu avec le chicken tikka masala, un plat cousin apparu plus tard au Royaume-Uni — les deux partagent une sauce tomate-crème, mais leurs origines et leurs recettes restent distinctes.",
        en: 'Butter chicken is sometimes confused with chicken tikka masala, a related dish that emerged later in the United Kingdom — both share a tomato-cream sauce, but their origins and recipes remain distinct.',
        ar: 'غالبًا ما يُخلط بين دجاج بالزبدة وطبق تشيكن تكا ماسالا، وهو طبق قريب منه ظهر لاحقًا في المملكة المتحدة — يشترك الطبقان في صلصة الطماطم والقشدة، لكن أصلهما ووصفتهما يبقيان مختلفين.',
      },
      {
        fr: "En 2024, les descendants de deux cuisiniers portant le même prénom — tous deux appelés « Kundan Lal » et tous deux ayant travaillé au restaurant d'origine — se sont affrontés devant un tribunal de Delhi pour savoir lequel avait réellement inventé le plat. Le dossier déposé comptait plus de 2 700 pages, et l'affaire n'a, à ce jour, pas tranché définitivement la question.",
        en: "In 2024, the descendants of two cooks who shared the same first name — both called 'Kundan Lal' and both having worked at the original restaurant — faced off in a Delhi court over who truly invented the dish. The filing ran over 2,700 pages long, and the question remains, as of today, unresolved.",
        ar: 'في عام 2024، تواجه أحفاد طاهيين يحملان الاسم نفسه — كلاهما يُدعى "كوندان لال" وكلاهما عمل في المطعم الأصلي — أمام محكمة في دلهي لتحديد من منهما ابتكر الطبق فعليًا. تجاوز عدد صفحات الملف المُقدَّم 2700 صفحة، ولم تُحسم المسألة بشكل نهائي حتى اليوم.',
      },
      {
        fr: "Le butter chicken est aujourd'hui l'un des plats indiens les plus commandés au monde, aussi bien dans les restaurants indiens traditionnels que dans les enseignes occidentales.",
        en: 'Butter chicken is now considered one of the most-ordered Indian dishes in the world, found on menus at both traditional Indian restaurants and Western chains.',
        ar: 'يُعدّ دجاج بالزبدة اليوم من أكثر الأطباق الهندية طلبًا في العالم، ويُقدَّم في كل من المطاعم الهندية التقليدية والسلاسل الغربية على حد سواء.',
      },
    ],
  },
];

export function getDishGuide(slug: string): DishGuide | undefined {
  return dishGuides.find((g) => g.slug === slug);
}
