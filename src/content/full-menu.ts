// Volledige restaurantkaart (dine-in) — QR-kaart op tafel. Elk gerecht kan een
// foto hebben (`image`, optioneel: wordt geleidelijk per gerecht toegevoegd)
// en de beschrijving wordt pas getoond als de gast op het gerecht tikt (zie
// CarteContent.astro), zodat de lijst zelf overzichtelijk blijft. Alleen de
// RESTAURANTPRIJS (niet site/Glovo) staat hier — die twee kanalen hebben
// eigen, hogere prijzen elders.
//
// Bron: "Plan Complet de Croissance et de Tarification" (Amplify Growth
// Studio, sept. 2026), sectie 2 — nieuwe prijzen, kolom "Restaurant".
//
// Zelfde type-structuur als menu-highlights.ts, zodat dit los kan bestaan
// naast die (foto-)pagina zonder iets daar te breken.

import type { LocalizedText } from '../i18n/languages';

export interface FullMenuItem {
  name: string;
  description: LocalizedText;
  priceMAD: number;
  vegetarian?: boolean;
  image?: string;
  // Uitgebreide uitleg + ingrediëntenlijst, getoond zodra de gast op het
  // gerecht tikt — geschreven voor een Marokkaanse klant die de Indiase
  // keuken niet kent (dus: wat het IS, niet alleen hoe het heet).
  story?: LocalizedText;
  ingredients?: LocalizedText;
  // Korte badge(s) op de kaart (bv. "Populaire", "Épicé", "Signature") —
  // zelfde idee als de order-engine's item.tags, maar hier gewoon platte
  // tekst per taal i.p.v. een aparte vertaaltabel, want het zijn er weinig.
  tags?: LocalizedText[];
}

export interface FullMenuCategory {
  label: LocalizedText;
  items: FullMenuItem[];
}

