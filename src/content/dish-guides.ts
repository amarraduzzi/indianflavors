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
  {
    slug: 'biryani',
    dishName: 'Hyderabadi Dum Biryani',
    title: { fr: 'Hyderabadi Dum Biryani', en: 'Hyderabadi Dum Biryani', ar: 'برياني حيدر آبادي (Dum Biryani)' },
    kicker: { fr: 'Le plat scellé à la vapeur', en: 'The steam-sealed classic', ar: 'الطبق المختوم بالبخار' },
    metaTitle: {
      fr: 'Hyderabadi Dum Biryani : origine, histoire et recette',
      en: 'Hyderabadi Dum Biryani: Origin, History & Recipe',
      ar: 'برياني حيدر آبادي: الأصل والتاريخ والوصفة',
    },
    metaDescription: {
      fr: "Découvrez l'histoire du biryani d'Hyderabad et de sa cuisson « dum » scellée à la pâte : origine, technique traditionnelle et anecdotes. À déguster chez Indian Flavors, restaurant indien à Rabat.",
      en: 'Discover the story behind Hyderabadi biryani and its dough-sealed "dum" cooking technique: its origin, traditional method and fun facts. A classic to try at Indian Flavors, an Indian restaurant in Rabat.',
      ar: 'اكتشفوا قصة برياني حيدر آباد وتقنية طهيه "دم" المختومة بالعجين: أصله وطريقته التقليدية ومعلومات ممتعة عنه. طبق كلاسيكي يستحق التجربة في مطعم Indian Flavors، المطعم الهندي في الرباط.',
    },
    teaser: {
      fr: "Un couvercle scellé à la pâte, une vapeur parfumée qui s'échappe à l'ouverture — voici le plat le plus théâtral de la cuisine indienne, et son histoire à la cour des Nizams.",
      en: "A dough-sealed lid, fragrant steam escaping the moment it's cracked open — this is the most theatrical dish in Indian cuisine, and here's its history at the court of the Nizams.",
      ar: 'غطاء مختوم بالعجين، وبخار عطري يتصاعد لحظة فتحه — هذا هو الطبق الأكثر إثارة في المطبخ الهندي، وإليكم تاريخه في بلاط النظّام.',
    },
    heroImage: '/images/guide-biryani-hero.webp',
    heroAlt: {
      fr: 'Biryani servi dans une marmite en cuivre, agneau et crevettes grillées sur riz basmati doré',
      en: 'Biryani served in a copper pot, grilled lamb and shrimp over golden basmati rice',
      ar: 'برياني يُقدَّم في قدر نحاسي، لحم ضأن وجمبري مشوي فوق أرز بسمتي ذهبي',
    },
    galleryImages: [
      {
        src: '/images/guide-biryani-dum-seal.webp',
        alt: {
          fr: 'La marmite scellée à la pâte à pain avant la cuisson « dum »',
          en: 'The pot sealed with bread dough before "dum" cooking',
          ar: 'القدر مختوم بعجين الخبز قبل طهي "دم"',
        },
      },
      {
        src: '/images/guide-biryani-dum-open.webp',
        alt: {
          fr: "L'ouverture du couvercle scellé, libérant la vapeur parfumée du biryani",
          en: 'The sealed lid being opened, releasing the fragrant steam of the biryani',
          ar: 'فتح الغطاء المختوم، مع تصاعد بخار البرياني العطري',
        },
      },
      {
        src: '/images/guide-biryani-spices.webp',
        alt: {
          fr: "Les épices entières du biryani : anis étoilé, cannelle, clous de girofle, cardamome et huile de safran",
          en: 'The whole spices of biryani: star anise, cinnamon, cloves, cardamom and saffron oil',
          ar: 'التوابل الكاملة للبرياني: اليانسون النجمي، القرفة، القرنفل، الهيل وزيت الزعفران',
        },
      },
    ],
    intro: {
      fr: "Le biryani est sans doute le plat le plus spectaculaire de la cuisine indienne : une marmite scellée à la pâte, posée sur braises douces, ouverte au moment de servir dans un nuage de vapeur parfumée. Voici l'histoire de ce plat né à la croisée des cuisines persane et moghole, sa vraie technique de cuisson, et quelques anecdotes.",
      en: "Biryani is arguably the most theatrical dish in Indian cuisine: a pot sealed with dough, set over gentle embers, opened at the moment of serving in a cloud of fragrant steam. Here's the story of a dish born at the crossroads of Persian and Mughal cuisine, its real cooking technique, and a few facts.",
      ar: 'يُعدّ البرياني على الأرجح أكثر الأطباق إثارة في المطبخ الهندي: قدر مختوم بالعجين، يُوضع فوق جمر هادئ، ويُفتح لحظة التقديم وسط سحابة من البخار العطري. إليكم قصة طبق وُلد عند ملتقى المطبخين الفارسي والمغولي، وتقنية طهيه الحقيقية، وبعض المعلومات عنه.',
    },
    originHeading: { fr: 'Aux origines du plat', en: 'The origins of the dish', ar: 'أصل الطبق' },
    originParagraphs: [
      {
        fr: "Le mot « biryani » viendrait du persan « birinj » (riz) ou du verbe « birian kardan » (frire, rôtir avant cuisson) — deux origines linguistiques qui reflètent bien le plat : du riz, préparé en plusieurs étapes avant d'être assemblé. La cuisine persane du riz aromatique par couches est arrivée en Inde via les routes commerciales et les cours moghole et sultanates, où elle a rencontré les épices et techniques locales.",
        en: "The word 'biryani' is thought to come from the Persian 'birinj' (rice) or the verb 'birian kardan' (to fry or roast before cooking) — two linguistic roots that reflect the dish well: rice, prepared in several stages before being assembled. Persian layered-rice cooking arrived in India via trade routes and the Mughal and sultanate courts, where it met local spices and techniques.",
        ar: 'يُعتقد أن كلمة "برياني" مشتقة من الكلمة الفارسية "برنج" (أرز) أو من الفعل "بریان کردن" (القلي أو التحميص قبل الطهي) — وهما أصلان لغويان يعكسان الطبق جيدًا: أرز يُحضَّر على عدة مراحل قبل تجميعه. وصل طهي الأرز الفارسي المُطبَّق إلى الهند عبر طرق التجارة وبلاطات المغول والسلطنات، حيث التقى بالتوابل والتقنيات المحلية.',
      },
      {
        fr: "La version d'Hyderabad naît au XVIIIe siècle, quand Asaf Jah Ier, ancien gouverneur moghol, fonde sa propre dynastie — les Nizams — et installe sa cour à Hyderabad. Les cuisiniers royaux (khansamas) y fusionnent la technique moghole du riz par couches avec les épices et le piment de la cuisine télougoue locale, donnant naissance à un biryani plus relevé et plus parfumé que ses cousins du nord de l'Inde.",
        en: "Hyderabad's version was born in the 18th century, when Asaf Jah I, a former Mughal governor, founded his own dynasty — the Nizams — and set up his court in Hyderabad. The royal cooks (khansamas) there fused the Mughal layered-rice technique with the spices and chili of local Telugu cuisine, giving rise to a spicier, more fragrant biryani than its northern Indian cousins.",
        ar: 'وُلدت نسخة حيدر آباد في القرن الثامن عشر، عندما أسّس آصف جاه الأول، الحاكم المغولي السابق، سلالته الخاصة — النظّام — واستقر ببلاطه في حيدر آباد. مزج الطهاة الملكيون (الخانسامة) هناك بين تقنية المغول لطهي الأرز بالطبقات وتوابل وفلفل المطبخ التيلوغوي المحلي، ما أنتج برياني أكثر حرارة وعطرًا من نظيره في شمال الهند.',
      },
      {
        fr: "Ce biryani royal se distingue par sa méthode « kacchi » (« cru ») : contrairement au style « pakki » (viande précuite puis mélangée au riz), la viande crue marinée est ici disposée en couches directement sous le riz mi-cuit, et l'ensemble cuit ensemble — un pari plus risqué, qui demande un vrai savoir-faire pour que la viande et le riz soient cuits à la perfection en même temps.",
        en: "This royal biryani stands out for its 'kacchi' ('raw') method: unlike the 'pakki' style (meat pre-cooked, then mixed with the rice), raw marinated meat is layered directly under the half-cooked rice here, and the whole thing cooks together — a riskier bet, requiring real skill to have both meat and rice cooked to perfection at the same time.",
        ar: 'يتميز هذا البرياني الملكي بطريقته "كاتشي" ("النيء"): على عكس أسلوب "باكي" (اللحم المطهو مسبقًا ثم يُخلط بالأرز)، يُوضع هنا اللحم النيء المتبّل مباشرة تحت الأرز نصف المطهو، ويُطهى الجميع معًا — وهو رهان أكثر خطورة، يتطلب مهارة حقيقية لطهي اللحم والأرز بشكل مثالي في الوقت نفسه.',
      },
    ],
    preparationHeading: { fr: 'Comment il est préparé', en: 'How it\'s made', ar: 'طريقة التحضير' },
    preparationParagraphs: [
      {
        fr: "Tout commence par une marinade longue de la viande dans du yaourt, du gingembre, de l'ail et des épices. Le riz basmati est ensuite cuit à part, à peine à mi-cuisson, dans une eau parfumée d'épices entières — cannelle, anis étoilé, cardamome, clous de girofle.",
        en: 'It all starts with a long marinade of the meat in yogurt, ginger, garlic and spices. The basmati rice is then cooked separately, only to the halfway point, in water fragranced with whole spices — cinnamon, star anise, cardamom, cloves.',
        ar: 'يبدأ كل شيء بتتبيلة طويلة للحم في اللبن الزبادي والزنجبيل والثوم والتوابل. يُطهى أرز البسمتي بعد ذلك بشكل منفصل، حتى منتصف النضج فقط، في ماء معطّر بتوابل كاملة — القرفة، اليانسون النجمي، الهيل، القرنفل.',
      },
      {
        fr: "Vient ensuite le montage : la viande marinée crue au fond de la marmite, le riz mi-cuit par-dessus, puis une dernière couche de safran infusé dans du lait ou de l'huile, de menthe et de coriandre fraîches, et d'oignons frits. Le couvercle est scellé avec une pâte à pain simple — c'est ce geste, appelé « dum », qui donne son nom à la technique : la vapeur reste entièrement piégée à l'intérieur.",
        en: "Next comes the assembly: the raw marinated meat at the bottom of the pot, the half-cooked rice on top, then a final layer of milk- or oil-infused saffron, fresh mint and coriander, and fried onions. The lid is sealed with a simple bread dough — this gesture, called 'dum', gives the technique its name: the steam stays entirely trapped inside.",
        ar: 'يأتي بعد ذلك التجميع: اللحم النيء المتبّل في قاع القدر، الأرز نصف المطهو فوقه، ثم طبقة أخيرة من الزعفران المنقوع في الحليب أو الزيت، والنعناع والكزبرة الطازجين، والبصل المقلي. يُختم الغطاء بعجينة خبز بسيطة — وهذه الحركة، المسماة "دم"، هي التي تمنح التقنية اسمها: يبقى البخار محبوسًا بالكامل بالداخل.',
      },
      {
        fr: "La marmite cuit ensuite très lentement, à feu doux, parfois sur un lit de braises avec des charbons posés sur le couvercle — la vapeur emprisonnée termine de cuire la viande et infuse chaque grain de riz. Chez Indian Flavors, chaque biryani est préparé et scellé à la commande selon ce même principe, jamais réchauffé.",
        en: "The pot then cooks very slowly over low heat, sometimes over a bed of embers with coals placed on the lid — the trapped steam finishes cooking the meat and infuses every grain of rice. At Indian Flavors, every biryani is prepared and sealed to order following this same principle, never reheated.",
        ar: 'يُطهى القدر بعدها ببطء شديد على نار هادئة، أحيانًا فوق فراش من الجمر مع وضع الفحم فوق الغطاء — يُكمل البخار المحبوس طهي اللحم ويُشبع كل حبة أرز بالنكهة. في مطعم Indian Flavors، يُحضَّر ويُختم كل برياني عند الطلب وفق هذا المبدأ نفسه، ولا يُسخَّن أبدًا.',
      },
    ],
    funFactsHeading: { fr: 'Le saviez-vous ?', en: 'Did you know?', ar: 'هل تعلم؟' },
    funFacts: [
      {
        fr: "Le geste de sceller la marmite à la pâte est appelé « dum » — un mot d'origine persane évoquant le souffle ou la respiration : la vapeur reste littéralement « retenue » à l'intérieur jusqu'à l'ouverture.",
        en: "The gesture of sealing the pot with dough is called 'dum' — a word of Persian origin evoking breath: the steam is literally 'held' inside until the pot is opened.",
        ar: 'تُسمى حركة ختم القدر بالعجين "دم" — وهي كلمة من أصل فارسي تعني النَفَس: يبقى البخار "محبوسًا" حرفيًا بالداخل حتى فتح القدر.',
      },
      {
        fr: "Le biryani existe en de nombreuses variantes régionales à travers l'Inde — Lucknow, Calcutta, Malabar, Sindh — chacune avec ses propres épices et sa propre technique ; celui d'Hyderabad reste l'un des plus connus dans le monde.",
        en: 'Biryani exists in many regional variants across India — Lucknow, Kolkata, Malabar, Sindh — each with its own spices and technique; the Hyderabadi version remains one of the best known worldwide.',
        ar: 'يوجد البرياني بأشكال إقليمية عديدة عبر الهند — لكناو، كولكاتا، مالابار، السند — لكل منها توابلها وتقنيتها الخاصة؛ تبقى نسخة حيدر آباد من أشهرها في العالم.',
      },
      {
        fr: "À l'origine préparé surtout avec de l'agneau ou du poulet dans les cuisines des Nizams, le biryani s'est depuis largement décliné selon les régions et les goûts — aujourd'hui, chez Indian Flavors, nous le préparons aussi bien à l'agneau, au poulet, qu'aux crevettes ou au poisson.",
        en: "Originally prepared mainly with lamb or chicken in the Nizams' kitchens, biryani has since been widely adapted by region and taste — today at Indian Flavors, we prepare it with lamb, chicken, shrimp or fish.",
        ar: 'كان يُحضَّر في الأصل بشكل رئيسي بلحم الضأن أو الدجاج في مطابخ النظّام، وتنوّع البرياني منذ ذلك الحين بشكل كبير حسب المنطقة والذوق — نُحضّره اليوم في مطعم Indian Flavors بلحم الضأن، الدجاج، الجمبري أو السمك.',
      },
      {
        fr: "La technique de cuisson « dum » ne se limite pas au biryani : elle est utilisée pour bien d'autres plats mijotés de la cuisine moghole, sous le nom plus large de « dum pukht ».",
        en: "The 'dum' cooking technique isn't limited to biryani: it's used for many other slow-cooked dishes in Mughal cuisine, under the broader name 'dum pukht'.",
        ar: 'لا تقتصر تقنية طهي "دم" على البرياني: فهي تُستخدم في العديد من الأطباق الأخرى المطهوة ببطء في المطبخ المغولي، تحت الاسم الأوسع "دم پخت".',
      },
    ],
  },
];

export function getDishGuide(slug: string): DishGuide | undefined {
  return dishGuides.find((g) => g.slug === slug);
}
