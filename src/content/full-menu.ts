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
      },
      {
        name: 'Vegetarian Manchow Soup',
        description: {
          fr: 'Version végétarienne de notre soupe indo-chinoise épicée.',
          en: 'Vegetarian version of our spiced Indo-Chinese soup.',
          ar: 'نسخة نباتية من شوربتنا الهندية-الصينية المتبّلة.',
        },
        priceMAD: 30,
        vegetarian: true,
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
        priceMAD: 25,
        vegetarian: true,
      },
      {
        name: 'Vegetable Pani Puri (6 pcs)',
        description: {
          fr: "Boules croustillantes à l'eau acidulée épicée et chutneys.",
          en: 'Crispy puris with tangy spiced water and chutneys.',
          ar: 'كرات مقرمشة بماء حامض متبّل وصلصات.',
        },
        priceMAD: 40,
        vegetarian: true,
      },
      {
        name: 'Vegetable Pakoras',
        description: {
          fr: 'Beignets de légumes croustillants, pâte de pois chiche épicée.',
          en: 'Crispy vegetable fritters in spiced chickpea batter.',
          ar: 'فطائر خضار مقرمشة بعجينة حمص متبّلة.',
        },
        priceMAD: 30,
        vegetarian: true,
      },
      {
        name: 'Kashumber Salad',
        description: {
          fr: 'Salade fraîche de concombre, tomate et oignon.',
          en: 'Fresh cucumber, tomato and onion salad.',
          ar: 'سلطة طازجة من الخيار والطماطم والبصل.',
        },
        priceMAD: 20,
        vegetarian: true,
      },
      {
        name: 'Raita',
        description: {
          fr: 'Yaourt frais aux épices douces, idéal avec les plats épicés.',
          en: 'Fresh yogurt with mild spices, great alongside spicy dishes.',
          ar: 'لبن طازج بتوابل خفيفة، مرافق مثالي للأطباق الحارة.',
        },
        priceMAD: 20,
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
        priceMAD: 50,
      },
      {
        name: 'Chicken Lollipop',
        description: {
          fr: 'Ailerons de poulet marinés et frits, façon "sucette".',
          en: 'Marinated fried chicken wings, "lollipop" style.',
          ar: 'أجنحة دجاج متبّلة ومقلية على شكل "لوليبوب".',
        },
        priceMAD: 45,
      },
      {
        name: 'Chilli Chicken (Boneless)',
        description: {
          fr: 'Poulet sauté indo-chinois, sauce piquante aux poivrons.',
          en: 'Indo-Chinese stir-fried chicken in a spicy pepper sauce.',
          ar: 'دجاج مقلي على الطريقة الهندية-الصينية بصلصة حارة بالفلفل.',
        },
        priceMAD: 50,
      },
      {
        name: 'Chicken Manchurian (Boneless)',
        description: {
          fr: 'Poulet sauté indo-chinois, sauce Manchurian relevée.',
          en: 'Indo-Chinese stir-fried chicken in a bold Manchurian sauce.',
          ar: 'دجاج مقلي على الطريقة الهندية-الصينية بصلصة مانشوريان.',
        },
        priceMAD: 50,
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
        priceMAD: 75,
      },
      {
        name: 'Chicken Tikka Masala',
        description: {
          fr: 'Poulet tandoori grillé dans une sauce masala crémeuse.',
          en: 'Grilled tandoori chicken in a creamy masala sauce.',
          ar: 'دجاج تندوري مشوي في صلصة ماسالا كريمية.',
        },
        priceMAD: 75,
      },
      {
        name: 'Kadai Chicken',
        description: {
          fr: 'Poulet mijoté au wok avec poivrons et épices kadai.',
          en: 'Wok-simmered chicken with peppers and kadai spices.',
          ar: 'دجاج مطهو في المقلاة مع الفلفل وتوابل كاداي.',
        },
        priceMAD: 75,
      },
      {
        name: 'Prawn Curry',
        description: {
          fr: 'Crevettes mijotées dans un curry parfumé.',
          en: 'Prawns simmered in a fragrant curry sauce.',
          ar: 'روبيان مطهو في كاري عطري.',
        },
        priceMAD: 110,
      },
      {
        name: 'Fish Curry',
        description: {
          fr: 'Poisson mijoté dans un curry parfumé.',
          en: 'Fish simmered in a fragrant curry sauce.',
          ar: 'سمك مطهو في كاري عطري.',
        },
        priceMAD: 110,
      },
      {
        name: 'Prawn Masala',
        description: {
          fr: 'Crevettes dans une sauce masala épaisse et épicée.',
          en: 'Prawns in a thick, spiced masala sauce.',
          ar: 'روبيان في صلصة ماسالا سميكة ومتبّلة.',
        },
        priceMAD: 110,
      },
      {
        name: 'Fish Masala',
        description: {
          fr: 'Poisson dans une sauce masala épaisse et épicée.',
          en: 'Fish in a thick, spiced masala sauce.',
          ar: 'سمك في صلصة ماسالا سميكة ومتبّلة.',
        },
        priceMAD: 110,
      },
      {
        name: 'Lamb Roghan Josh',
        description: {
          fr: "Agneau mijoté dans une sauce cachemirie riche et épicée.",
          en: 'Lamb simmered in a rich, spiced Kashmiri-style sauce.',
          ar: 'لحم ضأن مطهو في صلصة كشميرية غنية ومتبّلة.',
        },
        priceMAD: 90,
      },
      {
        name: 'Lamb Kadai',
        description: {
          fr: 'Agneau mijoté au wok avec poivrons et épices kadai.',
          en: 'Wok-simmered lamb with peppers and kadai spices.',
          ar: 'لحم ضأن مطهو في المقلاة مع الفلفل وتوابل كاداي.',
        },
        priceMAD: 90,
      },
      {
        name: 'Lamb Keema',
        description: {
          fr: "Agneau haché mijoté aux épices, texture fondante.",
          en: 'Minced lamb simmered with spices, rich and hearty.',
          ar: 'لحم ضأن مفروم مطهو بالتوابل، قوامه غني.',
        },
        priceMAD: 90,
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
        priceMAD: 90,
      },
      {
        name: 'Chicken Tikka',
        description: {
          fr: 'Dés de poulet désossés marinés, cuits au tandoor.',
          en: 'Marinated boneless chicken chunks, tandoor-cooked.',
          ar: 'قطع دجاج منزوعة العظم ومتبّلة، مطهوة في التندور.',
        },
        priceMAD: 75,
      },
      {
        name: 'Boti Kabab',
        description: {
          fr: "Brochettes d'agneau marinées, grillées au tandoor.",
          en: 'Marinated lamb skewers, tandoor-grilled.',
          ar: 'أسياخ لحم ضأن متبّلة، مشوية في التندور.',
        },
        priceMAD: 90,
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
        priceMAD: 75,
        vegetarian: true,
      },
      {
        name: 'Paneer Makhni',
        description: {
          fr: 'Paneer dans une sauce onctueuse au beurre et tomate.',
          en: 'Paneer in a velvety butter and tomato sauce.',
          ar: 'جبن بانير في صلصة الزبدة والطماطم المخملية.',
        },
        priceMAD: 75,
        vegetarian: true,
      },
      {
        name: 'Mushroom Masala',
        description: {
          fr: 'Champignons mijotés dans une sauce masala épicée.',
          en: 'Mushrooms simmered in a spiced masala sauce.',
          ar: 'فطر مطهو في صلصة ماسالا متبّلة.',
        },
        priceMAD: 70,
        vegetarian: true,
      },
      {
        name: 'Mushroom Kadai',
        description: {
          fr: 'Champignons mijotés au wok avec poivrons et épices kadai.',
          en: 'Wok-simmered mushrooms with peppers and kadai spices.',
          ar: 'فطر مطهو في المقلاة مع الفلفل وتوابل كاداي.',
        },
        priceMAD: 70,
        vegetarian: true,
      },
      {
        name: 'Tadka Daal',
        description: {
          fr: 'Lentilles mijotées, tempérées aux épices et ghee.',
          en: 'Simmered lentils, tempered with spices and ghee.',
          ar: 'عدس مطهو، مُحضّر بالتوابل والسمن.',
        },
        priceMAD: 60,
        vegetarian: true,
      },
      {
        name: 'Rajma Daal',
        description: {
          fr: 'Haricots rouges mijotés dans une sauce épicée.',
          en: 'Red kidney beans simmered in a spiced sauce.',
          ar: 'فاصولياء حمراء مطهوة في صلصة متبّلة.',
        },
        priceMAD: 65,
        vegetarian: true,
      },
      {
        name: 'Palak Paneer',
        description: {
          fr: 'Paneer dans une sauce onctueuse aux épinards.',
          en: 'Paneer in a smooth, spiced spinach sauce.',
          ar: 'جبن بانير في صلصة سبانخ ناعمة ومتبّلة.',
        },
        priceMAD: 75,
        vegetarian: true,
      },
      {
        name: 'Mixed Vegetable Curry',
        description: {
          fr: 'Légumes de saison mijotés dans un curry parfumé.',
          en: 'Seasonal vegetables simmered in a fragrant curry.',
          ar: 'خضروات موسمية مطهوة في كاري عطري.',
        },
        priceMAD: 60,
        vegetarian: true,
      },
      {
        name: 'Aloo Gobi',
        description: {
          fr: 'Pommes de terre et chou-fleur mijotés aux épices.',
          en: 'Potatoes and cauliflower simmered with spices.',
          ar: 'بطاطس وقرنبيط مطهوان بالتوابل.',
        },
        priceMAD: 60,
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
        priceMAD: 100,
      },
      {
        name: 'Chicken Biryani',
        description: {
          fr: "Spécialité d'Hyderabad : poulet et riz basmati à l'étouffée.",
          en: "Hyderabad's signature: chicken and basmati rice slow-cooked.",
          ar: 'طبق حيدر آباد المميز: دجاج وأرز بسمتي على نار هادئة.',
        },
        priceMAD: 90,
      },
      {
        name: 'Prawn Biryani',
        description: {
          fr: 'Riz basmati parfumé mijoté avec des crevettes.',
          en: 'Fragrant basmati rice slow-cooked with prawns.',
          ar: 'أرز بسمتي عطري مطهو مع الروبيان.',
        },
        priceMAD: 110,
      },
      {
        name: 'Fish Biryani',
        description: {
          fr: 'Riz basmati parfumé mijoté avec du poisson.',
          en: 'Fragrant basmati rice slow-cooked with fish.',
          ar: 'أرز بسمتي عطري مطهو مع السمك.',
        },
        priceMAD: 110,
      },
      {
        name: 'Vegetable Biryani',
        description: {
          fr: 'Riz basmati parfumé mijoté avec légumes de saison.',
          en: 'Fragrant basmati rice slow-cooked with seasonal vegetables.',
          ar: 'أرز بسمتي عطري مطهو مع خضروات موسمية.',
        },
        priceMAD: 75,
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
        priceMAD: 10,
        vegetarian: true,
      },
      {
        name: 'Butter Naan',
        description: {
          fr: 'Naan chaud badigeonné de beurre, cuit au tandoor.',
          en: 'Warm naan brushed with butter, tandoor-baked.',
          ar: 'خبز نان دافئ مُدهون بالزبدة، مخبوز في التندور.',
        },
        priceMAD: 15,
        vegetarian: true,
      },
      {
        name: 'Garlic Naan',
        description: {
          fr: "Naan chaud parfumé à l'ail frais et coriandre.",
          en: 'Warm naan flavored with fresh garlic and coriander.',
          ar: 'خبز نان دافئ منكّه بالثوم الطازج والكزبرة.',
        },
        priceMAD: 15,
        vegetarian: true,
      },
      {
        name: 'Cheese Naan',
        description: {
          fr: 'Pain tandoori moelleux fourré au fromage.',
          en: 'Soft tandoori bread stuffed with cheese.',
          ar: 'خبز تندوري طري محشو بالجبن.',
        },
        priceMAD: 20,
        vegetarian: true,
      },
      {
        name: 'Roti',
        description: {
          fr: 'Pain complet fin, cuit au tandoor.',
          en: 'Thin whole-wheat bread, tandoor-baked.',
          ar: 'خبز رقيق من القمح الكامل، مخبوز في التندور.',
        },
        priceMAD: 10,
        vegetarian: true,
      },
      {
        name: 'Ghee Rice',
        description: {
          fr: 'Riz basmati parfumé sauté au ghee.',
          en: 'Fragrant basmati rice sautéed in ghee.',
          ar: 'أرز بسمتي عطري مقلي بالسمن.',
        },
        priceMAD: 25,
        vegetarian: true,
      },
      {
        name: 'Basmati Rice',
        description: {
          fr: 'Riz basmati nature à la vapeur.',
          en: 'Plain steamed basmati rice.',
          ar: 'أرز بسمتي مطهو بالبخار.',
        },
        priceMAD: 20,
        vegetarian: true,
      },
      {
        name: 'Veg Fried Rice',
        description: {
          fr: 'Riz sauté indo-chinois aux légumes.',
          en: 'Indo-Chinese style fried rice with vegetables.',
          ar: 'أرز مقلي بالخضار على الطريقة الهندية-الصينية.',
        },
        priceMAD: 25,
        vegetarian: true,
      },
      {
        name: 'Cumin Rice',
        description: {
          fr: 'Riz basmati parfumé au cumin.',
          en: 'Basmati rice flavored with cumin.',
          ar: 'أرز بسمتي منكّه بالكمون.',
        },
        priceMAD: 25,
        vegetarian: true,
      },
      {
        name: 'Chicken Fried Rice',
        description: {
          fr: 'Riz sauté indo-chinois au poulet.',
          en: 'Indo-Chinese style fried rice with chicken.',
          ar: 'أرز مقلي بالدجاج على الطريقة الهندية-الصينية.',
        },
        priceMAD: 50,
      },
      {
        name: 'Chicken Hakka Noodles',
        description: {
          fr: 'Nouilles sautées indo-chinoises au poulet.',
          en: 'Indo-Chinese style stir-fried noodles with chicken.',
          ar: 'نودلز مقلية بالدجاج على الطريقة الهندية-الصينية.',
        },
        priceMAD: 50,
      },
      {
        name: 'Veg Hakka Noodles',
        description: {
          fr: 'Nouilles sautées indo-chinoises aux légumes.',
          en: 'Indo-Chinese style stir-fried noodles with vegetables.',
          ar: 'نودلز مقلية بالخضار على الطريقة الهندية-الصينية.',
        },
        priceMAD: 40,
        vegetarian: true,
      },
      {
        name: 'Biryani Plain Rice',
        description: {
          fr: 'Riz basmati parfumé façon biryani, sans viande.',
          en: 'Biryani-style fragrant basmati rice, no meat.',
          ar: 'أرز بسمتي عطري على طريقة البرياني، دون لحم.',
        },
        priceMAD: 40,
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
        priceMAD: 35,
        vegetarian: true,
      },
      {
        name: 'Sweet or Salty Lassi',
        description: {
          fr: 'Boisson au yaourt frais, sucrée ou salée.',
          en: 'Fresh yogurt drink, sweet or salty.',
          ar: 'مشروب لبن طازج، حلو أو مالح.',
        },
        priceMAD: 30,
        vegetarian: true,
      },
      {
        name: 'Virgin Mojito',
        description: {
          fr: 'Mocktail rafraîchissant citron vert et menthe.',
          en: 'Refreshing lime and mint mocktail.',
          ar: 'موكتيل منعش بالليمون الأخضر والنعناع.',
        },
        priceMAD: 30,
        vegetarian: true,
      },
      {
        name: 'Fresh Orange Juice',
        description: {
          fr: "Jus d'orange pressé minute.",
          en: 'Freshly squeezed orange juice.',
          ar: 'عصير برتقال طازج معصور فورًا.',
        },
        priceMAD: 35,
        vegetarian: true,
      },
      {
        name: 'Lemon Glow',
        description: {
          fr: 'Boisson rafraîchissante au citron.',
          en: 'Refreshing lemon-based drink.',
          ar: 'مشروب منعش بالليمون.',
        },
        priceMAD: 30,
        vegetarian: true,
      },
      {
        name: 'Soda (330ml)',
        description: {
          fr: 'Soda au choix, 33cl.',
          en: 'Soft drink of choice, 33cl.',
          ar: 'مشروب غازي حسب الاختيار، 33 سل.',
        },
        priceMAD: 15,
        vegetarian: true,
      },
      {
        name: 'Eau Minérale (50cl)',
        description: {
          fr: 'Eau plate, 50cl.',
          en: 'Still water, 50cl.',
          ar: 'ماء عادي، 50 سل.',
        },
        priceMAD: 10,
        vegetarian: true,
      },
      {
        name: 'Eau Gazeuse (50cl)',
        description: {
          fr: 'Eau pétillante, 50cl.',
          en: 'Sparkling water, 50cl.',
          ar: 'ماء فوّار، 50 سل.',
        },
        priceMAD: 10,
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
        priceMAD: 20,
        vegetarian: true,
      },
      {
        name: 'Latte',
        description: {
          fr: 'Café au lait crémeux.',
          en: 'Creamy milk coffee.',
          ar: 'قهوة بالحليب الكريمي.',
        },
        priceMAD: 25,
        vegetarian: true,
      },
      {
        name: 'Masala Chai',
        description: {
          fr: 'Thé indien épicé au lait, recette traditionnelle.',
          en: 'Traditional spiced Indian milk tea.',
          ar: 'شاي هندي تقليدي متبّل بالحليب.',
        },
        priceMAD: 25,
        vegetarian: true,
      },
      {
        name: 'Infusion',
        description: {
          fr: 'Infusion de plantes au choix.',
          en: 'Herbal infusion of your choice.',
          ar: 'شاي أعشاب حسب الاختيار.',
        },
        priceMAD: 25,
        vegetarian: true,
      },
    ],
  },
];