export const fullMenu: FullMenuCategory[] = [
  {
    label: { fr: 'Soupes', en: 'Soups', ar: 'الشوربات' },
    items: [
      {
        name: 'Chicken Manchow Soup',
        description: {
          fr: 'Soupe indo-chinoise épicée au poulet et légumes.',
          en: 'Spiced Indo-Chinese chicken and vegetable soup.',
          ar: 'شوربة هندية-صينية متبّلة بالدجاج والخضار.',
        },
        story: {
          fr: 'La Manchow Soup est un classique indo-chinois que l\'on trouve dans presque tous les restaurants indiens : une rencontre entre les épices indiennes et la cuisine chinoise (sauce soja, ail, gingembre). Le poulet effiloché mijote dans un bouillon épais et poivré avec des légumes croquants, puis on ajoute des nouilles frites bien croustillantes sur le dessus juste avant de servir, pour le contraste de texture.',
          en: 'Manchow Soup is an Indo-Chinese classic found in almost every Indian restaurant — a meeting point between Indian spices and Chinese cooking (soy sauce, garlic, ginger). Shredded chicken simmers in a thick, peppery broth with crunchy vegetables, topped just before serving with crispy fried noodles for a contrast in texture.',
          ar: 'شوربة مانشو من الأطباق الهندية الصينية الكلاسيكية الموجودة في معظم المطاعم الهندية: لقاء بين التوابل الهندية والمطبخ الصيني (صلصة الصويا، الثوم، الزنجبيل). يُطهى الدجاج المقطّع ببطء في مرقة سميكة ومتبّلة بالفلفل مع خضروات مقرمشة، وتُضاف في الأعلى نودلز مقلية مقرمشة قبل التقديم مباشرة لإضفاء قوام مختلف.',
        },
        ingredients: {
          fr: 'Poulet effiloché, bouillon de poulet, ail, gingembre, sauce soja, vinaigre, carotte, chou, oignon nouveau, poivre noir, fécule de maïs, nouilles frites croustillantes.',
          en: 'Shredded chicken, chicken broth, garlic, ginger, soy sauce, vinegar, carrot, cabbage, spring onion, black pepper, cornstarch, crispy fried noodles.',
          ar: 'دجاج مقطّع، مرقة دجاج، ثوم، زنجبيل، صلصة صويا، خل، جزر، ملفوف، بصل أخضر، فلفل أسود، نشا الذرة، نودلز مقلية مقرمشة.',
        },
        priceMAD: 35,
        image: '/images/carte/chicken-manchow-soup.webp',
        tags: [{ fr: 'Populaire', en: 'Popular', ar: 'الأكثر طلباً' }],
      },
      {
        name: 'Vegetarian Manchow Soup',
        description: {
          fr: 'Version végétarienne de notre soupe indo-chinoise épicée.',
          en: 'Vegetarian version of our spiced Indo-Chinese soup.',
          ar: 'نسخة نباتية من شوربتنا الهندية-الصينية المتبّلة.',
        },
        story: {
          fr: 'La même Manchow Soup indo-chinoise, en version 100% légumes : un bouillon épais et poivré, parfumé à l\'ail, au gingembre et à la sauce soja, plein de légumes finement coupés (carotte, chou, champignon). On termine avec des nouilles frites croustillantes juste avant de servir, pour ce contraste croquant qui fait le charme du plat.',
          en: 'The same Indo-Chinese Manchow Soup, in a fully plant-based version: a thick, peppery broth flavoured with garlic, ginger and soy sauce, packed with finely chopped vegetables (carrot, cabbage, mushroom). Topped with crispy fried noodles just before serving for that signature crunch.',
          ar: 'نفس شوربة مانشو الهندية الصينية، بنسخة نباتية بالكامل: مرقة سميكة ومتبّلة بالفلفل، منكّهة بالثوم والزنجبيل وصلصة الصويا، مليئة بالخضروات المفرومة ناعماً (جزر، ملفوف، فطر). تُزيّن بنودلز مقلية مقرمشة قبل التقديم مباشرة لإضفاء ذلك القوام المقرمش المميز.',
        },
        ingredients: {
          fr: 'Bouillon de légumes, ail, gingembre, sauce soja, vinaigre, carotte, chou, champignon, oignon nouveau, poivre noir, fécule de maïs, nouilles frites croustillantes.',
          en: 'Vegetable broth, garlic, ginger, soy sauce, vinegar, carrot, cabbage, mushroom, spring onion, black pepper, cornstarch, crispy fried noodles.',
          ar: 'مرقة خضار، ثوم، زنجبيل، صلصة صويا، خل، جزر، ملفوف، فطر، بصل أخضر، فلفل أسود، نشا الذرة، نودلز مقلية مقرمشة.',
        },
        priceMAD: 30,
        vegetarian: true,
        image: '/images/carte/vegetarian-manchow-soup.webp',
      },
    ],
  },
  {
    label: { fr: 'Entrées Végétariennes', en: 'Vegetarian Starters', ar: 'المقبلات النباتية' },
    items: [
      {
        name: 'Vegetable Samosa (2 pcs)',
        description: {
          fr: 'Pâtisserie croustillante farcie de légumes épicés.',
          en: 'Crispy pastry filled with spiced vegetables.',
          ar: 'معجنات مقرمشة محشوة بخضروات متبّلة.',
        },
        story: {
          fr: 'Le samosa est sans doute l\'entrée indienne la plus connue dans le monde : un triangle de pâte frite bien croustillant, farci d\'une préparation de pommes de terre écrasées et petits pois, relevée au cumin, à la coriandre et au garam masala. Il se déguste trempé dans un chutney — ici, un chutney tamarin sucré-acidulé qui vient équilibrer l\'épice.',
          en: 'The samosa is probably the most famous Indian starter in the world: a crispy fried pastry triangle filled with mashed potato and peas, seasoned with cumin, coriander and garam masala. It\'s eaten dipped in chutney — here, a sweet-and-tangy tamarind chutney that balances the spice.',
          ar: 'السامبوسة هي على الأرجح أشهر مقبلات هندية في العالم: مثلث من العجين المقلي المقرمش، محشو بخليط من البطاطس المهروسة والبازلاء، متبّل بالكمون والكزبرة والغارام ماسالا. تُؤكل مغموسة في الشطني — هنا شطني التمر الهندي الحلو الحامض الذي يوازن حدة التوابل.',
        },
        ingredients: {
          fr: 'Pomme de terre, petits pois, oignon, cumin, coriandre fraîche, garam masala, gingembre, pâte à samosa, chutney tamarin.',
          en: 'Potato, peas, onion, cumin, fresh coriander, garam masala, ginger, samosa pastry, tamarind chutney.',
          ar: 'بطاطس، بازلاء، بصل، كمون، كزبرة طازجة، غارام ماسالا، زنجبيل، عجينة السامبوسة، شطني التمر الهندي.',
        },
        priceMAD: 25,
        vegetarian: true,
        image: '/images/carte/vegetable-samosa.webp',
      },
      {
        name: 'Vegetable Pani Puri (6 pcs)',
        description: {
          fr: "Boules croustillantes à l'eau acidulée épicée et chutneys.",
          en: 'Crispy puris with tangy spiced water and chutneys.',
          ar: 'كرات مقرمشة بماء حامض متبّل وصلصات.',
        },
        story: {
          fr: "Le pani puri est un classique de la street food indienne, pensé pour être mangé en une bouchée : une petite boule de semoule soufflée et croustillante, garnie de pois chiches, pomme de terre, oignon et épices, puis remplie au dernier moment d'une eau ('pani') fraîche et acidulée à la menthe et à la coriandre. Le contraste croustillant/liquide-épicé est l'attrait du plat — on le mange donc tout de suite après le service, avant qu'il ne ramollisse.",
          en: "Pani puri is a beloved Indian street food classic, meant to be eaten in one bite: a small, crispy puffed semolina shell filled with chickpeas, potato, onion and spices, then topped just before serving with a cool, tangy mint-and-coriander water ('pani'). The crunch-meets-spiced-liquid contrast is the whole point — best eaten right away, before the shell softens.",
          ar: 'باني بوري من أشهر أطباق الشارع الهندية، ويُؤكل بلقمة واحدة: كرة صغيرة مقرمشة من السميد المنفوخ، محشوة بالحمص والبطاطس والبصل والتوابل، ثم تُملأ في اللحظة الأخيرة بماء منعش وحامض بالنعناع والكزبرة ("باني"). التباين بين المقرمش والسائل المتبّل هو سر هذا الطبق — لذلك يُؤكل مباشرة بعد التقديم قبل أن يلين.',
        },
        ingredients: {
          fr: "Semoule soufflée (puri), pois chiches, pomme de terre, oignon, eau à la menthe et coriandre, tamarin, chaat masala, piment.",
          en: 'Puffed semolina shell (puri), chickpeas, potato, onion, mint-coriander water, tamarind, chaat masala, chili.',
          ar: 'قشرة السميد المنفوخة (بوري)، حمص، بطاطس، بصل، ماء النعناع والكزبرة، تمر هندي، شاط ماسالا، فلفل حار.',
        },
        priceMAD: 40,
        vegetarian: true,
        image: '/images/carte/vegetable-pani-puri.webp',
      },
      {
        name: 'Vegetable Pakoras',
        description: {
          fr: 'Beignets de légumes croustillants, pâte de pois chiche épicée.',
          en: 'Crispy vegetable fritters in spiced chickpea batter.',
          ar: 'فطائر خضار مقرمشة بعجينة حمص متبّلة.',
        },
        story: {
          fr: "Les pakoras sont des beignets indiens : des légumes trempés dans une pâte de farine de pois chiche épicée, puis frits jusqu'à devenir croustillants. C'est le snack de rue par excellence en Inde, servi bien chaud avec un chutney à la menthe pour rafraîchir le palais.",
          en: "Pakoras are Indian fritters: vegetables dipped in a spiced chickpea-flour batter, then deep-fried until crisp. They're India's classic street snack, served hot with a mint chutney to cool the palate.",
          ar: 'الباكورا هي فطائر هندية مقلية: خضروات مغموسة في عجينة من دقيق الحمص المتبّل، ثم تُقلى حتى تصبح مقرمشة. إنها الوجبة الخفيفة الشعبية الأشهر في الهند، تُقدَّم ساخنة مع شطني النعناع لتنعش الحنك.',
        },
        ingredients: {
          fr: 'Farine de pois chiche, oignon, pomme de terre, épinard, cumin, coriandre en poudre, piment rouge, ajwain, bicarbonate, huile de friture.',
          en: 'Chickpea flour, onion, potato, spinach, cumin, coriander powder, red chilli, ajwain, baking soda, frying oil.',
          ar: 'دقيق حمص، بصل، بطاطس، سبانخ، كمون، كزبرة مطحونة، فلفل أحمر، أجوين، بيكربونات، زيت للقلي.',
        },
        priceMAD: 30,
        image: '/images/carte/vegetable-pakoras.webp',
        vegetarian: true,
      },
      {
        name: 'Kashumber Salad',
        description: {
          fr: 'Salade fraîche de concombre, tomate et oignon.',
          en: 'Fresh cucumber, tomato and onion salad.',
          ar: 'سلطة طازجة من الخيار والطماطم والبصل.',
        },
        story: {
          fr: "Une salade fraîche et croquante, typique des repas indiens : concombre, tomate et oignon finement coupés, assaisonnés d'un filet de citron. Elle accompagne les plats épicés et apporte de la fraîcheur entre deux bouchées.",
          en: 'A fresh, crunchy salad typical of Indian meals: finely diced cucumber, tomato and onion, dressed with a squeeze of lemon. It accompanies spiced dishes and brings freshness between bites.',
          ar: 'سلطة طازجة ومقرمشة نموذجية في الوجبات الهندية: خيار وطماطم وبصل مقطّعة ناعماً، متبّلة بعصير الليمون. تُرافق الأطباق المتبّلة وتمنح انتعاشاً بين اللقمات.',
        },
        ingredients: {
          fr: 'Concombre, tomate, oignon rouge, jus de citron, coriandre fraîche, sel, poivre noir.',
          en: 'Cucumber, tomato, red onion, lemon juice, fresh coriander, salt, black pepper.',
          ar: 'خيار، طماطم، بصل أحمر، عصير ليمون، كزبرة طازجة، ملح، فلفل أسود.',
        },
        priceMAD: 20,
        image: '/images/carte/kashumber-salad.webp',
        vegetarian: true,
      },
      {
        name: 'Raita',
        description: {
          fr: 'Yaourt frais aux épices douces, idéal avec les plats épicés.',
          en: 'Fresh yogurt with mild spices, great alongside spicy dishes.',
          ar: 'لبن طازج بتوابل خفيفة، مرافق مثالي للأطباق الحارة.',
        },
        story: {
          fr: 'Le raita est un yaourt indien légèrement battu, mélangé à des légumes croquants et une pointe de cumin grillé. Il sert de rafraîchisseur naturel face aux plats relevés — un incontournable de toute table indienne.',
          en: 'Raita is a lightly whisked Indian yoghurt mixed with crunchy vegetables and a touch of roasted cumin. It acts as a natural cooler alongside spicy dishes — a staple of any Indian table.',
          ar: 'الريتا هو زبادي هندي مخفوق قليلاً، ممزوج بخضروات مقرمشة ولمسة من الكمون المحمّص. يُستخدم كمهدئ طبيعي مع الأطباق الحارة، وهو عنصر أساسي على أي مائدة هندية.',
        },
        ingredients: {
          fr: 'Yaourt nature, concombre, cumin grillé moulu, coriandre fraîche, sel.',
          en: 'Plain yoghurt, cucumber, roasted ground cumin, fresh coriander, salt.',
          ar: 'زبادي طبيعي، خيار، كمون محمّص مطحون، كزبرة طازجة، ملح.',
        },
        priceMAD: 20,
        image: '/images/carte/raita.webp',
        vegetarian: true,
      },
    ],
  },
  {
    label: { fr: 'Entrées Non-Végétariennes', en: 'Non-Vegetarian Starters', ar: 'المقبلات غير النباتية' },
    items: [
      {
        name: 'Chicken 65 (Boneless)',
        description: {
          fr: 'Poulet frit épicé façon Chennai, croustillant et relevé.',
          en: 'Chennai-style spicy fried chicken, crispy and bold.',
          ar: 'دجاج مقلي متبّل على الطريقة الهندية الجنوبية، مقرمش وحار.',
        },
        story: {
          fr: "Le Chicken 65 est une spécialité du sud de l'Inde : des morceaux de poulet marinés dans du yaourt, du piment et de l'ail, puis frits jusqu'à être bien croustillants à l'extérieur et tendres à l'intérieur. Servi en apéritif ou en entrée, c'est l'un des plats les plus commandés dans les restaurants indiens.",
          en: "Chicken 65 is a South Indian specialty: chicken pieces marinated in yoghurt, chilli and garlic, then fried until crispy outside and tender inside. Served as a starter or bar snack, it's one of the most popular orders in Indian restaurants.",
          ar: 'دجاج 65 هو تخصص من جنوب الهند: قطع دجاج منقوعة في الزبادي والفلفل الحار والثوم، ثم تُقلى حتى تصبح مقرمشة من الخارج وطرية من الداخل. يُقدَّم كمقبل أو وجبة خفيفة، وهو من أكثر الأطباق طلباً في المطاعم الهندية.',
        },
        ingredients: {
          fr: 'Poulet, yaourt, ail, gingembre, piment rouge en poudre, curry leaves, jus de citron, fécule de maïs, huile de friture.',
          en: 'Chicken, yoghurt, garlic, ginger, red chilli powder, curry leaves, lemon juice, cornstarch, frying oil.',
          ar: 'دجاج، زبادي، ثوم، زنجبيل، فلفل أحمر مطحون، أوراق كاري، عصير ليمون، نشا الذرة، زيت للقلي.',
        },
        priceMAD: 50,
        image: '/images/carte/chicken-65-boneless.webp',
      },
      {
        name: 'Chicken Lollipop',
        description: {
          fr: 'Ailerons de poulet marinés et frits, façon "sucette".',
          en: 'Marinated fried chicken wings, "lollipop" style.',
          ar: 'أجنحة دجاج متبّلة ومقلية على شكل "لوليبوب".',
        },
        story: {
          fr: "Le Chicken Lollipop est une aile de poulet préparée en forme de mini-sucette : la viande est ramenée vers un bout de l'os, puis marinée et frite. Un classique indo-chinois, très prisé pour son côté ludique à manger avec les mains.",
          en: 'Chicken Lollipop is a chicken wing shaped like a mini lollipop: the meat is pushed to one end of the bone, then marinated and fried. An Indo-Chinese classic, popular for being fun to eat with your hands.',
          ar: 'لوليبوب الدجاج هو جناح دجاج مُشكَّل على هيئة مصاصة صغيرة: يُدفع اللحم إلى طرف العظم، ثم يُنقع ويُقلى. طبق كلاسيكي هندي صيني، محبوب لطريقة أكله الممتعة باليد.',
        },
        ingredients: {
          fr: 'Ailes de poulet, ail, gingembre, sauce soja, piment rouge, fécule de maïs, jus de citron, huile de friture.',
          en: 'Chicken wings, garlic, ginger, soy sauce, red chilli, cornstarch, lemon juice, frying oil.',
          ar: 'أجنحة دجاج، ثوم، زنجبيل، صلصة صويا، فلفل أحمر، نشا الذرة، عصير ليمون، زيت للقلي.',
        },
        priceMAD: 45,
        image: '/images/carte/chicken-lollipop.webp',
      },
      {
        name: 'Chilli Chicken (Boneless)',
        description: {
          fr: 'Poulet sauté indo-chinois, sauce piquante aux poivrons.',
          en: 'Indo-Chinese stir-fried chicken in a spicy pepper sauce.',
          ar: 'دجاج مقلي على الطريقة الهندية-الصينية بصلصة حارة بالفلفل.',
        },
        story: {
          fr: "Autre grand classique indo-chinois : des morceaux de poulet frits, sautés au wok avec poivrons, oignons, ail et une sauce piquante-acidulée à base de soja et de vinaigre. Généreusement épicé, c'est un plat qui claque en bouche.",
          en: "Another great Indo-Chinese classic: fried chicken pieces wok-tossed with peppers, onions, garlic and a tangy, spicy soy-and-vinegar sauce. Generously spiced, it's a dish that packs a punch.",
          ar: 'طبق كلاسيكي آخر من المطبخ الهندي الصيني: قطع دجاج مقلية تُقلّب في المقلاة مع الفلفل والبصل والثوم وصلصة حارة حامضة من الصويا والخل. متبّل بسخاء ونكهته قوية.',
        },
        ingredients: {
          fr: 'Poulet, poivron vert, oignon, ail, gingembre, sauce soja, sauce piment, vinaigre, fécule de maïs.',
          en: 'Chicken, green pepper, onion, garlic, ginger, soy sauce, chilli sauce, vinegar, cornstarch.',
          ar: 'دجاج، فلفل أخضر، بصل، ثوم، زنجبيل، صلصة صويا، صلصة فلفل حار، خل، نشا الذرة.',
        },
        priceMAD: 50,
        image: '/images/carte/chilli-chicken-boneless.webp',
      },
      {
        name: 'Chicken Manchurian (Boneless)',
        description: {
          fr: 'Poulet sauté indo-chinois, sauce Manchurian relevée.',
          en: 'Indo-Chinese stir-fried chicken in a bold Manchurian sauce.',
          ar: 'دجاج مقلي على الطريقة الهندية-الصينية بصلصة مانشوريان.',
        },
        story: {
          fr: "Le Chicken Manchurian marie des morceaux de poulet frits à une sauce brune épaisse, sucrée-salée, parfumée à l'ail et au gingembre. Né dans les cuisines chinoises de Calcutta, c'est aujourd'hui l'un des plats indo-chinois les plus populaires en Inde.",
          en: "Chicken Manchurian pairs fried chicken pieces with a thick, sweet-savoury brown sauce flavoured with garlic and ginger. Born in Calcutta's Chinese kitchens, it's now one of the most popular Indo-Chinese dishes in India.",
          ar: 'دجاج مانشوريان يجمع بين قطع الدجاج المقلية وصلصة بنية سميكة حلوة مالحة منكّهة بالثوم والزنجبيل. وُلد في مطابخ كلكتا الصينية، وهو اليوم من أشهر الأطباق الهندية الصينية في الهند.',
        },
        ingredients: {
          fr: 'Poulet, ail, gingembre, oignon nouveau, sauce soja, sauce tomate, vinaigre, fécule de maïs, bouillon de poulet.',
          en: 'Chicken, garlic, ginger, spring onion, soy sauce, tomato sauce, vinegar, cornstarch, chicken stock.',
          ar: 'دجاج، ثوم، زنجبيل، بصل أخضر، صلصة صويا، صلصة طماطم، خل، نشا الذرة، مرقة دجاج.',
        },
        priceMAD: 50,
        image: '/images/carte/chicken-manchurian-boneless.webp',
      },
    ],
  },
  {
    label: { fr: 'Plats Principaux', en: 'Main Courses', ar: 'الأطباق الرئيسية' },
    items: [
      {
        name: 'Butter Chicken',
        description: {
          fr: 'Poulet mijoté dans une sauce veloutée au beurre et tomate.',
          en: 'Chicken simmered in a velvety butter and tomato sauce.',
          ar: 'دجاج مطهو في صلصة الزبدة والطماطم المخملية.',
        },
        story: {
          fr: "Le Butter Chicken (murgh makhani) est né à Delhi dans les années 1950 : des restes de poulet tandoori mijotés dans une sauce tomate riche en beurre et en crème, adoucie de garam masala. C'est le plat indien le plus connu au monde, doux et réconfortant.",
          en: "Butter Chicken (murgh makhani) was born in Delhi in the 1950s: leftover tandoori chicken simmered in a rich tomato, butter and cream sauce, softened with garam masala. It's the world's most famous Indian dish — mild and comforting.",
          ar: 'دجاج بالزبدة (مرغ ماخني) وُلد في دلهي في خمسينيات القرن الماضي: بقايا دجاج تندوري تُطهى في صلصة طماطم غنية بالزبدة والقشدة، مع لمسة من الغارام ماسالا. إنه أشهر طبق هندي في العالم، لطيف ومريح.',
        },
        ingredients: {
          fr: 'Poulet tandoori, tomate, beurre, crème fraîche, ail, gingembre, garam masala, fenugrec séché, cardamome.',
          en: 'Tandoori chicken, tomato, butter, fresh cream, garlic, ginger, garam masala, dried fenugreek, cardamom.',
          ar: 'دجاج تندوري، طماطم، زبدة، قشدة طازجة، ثوم، زنجبيل، غارام ماسالا، حلبة مجففة، هيل.',
        },
        priceMAD: 75,
        image: '/images/carte/butter-chicken.webp',
      },
      {
        name: 'Chicken Tikka Masala',
        description: {
          fr: 'Poulet tandoori grillé dans une sauce masala crémeuse.',
          en: 'Grilled tandoori chicken in a creamy masala sauce.',
          ar: 'دجاج تندوري مشوي في صلصة ماسالا كريمية.',
        },
        story: {
          fr: "Des morceaux de poulet marinés au yaourt et aux épices, grillés au four tandoor, puis nappés d'une sauce masala crémeuse à la tomate. Souvent considéré comme un cousin du Butter Chicken, en un peu plus épicé.",
          en: "Chicken pieces marinated in yoghurt and spices, chargrilled in the tandoor oven, then coated in a creamy tomato masala sauce. Often seen as Butter Chicken's spicier cousin.",
          ar: 'قطع دجاج منقوعة في الزبادي والتوابل، مشوية في فرن التندور، ثم مغطاة بصلصة ماسالا كريمية بالطماطم. يُعتبر غالباً ابن عم دجاج بالزبدة الأكثر حدة قليلاً.',
        },
        ingredients: {
          fr: 'Poulet, yaourt, tomate, crème fraîche, ail, gingembre, garam masala, paprika, coriandre en poudre.',
          en: 'Chicken, yoghurt, tomato, fresh cream, garlic, ginger, garam masala, paprika, coriander powder.',
          ar: 'دجاج، زبادي، طماطم، قشدة طازجة، ثوم، زنجبيل، غارام ماسالا، بابريكا، كزبرة مطحونة.',
        },
        priceMAD: 75,
        image: '/images/carte/chicken-tikka-masala.webp',
      },
      {
        name: 'Kadai Chicken',
        description: {
          fr: 'Poulet mijoté au wok avec poivrons et épices kadai.',
          en: 'Wok-simmered chicken with peppers and kadai spices.',
          ar: 'دجاج مطهو في المقلاة مع الفلفل وتوابل كاداي.',
        },
        story: {
          fr: "Le kadai est le wok indien en fer, qui donne son nom à ce plat : du poulet mijoté avec poivrons et oignons dans une sauce tomate épaisse, relevée d'un mélange d'épices kadai fraîchement torréfiées et moulues (cumin, coriandre, piment).",
          en: 'Kadai is the Indian iron wok that gives this dish its name: chicken simmered with peppers and onions in a thick tomato sauce, seasoned with freshly roasted and ground kadai spice mix (cumin, coriander, chilli).',
          ar: 'الكاداي هو المقلاة الهندية الحديدية التي أعطت اسمها لهذا الطبق: دجاج مطهو مع الفلفل والبصل في صلصة طماطم سميكة، متبّل بمزيج توابل كاداي المحمّصة والمطحونة طازجاً (كمون، كزبرة، فلفل حار).',
        },
        ingredients: {
          fr: 'Poulet, poivron vert, oignon, tomate, ail, gingembre, coriandre en grains, cumin, piment sec.',
          en: 'Chicken, green pepper, onion, tomato, garlic, ginger, coriander seeds, cumin, dried chilli.',
          ar: 'دجاج، فلفل أخضر، بصل، طماطم، ثوم، زنجبيل، بذور كزبرة، كمون، فلفل مجفف.',
        },
        priceMAD: 75,
        image: '/images/carte/kadai-chicken.webp',
      },
      {
        name: 'Prawn Curry',
        description: {
          fr: 'Crevettes mijotées dans un curry parfumé.',
          en: 'Prawns simmered in a fragrant curry sauce.',
          ar: 'روبيان مطهو في كاري عطري.',
        },
        story: {
          fr: "Les crevettes mijotent doucement dans un curry à base de tomate, d'oignon et de lait de coco, parfumé aux épices côtières indiennes. Un plat à la fois délicat et généreux, typique des régions du littoral indien.",
          en: "Prawns simmer gently in a tomato, onion and coconut milk curry, seasoned with coastal Indian spices. A dish that's both delicate and generous, typical of India's coastal regions.",
          ar: 'يُطهى الروبيان ببطء في كاري من الطماطم والبصل وحليب جوز الهند، متبّل بتوابل الساحل الهندي. طبق رقيق وسخي في آن واحد، نموذجي لمناطق الساحل الهندي.',
        },
        ingredients: {
          fr: 'Crevettes, lait de coco, tomate, oignon, ail, gingembre, curry leaves, curcuma, piment.',
          en: 'Prawns, coconut milk, tomato, onion, garlic, ginger, curry leaves, turmeric, chilli.',
          ar: 'روبيان، حليب جوز الهند، طماطم، بصل، ثوم، زنجبيل، أوراق كاري، كركم، فلفل حار.',
        },
        priceMAD: 110,
        image: '/images/carte/prawn-curry.webp',
      },
      {
        name: 'Fish Curry',
        description: {
          fr: 'Poisson mijoté dans un curry parfumé.',
          en: 'Fish simmered in a fragrant curry sauce.',
          ar: 'سمك مطهو في كاري عطري.',
        },
        story: {
          fr: "Un curry de poisson mijoté dans une sauce tomate et lait de coco parfumée aux épices côtières — un classique des régions du sud et de l'ouest de l'Inde, où le poisson tient une place centrale dans la cuisine quotidienne.",
          en: 'Fish simmered in a tomato and coconut milk sauce seasoned with coastal spices — a classic from South and West India, where fish is central to everyday cooking.',
          ar: 'سمك مطهو في صلصة الطماطم وحليب جوز الهند متبّلة بتوابل الساحل — طبق كلاسيكي من جنوب وغرب الهند، حيث يحتل السمك مكانة مركزية في الطبخ اليومي.',
        },
        ingredients: {
          fr: 'Poisson, lait de coco, tomate, oignon, ail, gingembre, curry leaves, curcuma, piment.',
          en: 'Fish, coconut milk, tomato, onion, garlic, ginger, curry leaves, turmeric, chilli.',
          ar: 'سمك، حليب جوز الهند، طماطم، بصل، ثوم، زنجبيل، أوراق كاري، كركم، فلفل حار.',
        },
        priceMAD: 110,
        image: '/images/carte/fish-curry.webp',
      },
      {
        name: 'Prawn Masala',
        description: {
          fr: 'Crevettes dans une sauce masala épaisse et épicée.',
          en: 'Prawns in a thick, spiced masala sauce.',
          ar: 'روبيان في صلصة ماسالا سميكة ومتبّلة.',
        },
        story: {
          fr: "Des crevettes mijotées dans une sauce masala épaisse à base de tomate et d'oignon, relevée de garam masala. Plus corsé et plus sec que le curry, ce plat met en avant l'épice sur la texture fondante des crevettes.",
          en: "Prawns simmered in a thick tomato-and-onion masala sauce, seasoned with garam masala. Bolder and drier than the curry, this dish lets the spice shine against the prawns' melt-in-the-mouth texture.",
          ar: 'روبيان مطهو في صلصة ماسالا سميكة من الطماطم والبصل، متبّلة بالغارام ماسالا. أكثر حدة وأقل سيولة من الكاري، يبرز هذا الطبق التوابل مقابل قوام الروبيان الطري.',
        },
        ingredients: {
          fr: 'Crevettes, tomate, oignon, ail, gingembre, garam masala, piment rouge, coriandre fraîche.',
          en: 'Prawns, tomato, onion, garlic, ginger, garam masala, red chilli, fresh coriander.',
          ar: 'روبيان، طماطم، بصل، ثوم، زنجبيل، غارام ماسالا، فلفل أحمر، كزبرة طازجة.',
        },
        priceMAD: 110,
        image: '/images/carte/prawn-masala.webp',
      },
      {
        name: 'Fish Masala',
        description: {
          fr: 'Poisson dans une sauce masala épaisse et épicée.',
          en: 'Fish in a thick, spiced masala sauce.',
          ar: 'سمك في صلصة ماسالا سميكة ومتبّلة.',
        },
        story: {
          fr: "Du poisson mijoté dans une sauce masala épaisse à base de tomate et d'oignon, relevée de garam masala — une version plus corsée et plus sèche que le curry de poisson.",
          en: 'Fish simmered in a thick tomato-and-onion masala sauce, seasoned with garam masala — a bolder, drier take than the fish curry.',
          ar: 'سمك مطهو في صلصة ماسالا سميكة من الطماطم والبصل، متبّلة بالغارام ماسالا — نسخة أكثر حدة وأقل سيولة من كاري السمك.',
        },
        ingredients: {
          fr: 'Poisson, tomate, oignon, ail, gingembre, garam masala, piment rouge, coriandre fraîche.',
          en: 'Fish, tomato, onion, garlic, ginger, garam masala, red chilli, fresh coriander.',
          ar: 'سمك، طماطم، بصل، ثوم، زنجبيل، غارام ماسالا، فلفل أحمر، كزبرة طازجة.',
        },
        priceMAD: 110,
        image: '/images/carte/fish-masala.webp',
      },
      {
        name: 'Lamb Roghan Josh',
        description: {
          fr: "Agneau mijoté dans une sauce cachemirie riche et épicée.",
          en: 'Lamb simmered in a rich, spiced Kashmiri-style sauce.',
          ar: 'لحم ضأن مطهو في صلصة كشميرية غنية ومتبّلة.',
        },
        story: {
          fr: "Un curry d'agneau originaire du Cachemire : la viande mijote longuement dans une sauce rouge profonde, colorée au piment du Cachemire et parfumée à l'anis et au gingembre, jusqu'à devenir fondante.",
          en: 'A lamb curry from Kashmir: the meat simmers slowly in a deep red sauce, coloured with Kashmiri chilli and scented with fennel and ginger, until meltingly tender.',
          ar: 'كاري لحم ضأن من كشمير: يُطهى اللحم ببطء في صلصة حمراء داكنة، ملوّنة بفلفل كشمير الحار ومنكّهة باليانسون والزنجبيل، حتى يصبح طرياً جداً.',
        },
        ingredients: {
          fr: 'Agneau, yaourt, oignon, ail, gingembre, piment du Cachemire, fenouil en poudre, cardamome, cannelle.',
          en: 'Lamb, yoghurt, onion, garlic, ginger, Kashmiri chilli, fennel powder, cardamom, cinnamon.',
          ar: 'لحم ضأن، زبادي، بصل، ثوم، زنجبيل، فلفل كشمير، شمر مطحون، هيل، قرفة.',
        },
        priceMAD: 90,
        image: '/images/carte/lamb-roghan-josh.webp',
      },
      {
        name: 'Lamb Kadai',
        description: {
          fr: 'Agneau mijoté au wok avec poivrons et épices kadai.',
          en: 'Wok-simmered lamb with peppers and kadai spices.',
          ar: 'لحم ضأن مطهو في المقلاة مع الفلفل وتوابل كاداي.',
        },
        story: {
          fr: "De l'agneau mijoté dans le kadai (wok en fer) avec poivrons et oignons, dans une sauce tomate épaisse relevée d'un mélange d'épices fraîchement torréfiées. Robuste et parfumé, à l'image de la viande d'agneau elle-même.",
          en: 'Lamb simmered in the kadai (iron wok) with peppers and onions, in a thick tomato sauce seasoned with freshly roasted spices. Robust and aromatic, matching the character of the lamb itself.',
          ar: 'لحم ضأن مطهو في الكاداي (المقلاة الحديدية) مع الفلفل والبصل، في صلصة طماطم سميكة متبّلة بتوابل محمّصة طازجاً. قوي وعطري، يليق بطبيعة لحم الضأن نفسه.',
        },
        ingredients: {
          fr: 'Agneau, poivron vert, oignon, tomate, ail, gingembre, coriandre en grains, cumin, piment sec.',
          en: 'Lamb, green pepper, onion, tomato, garlic, ginger, coriander seeds, cumin, dried chilli.',
          ar: 'لحم ضأن، فلفل أخضر، بصل، طماطم، ثوم، زنجبيل، بذور كزبرة، كمون، فلفل مجفف.',
        },
        priceMAD: 90,
        image: '/images/carte/lamb-kadai.webp',
      },
      {
        name: 'Lamb Keema',
        description: {
          fr: "Agneau haché mijoté aux épices, texture fondante.",
          en: 'Minced lamb simmered with spices, rich and hearty.',
          ar: 'لحم ضأن مفروم مطهو بالتوابل، قوامه غني.',
        },
        story: {
          fr: "Le keema est de l'agneau haché mijoté avec oignon, tomate et petits pois, dans un mélange d'épices sec et parfumé. Un plat familial réconfortant, souvent servi avec du pain naan pour saucer.",
          en: 'Keema is minced lamb simmered with onion, tomato and peas in a dry, fragrant spice blend. A comforting home-style dish, often served with naan bread for mopping up the sauce.',
          ar: 'الكيما هي لحم ضأن مفروم يُطهى مع البصل والطماطم والبازلاء في مزيج توابل جاف وعطري. طبق منزلي مريح، يُقدَّم غالباً مع خبز النان لتغميسه بالصلصة.',
        },
        ingredients: {
          fr: 'Agneau haché, oignon, tomate, petits pois, ail, gingembre, garam masala, cumin, coriandre en poudre.',
          en: 'Minced lamb, onion, tomato, peas, garlic, ginger, garam masala, cumin, coriander powder.',
          ar: 'لحم ضأن مفروم، بصل، طماطم، بازلاء، ثوم، زنجبيل، غارام ماسالا، كمون، كزبرة مطحونة.',
        },
        priceMAD: 90,
        image: '/images/carte/lamb-keema.webp',
      },
    ],
  },
  {
    label: { fr: 'Spécialités Tandoori', en: 'Tandoori Specialties', ar: 'أطباق التندور' },
    items: [
      {
        name: 'Tandoori Chicken',
        description: {
          fr: 'Poulet mariné aux épices et yaourt, grillé au tandoor.',
          en: 'Chicken marinated in spices and yogurt, tandoor-grilled.',
          ar: 'دجاج متبّل بالبهارات واللبن، مشوي في التندور.',
        },
        story: {
          fr: 'Le poulet est mariné dans du yaourt et des épices, puis cuit à très haute température dans le four tandoor traditionnel en argile — une méthode indienne ancestrale qui donne une viande fumée, marquée et juteuse.',
          en: 'Chicken marinated in yoghurt and spices, then cooked at very high heat in the traditional clay tandoor oven — an age-old Indian method that gives the meat a smoky char and juicy bite.',
          ar: 'يُنقع الدجاج في الزبادي والتوابل، ثم يُطهى على حرارة عالية جداً في فرن التندور الطيني التقليدي — طريقة هندية عريقة تمنح اللحم نكهة مدخّنة وقواماً طرياً.',
        },
        ingredients: {
          fr: 'Poulet, yaourt, ail, gingembre, jus de citron, paprika, garam masala, colorant naturel tandoori.',
          en: 'Chicken, yoghurt, garlic, ginger, lemon juice, paprika, garam masala, natural tandoori colouring.',
          ar: 'دجاج، زبادي، ثوم، زنجبيل، عصير ليمون، بابريكا، غارام ماسالا، لون طبيعي للتندوري.',
        },
        priceMAD: 90,
        image: '/images/carte/tandoori-chicken.webp',
      },
      {
        name: 'Chicken Tikka',
        description: {
          fr: 'Dés de poulet désossés marinés, cuits au tandoor.',
          en: 'Marinated boneless chicken chunks, tandoor-cooked.',
          ar: 'قطع دجاج منزوعة العظم ومتبّلة، مطهوة في التندور.',
        },
        story: {
          fr: 'Des morceaux de poulet désossés, marinés au yaourt et aux épices, puis grillés en brochettes au four tandoor. Version en bouchées du Tandoori Chicken, parfaite en entrée ou en accompagnement.',
          en: 'Boneless chicken pieces marinated in yoghurt and spices, then skewer-grilled in the tandoor oven. A bite-sized version of Tandoori Chicken, perfect as a starter or side.',
          ar: 'قطع دجاج منزوعة العظم، منقوعة في الزبادي والتوابل، ثم تُشوى على أسياخ في فرن التندور. نسخة بلقيمات صغيرة من دجاج التندوري، مثالية كمقبل أو طبق جانبي.',
        },
        ingredients: {
          fr: 'Poulet, yaourt, ail, gingembre, jus de citron, garam masala, paprika, huile.',
          en: 'Chicken, yoghurt, garlic, ginger, lemon juice, garam masala, paprika, oil.',
          ar: 'دجاج، زبادي، ثوم، زنجبيل، عصير ليمون، غارام ماسالا، بابريكا، زيت.',
        },
        priceMAD: 75,
        image: '/images/carte/chicken-tikka.webp',
      },
      {
        name: 'Boti Kabab',
        description: {
          fr: "Brochettes d'agneau marinées, grillées au tandoor.",
          en: 'Marinated lamb skewers, tandoor-grilled.',
          ar: 'أسياخ لحم ضأن متبّلة، مشوية في التندور.',
        },
        story: {
          fr: "Des cubes de viande marinés au yaourt épicé, puis grillés en brochettes au tandoor jusqu'à devenir bien tendres et légèrement fumés. Un classique des grillades indiennes, à déguster tel quel ou avec un naan.",
          en: 'Cubes of meat marinated in spiced yoghurt, then skewer-grilled in the tandoor until tender with a light smokiness. A classic Indian grill, delicious on its own or with naan.',
          ar: 'مكعبات لحم منقوعة في زبادي متبّل، ثم تُشوى على أسياخ في التندور حتى تصبح طرية ومدخّنة قليلاً. طبق مشويات هندي كلاسيكي، لذيذ وحده أو مع النان.',
        },
        ingredients: {
          fr: 'Viande en cubes, yaourt, ail, gingembre, garam masala, piment rouge, jus de citron.',
          en: 'Cubed meat, yoghurt, garlic, ginger, garam masala, red chilli, lemon juice.',
          ar: 'لحم مكعبات، زبادي، ثوم، زنجبيل، غارام ماسالا، فلفل أحمر، عصير ليمون.',
        },
        priceMAD: 90,
        image: '/images/carte/boti-kabab.webp',
      },
    ],
  },
  {
    label: { fr: 'Plats Principaux Végétariens', en: 'Vegetarian Main Courses', ar: 'الأطباق الرئيسية النباتية' },
    items: [
      {
        name: 'Kadai Paneer',
        description: {
          fr: 'Paneer mijoté au wok avec poivrons et épices kadai.',
          en: 'Wok-simmered paneer with peppers and kadai spices.',
          ar: 'جبن بانير مطهو في المقلاة مع الفلفل وتوابل كاداي.',
        },
        story: {
          fr: "Du paneer (fromage frais indien) mijoté au kadai avec poivrons et oignons, dans une sauce tomate épaisse relevée d'épices fraîchement torréfiées. Une alternative végétarienne généreuse au Kadai Chicken.",
          en: 'Paneer (Indian fresh cheese) simmered in the kadai with peppers and onions, in a thick tomato sauce seasoned with freshly roasted spices. A hearty vegetarian counterpart to Kadai Chicken.',
          ar: 'بانير (جبن هندي طازج) مطهو في الكاداي مع الفلفل والبصل، في صلصة طماطم سميكة متبّلة بتوابل محمّصة طازجاً. بديل نباتي سخي لدجاج الكاداي.',
        },
        ingredients: {
          fr: 'Paneer, poivron vert, oignon, tomate, ail, gingembre, coriandre en grains, cumin, piment sec.',
          en: 'Paneer, green pepper, onion, tomato, garlic, ginger, coriander seeds, cumin, dried chilli.',
          ar: 'بانير، فلفل أخضر، بصل، طماطم، ثوم، زنجبيل، بذور كزبرة، كمون، فلفل مجفف.',
        },
        priceMAD: 75,
        image: '/images/carte/kadai-paneer.webp',
        vegetarian: true,
      },
      {
        name: 'Paneer Makhni',
        description: {
          fr: 'Paneer dans une sauce onctueuse au beurre et tomate.',
          en: 'Paneer in a velvety butter and tomato sauce.',
          ar: 'جبن بانير في صلصة الزبدة والطماطم المخملية.',
        },
        story: {
          fr: 'La version végétarienne du Butter Chicken : des cubes de paneer mijotés dans une sauce tomate riche en beurre et en crème, douce et parfumée au garam masala.',
          en: 'The vegetarian version of Butter Chicken: paneer cubes simmered in a rich tomato, butter and cream sauce, mild and fragrant with garam masala.',
          ar: 'النسخة النباتية من دجاج بالزبدة: مكعبات بانير تُطهى في صلصة طماطم غنية بالزبدة والقشدة، لطيفة وعطرية بالغارام ماسالا.',
        },
        ingredients: {
          fr: 'Paneer, tomate, beurre, crème fraîche, ail, gingembre, garam masala, fenugrec séché.',
          en: 'Paneer, tomato, butter, fresh cream, garlic, ginger, garam masala, dried fenugreek.',
          ar: 'بانير، طماطم، زبدة، قشدة طازجة، ثوم، زنجبيل، غارام ماسالا، حلبة مجففة.',
        },
        priceMAD: 75,
        image: '/images/carte/paneer-makhni.webp',
        vegetarian: true,
      },
      {
        name: 'Mushroom Masala',
        description: {
          fr: 'Champignons mijotés dans une sauce masala épicée.',
          en: 'Mushrooms simmered in a spiced masala sauce.',
          ar: 'فطر مطهو في صلصة ماسالا متبّلة.',
        },
        story: {
          fr: "Des champignons mijotés dans une sauce masala épaisse à base de tomate et d'oignon, relevée de garam masala — un plat végétarien parfumé qui capture bien la sauce.",
          en: 'Mushrooms simmered in a thick tomato-and-onion masala sauce, seasoned with garam masala — a fragrant vegetarian dish that soaks up the sauce beautifully.',
          ar: 'فطر مطهو في صلصة ماسالا سميكة من الطماطم والبصل، متبّلة بالغارام ماسالا — طبق نباتي عطري يمتص الصلصة بشكل رائع.',
        },
        ingredients: {
          fr: 'Champignons, tomate, oignon, ail, gingembre, garam masala, piment rouge, coriandre fraîche.',
          en: 'Mushrooms, tomato, onion, garlic, ginger, garam masala, red chilli, fresh coriander.',
          ar: 'فطر، طماطم، بصل، ثوم، زنجبيل، غارام ماسالا، فلفل أحمر، كزبرة طازجة.',
        },
        priceMAD: 70,
        image: '/images/carte/mushroom-masala.webp',
        vegetarian: true,
      },
      {
        name: 'Mushroom Kadai',
        description: {
          fr: 'Champignons mijotés au wok avec poivrons et épices kadai.',
          en: 'Wok-simmered mushrooms with peppers and kadai spices.',
          ar: 'فطر مطهو في المقلاة مع الفلفل وتوابل كاداي.',
        },
        story: {
          fr: "Des champignons mijotés au kadai avec poivrons et oignons, dans une sauce tomate épaisse relevée d'épices fraîchement torréfiées.",
          en: 'Mushrooms simmered in the kadai with peppers and onions, in a thick tomato sauce seasoned with freshly roasted spices.',
          ar: 'فطر مطهو في الكاداي مع الفلفل والبصل، في صلصة طماطم سميكة متبّلة بتوابل محمّصة طازجاً.',
        },
        ingredients: {
          fr: 'Champignons, poivron vert, oignon, tomate, ail, gingembre, coriandre en grains, cumin.',
          en: 'Mushrooms, green pepper, onion, tomato, garlic, ginger, coriander seeds, cumin.',
          ar: 'فطر، فلفل أخضر، بصل، طماطم، ثوم، زنجبيل، بذور كزبرة، كمون.',
        },
        priceMAD: 70,
        image: '/images/carte/mushroom-kadai.webp',
        vegetarian: true,
      },
      {
        name: 'Tadka Daal',
        description: {
          fr: 'Lentilles mijotées, tempérées aux épices et ghee.',
          en: 'Simmered lentils, tempered with spices and ghee.',
          ar: 'عدس مطهو، مُحضّر بالتوابل والسمن.',
        },
        story: {
          fr: "Des lentilles jaunes mijotées jusqu'à devenir onctueuses, puis relevées d'un tadka — un mélange d'ail, de cumin et de piment saisi dans du ghee chaud et versé sur le plat juste avant de servir. Un pilier réconfortant de la cuisine indienne.",
          en: 'Yellow lentils simmered until creamy, finished with a tadka — garlic, cumin and chilli sizzled in hot ghee and poured over the dish just before serving. A comforting staple of Indian home cooking.',
          ar: 'عدس أصفر يُطهى حتى يصبح كريمياً، ثم يُزيّن بـ«تادكا» — مزيج من الثوم والكمون والفلفل الحار يُقلى في السمن الساخن ويُسكب على الطبق قبل التقديم مباشرة. عنصر أساسي مريح في المطبخ الهندي المنزلي.',
        },
        ingredients: {
          fr: 'Lentilles jaunes, oignon, tomate, ail, gingembre, cumin, curcuma, ghee, piment sec.',
          en: 'Yellow lentils, onion, tomato, garlic, ginger, cumin, turmeric, ghee, dried chilli.',
          ar: 'عدس أصفر، بصل، طماطم، ثوم، زنجبيل، كمون، كركم، سمن، فلفل مجفف.',
        },
        priceMAD: 60,
        image: '/images/carte/tadka-daal.webp',
        vegetarian: true,
      },
      {
        name: 'Rajma Daal',
        description: {
          fr: 'Haricots rouges mijotés dans une sauce épicée.',
          en: 'Red kidney beans simmered in a spiced sauce.',
          ar: 'فاصولياء حمراء مطهوة في صلصة متبّلة.',
        },
        story: {
          fr: "Des haricots rouges mijotés longuement dans une sauce tomate épicée, jusqu'à devenir bien tendres. Un plat originaire du nord de l'Inde, traditionnellement servi avec du riz.",
          en: 'Red kidney beans simmered slowly in a spiced tomato sauce until tender. A North Indian staple, traditionally served with rice.',
          ar: 'فاصولياء حمراء تُطهى ببطء في صلصة طماطم متبّلة حتى تصبح طرية. طبق أصيل من شمال الهند، يُقدَّم تقليدياً مع الأرز.',
        },
        ingredients: {
          fr: 'Haricots rouges, tomate, oignon, ail, gingembre, cumin, garam masala, coriandre fraîche.',
          en: 'Red kidney beans, tomato, onion, garlic, ginger, cumin, garam masala, fresh coriander.',
          ar: 'فاصولياء حمراء، طماطم، بصل، ثوم، زنجبيل، كمون، غارام ماسالا، كزبرة طازجة.',
        },
        priceMAD: 65,
        image: '/images/carte/rajma-daal.webp',
        vegetarian: true,
      },
      {
        name: 'Palak Paneer',
        description: {
          fr: 'Paneer dans une sauce onctueuse aux épinards.',
          en: 'Paneer in a smooth, spiced spinach sauce.',
          ar: 'جبن بانير في صلصة سبانخ ناعمة ومتبّلة.',
        },
        story: {
          fr: "Des cubes de paneer nappés d'une sauce onctueuse d'épinards mixés, parfumée à l'ail, au gingembre et à un léger fond crémeux. Un classique végétarien apprécié pour sa douceur.",
          en: 'Paneer cubes coated in a smooth blended spinach sauce, flavoured with garlic, ginger and a touch of cream. A vegetarian classic loved for its mild, comforting taste.',
          ar: 'مكعبات بانير مغطاة بصلصة سبانخ مهروسة ناعمة، منكّهة بالثوم والزنجبيل ولمسة من القشدة. طبق نباتي كلاسيكي محبوب بسبب نكهته اللطيفة.',
        },
        ingredients: {
          fr: 'Paneer, épinard, ail, gingembre, oignon, tomate, crème fraîche, garam masala.',
          en: 'Paneer, spinach, garlic, ginger, onion, tomato, fresh cream, garam masala.',
          ar: 'بانير، سبانخ، ثوم، زنجبيل، بصل، طماطم، قشدة طازجة، غارام ماسالا.',
        },
        priceMAD: 75,
        image: '/images/carte/palak-paneer.webp',
        vegetarian: true,
      },
      {
        name: 'Mixed Vegetable Curry',
        description: {
          fr: 'Légumes de saison mijotés dans un curry parfumé.',
          en: 'Seasonal vegetables simmered in a fragrant curry.',
          ar: 'خضروات موسمية مطهوة في كاري عطري.',
        },
        story: {
          fr: 'Un curry coloré de légumes de saison, mijotés dans une sauce tomate parfumée aux épices indiennes — une option végétarienne complète et pleine de fraîcheur.',
          en: 'A colourful curry of seasonal vegetables, simmered in a tomato sauce seasoned with Indian spices — a hearty, fresh vegetarian option.',
          ar: 'كاري ملوّن من الخضروات الموسمية، تُطهى في صلصة طماطم متبّلة بالتوابل الهندية — خيار نباتي متكامل ومنعش.',
        },
        ingredients: {
          fr: 'Carotte, haricot vert, pomme de terre, chou-fleur, petits pois, tomate, oignon, ail, gingembre, garam masala.',
          en: 'Carrot, green beans, potato, cauliflower, peas, tomato, onion, garlic, ginger, garam masala.',
          ar: 'جزر، فاصولياء خضراء، بطاطس، قرنبيط، بازلاء، طماطم، بصل، ثوم، زنجبيل، غارام ماسالا.',
        },
        priceMAD: 60,
        image: '/images/carte/mixed-vegetable-curry.webp',
        vegetarian: true,
      },
      {
        name: 'Aloo Gobi',
        description: {
          fr: 'Pommes de terre et chou-fleur mijotés aux épices.',
          en: 'Potatoes and cauliflower simmered with spices.',
          ar: 'بطاطس وقرنبيط مطهوان بالتوابل.',
        },
        story: {
          fr: 'Pomme de terre et chou-fleur mijotés ensemble avec curcuma, cumin et coriandre, dans une préparation sèche et parfumée. Un plat végétarien du quotidien, simple et réconfortant.',
          en: 'Potato and cauliflower cooked together with turmeric, cumin and coriander, in a dry, fragrant preparation. A simple, comforting everyday vegetarian dish.',
          ar: 'بطاطس وقرنبيط يُطهيان معاً مع الكركم والكمون والكزبرة، في تحضير جاف وعطري. طبق نباتي يومي بسيط ومريح.',
        },
        ingredients: {
          fr: 'Pomme de terre, chou-fleur, curcuma, cumin, coriandre en poudre, gingembre, coriandre fraîche.',
          en: 'Potato, cauliflower, turmeric, cumin, coriander powder, ginger, fresh coriander.',
          ar: 'بطاطس، قرنبيط، كركم، كمون، كزبرة مطحونة، زنجبيل، كزبرة طازجة.',
        },
        priceMAD: 60,
        image: '/images/carte/aloo-gobi.webp',
        vegetarian: true,
      },
    ],
  },
  {
    label: { fr: "Biryani Dum d'Hyderabad", en: 'Hyderabadi Dum Biryani', ar: 'برياني حيدر آبادي' },
    items: [
      {
        name: 'Lamb Biryani',
        description: {
          fr: "Riz basmati parfumé mijoté avec de l'agneau tendre.",
          en: 'Fragrant basmati rice slow-cooked with tender lamb.',
          ar: 'أرز بسمتي عطري مطهو مع لحم ضأن طري.',
        },
        story: {
          fr: "Le biryani est un plat de riz emblématique de l'Inde : du riz basmati long et parfumé, cuit en couches avec la viande marinée et des épices entières (cannelle, cardamome, clou de girofle), puis mijoté à l'étouffée pour que tous les arômes se mêlent lentement.",
          en: "Biryani is India's iconic rice dish: long, fragrant basmati rice layered and slow-cooked with marinated meat and whole spices (cinnamon, cardamom, clove), sealed to let every aroma infuse gently.",
          ar: 'البرياني هو طبق الأرز الأيقوني في الهند: أرز بسمتي طويل وعطري، يُطهى على طبقات مع اللحم المتبّل والتوابل الكاملة (قرفة، هيل، قرنفل)، ثم يُطهى ببطء على نار هادئة ليمتزج العبق تدريجياً.',
        },
        ingredients: {
          fr: 'Agneau, riz basmati, oignon frit, yaourt, safran, cannelle, cardamome, clou de girofle, menthe fraîche.',
          en: 'Lamb, basmati rice, fried onion, yoghurt, saffron, cinnamon, cardamom, clove, fresh mint.',
          ar: 'لحم ضأن، أرز بسمتي، بصل مقلي، زبادي، زعفران، قرفة، هيل، قرنفل، نعناع طازج.',
        },
        priceMAD: 100,
        image: '/images/carte/lamb-biryani.webp',
      },
      {
        name: 'Chicken Biryani',
        description: {
          fr: "Spécialité d'Hyderabad : poulet et riz basmati à l'étouffée.",
          en: "Hyderabad's signature: chicken and basmati rice slow-cooked.",
          ar: 'طبق حيدر آباد المميز: دجاج وأرز بسمتي على نار هادئة.',
        },
        story: {
          fr: "La version poulet du grand classique indien : riz basmati parfumé, cuit en couches avec du poulet mariné aux épices et surmonté d'oignons frits croustillants et de quelques brins de safran.",
          en: "The chicken version of India's great classic: fragrant basmati rice layered with spice-marinated chicken, topped with crispy fried onions and a few strands of saffron.",
          ar: 'نسخة الدجاج من الطبق الهندي الكلاسيكي الكبير: أرز بسمتي عطري، مطهو على طبقات مع دجاج متبّل بالتوابل، ومزيّن ببصل مقلي مقرمش وخيوط من الزعفران.',
        },
        ingredients: {
          fr: 'Poulet, riz basmati, oignon frit, yaourt, safran, cannelle, cardamome, menthe fraîche.',
          en: 'Chicken, basmati rice, fried onion, yoghurt, saffron, cinnamon, cardamom, fresh mint.',
          ar: 'دجاج، أرز بسمتي، بصل مقلي، زبادي، زعفران، قرفة، هيل، نعناع طازج.',
        },
        priceMAD: 90,
        image: '/images/carte/chicken-biryani.webp',
      },
      {
        name: 'Prawn Biryani',
        description: {
          fr: 'Riz basmati parfumé mijoté avec des crevettes.',
          en: 'Fragrant basmati rice slow-cooked with prawns.',
          ar: 'أرز بسمتي عطري مطهو مع الروبيان.',
        },
        story: {
          fr: 'Des crevettes marinées aux épices, cuites en couches avec un riz basmati parfumé au safran — une version plus délicate et rapide à cuire que les biryanis de viande.',
          en: 'Spice-marinated prawns, layered and cooked with saffron-scented basmati rice — a lighter, quicker-cooking take on meat biryanis.',
          ar: 'روبيان متبّل بالتوابل، يُطهى على طبقات مع أرز بسمتي معطّر بالزعفران — نسخة أخف وأسرع طهياً من برياني اللحم.',
        },
        ingredients: {
          fr: 'Crevettes, riz basmati, oignon frit, yaourt, safran, curry leaves, menthe fraîche.',
          en: 'Prawns, basmati rice, fried onion, yoghurt, saffron, curry leaves, fresh mint.',
          ar: 'روبيان، أرز بسمتي، بصل مقلي، زبادي، زعفران، أوراق كاري، نعناع طازج.',
        },
        priceMAD: 110,
        image: '/images/carte/prawn-biryani.webp',
      },
      {
        name: 'Fish Biryani',
        description: {
          fr: 'Riz basmati parfumé mijoté avec du poisson.',
          en: 'Fragrant basmati rice slow-cooked with fish.',
          ar: 'أرز بسمتي عطري مطهو مع السمك.',
        },
        story: {
          fr: 'Du poisson mariné aux épices, cuit en couches avec un riz basmati parfumé au safran — une version côtière du biryani, plus légère que les versions à la viande rouge.',
          en: 'Spice-marinated fish, layered and cooked with saffron-scented basmati rice — a coastal take on biryani, lighter than the red-meat versions.',
          ar: 'سمك متبّل بالتوابل، يُطهى على طبقات مع أرز بسمتي معطّر بالزعفران — نسخة ساحلية من البرياني، أخف من نسخ اللحوم الحمراء.',
        },
        ingredients: {
          fr: 'Poisson, riz basmati, oignon frit, yaourt, safran, curry leaves, menthe fraîche.',
          en: 'Fish, basmati rice, fried onion, yoghurt, saffron, curry leaves, fresh mint.',
          ar: 'سمك، أرز بسمتي، بصل مقلي، زبادي، زعفران، أوراق كاري، نعناع طازج.',
        },
        priceMAD: 110,
        image: '/images/carte/fish-biryani.webp',
      },
      {
        name: 'Vegetable Biryani',
        description: {
          fr: 'Riz basmati parfumé mijoté avec légumes de saison.',
          en: 'Fragrant basmati rice slow-cooked with seasonal vegetables.',
          ar: 'أرز بسمتي عطري مطهو مع خضروات موسمية.',
        },
        story: {
          fr: 'La version végétarienne du biryani : légumes de saison et riz basmati cuits en couches avec des épices entières et des herbes fraîches, pour un plat complet et parfumé sans viande.',
          en: 'The vegetarian take on biryani: seasonal vegetables and basmati rice layered with whole spices and fresh herbs, for a complete, fragrant meat-free dish.',
          ar: 'النسخة النباتية من البرياني: خضروات موسمية وأرز بسمتي يُطهيان على طبقات مع التوابل الكاملة والأعشاب الطازجة، لطبق متكامل وعطري بلا لحم.',
        },
        ingredients: {
          fr: 'Riz basmati, carotte, haricot vert, petits pois, pomme de terre, oignon frit, safran, menthe fraîche.',
          en: 'Basmati rice, carrot, green beans, peas, potato, fried onion, saffron, fresh mint.',
          ar: 'أرز بسمتي، جزر، فاصولياء خضراء، بازلاء، بطاطس، بصل مقلي، زعفران، نعناع طازج.',
        },
        priceMAD: 75,
        image: '/images/carte/vegetable-biryani.webp',
        vegetarian: true,
      },
    ],
  },
  {
    label: { fr: 'Naan, Riz & Nouilles', en: 'Naan, Rice & Noodles', ar: 'خبز النان والأرز والنودلز' },
    items: [
      {
        name: 'Papadoms',
        description: {
          fr: 'Galettes croustillantes de lentilles, servies en accompagnement.',
          en: 'Crispy lentil wafers, served as a side.',
          ar: 'رقائق عدس مقرمشة، تُقدَّم كطبق جانبي.',
        },
        story: {
          fr: "Des galettes fines de farine de lentilles, séchées puis frites ou grillées jusqu'à devenir bien croustillantes. Servies en tout début de repas, elles ouvrent l'appétit.",
          en: 'Thin lentil-flour wafers, dried then fried or roasted until crisp. Served at the very start of the meal to open the appetite.',
          ar: 'رقائق رفيعة من دقيق العدس، تُجفَّف ثم تُقلى أو تُشوى حتى تصبح مقرمشة. تُقدَّم في بداية الوجبة لفتح الشهية.',
        },
        ingredients: {
          fr: 'Farine de lentilles, huile de friture, sel, cumin.',
          en: 'Lentil flour, frying oil, salt, cumin.',
          ar: 'دقيق عدس، زيت للقلي، ملح، كمون.',
        },
        priceMAD: 10,
        image: '/images/carte/papadoms.webp',
        vegetarian: true,
      },
      {
        name: 'Butter Naan',
        description: {
          fr: 'Naan chaud badigeonné de beurre, cuit au tandoor.',
          en: 'Warm naan brushed with butter, tandoor-baked.',
          ar: 'خبز نان دافئ مُدهون بالزبدة، مخبوز في التندور.',
        },
        story: {
          fr: "Un pain plat traditionnel, cuit au four tandoor jusqu'à gonfler et se marquer de bulles dorées, puis badigeonné de beurre fondu. Idéal pour saucer les currys.",
          en: 'A traditional flatbread, baked in the tandoor until it puffs up with golden bubbles, then brushed with melted butter. Perfect for scooping up curries.',
          ar: 'خبز مسطح تقليدي، يُخبز في التندور حتى ينتفخ ويتكوّن عليه فقاعات ذهبية، ثم يُدهن بالزبدة المذابة. مثالي لتغميسه في الكاري.',
        },
        ingredients: {
          fr: 'Farine, yaourt, levure, beurre, sel.',
          en: 'Flour, yoghurt, yeast, butter, salt.',
          ar: 'دقيق، زبادي، خميرة، زبدة، ملح.',
        },
        priceMAD: 15,
        image: '/images/carte/butter-naan.webp',
        vegetarian: true,
      },
      {
        name: 'Garlic Naan',
        description: {
          fr: "Naan chaud parfumé à l'ail frais et coriandre.",
          en: 'Warm naan flavored with fresh garlic and coriander.',
          ar: 'خبز نان دافئ منكّه بالثوم الطازج والكزبرة.',
        },
        story: {
          fr: "Le même pain naan moelleux, garni d'ail frais haché avant la cuisson au tandoor, pour un parfum encore plus prononcé.",
          en: 'The same soft naan bread, topped with fresh chopped garlic before tandoor baking, for an even bolder aroma.',
          ar: 'نفس خبز النان الطري، مزيّن بالثوم الطازج المفروم قبل الخبز في التندور، لنكهة أقوى.',
        },
        ingredients: {
          fr: 'Farine, yaourt, levure, ail frais, beurre, sel.',
          en: 'Flour, yoghurt, yeast, fresh garlic, butter, salt.',
          ar: 'دقيق، زبادي، خميرة، ثوم طازج، زبدة، ملح.',
        },
        priceMAD: 15,
        image: '/images/carte/garlic-naan.webp',
        vegetarian: true,
      },
      {
        name: 'Cheese Naan',
        description: {
          fr: 'Pain tandoori moelleux fourré au fromage.',
          en: 'Soft tandoori bread stuffed with cheese.',
          ar: 'خبز تندوري طري محشو بالجبن.',
        },
        story: {
          fr: "Le naan traditionnel, farci de fromage fondant avant la cuisson au tandoor — une version gourmande, croustillante à l'extérieur et fondante à l'intérieur.",
          en: 'Traditional naan, stuffed with melting cheese before tandoor baking — a indulgent version, crisp outside and gooey inside.',
          ar: 'خبز النان التقليدي، محشو بالجبن الذائب قبل الخبز في التندور — نسخة شهية، مقرمشة من الخارج وذائبة من الداخل.',
        },
        ingredients: {
          fr: 'Farine, yaourt, levure, fromage, beurre, sel.',
          en: 'Flour, yoghurt, yeast, cheese, butter, salt.',
          ar: 'دقيق، زبادي، خميرة، جبن، زبدة، ملح.',
        },
        priceMAD: 20,
        image: '/images/carte/cheese-naan.webp',
        vegetarian: true,
      },
      {
        name: 'Roti',
        description: {
          fr: 'Pain complet fin, cuit au tandoor.',
          en: 'Thin whole-wheat bread, tandoor-baked.',
          ar: 'خبز رقيق من القمح الكامل، مخبوز في التندور.',
        },
        story: {
          fr: 'Un pain plat indien complet, sans levure, cuit sur une plaque chaude puis parfois passé sur flamme directe pour gonfler. Plus léger que le naan, il accompagne le quotidien indien.',
          en: "A wholewheat, unleavened Indian flatbread, cooked on a hot griddle and sometimes finished over an open flame to puff up. Lighter than naan, it's an everyday Indian staple.",
          ar: 'خبز هندي كامل الحبوب غير مخمّر، يُطهى على صاج ساخن ثم يُمرَّر أحياناً على نار مباشرة لينتفخ. أخف من النان، وهو رفيق الوجبات اليومية في الهند.',
        },
        ingredients: {
          fr: 'Farine complète, eau, sel, huile.',
          en: 'Wholewheat flour, water, salt, oil.',
          ar: 'دقيق كامل، ماء، ملح، زيت.',
        },
        priceMAD: 10,
        image: '/images/carte/roti.webp',
        vegetarian: true,
      },
      {
        name: 'Ghee Rice',
        description: {
          fr: 'Riz basmati parfumé sauté au ghee.',
          en: 'Fragrant basmati rice sautéed in ghee.',
          ar: 'أرز بسمتي عطري مقلي بالسمن.',
        },
        story: {
          fr: 'Du riz basmati sauté au ghee (beurre clarifié indien) avec des épices entières comme la cannelle et la cardamome, pour un riz parfumé et légèrement doré.',
          en: 'Basmati rice sautéed in ghee (Indian clarified butter) with whole spices like cinnamon and cardamom, for a fragrant, lightly golden rice.',
          ar: 'أرز بسمتي مقلي بالسمن (الزبدة المصفّاة الهندية) مع توابل كاملة كالقرفة والهيل، لأرز عطري وذهبي قليلاً.',
        },
        ingredients: {
          fr: 'Riz basmati, ghee, cannelle, cardamome, clou de girofle, feuille de laurier.',
          en: 'Basmati rice, ghee, cinnamon, cardamom, clove, bay leaf.',
          ar: 'أرز بسمتي، سمن، قرفة، هيل، قرنفل، ورق غار.',
        },
        priceMAD: 25,
        image: '/images/carte/ghee-rice.webp',
        vegetarian: true,
      },
      {
        name: 'Basmati Rice',
        description: {
          fr: 'Riz basmati nature à la vapeur.',
          en: 'Plain steamed basmati rice.',
          ar: 'أرز بسمتي مطهو بالبخار.',
        },
        story: {
          fr: 'Du riz basmati nature, cuit à la vapeur pour rester léger et bien détaché en grain — la base idéale pour accompagner tous les currys.',
          en: 'Plain basmati rice, steamed to stay light with separate grains — the ideal base to accompany any curry.',
          ar: 'أرز بسمتي طبيعي، يُطهى على البخار ليبقى خفيفاً وحبيباته منفصلة — الأساس المثالي لمرافقة أي كاري.',
        },
        ingredients: {
          fr: 'Riz basmati, eau, sel.',
          en: 'Basmati rice, water, salt.',
          ar: 'أرز بسمتي، ماء، ملح.',
        },
        priceMAD: 20,
        image: '/images/carte/basmati-rice.webp',
        vegetarian: true,
      },
      {
        name: 'Veg Fried Rice',
        description: {
          fr: 'Riz sauté indo-chinois aux légumes.',
          en: 'Indo-Chinese style fried rice with vegetables.',
          ar: 'أرز مقلي بالخضار على الطريقة الهندية-الصينية.',
        },
        story: {
          fr: "Du riz sauté au wok avec des légumes croquants, dans le style indo-chinois — parfumé à la sauce soja et à l'ail, un accompagnement complet à lui seul.",
          en: 'Wok-fried rice with crunchy vegetables, Indo-Chinese style — seasoned with soy sauce and garlic, a complete side on its own.',
          ar: 'أرز مقلي في المقلاة مع خضروات مقرمشة، على الطريقة الهندية الصينية — منكّه بصلصة الصويا والثوم، طبق جانبي متكامل بحد ذاته.',
        },
        ingredients: {
          fr: 'Riz, carotte, petits pois, oignon nouveau, chou, sauce soja, ail.',
          en: 'Rice, carrot, peas, spring onion, cabbage, soy sauce, garlic.',
          ar: 'أرز، جزر، بازلاء، بصل أخضر، ملفوف، صلصة صويا، ثوم.',
        },
        priceMAD: 25,
        image: '/images/carte/veg-fried-rice.webp',
        vegetarian: true,
      },
      {
        name: 'Cumin Rice',
        description: {
          fr: 'Riz basmati parfumé au cumin.',
          en: 'Basmati rice flavored with cumin.',
          ar: 'أرز بسمتي منكّه بالكمون.',
        },
        story: {
          fr: 'Du riz basmati sauté avec des graines de cumin grillées — simple et parfumé, un excellent compromis entre le riz nature et le riz ghee.',
          en: 'Basmati rice sautéed with roasted cumin seeds — simple and fragrant, a great middle ground between plain rice and ghee rice.',
          ar: 'أرز بسمتي مقلي مع بذور كمون محمّصة — بسيط وعطري، توازن رائع بين الأرز الطبيعي وأرز السمن.',
        },
        ingredients: {
          fr: 'Riz basmati, cumin en grains, ghee, sel.',
          en: 'Basmati rice, cumin seeds, ghee, salt.',
          ar: 'أرز بسمتي، بذور كمون، سمن، ملح.',
        },
        priceMAD: 25,
        image: '/images/carte/cumin-rice.webp',
        vegetarian: true,
      },
      {
        name: 'Chicken Fried Rice',
        description: {
          fr: 'Riz sauté indo-chinois au poulet.',
          en: 'Indo-Chinese style fried rice with chicken.',
          ar: 'أرز مقلي بالدجاج على الطريقة الهندية-الصينية.',
        },
        story: {
          fr: "Du riz sauté au wok avec du poulet et des légumes, dans le style indo-chinois — parfumé à la sauce soja et à l'ail, un plat généreux et complet.",
          en: 'Wok-fried rice with chicken and vegetables, Indo-Chinese style — seasoned with soy sauce and garlic, a hearty complete dish.',
          ar: 'أرز مقلي في المقلاة مع الدجاج والخضروات، على الطريقة الهندية الصينية — منكّه بصلصة الصويا والثوم، طبق سخي ومتكامل.',
        },
        ingredients: {
          fr: 'Riz, poulet, carotte, petits pois, oignon nouveau, chou, sauce soja, ail.',
          en: 'Rice, chicken, carrot, peas, spring onion, cabbage, soy sauce, garlic.',
          ar: 'أرز، دجاج، جزر، بازلاء، بصل أخضر، ملفوف، صلصة صويا، ثوم.',
        },
        priceMAD: 50,
        image: '/images/carte/chicken-fried-rice.webp',
      },
      {
        name: 'Chicken Hakka Noodles',
        description: {
          fr: 'Nouilles sautées indo-chinoises au poulet.',
          en: 'Indo-Chinese style stir-fried noodles with chicken.',
          ar: 'نودلز مقلية بالدجاج على الطريقة الهندية-الصينية.',
        },
        story: {
          fr: 'Des nouilles sautées au wok avec du poulet et des légumes, dans le style indo-chinois hakka — parfumées à la sauce soja et légèrement fumées par la cuisson à feu vif.',
          en: 'Wok-tossed noodles with chicken and vegetables, Hakka Indo-Chinese style — seasoned with soy sauce and lightly smoky from the high-heat cooking.',
          ar: 'نودلز مقلية في المقلاة مع الدجاج والخضروات، على الطريقة الهندية الصينية الهاكا — منكّهة بصلصة الصويا ومدخّنة قليلاً بفعل الطهي على نار قوية.',
        },
        ingredients: {
          fr: 'Nouilles, poulet, carotte, chou, oignon nouveau, sauce soja, ail, poivre noir.',
          en: 'Noodles, chicken, carrot, cabbage, spring onion, soy sauce, garlic, black pepper.',
          ar: 'نودلز، دجاج، جزر، ملفوف، بصل أخضر، صلصة صويا، ثوم، فلفل أسود.',
        },
        priceMAD: 50,
        image: '/images/carte/chicken-hakka-noodles.webp',
      },
      {
        name: 'Veg Hakka Noodles',
        description: {
          fr: 'Nouilles sautées indo-chinoises aux légumes.',
          en: 'Indo-Chinese style stir-fried noodles with vegetables.',
          ar: 'نودلز مقلية بالخضار على الطريقة الهندية-الصينية.',
        },
        story: {
          fr: "La version végétarienne des nouilles hakka : sautées au wok avec des légumes croquants et une sauce soja parfumée à l'ail.",
          en: 'The vegetarian version of hakka noodles: wok-tossed with crunchy vegetables and a garlicky soy sauce.',
          ar: 'النسخة النباتية من نودلز الهاكا: تُقلى في المقلاة مع خضروات مقرمشة وصلصة صويا منكّهة بالثوم.',
        },
        ingredients: {
          fr: 'Nouilles, carotte, chou, oignon nouveau, poivron, sauce soja, ail.',
          en: 'Noodles, carrot, cabbage, spring onion, pepper, soy sauce, garlic.',
          ar: 'نودلز، جزر، ملفوف، بصل أخضر، فلفل، صلصة صويا، ثوم.',
        },
        priceMAD: 40,
        image: '/images/carte/veg-hakka-noodles.webp',
        vegetarian: true,
      },
      {
        name: 'Biryani Plain Rice',
        description: {
          fr: 'Riz basmati parfumé façon biryani, sans viande.',
          en: 'Biryani-style fragrant basmati rice, no meat.',
          ar: 'أرز بسمتي عطري على طريقة البرياني، دون لحم.',
        },
        story: {
          fr: 'Du riz basmati long, cuit avec quelques épices entières et un soupçon de safran — la base parfumée qui accompagne les plats de curry ou se déguste seule.',
          en: 'Long basmati rice, cooked with a few whole spices and a hint of saffron — a fragrant base that pairs with curries or stands alone.',
          ar: 'أرز بسمتي طويل، يُطهى مع بعض التوابل الكاملة ولمسة من الزعفران — أساس عطري يرافق أطباق الكاري أو يُقدَّم وحده.',
        },
        ingredients: {
          fr: 'Riz basmati, cannelle, cardamome, safran, sel.',
          en: 'Basmati rice, cinnamon, cardamom, saffron, salt.',
          ar: 'أرز بسمتي، قرفة، هيل، زعفران، ملح.',
        },
        priceMAD: 40,
        image: '/images/carte/biryani-plain-rice.webp',
        vegetarian: true,
      },
    ],
  },
  {
    label: { fr: 'Desserts', en: 'Desserts', ar: 'الحلويات' },
    items: [
      {
        name: 'Kulfi (Mango / Pistachio / Malai)',
        description: {
          fr: 'Glace indienne dense et onctueuse, trois parfums au choix.',
          en: 'Dense, creamy Indian ice cream, three flavors to choose from.',
          ar: 'آيس كريم هندي كثيف وكريمي، بثلاث نكهات للاختيار.',
        },
        story: {
          fr: "Le kulfi est l'ancêtre indien de la crème glacée : du lait longuement réduit et sucré, parfumé puis figé sans battage, ce qui lui donne une texture plus dense et fondante qu'une glace classique.",
          en: "Kulfi is India's original ice cream: milk slowly reduced and sweetened, flavoured, then frozen without churning, giving it a denser, creamier texture than regular ice cream.",
          ar: 'الكلفي هو أصل الآيس كريم في الهند: حليب يُختزل ببطء ويُحلّى، يُنكَّه ثم يُجمَّد دون خفق، ما يمنحه قواماً أكثف وأنعم من الآيس كريم العادي.',
        },
        ingredients: {
          fr: 'Lait entier, sucre, mangue ou pistache ou cardamome (selon le parfum), amandes.',
          en: 'Whole milk, sugar, mango or pistachio or cardamom (depending on flavour), almonds.',
          ar: 'حليب كامل الدسم، سكر، مانجو أو فستق أو هيل (حسب النكهة)، لوز.',
        },
        priceMAD: 35,
        vegetarian: true,
      },
      {
        name: 'Boondi Ladoo (2 pcs)',
        description: {
          fr: 'Douceurs rondes traditionnelles à base de pois chiche.',
          en: 'Traditional round sweets made from chickpea flour.',
          ar: 'حلويات دائرية تقليدية من دقيق الحمص.',
        },
        story: {
          fr: 'Des petites boules sucrées à base de boondi (minuscules perles de farine de pois chiche frites), liées au sirop de sucre parfumé à la cardamome. Une douceur traditionnelle offerte lors des fêtes indiennes.',
          en: 'Small sweet balls made from boondi (tiny fried chickpea-flour pearls), bound with cardamom-scented sugar syrup. A traditional sweet given during Indian festivals.',
          ar: 'كرات صغيرة حلوة مصنوعة من البوندي (لآلئ صغيرة مقلية من دقيق الحمص)، مربوطة بشراب سكر معطّر بالهيل. حلوى تقليدية تُقدَّم في الأعياد الهندية.',
        },
        ingredients: {
          fr: 'Farine de pois chiche, sucre, ghee, cardamome, amandes, safran.',
          en: 'Chickpea flour, sugar, ghee, cardamom, almonds, saffron.',
          ar: 'دقيق حمص، سكر، سمن، هيل، لوز، زعفران.',
        },
        priceMAD: 35,
        vegetarian: true,
      },
      {
        name: 'Fruit Platter',
        description: {
          fr: 'Sélection de fruits frais de saison.',
          en: 'Selection of fresh seasonal fruit.',
          ar: 'تشكيلة من الفواكه الطازجة الموسمية.',
        },
        story: {
          fr: 'Une sélection de fruits frais de saison, coupés et servis simplement — une note fraîche et légère pour terminer le repas.',
          en: 'A selection of fresh seasonal fruit, simply cut and served — a light, fresh note to close the meal.',
          ar: 'تشكيلة من الفواكه الطازجة الموسمية، مقطّعة ومقدّمة ببساطة — لمسة منعشة وخفيفة لإنهاء الوجبة.',
        },
        ingredients: {
          fr: 'Fruits frais de saison (variables selon arrivage).',
          en: 'Fresh seasonal fruit (varies by availability).',
          ar: 'فواكه طازجة موسمية (تختلف حسب التوفر).',
        },
        priceMAD: 45,
        vegetarian: true,
      },
    ],
  },
  {
    label: { fr: 'Boissons Fraîches', en: 'Cold Drinks', ar: 'المشروبات الباردة' },
    items: [
      {
        name: 'Mango Lassi',
        description: {
          fr: 'Boisson onctueuse au yaourt et pulpe de mangue fraîche.',
          en: 'Creamy yogurt drink with fresh mango pulp.',
          ar: 'مشروب كريمي من اللبن مع لب المانجو الطازج.',
        },
        story: {
          fr: "Le lassi est une boisson au yaourt battu, ici mixée avec de la purée de mangue pour un résultat onctueux et fruité. Une boisson rafraîchissante née au Pendjab, parfaite pour calmer l'épice.",
          en: 'Lassi is a whisked yoghurt drink, here blended with mango purée for a smooth, fruity result. A refreshing Punjabi drink, perfect for cooling down the spice.',
          ar: 'اللاسي هو مشروب من الزبادي المخفوق، ممزوج هنا بهريس المانجو لنتيجة ناعمة وفاكهية. مشروب منعش من أصل بنجابي، مثالي لتهدئة حدة التوابل.',
        },
        ingredients: {
          fr: 'Yaourt, purée de mangue, sucre, glaçons.',
          en: 'Yoghurt, mango purée, sugar, ice.',
          ar: 'زبادي، هريس مانجو، سكر، ثلج.',
        },
        priceMAD: 35,
        image: '/images/carte/mango-lassi.webp',
        vegetarian: true,
      },
      {
        name: 'Sweet or Salty Lassi',
        description: {
          fr: 'Boisson au yaourt frais, sucrée ou salée.',
          en: 'Fresh yogurt drink, sweet or salty.',
          ar: 'مشروب لبن طازج، حلو أو مالح.',
        },
        story: {
          fr: 'Le lassi traditionnel, simplement battu avec du sucre pour une version douce, ou avec du sel et du cumin pour une version salée plus rafraîchissante — au choix.',
          en: 'Traditional lassi, whisked simply with sugar for a sweet version, or with salt and cumin for a more cooling savoury one — your choice.',
          ar: 'لاسي تقليدي، يُخفق ببساطة مع السكر لنسخة حلوة، أو مع الملح والكمون لنسخة مالحة أكثر انتعاشاً — حسب الاختيار.',
        },
        ingredients: {
          fr: 'Yaourt, eau, sucre ou sel, cumin grillé (version salée).',
          en: 'Yoghurt, water, sugar or salt, roasted cumin (savoury version).',
          ar: 'زبادي، ماء، سكر أو ملح، كمون محمّص (النسخة المالحة).',
        },
        priceMAD: 30,
        image: '/images/carte/sweet-salty-lassi.webp',
        vegetarian: true,
      },
      {
        name: 'Virgin Mojito',
        description: {
          fr: 'Mocktail rafraîchissant citron vert et menthe.',
          en: 'Refreshing lime and mint mocktail.',
          ar: 'موكتيل منعش بالليمون الأخضر والنعناع.',
        },
        story: {
          fr: 'Une version sans alcool du célèbre cocktail : citron vert frais pressé, feuilles de menthe pilées et eau gazeuse, pour une boisson pétillante et rafraîchissante.',
          en: 'An alcohol-free take on the famous cocktail: fresh lime, muddled mint leaves and sparkling water, for a fizzy, refreshing drink.',
          ar: 'نسخة خالية من الكحول من الكوكتيل الشهير: ليمون أخضر طازج، أوراق نعناع مهروسة، وماء غازي، لمشروب فوّار ومنعش.',
        },
        ingredients: {
          fr: 'Citron vert, menthe fraîche, sucre, eau gazeuse, glaçons.',
          en: 'Lime, fresh mint, sugar, sparkling water, ice.',
          ar: 'ليمون أخضر، نعناع طازج، سكر، ماء غازي، ثلج.',
        },
        priceMAD: 30,
        image: '/images/carte/virgin-mojito.webp',
        vegetarian: true,
      },
      {
        name: 'Fresh Orange Juice',
        description: {
          fr: "Jus d'orange pressé minute.",
          en: 'Freshly squeezed orange juice.',
          ar: 'عصير برتقال طازج معصور فورًا.',
        },
        story: {
          fr: "Du jus d'orange pressé minute, sans sucre ajouté — simple et naturel.",
          en: 'Freshly squeezed orange juice, no added sugar — simple and natural.',
          ar: 'عصير برتقال طازج معصور فوراً، دون سكر مضاف — بسيط وطبيعي.',
        },
        ingredients: {
          fr: 'Oranges fraîches pressées.',
          en: 'Fresh pressed oranges.',
          ar: 'برتقال طازج معصور.',
        },
        priceMAD: 35,
        image: '/images/carte/fresh-orange-juice.webp',
        vegetarian: true,
      },
      {
        name: 'Lemon Glow',
        description: {
          fr: 'Boisson rafraîchissante au citron.',
          en: 'Refreshing lemon-based drink.',
          ar: 'مشروب منعش بالليمون.',
        },
        story: {
          fr: 'Une limonade maison fraîche, citron pressé et légèrement sucrée, servie glacée — idéale pour se rafraîchir entre deux plats épicés.',
          en: 'A fresh homemade lemonade, freshly squeezed and lightly sweetened, served chilled — ideal for cooling down between spiced dishes.',
          ar: 'ليموناضة منزلية طازجة، ليمون معصور ومحلّى قليلاً، تُقدَّم مثلجة — مثالية للانتعاش بين الأطباق المتبّلة.',
        },
        ingredients: {
          fr: 'Citron pressé, sucre, eau, menthe fraîche, glaçons.',
          en: 'Fresh lemon juice, sugar, water, fresh mint, ice.',
          ar: 'عصير ليمون طازج، سكر، ماء، نعناع طازج، ثلج.',
        },
        priceMAD: 30,
        image: '/images/carte/lemon-glow.webp',
        vegetarian: true,
      },
      {
        name: 'Soda (330ml)',
        description: {
          fr: 'Soda au choix, 33cl.',
          en: 'Soft drink of choice, 33cl.',
          ar: 'مشروب غازي حسب الاختيار، 33 سل.',
        },
        story: {
          fr: 'Une boisson gazeuse classique, servie fraîche en canette 330ml.',
          en: 'A classic soft drink, served chilled in a 330ml can.',
          ar: 'مشروب غازي كلاسيكي، يُقدَّم بارداً في علبة 330 مل.',
        },
        ingredients: {
          fr: 'Selon la marque disponible.',
          en: 'Depending on available brand.',
          ar: 'حسب العلامة التجارية المتوفرة.',
        },
        priceMAD: 15,
        image: '/images/carte/soda.webp',
        vegetarian: true,
      },
      {
        name: 'Eau Minérale (50cl)',
        description: {
          fr: 'Eau plate, 50cl.',
          en: 'Still water, 50cl.',
          ar: 'ماء عادي، 50 سل.',
        },
        story: {
          fr: "Une bouteille d'eau minérale plate, 50cl.",
          en: 'A bottle of still mineral water, 50cl.',
          ar: 'زجاجة مياه معدنية عادية، 50 سل.',
        },
        ingredients: {
          fr: 'Eau minérale naturelle.',
          en: 'Natural mineral water.',
          ar: 'مياه معدنية طبيعية.',
        },
        priceMAD: 10,
        image: '/images/carte/eau-minerale.webp',
        vegetarian: true,
      },
      {
        name: 'Eau Gazeuse (50cl)',
        description: {
          fr: 'Eau pétillante, 50cl.',
          en: 'Sparkling water, 50cl.',
          ar: 'ماء فوّار، 50 سل.',
        },
        story: {
          fr: "Une bouteille d'eau minérale gazeuse, 50cl.",
          en: 'A bottle of sparkling mineral water, 50cl.',
          ar: 'زجاجة مياه معدنية غازية، 50 سل.',
        },
        ingredients: {
          fr: 'Eau minérale gazeuse naturelle.',
          en: 'Natural sparkling mineral water.',
          ar: 'مياه معدنية غازية طبيعية.',
        },
        priceMAD: 10,
        image: '/images/carte/eau-gazeuse.webp',
        vegetarian: true,
      },
    ],
  },
  {
    label: { fr: 'Boissons Chaudes', en: 'Hot Drinks', ar: 'المشروبات الساخنة' },
    items: [
      {
        name: 'Espresso',
        description: {
          fr: 'Café espresso italien.',
          en: 'Italian espresso coffee.',
          ar: 'قهوة إسبريسو إيطالية.',
        },
        story: {
          fr: 'Un espresso italien classique, court et corsé.',
          en: 'A classic Italian espresso, short and bold.',
          ar: 'إسبريسو إيطالي كلاسيكي، قصير وقوي.',
        },
        ingredients: {
          fr: 'Café en grains torréfié, eau.',
          en: 'Roasted coffee beans, water.',
          ar: 'حبوب بن محمّصة، ماء.',
        },
        priceMAD: 20,
        image: '/images/carte/espresso.webp',
        vegetarian: true,
      },
      {
        name: 'Latte',
        description: {
          fr: 'Café au lait crémeux.',
          en: 'Creamy milk coffee.',
          ar: 'قهوة بالحليب الكريمي.',
        },
        story: {
          fr: 'Un espresso allongé de lait chaud mousseux, pour une boisson douce et onctueuse.',
          en: 'An espresso lengthened with steamed, frothy milk, for a smooth, mellow drink.',
          ar: 'إسبريسو ممدود بحليب ساخن ورغوة، لمشروب ناعم ولطيف.',
        },
        ingredients: {
          fr: 'Café en grains torréfié, lait, eau.',
          en: 'Roasted coffee beans, milk, water.',
          ar: 'حبوب بن محمّصة، حليب، ماء.',
        },
        priceMAD: 25,
        image: '/images/carte/latte.webp',
        vegetarian: true,
      },
      {
        name: 'Masala Chai',
        description: {
          fr: 'Thé indien épicé au lait, recette traditionnelle.',
          en: 'Traditional spiced Indian milk tea.',
          ar: 'شاي هندي تقليدي متبّل بالحليب.',
        },
        story: {
          fr: "Le thé indien traditionnel : thé noir infusé avec du lait et un mélange d'épices chaudes (cardamome, cannelle, gingembre, clou de girofle), sucré selon les goûts. La boisson du quotidien en Inde.",
          en: "Traditional Indian tea: black tea brewed with milk and a blend of warm spices (cardamom, cinnamon, ginger, clove), sweetened to taste. India's everyday drink.",
          ar: 'الشاي الهندي التقليدي: شاي أسود يُغلى مع الحليب ومزيج من التوابل الدافئة (هيل، قرفة، زنجبيل، قرنفل)، ويُحلّى حسب الرغبة. مشروب اليوميات في الهند.',
        },
        ingredients: {
          fr: 'Thé noir, lait, cardamome, cannelle, gingembre, clou de girofle, sucre.',
          en: 'Black tea, milk, cardamom, cinnamon, ginger, clove, sugar.',
          ar: 'شاي أسود، حليب، هيل، قرفة، زنجبيل، قرنفل، سكر.',
        },
        priceMAD: 25,
        image: '/images/carte/masala-chai.webp',
        vegetarian: true,
      },
      {
        name: 'Infusion',
        description: {
          fr: 'Infusion de plantes au choix.',
          en: 'Herbal infusion of your choice.',
          ar: 'شاي أعشاب حسب الاختيار.',
        },
        story: {
          fr: "Une infusion d'herbes chaude, sans caféine — au choix selon les arrivages (menthe, verveine, camomille...).",
          en: 'A hot, caffeine-free herbal infusion — choice depends on availability (mint, verbena, chamomile...).',
          ar: 'مشروب أعشاب ساخن خالٍ من الكافيين — حسب التوفر (نعناع، لويزة، بابونج...).',
        },
        ingredients: {
          fr: 'Herbes infusées (variable selon arrivage), eau chaude.',
          en: 'Infused herbs (varies by availability), hot water.',
          ar: 'أعشاب منقوعة (حسب التوفر)، ماء ساخن.',
        },
        priceMAD: 25,
        image: '/images/carte/infusion.webp',
        vegetarian: true,
      },
    ],
  },
];
