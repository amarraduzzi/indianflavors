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
  // Real photo of THIS dish for the hero — same honesty rule as
  // menu-highlights.ts: only set when a genuine, accurate photo exists.
  // Falls back to the neutral mood-tile.webp pattern (see
  // DishGuideContent.astro) when a guide has no real photo yet.
  heroImage?: string;
  heroAlt?: LocalizedText;
  // Extra real photos shown inline within the "how it's made" section —
  // same honesty rule again: only ever a genuine photo of this exact dish
  // (ingredients, the cooking process), never a stand-in.
  galleryImages?: { src: string; alt: LocalizedText }[];
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
    heroImage: '/images/guide-butter-chicken-hero.webp',
    heroAlt: {
      fr: 'Butter chicken servi dans une marmite en cuivre avec du naan',
      en: 'Butter chicken served in a copper pot with naan',
      ar: 'دجاج بالزبدة يُقدَّم في قدر نحاسي مع خبز النان',
    },
    galleryImages: [
      {
        src: '/images/guide-butter-chicken-spices.webp',
        alt: {
          fr: 'Les épices traditionnelles du butter chicken : paprika, cardamome, cannelle, gingembre, ail',
          en: 'The traditional spices of butter chicken: paprika, cardamom, cinnamon, ginger, garlic',
          ar: 'التوابل التقليدية لدجاج بالزبدة: الفلفل الأحمر الحلو، الهيل، القرفة، الزنجبيل، الثوم',
        },
      },
      {
        src: '/images/guide-butter-chicken-sauce.webp',
        alt: {
          fr: 'La crème versée dans la sauce makhani en fin de cuisson',
          en: 'Cream being poured into the makhani sauce at the end of cooking',
          ar: 'القشدة تُسكب في صلصة ماخني في نهاية الطهي',
        },
      },
    ],
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
  {
    slug: 'tandoori-chicken',
    dishName: 'Tandoori Chicken',
    title: { fr: 'Tandoori Chicken', en: 'Tandoori Chicken', ar: 'دجاج تندوري (Tandoori Chicken)' },
    kicker: { fr: 'Le classique du four tandoor', en: 'The tandoor classic', ar: 'كلاسيكية فرن التندور' },
    metaTitle: {
      fr: 'Tandoori Chicken : origine, histoire et recette',
      en: 'Tandoori Chicken: Origin, History & Recipe',
      ar: 'دجاج تندوري: الأصل والتاريخ والوصفة',
    },
    metaDescription: {
      fr: "Découvrez l'histoire du tandoori chicken, le plat qui a révolutionné la cuisine au four tandoor : origine, marinade traditionnelle et anecdotes. À déguster chez Indian Flavors, restaurant indien à Rabat.",
      en: 'Discover the story behind tandoori chicken, the dish that transformed how the tandoor oven is used: its origin, traditional marinade and fun facts. A classic to try at Indian Flavors, an Indian restaurant in Rabat.',
      ar: 'اكتشفوا قصة الدجاج التندوري، الطبق الذي غيّر طريقة استخدام فرن التندور: أصله، تتبيلته التقليدية، ومعلومات ممتعة عنه. طبق كلاسيكي يستحق التجربة في مطعم Indian Flavors، المطعم الهندي في الرباط.',
    },
    teaser: {
      fr: "Avant le butter chicken, il y a eu ceci : le plat qui a transformé un four à pain en symbole de la cuisine indienne.",
      en: 'Before butter chicken, there was this: the dish that turned a bread oven into a symbol of Indian cuisine.',
      ar: 'قبل دجاج بالزبدة، كان هذا: الطبق الذي حوّل فرن الخبز إلى رمز للمطبخ الهندي.',
    },
    heroImage: '/images/guide-tandoori-chicken-hero.webp',
    heroAlt: {
      fr: 'Cuisses de poulet tandoori grillées, servies sur ardoise avec chutney à la coriandre, oignon rouge et citron vert',
      en: 'Grilled tandoori chicken legs, served on slate with coriander chutney, red onion and lime',
      ar: 'أفخاذ دجاج تندوري مشوية، تُقدَّم على لوح إردواز مع صلصة الكزبرة والبصل الأحمر والليمون الأخضر',
    },
    galleryImages: [
      {
        src: '/images/guide-tandoori-chicken-marinade.webp',
        alt: {
          fr: 'La marinade traditionnelle du tandoori chicken : yaourt épicé, paprika, curcuma, gingembre et citron',
          en: 'The traditional tandoori chicken marinade: spiced yogurt, paprika, turmeric, ginger and lemon',
          ar: 'التتبيلة التقليدية للدجاج التندوري: لبن زبادي متبّل، فلفل أحمر حلو، كركم، زنجبيل وليمون',
        },
      },
      {
        src: '/images/guide-tandoori-chicken-skewer.webp',
        alt: {
          fr: "Brochette de poulet mariné, prête à être plongée dans le four tandoor",
          en: 'Skewer of marinated chicken, ready to go into the tandoor oven',
          ar: 'سيخ دجاج متبّل، جاهز للطهي في فرن التندور',
        },
      },
      {
        src: '/images/guide-tandoori-chicken-tandoor.webp',
        alt: {
          fr: 'Brochette de poulet tandoori en cours de cuisson au-dessus des braises du four traditionnel',
          en: 'Tandoori chicken skewer cooking over the glowing coals of the traditional oven',
          ar: 'سيخ الدجاج التندوري يُطهى فوق جمر فرن التندور التقليدي',
        },
      },
    ],
    intro: {
      fr: "Le tandoori chicken n'est pas seulement l'un des plats indiens les plus populaires au monde — c'est aussi le plat qui a inventé, sans le vouloir, le butter chicken (lire notre article dédié). Voici l'histoire d'un test de cuisson devenu classique planétaire, sa vraie recette, et quelques anecdotes surprenantes.",
      en: "Tandoori chicken isn't just one of the world's most popular Indian dishes — it's also the dish that unintentionally led to the invention of butter chicken (read our dedicated article). Here's the story of a cooking experiment that became a global classic, its real recipe, and a few surprising facts.",
      ar: 'لا يُعدّ الدجاج التندوري واحدًا من أشهر الأطباق الهندية في العالم فحسب — بل هو أيضًا الطبق الذي أدى، دون قصد، إلى ابتكار دجاج بالزبدة (اقرأوا مقالنا المخصص لذلك). إليكم قصة تجربة طهي تحوّلت إلى كلاسيكية عالمية، ووصفتها الحقيقية، وبعض المعلومات المثيرة للاهتمام.',
    },
    originHeading: { fr: 'Aux origines du plat', en: 'The origins of the dish', ar: 'أصل الطبق' },
    originParagraphs: [
      {
        fr: "L'histoire commence dans les années 1920, à Peshawar (aujourd'hui au Pakistan), dans une petite gargote nommée Moti Mahal, tenue par un certain Mokha Singh Lamba. Un jeune cuisinier du nom de Kundan Lal Gujral y travaillait déjà — le même homme qui inventera, des décennies plus tard, le butter chicken.",
        en: "The story begins in the 1920s, in Peshawar (now in Pakistan), at a small eatery called Moti Mahal, run by a man named Mokha Singh Lamba. A young cook named Kundan Lal Gujral already worked there — the same man who, decades later, would go on to invent butter chicken.",
        ar: 'تبدأ القصة في عشرينيات القرن الماضي، في بيشاور (الواقعة اليوم في باكستان)، في مطعم صغير يُدعى موتي محل، يديره رجل يُدعى موخا سينغ لامبا. كان طاهٍ شاب يُدعى كوندان لال غوجرال يعمل هناك بالفعل — وهو نفس الرجل الذي سيبتكر لاحقًا، بعد عقود، طبق دجاج بالزبدة.',
      },
      {
        fr: "À l'époque, le four tandoor — un four en argile chauffé au charbon — ne servait qu'à cuire le pain, notamment le naan. Kundan Lal Gujral a eu l'idée d'y faire cuire autre chose : des morceaux de poulet marinés dans du yaourt et des épices, embrochés puis plongés dans la chaleur intense du four. Le résultat, saisi et légèrement fumé à l'extérieur mais tendre à l'intérieur, n'avait encore jamais été goûté.",
        en: "At the time, the tandoor — a clay oven heated with charcoal — was used only to bake bread, especially naan. Kundan Lal Gujral had the idea to cook something else in it: chicken pieces marinated in yogurt and spices, skewered and plunged into the oven's intense heat. The result — seared and lightly smoky on the outside, tender on the inside — had never been tasted before.",
        ar: 'في ذلك الوقت، كان فرن التندور — وهو فرن طيني يُسخَّن بالفحم — يُستخدم فقط لخبز الخبز، وخصوصًا النان. خطرت لكوندان لال غوجرال فكرة طهي شيء آخر فيه: قطع دجاج متبّلة باللبن الزبادي والتوابل، مثبّتة على أسياخ ومغموسة في الحرارة الشديدة للفرن. النتيجة — مشوية ومدخنة قليلًا من الخارج وطرية من الداخل — لم يسبق تذوق مثلها من قبل.',
      },
      {
        fr: "Après la partition de l'Inde en 1947, Kundan Lal Gujral s'installe à Delhi et ouvre son propre Moti Mahal dans le quartier de Daryaganj. C'est là que le tandoori chicken devient véritablement célèbre — au point que le restaurant se voit confier la préparation des repas du tout premier Premier ministre indien, Jawaharlal Nehru, dont la résidence officielle a même été équipée de son propre four tandoor pour recevoir des chefs d'État étrangers.",
        en: "After the partition of India in 1947, Kundan Lal Gujral moved to Delhi and opened his own Moti Mahal in the Daryaganj neighborhood. It was there that tandoori chicken truly became famous — so much so that the restaurant was entrusted with preparing meals for India's very first Prime Minister, Jawaharlal Nehru, whose official residence was even fitted with its own tandoor oven to host visiting heads of state.",
        ar: 'بعد تقسيم الهند عام 1947، انتقل كوندان لال غوجرال إلى دلهي وافتتح مطعم موتي محل الخاص به في حي داريا غانج. وهناك اشتهر الدجاج التندوري حقًا — لدرجة أن المطعم كُلِّف بتحضير وجبات أول رئيس وزراء هندي، جواهر لال نهرو، الذي زُوِّدت إقامته الرسمية بفرن تندور خاص لاستقبال رؤساء الدول الأجانب.',
      },
    ],
    preparationHeading: { fr: 'Comment il est préparé', en: 'How it\'s made', ar: 'طريقة التحضير' },
    preparationParagraphs: [
      {
        fr: "La recette repose sur une double marinade. D'abord un bain de jus de citron et de sel, qui attendrit la viande et prépare les fibres à absorber les saveurs. Puis une seconde marinade, plus longue, dans un mélange de yaourt épais, de gingembre, d'ail et d'épices — paprika, cumin, coriandre, garam masala — c'est ce mélange qui donne au poulet sa couleur rouge-orangé si reconnaissable.",
        en: 'The recipe relies on a double marinade. First, a soak in lemon juice and salt, which tenderizes the meat and preps the fibers to absorb flavor. Then a second, longer marinade in a mix of thick yogurt, ginger, garlic and spices — paprika, cumin, coriander, garam masala — which gives the chicken its instantly recognizable red-orange color.',
        ar: 'تعتمد الوصفة على تتبيلة مزدوجة. أولًا، نقع في عصير الليمون والملح، ما يُطري اللحم ويُهيئ أليافه لامتصاص النكهات. ثم تتبيلة ثانية، أطول، في مزيج من اللبن الزبادي الكثيف والزنجبيل والثوم والتوابل — الفلفل الأحمر الحلو، الكمون، الكزبرة، غارام ماسالا — وهذا المزيج هو ما يمنح الدجاج لونه الأحمر البرتقالي المميز فورًا.',
      },
      {
        fr: "Les morceaux marinent ainsi plusieurs heures, parfois toute une nuit, avant d'être embrochés verticalement et cuits dans le four tandoor à plus de 400°C. Cette cuisson extrêmement rapide et intense scelle les sucs à l'intérieur tout en donnant à la peau ce léger goût fumé et légèrement grillé qui fait la signature du plat.",
        en: 'The pieces marinate for several hours, sometimes overnight, before being skewered vertically and cooked in the tandoor at over 400°C. This extremely fast, intense cooking seals in the juices while giving the skin the lightly smoky, slightly charred edge that is the dish\'s signature.',
        ar: 'تُتبَّل القطع لساعات عدة، أحيانًا طوال الليل، قبل أن تُثبَّت عموديًا على أسياخ وتُطهى في فرن التندور على حرارة تتجاوز 400 درجة مئوية. هذا الطهي السريع جدًا والمكثف يحبس العصارة بالداخل، بينما يمنح الجلد تلك الحافة المدخنة قليلًا والمشوية بلطف التي تُميّز الطبق.',
      },
      {
        fr: "Chez Indian Flavors, notre four tandoor traditionnel chauffé au charbon suit exactement ce principe : chaque commande est cuite à la minute, jamais préparée à l'avance ni réchauffée.",
        en: 'At Indian Flavors, our traditional charcoal-fired tandoor follows exactly this principle: every order is cooked fresh to the minute, never prepared in advance or reheated.',
        ar: 'في مطعم Indian Flavors، يتبع فرن التندور التقليدي الذي يعمل بالفحم هذا المبدأ بالضبط: يُطهى كل طلب طازجًا عند اللحظة، ولا يُحضَّر مسبقًا أبدًا ولا يُسخَّن.',
      },
    ],
    funFactsHeading: { fr: 'Le saviez-vous ?', en: 'Did you know?', ar: 'هل تعلم؟' },
    funFacts: [
      {
        fr: "Le rouge-orangé si reconnaissable du tandoori chicken ne vient pas d'un ingrédient unique : traditionnellement obtenu avec une pointe de colorant alimentaire, il est aujourd'hui le plus souvent recréé naturellement avec du paprika ou du piment de Kashmir.",
        en: "The instantly recognizable red-orange of tandoori chicken doesn't come from a single ingredient: traditionally achieved with a touch of food coloring, it's most often recreated naturally today with paprika or Kashmiri chili.",
        ar: 'اللون الأحمر البرتقالي المميز للدجاج التندوري لا يأتي من مكوّن واحد: كان يُحصَّل تقليديًا بلمسة من الملوّن الغذائي، ويُعاد إنتاجه اليوم غالبًا بشكل طبيعي باستخدام الفلفل الأحمر الحلو أو فلفل كشمير.',
      },
      {
        fr: "Le tandoori chicken est directement à l'origine du butter chicken : ce dernier a été inventé pour recycler des restes de tandoori chicken qui séchaient en cuisine — sans ce plat, l'autre n'existerait probablement pas (lire notre article sur le butter chicken).",
        en: "Tandoori chicken directly led to the invention of butter chicken: the latter was created to use up leftover tandoori chicken that was drying out in the kitchen — without this dish, the other probably wouldn't exist (read our article on butter chicken).",
        ar: 'يُعدّ الدجاج التندوري السبب المباشر في ابتكار دجاج بالزبدة: فقد ابتُكر هذا الأخير لاستغلال بقايا الدجاج التندوري التي كانت تجف في المطبخ — لولا هذا الطبق، لما وُجد الآخر على الأرجح (اقرأوا مقالنا عن دجاج بالزبدة).',
      },
      {
        fr: "En 1990, l'association indienne des agences de voyages (IATO) a officiellement distingué Kundan Lal Gujral pour avoir inventé le plat — une reconnaissance rare pour un cuisinier.",
        en: "In 1990, the Indian Association of Tour Operators (IATO) formally recognized Kundan Lal Gujral for inventing the dish — a rare honor for a cook.",
        ar: 'في عام 1990، كرّمت الرابطة الهندية لوكالات السفر (IATO) رسميًا كوندان لال غوجرال لابتكاره الطبق — وهو تكريم نادر لطاهٍ.',
      },
      {
        fr: "Le restaurant Moti Mahal de Delhi a longtemps préparé les repas du Premier ministre Jawaharlal Nehru et de ses invités d'État, contribuant à faire connaître le tandoori chicken bien au-delà de l'Inde.",
        en: "Delhi's Moti Mahal restaurant long prepared meals for Prime Minister Jawaharlal Nehru and his state guests, helping tandoori chicken become known far beyond India.",
        ar: 'أعدّ مطعم موتي محل في دلهي لفترة طويلة وجبات رئيس الوزراء جواهر لال نهرو وضيوفه من رؤساء الدول، ما ساهم في شهرة الدجاج التندوري خارج الهند بكثير.',
      },
    ],
  },
];

export function getDishGuide(slug: string): DishGuide | undefined {
  return dishGuides.find((g) => g.slug === slug);
}
