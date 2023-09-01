import imgAil from "./images/imgAil.png";
import imgAnisEtoile from "./images/imgAnisEtoile.png";
import imgBaieRose from "./images/imgBaieRose.png";
import imgBaobab from "./images/imgBaobab.png";
import imgFeuilleCombava from "./images/imgFeuilleCombava.png";
import imgZesteCombava from "./images/imgZesteCombava.png";
import img4Epices from "./images/img4Epices.png";
import imgCanelle from "./images/imgCanelle.png";
import imgCitronelle from "./images/imgCitronelle.png";
import imgClouDeGiroffle from "./images/imgClouDeGiroffle.png";
import imgCoriandreGrains from "./images/imgCoriandreGrains.png";
import imgCumin from "./images/imgCumin.png";
import imgCurryViande from "./images/imgCurryViande.png";
import imgEpicesGuacamole from "./images/imgEpicesGuacamole.png";
import imgFenugrec from "./images/imgFenugrec.png";
import imgFeuilleCorosol from "./images/imgFeuilleCorosol.png";
import imgFeveCacao from "./images/imgFeveCacao.png";
import imgFleurDeSel from "./images/imgFleurDeSel.png";
import imgGaramMassala from "./images/imgGaramMassala.png";
import imgGingembre from "./images/imgGingembre.png";
import imgMelange3Baie from "./images/imgMelange3Baie.png";
import imgMuscade from "./images/imgMuscade.png";
import imgPimentRouge from "./images/imgPimentRouge.png";
import imgPimentTsilandimy from "./images/imgPimentTsilandimy.png";
import imgPimentVert from "./images/imgPimentVert.png";
import imgPoivreBlanc from "./images/imgPoivreBlanc.png";
import imgPoivreNoir from "./images/imgPoivreNoir.png";
import imgVanille from "./images/imgVanille.png";
import imgVoatsiperiferyBlanc from "./images/imgVoatsiperiferyBlanc.png";
import imgVoatsiperiferyNoir from "./images/imgVoatsiperiferyNoir.png";
import imgVoatsiperiferyRouge from "./images/imgVoatsiperiferyRouge.png";
import productDefault from "./images/productDefault.png";

export const data = [
  {
    id: 1,
    imgUrl: imgAil,
    name: "AIL",
    Goût: "Piquant",
    Intensité: ["Forte"],
    Texture: ["poudre", "morceau"],
    Origine_géographique: "Madagascar",
    Conservation: "endroit frais et sec",
    Composition_nutritionnelle: [
      "potassium",
      "composés sulfurés",
      {
        vitamines: ["B", "C"],
      },
      {
        mineraux: ["calcium", "fer"],
      },
    ],
    Grammage: [
      {
        unite: "en vrac (1-5 kg)",
      },
      {
        liste: [25, 100, 120, 300],
      },
    ],
    Description:
      "L'ail est une plante à bulbe appartenant à la famille des Alliacées. L'ail a un goût piquant et une odeur forte et caractéristique. C'est cette saveur distinctive qui fait de l'ail un ingrédient populaire dans de nombreuses cuisines du monde entier. Dans la cuisine, l'ail est largement utilisé comme ingrédient dans de nombreux plats, notamment les soupes, les sauces, les marinades et les plats sautés. Il peut être consommé cru, cuit ou séché.L'ail est réputé pour ses propriétés médicinales. Il est considéré comme bénéfique pour la santé cardiovasculaire, la gestion du cholestérol, la régulation de la pression artérielle et la stimulation du système immunitaire. Ces caractéristiques font de l'ail un ingrédient polyvalent en cuisine et bénéfique pour la santé,",
  },
  {
    id: 2,
    imgUrl: imgAnisEtoile,
    name: "ANIS ETOILE",
    Goût: "Sucrée et piquante",
    Intensité: ["Légère"],
    Parfum: ["Doux", "pénétrant"],
    Texture: ["poudre", "entière"],
    Origine_géographique: "Madagascar",
    Conservation: ["endroit frais et sec", "à l'abri de la lumière"],
    Composition_nutritionnelle: [
      "huile essentielle",
      "anethole",
      "antioxydants",
      {
        vitamines: ["B", "C"],
      },
      {
        mineraux: ["calcium", "fer"],
      },
    ],
    Grammage: [
      {
        unite: "en vrac (1-5 kg)",
      },
      {
        liste: [],
      },
    ],
    Description:
      "L'anis étoilé, également connu sous le nom de badiane, est une plante aromatique qui se présente sous la forme d'un fruit en forme d'étoile composé de huit branches ou carpelles. L'anis étoilé est couramment utilisé comme épice dans de nombreuses cuisines, notamment chinoises et vietnamiennes. Il est souvent utilisé pour aromatiser les plats à base de viande, les soupes, les sauces, les boissons chaudes et les desserts. Il est également l'ingrédient principal du célèbre mélange d'épices chinois, le cinq-épices. L'anis étoilé est utilisé depuis longtemps dans la médecine traditionnelle chinoise pour ses propriétés digestives, antimicrobiennes et anti-inflammatoires. Il peut aider à soulager les troubles digestifs tels que les ballonnements et les crampes abdominales. En résumé, l'anis étoilé est une épice polyvalente avec une saveur distinctive d'anis et possède également des propriétés médicinales bénéfiques pour la digestion.",
  },
  {
    id: 3,
    imgUrl: imgBaieRose,
    name: "BAIE ROSE",
    Goût: "Fruité avec de notes poivrées",
    Intensité: ["Doux", "moins piquante que le poivre noir"],
    Parfum: ["agréable", "délicat"],
    Texture: ["lisse", "ferme"],
    Origine_géographique: "Madagascar",
    Conservation: ["endroit frais et sec", "à l'abri de la lumière"],
    Composition_nutritionnelle: [
      "huiles essentielles",
      "antioxydants",
      {
        vitamines: ["E", "C"],
      },
    ],
    Grammage: [
      {
        unite: "en vrac (1-5 kg)",
      },
      {
        liste: [12, 13, 22, 50, 100],
      },
    ],
    Description:
      "La baie rose, également connue sous le nom de poivre rose, est une petite baie utilisée comme épice dans la cuisine. La baie rose est souvent utilisée pour aromatiser les plats de viande, les poissons, les fruits de mer, les marinades, les sauces et les salades. Elle peut par ailleurs être utilisée pour décorer les plats en raison de sa couleur vive. La baie rose est connue pour ses propriétés stimulantes et digestives. Elle peut aider à faciliter la digestion et à soulager les ballonnements et les crampes abdominales. En résumé, la baie rose est une épice polyvalente avec un goût doux et fruité. Elle est utilisée pour aromatiser de nombreux plats et possède des propriétés digestives bénéfiques. ",
  },
  {
    id: 4,
    imgUrl: imgBaobab,
    name: "BAOBAB EN POUDRE",
    Goût: "Acidulé avec des notes de fruits tropicaux",
    Intensité: ["Légère"],
    Parfum: ["agréable", "fruitée"],
    Texture: "poudre",
    Origine_géographique: "Madagascar",
    Conservation: [
      "récipient hermétique",
      "à l'abri de la chaleur et de l'humidité.",
    ],
    Composition_nutritionnelle: [
      "potassium",
      "magnésium",
      "fibres",
      "antioxydants",
      {
        vitamines: ["C"],
      },
      {
        mineraux: ["calcium"],
      },
    ],
    Grammage: [
      {
        unite: "en vrac (1-5 kg)",
      },
      {
        liste: [13, 15, 25, 100],
      },
    ],
    Description:
      "La poudre de baobab est un produit alimentaire dérivé  de la pulpe séchée du fruit du baobab. Elle a une couleur blanche à beige. La poudre de baobab peut être mélangée dans des smoothies, des yaourts, des sauces ou des desserts. Elle peut également être saupoudrée sur des fruits frais ou utilisée comme assaisonnement dans des plats salés. La poudre de baobab peut aider à renforcer le système immunitaire, favoriser la digestion, réguler la glycémie et améliorer la santé de la peau. Ainsi, la poudre de baobab est un produit alimentaire riche en nutriments et doté d'un goût acidulé. Elle peut être utilisée dans de nombreuses préparations culinaires et possède des propriétés bénéfiques pour la santé. ",
  },
  {
    id: 5,
    imgUrl: imgFeuilleCombava,
    name: "FEUILLES DE COMBAVA",
    Goût: "Acidulé",
    Intensité: ["Intense"],
    Parfum: ["Citronné"],
    Texture: ["feuilles fraîches", "poudre"],
    Origine_géographique: "Madagascar",
    Grammage: [
      {
        unite: "en vrac (1-5 kg)",
      },
      {
        liste: [],
      },
    ],
    Description:
      "Le bois d'anis, également connu sous le nom d'anis étoilé, est la partie séchée de l'arbre du même nom. Le bois d'anis est largement utilisé comme épice dans la cuisine asiatique, notamment dans les plats à base de viande, les soupes, les sauces et les desserts. Il peut également être utilisé pour aromatiser les boissons alcoolisées, telles que l'absinthe et le pastis. Le bois d'anis est utilisé dans la médecine traditionnelle pour traiter divers problèmes de santé, tels que les troubles digestifs, la toux et les infections respiratoires. Il est pareillement connu pour ses propriétés carminatives et expectorantes. En gros, c'est une épice utilisée dans la cuisine, avec un goût doux et épicé. Il possède des propriétés médicinales bénéfiques et peut être conservé dans des conditions appropriées pour préserver sa saveur et sa qualité. ",
  },
  {
    id: 6,
    imgUrl: imgZesteCombava,
    name: "ZESTES DE COMBAVA",
    Goût: "Aromatique",
    Intensité: ["Intense"],
    Parfum: ["Citronné"],
    Texture: ["zestes", "poudre"],
    Origine_géographique: "Madagascar",
    Composition_nutritionnelle: "huiles essentielles",
    Grammage: [
      {
        unite: "en vrac (1-5 kg)",
      },
      {
        liste: [],
      },
    ],
    Description:
      "Les zestes de combava sont obtenus en râpant la peau du fruit. Ils sont de couleur verte et sont riches en huiles essentielles.. Ils sont souvent utilisés pour ajouter une touche de fraîcheur et de vivacité à différents plats. Les zestes de combava sont utilisés pour parfumer les plats sucrés et salés, tels que les pâtisseries, les desserts, les marinades, les cocktails et les sauces. Ils sont également utilisés dans la préparation de thés et d'infusions. En résumé, les zestes de combava sont des ingrédients très appréciés en cuisine pour leur parfum citronné et leur saveur intense. , tandis que les zestes sont utilisés pour aromatiser une variété de plats sucrés et salés.",
  },
  {
    id: 7,
    imgUrl: imgCoriandreGrains,
    name: "CORIANDRE EN GRAINS",
    Goût: "Citronné avec une note épicée",
    Intensité: ["Légèrement sucrée"],
    Parfum: ["Piquant", "herbacé"],
    Texture: ["grains"],
    Origine_géographique: "Madagascar",
    Grammage: [
      {
        unite: "en vrac (1-5 kg)",
      },
      {
        liste: [15, 16, 25, 100, 120],
      },
    ],
    Description:
      "La coriandre en grains, également connue sous le nom de coriandre moulue, est obtenue en moulant les graines séchées de la plante Coriandrum sativum. Les graines sont petites et rondes, de couleur brun clair à brun foncé. Les graines de coriandre sont utilisées dans de nombreuses cuisines du monde entier pour aromatiser les plats. Elles peuvent être utilisées entières ou moulues. Les graines entières sont souvent utilisées dans les marinades, les currys et les plats mijotés, tandis que les graines moulues sont couramment utilisées dans les mélanges d'épices, les sauces, les soupes et les saucisses. La coriandre en grains est connue pour ses propriétés digestives et stimulantes. Elle peut aider à soulager les problèmes de digestion, tels que les ballonnements et les crampes abdominales, et peut également avoir des effets bénéfiques sur le système immunitaire et la santé cardiovasculaire.En résumé, la coriandre en grains est une épice polyvalente utilisée pour aromatiser les plats du monde entier. Elle a un goût citronné avec une note épicée et peut apporter des bienfaits pour la santé.",
  },
  {
    id: 8,
    imgUrl: imgFeuilleCorosol,
    name: "FEUILLES DE COROSSOL",
    Parfum: ["Agréable"],
    Texture: ["feuille entière", "hachée, poudre"],
    Origine_géographique: "Madagascar",
    Composition_nutritionnelle: ["antioxydants", "anti-inflammatoires"],
    Grammage: [
      {
        unite: "en vrac (1-5 kg)",
      },
      {
        liste: [],
      },
    ],
    Description:
      "Les feuilles de corossol sont larges, vertes et brillantes. Elles ont une texture coriace et sont généralement ovales ou en forme de cœur. Les feuilles de corossol dégagent également une odeur caractéristique et agréable. Elles sont utilisées dans la préparation de divers plats et boissons, notamment des thés, des infusions et des jus. Les feuilles de corossol sont également réputées pour leurs propriétés médicinales . Elles peuvent être utilisées pour traiter certains problèmes de santé tels que les troubles digestifs, l'hypertension artérielle et l'anxiété. En résumé, les feuilles de corossol sont appréciées pour leur apparence attrayante, leur parfum agréable et leurs nombreuses utilisations culinaires et médicinales.",
  },
  {
    id: 9,
    imgUrl: imgAil,
    name: "BOIS D'ANIS",
    Goût: "Epicé avec des notes d'anis et de réglisse",
    Intensité: ["Douce"],
    Parfum: ["Aromatique", "distinctif"],
    Texture: ["écorce"],
    Origine_géographique: "Madagascar",
    Conservation: [
      "récipient hermétique",
      "à l'abri de la lumière et de l'humidité",
    ],
    Composition_nutritionnelle: ["anéthole", "antioxydants"],
    Grammage: [
      {
        unite: "en vrac (1-5 kg)",
      },
      {
        liste: [],
      },
    ],
    Description:
      "Le bois d'anis, également connu sous le nom d'anis étoilé, est la partie séchée de l'arbre du même nom. Le bois d'anis est largement utilisé comme épice dans la cuisine asiatique, notamment dans les plats à base de viande, les soupes, les sauces et les desserts. Il peut également être utilisé pour aromatiser les boissons alcoolisées, telles que l'absinthe et le pastis. Le bois d'anis est utilisé dans la médecine traditionnelle pour traiter divers problèmes de santé, tels que les troubles digestifs, la toux et les infections respiratoires. Il est pareillement connu pour ses propriétés carminatives et expectorantes. En gros, c'est une épice utilisée dans la cuisine, avec un goût doux et épicé. Il possède des propriétés médicinales bénéfiques et peut être conservé dans des conditions appropriées pour préserver sa saveur et sa qualité. ",
  },

  {
    id: 10,
    imgUrl: imgFeveCacao,
    name: "FEVE DE CACAO",
    Goût: "Amer avec des notes de chocolat",
    Intensité: ["Intense"],
    Parfum: ["Chocolat"],
    Texture: ["brute", "torréfiée", "concassée"],
    Origine_géographique: "Madagascar",
    Conservation: [
      "endroit frais et sec",
      "à l'abri de l'humidité et de la lumière",
    ],
    Composition_nutritionnelle: [
      "fibres, magnésium, fer, potassium, antioxydants, flavonoïdes",
    ],
    Grammage: [
      {
        unite: "en vrac (1-5 kg)",
      },
      {
        liste: [30, 40],
      },
    ],
    Description:
      "La fève de cacao est la graine du fruit du cacaoyer. Elles ont une forme ovale et sont de couleur brun foncé. Les fèves de cacao sont utilisées pour la fabrication du chocolat. Elles peuvent être broyées pour obtenir de la poudre de cacao, ou pressées pour extraire le beurre de cacao. Elles peuvent également être utilisées dans la préparation de boissons chaudes au chocolat, de desserts, de pâtisseries, etc. Les fèves de cacao sont connues pour leurs effets stimulants et énergisants grâce à leur teneur en caféine et en théobromine. Elles contiennent également des composés qui peuvent aider à améliorer l'humeur et réduire le stress. En résumé, les fèves de cacao sont des graines riches en nutriments avec un goût intense de chocolat. Elles sont utilisées dans la fabrication du chocolat et ont des propriétés stimulantes et énergisantes. ",
  },

  {
    id: 11,
    imgUrl: imgCanelle,
    name: "CANNELLE",
    Goût: "Sucré",
    Intensité: ["Doux"],
    Parfum: ["Chaud", "épicé"],
    Texture: ["poudre, rouleau (8 à 10 cm et 18 à 20cm)"],
    Origine_géographique: "Madagascar",
    Conservation: [
      "endroit frais",
      "sec et à l'abri de la lumière directe du soleil",
    ],
    Composition_nutritionnelle: [
      "antioxydants, anti-inflammatoires, antifongiques naturels, fibres, calcium, fer, vitamine K",
    ],
    Grammage: [
      {
        unite: "en vrac (1-5 kg)",
      },
      {
        liste: [16, 18, 36, 8, 100],
      },
    ],
    Description:
      "La cannelle est une épice qui provient de l'écorce intérieure de l'arbre appelé Cinnamomum. Elle est généralement vendue sous forme de bâtonnets ou de poudre. Les bâtonnets de cannelle ont une couleur brun clair et une texture rugueuse. La cannelle est souvent utilisée dans les desserts, les pâtisseries, les boissons chaudes (comme le cidre de pomme ou le chocolat chaud), les plats sucrés et même certains plats salés. Elle peut être saupoudrée sur des fruits, ajoutée à des marinades, incorporée dans des mélanges d'épices, etc. La cannelle peut aider à réguler le taux de sucre dans le sang, à améliorer la digestion, à réduire les symptômes du rhume et de la grippe, à soulager les douleurs articulaires, entre autres. En résumé, la cannelle est une épice appréciée pour son goût sucré et épicé. Elle possède des propriétés bénéfiques pour la santé et peut être utilisée dans une variété de plats sucrés et salés. ",
  },
  {
    id: 12,
    imgUrl: imgCitronelle,
    name: "CITRONNELLE",
    Goût: "Citronné",
    Parfum: ["Citronné", "frais", "aromatique"],
    Texture: ["tiges fines"],
    Origine_géographique: "Madagascar",
    Conservation: [
      "endroit frais",
      "sec et à l'abri de la lumière directe du soleil",
    ],
    Composition_nutritionnelle: [
      "citronellols, citronnellals, limonènes, antioxydants, vitamine C, vitamine A, fer, potassium.",
    ],
    Grammage: [
      {
        unite: "en vrac (1-5 kg)",
      },
      {
        liste: [50],
      },
    ],
    Description:
      "La citronnelle est une plante herbacée originaire de régions tropicales et subtropicales. Elle est fréquemment utilisée dans la cuisine asiatique, en particulier dans les plats thaïlandais et vietnamiens. Elle ajoute une saveur citronnée et une note herbacée aux soupes, aux curry, aux marinades, aux sauces et aux boissons. La citronnelle est réputée pour ses propriétés antibactériennes, antifongiques et anti-inflammatoires. Elle peut aider à soulager les troubles digestifs, à réduire les inflammations, à améliorer la digestion et à renforcer le système immunitaire. L'huile essentielle de citronnelle est couramment utilisée en cosmétique pour ses propriétés antiseptiques et désodorisantes. Elle peut être présente dans les produits de soins corporels tels que les lotions, les savons et les déodorants. En résumé, la citronnelle est une plante aux tiges longues et feuillues, avec une odeur et un goût citronnés. Elle est utilisée en cuisine, en aromathérapie et en cosmétique, et possède des propriétés bénéfiques pour la santé. ",
  },
  {
    id: 13,
    imgUrl: imgCumin,
    name: "CUMIN",
    Goût: "Chaud, terreux, légèrement amère",
    Intensité: ["Forte", "distinctive"],
    Texture: ["grains", "poudre"],
    Origine_géographique: "Madagascar",
    Composition_nutritionnelle: ["antioxydants, vitamines"],
    Grammage: [
      {
        unite: "en vrac (1-5 kg)",
      },
      {
        liste: [17, 20, 25, 30, 40, 100, 200],
      },
    ],
    Description:
      "Le cumin est largement utilisé dans les cuisines du monde entier, notamment dans la cuisine indienne, mexicaine et du Moyen-Orient. Il est utilisé pour aromatiser les plats, les soupes, les sauces, les marinades et les mélanges d'épices. Le cumin moulu est couramment utilisé dans les currys, les chili con carne, les tacos et les couscous. Le cumin est connu pour ses propriétés digestives et carminatives. Il peut aider à soulager les problèmes de digestion, tels que les flatulences et les crampes abdominales. Le cumin est en fait un aliment bénéfique pour la santé globale. En résumé, le cumin est une épice polyvalente avec un goût chaud et une odeur distinctive. Il est largement utilisé dans de nombreuses cuisines du monde entier et offre des bienfaits pour la santé.",
  },
  {
    id: 14,
    imgUrl: "",
    name: "CURCUMA",
    Goût: "Amer et épicé",
    Intensité: ["Légère"],
    Texture: ["morceau", "poudre"],
    Origine_géographique: "Madagascar",
    Composition_nutritionnelle: ["anti-inflammatoires, antioxydantes"],
    Grammage: [
      {
        unite: "en vrac (1-5 kg)",
      },
      {
        liste: [17, 22, 39, 100, 120],
      },
    ],
    Description:
      "Le curcuma est une épice obtenue à partir de la racine d'une plante de la famille du gingembre. Le curcuma est une poudre jaune vif, souvent utilisée pour donner une couleur intense aux plats. Le curcuma est largement utilisé dans la cuisine asiatique, notamment dans les currys, les sauces, les marinades et les mélanges d'épices. Il est également utilisé comme colorant alimentaire naturel. Le curcuma peut aider à soulager les problèmes digestifs, réduire l'inflammation, renforcer le système immunitaire et favoriser la santé du cœur et du cerveau.En résumé, le curcuma est une épice colorée et parfumée utilisée dans de nombreuses cuisines pour ses propriétés bénéfiques pour la santé.",
  },
  {
    id: 15,
    imgUrl: imgCurryViande,
    name: "CURRY SPECIAL VIANDE",
    Goût: "Complexe et épicé avec des notes chaudes, terreuses, douces et parfois piquantes",
    Intensité: ["Forte", "distinctive"],
    Texture: ["poudre"],
    Origine_géographique: "Madagascar",
    Composition_nutritionnelle: "anti-inflammatoires, antioxydantes",
    Grammage: [
      {
        unite: "en vrac (1-5 kg)",
      },
      {
        liste: [20, 24, 38, 100, 110],
      },
    ],
    Description:
      "Le curry spécial viande est un mélange d'épices utilisé pour préparer des plats de viande savoureux et épicés. Il est généralement composé d'un mélange d'épices telles que le curcuma, le cumin, la coriandre, le gingembre, le poivre, la cannelle, la cardamome et le clou de girofle. Les proportions varient selon les régions et les recettes traditionnelles. Le curry est couramment utilisé dans les cuisines indienne, thaïlandaise et asiatique en général. Il est utilisé pour préparer des plats de viande tels que le poulet au curry, l'agneau au curry et le bœuf au curry. Le curry peut être utilisé comme assaisonnement pour mariner la viande avant la cuisson ou comme ingrédient principal dans les sauces et les plats mijotés.Les épices qui composent le curry, comme le curcuma et le gingembre, sont réputées pour leurs différentes propriétés. Elles peuvent aider à stimuler le système immunitaire, à favoriser la digestion et à réduire l'inflammation. En résumé, le curry spécial viande est un mélange d'épices savoureux utilisé pour préparer des plats de viande épicés. Il offre une saveur complexe et apporte des bienfaits pour la santé grâce aux épices qui le composent.",
  },
  {
    id: 16,
    imgUrl: imgEpicesGuacamole,
    name: "EPICES POUR GUACAMOLE",
    Goût: "Fumé",
    Intensité: ["Modérée"],
    Texture: ["poudre"],
    Origine_géographique: "Madagascar",
    Grammage: [
      {
        unite: "en vrac (1-5 kg)",
      },
      {
        liste: [15, 22, 35, 100],
      },
    ],
    Description:
      "Les épices couramment utilisée dans le guacamole sont le cumin en poudre, le piment rouge en poudre, l'ail en poudre, la coriandre en poudre, la muscade en poudre, le sel fin blanc et le poudre de percil",
  },
  {
    id: 17,
    imgUrl: imgFenugrec,
    name: "FENUGREC",
    Parfum: ["Distinctif similaire au sirop d'érable"],
    Texture: ["poudre", "grains torréfiés"],
    Origine_géographique: "Madagascar",
    Composition_nutritionnelle: ["anti-inflammatoires", "antioxydantes"],
    Grammage: [
      {
        unite: "en vrac (1-5 kg)",
      },
      {
        liste: [],
      },
    ],
    Description:
      "Le fenugrec est une plante utilisée comme épice et remède traditionnel dans de nombreuses cultures. Le fenugrec est couramment utilisé dans les cuisines indienne, méditerranéenne et asiatique. Il est utilisé pour aromatiser les plats de viande, les curry, les bouillons et les marinades. Il est également utilisé dans la fabrication de fromages et de pains. Il peut aider à réguler le taux de sucre dans le sang, à réduire l'inflammation et à favoriser la digestion. Il est également utilisé comme remède traditionnel pour augmenter la production de lait chez les femmes qui allaitent. Le fenugrec est disponible sous forme de graines torréfiées ou de poudre. Les graines de fenugrec peuvent être utilisées entières ou moulues, tandis que la poudre de fenugrec est souvent utilisée comme épice. En résumé, le fenugrec est une épice polyvalente utilisée pour son goût unique et ses propriétés bénéfiques pour la santé.",
  },
  {
    id: 18,
    imgUrl: imgFleurDeSel,
    name: "FLEUR DE SEL NATURE",
    Goût: "délicat, subtil, avec des notes légèrement salées",
    Intensité: ["Légère"],
    Texture: ["cristaux blancs fins"],
    Origine_géographique: "Madagascar",
    Grammage: [
      {
        unite: "en vrac (1-5 kg)",
      },
      {
        liste: [38, 40, 70, 180],
      },
    ],
    Description:
      "La fleur de sel est un sel marin récolté à la surface des marais salants. La méthode de récolte traditionnelle implique de ratisser délicatement les cristaux formés à la surface de l'eau salée. La fleur de sel est souvent utilisée comme assaisonnement final pour saupoudrer sur les plats juste avant de les servir. Elle peut être utilisée pour rehausser les saveurs des légumes, des viandes, des fruits de mer et même des desserts. La fleur de sel est considérée comme un sel haut de gamme en raison de sa méthode de récolte minutieuse et de sa saveur délicate. Elle est souvent plus coûteuse que le sel de table ordinaire. En résumé, la fleur de sel est un sel marin délicat et croquant utilisé comme assaisonnement final pour rehausser les saveurs des plats. de gamme apprécié par les chefs et les amateurs de cuisine.",
  },
  {
    id: 19,
    imgUrl: "",
    name: "FLEUR DE SEL/ BAIE ROSE / POIVRE NOIR CONCASSE",
    Grammage: [
      {
        unite: "en vrac (1-5 kg)",
      },
      {
        liste: [40, 65, 160],
      },
    ],
    Description:
      "Fleur de sel de Madagascar aromatisée avec de la baie rose et du poivre noir concassé. 100% naturel et sans additif.",
  },
  {
    id: 20,
    imgUrl: "",
    name: "FLEUR DE SEL/ COMBAVA",
    Grammage: [
      {
        unite: "en vrac (1-5 kg)",
      },
      {
        liste: [38, 40, 70, 170],
      },
    ],
    Description:
      "Fleur de sel de Madagascar aromatisée aux poudres de zestes de combava.",
  },
  {
    id: 21,
    imgUrl: "",
    name: "FLEUR DE SEL/ COMBAVA / GINGEMBRE",
    Grammage: [
      {
        unite: "en vrac (1-5 kg)",
      },
      {
        liste: [38, 40, 70, 170],
      },
    ],
    Description:
      "Fleur de sel de Madagascar aromatisée aux poudres de zestes de combava et du gingembre. 100% naturel et sans additif.",
  },
  {
    id: 22,
    imgUrl: "",
    name: "FLEUR DE SEL/ VANILLE",
    Grammage: [
      {
        unite: "en vrac (1-5 kg)",
      },
      {
        liste: [40, 41, 70, 170],
      },
    ],
    Description:
      "Fleur de sel de Madagascar aromatisée à la vanille de bourbon de Madagascar",
  },
  {
    id: 23,
    imgUrl: "",
    name: "FLEUR DE SEL/ VOATSIPERIFERY BLANC",
    Grammage: [
      {
        unite: "en vrac (1-5 kg)",
      },
      {
        liste: [40, 63, 180],
      },
    ],
    Description:
      "Fleur de sel de Madagascar aromatisée au voatsiperifery blanc concassé.",
  },
  {
    id: 60,
    imgUrl: imgGingembre,
    name: "GINGEMBRE",
    Goût: "Piquant et épicé avec une légère note citronnée",
    Parfum: ["Aromatique", "distinctif"],
    Texture: ["morceau", "poudre"],
    Origine_géographique: "Madagascar",
    Composition_nutritionnelle: ["anti-inflammatoires, antioxydantes"],
    Grammage: [
      {
        unite: "en vrac (1-5 kg)",
      },
      {
        liste: [22, 44, 100, 110],
      },
    ],
    Description:
      "Le gingembre est une plante herbacée utilisée comme épice et remède traditionnel dans de nombreuses cultures. Le gingembre est largement utilisé dans les cuisines asiatiques, en particulier dans les plats indiens, chinois et thaïlandais. Il est utilisé pour aromatiser les plats de viande, les sautés, les currys, les marinades, les soupes, les sauces et les boissons comme le thé au gingembre. Il peut aider à soulager les nausées, les maux d'estomac, les douleurs articulaires, les migraines et les symptômes du rhume et de la grippe. La racine de gingembre frais est souvent utilisée pour préparer des thés, des tisanes et des décoctions. En résumé, le gingembre est une épice polyvalente appréciée pour son goût épicé et ses propriétés bénéfiques pour la santé. Il est largement utilisé dans la cuisine asiatique et peut être consommé frais, en poudre ou sous d'autres formes.",
  },
  {
    id: 24,
    imgUrl: imgClouDeGiroffle,
    name: "CLOU DE GIROFLE",
    Goût: "Chaud, piquant et légèrement sucré",
    Intensité: ["Intense"],
    Parfum: ["Epicé", "agréable"],
    Texture: ["clou", "poudre"],
    Origine_géographique: "Madagascar",
    Composition_nutritionnelle: [
      "antibactériennes, antifongiques, antivirales et analgésiques",
    ],
    Grammage: [
      {
        unite: "en vrac (1-5 kg)",
      },
      {
        liste: [19, 20, 25, 26, 30, 50, 100, 110, 120],
      },
    ],
    Description:
      "Le clou de girofle est l'inflorescence séchée du giroflier, une plante originaire d'Indonésie. Le clou de girofle est utilisé comme épice dans de nombreuses cuisines à travers le monde. Il est souvent utilisé dans les plats de viande, les marinades, les bouillons, les desserts et les boissons chaudes comme le vin chaud et le thé chai. Il est souvent utilisé pour soulager les maux de dents, les problèmes digestifs, les infections respiratoires et les douleurs musculaires. Le clou de girofle peut être utilisé comme répulsif naturel contre les insectes, notamment les mites et les moustiques. Il est également utilisé en aromathérapie pour ses propriétés relaxantes et revitalisantes. En résumé, le clou de girofle est une épice polyvalente appréciée pour son goût épicé, son arôme intense et ses propriétés médicinales. Il est largement utilisé en cuisine, en médecine naturelle et pour ses effets répulsifs et aromatiques.",
  },
  {
    id: 25,
    imgUrl: imgGaramMassala,
    name: "GARAM MASSALA",
    Goût: "Chaud, épicé et légèrement sucré, avec des notes de terre, de muscade et de clou de girofle",
    Intensité: ["Intense"],
    Origine_géographique: "Madagascar",
    Composition_nutritionnelle: ["anti-inflammatoires, antioxydants"],
    Grammage: [
      {
        unite: "en vrac (1-5 kg)",
      },
      {
        liste: [20, 40, 100, 130],
      },
    ],
    Description:
      "Le garam masala est un mélange d'épices couramment utilisé dans la cuisine indienne. Le garam masala est traditionnellement composé de différentes épices telles que la coriandre, le cumin, la cardamome, le clou de girofle, la cannelle, le poivre noir et la muscade. Cependant, les proportions des épices peuvent varier selon les recettes et les préférences personnelles. Le garam masala est utilisé comme assaisonnement dans de nombreux plats indiens, tels que les currys, les ragoûts, les sauces, les marinades et les plats de viande. Il peut également être ajouté aux plats de légumes, de riz, de soupes et de lentilles pour leur donner une saveur plus complexe. Certaines épices du mélange sont également réputées pour aider à la digestion et au métabolisme. En résumé, le garam masala est un mélange d'épices polyvalent utilisé dans la cuisine indienne pour son goût épicé et son arôme parfumé. Il peut être utilisé dans de nombreux plats pour rehausser leurs saveurs et présente également des propriétés bénéfiques pour la santé.",
  },
  {
    id: 26,
    imgUrl: imgMelange3Baie,
    name: "MELANGE DE 3 BAIES",
    Goût: "Piquant, épicé et légèrement fruité",
    Origine_géographique: "Madagascar",
    Composition_nutritionnelle: ["antioxydants, anti-inflammatoires"],
    Grammage: [
      {
        unite: "en vrac (1-5 kg)",
      },
      {
        liste: [22, 26, 40, 100, 210],
      },
    ],
    Description:
      "Le mélange de 3 baies est un mélange d'épices composé généralement de grains de poivre noir, de poivre blanc et de baies roses. Les proportions de chaque baie peuvent varier selon les recettes et les préférences personnelles. L'ensemble offre un mélange équilibré et complexe de saveurs. Comme assaisonnement dans de nombreux plats, notamment les viandes, les volailles, les poissons, les légumes et les sauces. Il peut être utilisé moulu ou entier, selon les préférences et la recette. Pour la santé, le poivre noir est réputé pour faciliter la digestion et stimuler le métabolisme. En résumé, le mélange de 3 baies est un mélange d'épices polyvalent utilisé pour ajouter de la saveur et de la complexité aux plats. Il offre un goût épicé, légèrement sucré et citronné, et présente également des propriétés bénéfiques pour la santé.",
  },
  {
    id: 27,
    imgUrl: "",
    name: "MELANGE 4 EPICES",
    Goût: "Chaud, épicé et légèrement sucré",
    Origine_géographique: "Madagascar",
    Grammage: [
      {
        unite: "en vrac (1-5 kg)",
      },
      {
        liste: [20, 25, 100, 210],
      },
    ],
    Description:
      "Le mélange 4 épices est un mélange d'épices traditionnellement composé de poivre noir, de muscade, de clou de girofle et de cannelle. Le poivre noir ajoute une saveur piquante, la muscade apporte une note chaude et boisée, le clou de girofle ajoute une saveur intense et épicée, tandis que la cannelle apporte une saveur douce et aromatique. L'ensemble offre un mélange équilibré et complexe de saveurs. Le mélange 4 épices est utilisé comme assaisonnement dans de nombreux plats, notamment les viandes, les ragoûts, les saucisses, les marinades et les plats de légumes. Il peut également être utilisé dans certaines pâtisseries, comme les biscuits aux épices. Les épices contenues dans le mélange 4 épices ont des propriétés antioxydantes, anti-inflammatoires et digestives. Certaines épices du mélange sont réputées pour leurs effets bénéfiques sur la digestion et la santé gastro-intestinale. En résumé, le mélange 4 épices est un mélange d'épices polyvalent utilisé pour ajouter de la saveur et de la complexité aux plats. Il offre un goût épicé, chaud et légèrement sucré, et présente également des propriétés bénéfiques pour la santé.",
  },
  {
    id: 28,
    imgUrl: imgMuscade,
    name: "MUSCADE",
    Goût: "Chaud, terrestre et légèrement sucré",
    Intensité: ["Intense avec des notes d'épices et de noix."],
    Parfum: ["Boisé", "légèrement piquant"],
    Texture: ["macis", "noix", "poudre"],
    Origine_géographique: "Madagascar",
    Grammage: [
      {
        unite: "en vrac (1-5 kg)",
      },
      {
        liste: [25, 30, 34, 42, 50, 140, 280],
      },
    ],
    Description:
      "La muscade est une épice qui provient du fruit de l'arbre Myristica fragrans. La muscade est originaire d'Indonésie et est principalement récoltée à partir des graines de la noix de muscade. La muscade est utilisée dans de nombreux plats et boissons, notamment les sauces, les soupes, les ragoûts, les desserts, les boissons chaudes et les plats à base de fromage. Elle peut être utilisée en poudre ou selon les préférences et la recette. La muscade possède des propriétés antioxydantes, anti-inflammatoires et antibactériennes. Elle est également réputée pour favoriser la digestion, soulager les problèmes gastro-intestinaux et améliorer la circulation sanguine. Cependant, il est important de la consommer avec modération, car une consommation excessive peut entraîner des effets indésirables. En résumé, la muscade est une épice polyvalente utilisée pour ajouter de la saveur et de l'arôme aux plats. Elle a un goût chaud et légèrement sucré, avec un arôme intense et parfumé. Elle présente également des propriétés bénéfiques pour la santé, mais doit être consommée avec modération.",
  },
  {
    id: 29,
    imgUrl: imgPimentRouge,
    name: "PIMENT ROUGE PILIPILI",
    Goût: "Vif et épicé",
    Intensité: ["Brûlante", "piquante"],
    Parfum: ["Très distinctif", "détectable même en petites quantités"],
    Texture: ["entière", "poudre"],
    Origine_géographique: "Madagascar",
    Grammage: [
      {
        unite: "en vrac (1-5 kg)",
      },
      {
        liste: [11, 13, 21, 22, 39, 50, 90, 100, 120],
      },
    ],
    Description:
      "Le piment rouge, également connu sous le nom de piment de Cayenne, est une épice extrêmement épicée qui provient du fruit sec des différentes variétés de Capsicum annuum. Le piment rouge est célèbre pour sa chaleur intense et son piquant. La capsaïcine, un composé présent dans le piment, est responsable de cette sensation de chaleur et peut varier en intensité selon les variétés de piment. Le piment rouge est utilisé dans de nombreuses cuisines du monde entier pour ajouter de la chaleur et du piquant aux plats. On le trouve souvent dans les sauces, les marinades, les plats épicés, les soupes, les viandes et les plats à base de légumes. La capsaïcine présente dans le piment rouge est connue pour ses propriétés analgésiques, anti-inflammatoires et antibactériennes. Elle peut également aider à améliorer la digestion, à stimuler le métabolisme et à réduire l'appétit. Cependant, il est important de noter que certaines personnes peuvent être sensibles au piment rouge et peuvent ressentir des effets indésirables tels que brûlures d'estomac ou irritation de la peau. En résumé, le piment rouge est une épice extrêmement épicée utilisée pour ajouter de la chaleur et du piquant aux plats. Il a un goût vif et épicé, avec un arôme distinctif. Il présente également des propriétés bénéfiques pour la santé, mais doit être consommé avec précaution en raison de sa forte intensité.",
  },
  {
    id: 30,
    imgUrl: imgPimentVert,
    name: "PIMENT VERT PILIPILI",
    Goût: "Chaleur légère sans brulure intense",
    Intensité: ["Doux"],
    Texture: ["entière", "poudre"],
    Origine_géographique: "Madagascar",
    Composition_nutritionnelle: ["vitamines A et C, antioxydants"],
    Grammage: [
      {
        unite: "en vrac (1-5 kg)",
      },
      {
        liste: [5, 10, 17, 20, 30, 40, 60, 100],
      },
    ],
    Description:
      "Le piment vert, également connu sous le nom de piment doux ou piment doux, est une variété de piment qui est récoltée avant qu'elle ne mûrisse complè de saveur. Certains piments verts peuvent avoir une légère amertume. Le piment vert a une texture semblable à celle d'un poivron. Sa couleur varie du vert clair au vert foncé, en fonction de la variété et du stade de maturation. Le piment vert est largement utilisé dans de nombreuses cuisines pour ajouter de la saveur et de la couleur aux plats. Il est souvent utilisé dans les salsas, les sauces, les currys, les sautés, les garnitures de salade et les plats frits. Il peut être consommé cru, grillé, mariné ou cuit. Le piment vert peut stimuler le système immunitaire, favoriser la digestion et aider à maintenir une bonne santé oculaire. Cependant, certaines personnes peuvent être sensibles aux piments et peuvent ressentir des irritations gastro-intestinales. En résumé, le piment vert est une variété de piment moins épicée et plus douce en saveur. Il offre une légère touche de chaleur avec une texture croquante. Il est utilisé dans de nombreuses préparations culinaires pour ajouter de la saveur et de la couleur. Il présente également des propriétés bénéfiques pour la santé, mais peut affecter certaines personnes sensibles.",
  },
  {
    id: 31,
    imgUrl: imgPimentTsilandimy,
    name: "PIMENT TSILANDIMILAHY ENTIER",
    Goût: "très épicé et piquant, niveau de chaleur élevé",
    Intensité: ["Intense"],
    Origine_géographique: "Madagascar",
    Composition_nutritionnelle: [
      "capsaïcine, anti-inflammatoires et antioxydantes",
    ],
    Grammage: [
      [
        {
          unite: "en vrac (1-5 kg)",
        },
        {
          liste: [],
        },
      ],
    ],
    Description:
      "Le piment Tsilanindimilahy est une variété de piment originaire de Madagascar. Le piment Tsilanindimilahy est relativement petit, mesurant environ 5 centimètres de longueur. Il a une forme allongée et légèrement courbée. À maturité, le piment Tsilanindimilahy présente une couleur rouge vif. Cependant, il peut également être récolté à un stade moins mûr, présentant alors une teinte verte. Ce piment est largement utilisé dans la cuisine malgache pour ajouter de la chaleur et du, les currys, les de viande. Le piment Tsilanindimilahy peut également aider à stimuler le métabolisme et à soulager les douleurs musculaires. En résumé, le piment Tsilanindimilahy est une variété de piment originaire de Madagascar, connue pour son goût intense et piquant. Il est utilisé dans la cuisine malgache pour ajouter de la chaleur aux plats. Il présente également des propriétés bénéfiques pour la santé grâce à sa teneur en capsaïcine.",
  },
  {
    id: 32,
    imgUrl: imgPoivreBlanc,
    name: "POIVRE BLANC",
    Goût: "Poivre noir avec des notes légèrement boisées",
    Texture: ["Grains", "poudre"],
    Origine_géographique: "Madagascar",
    Grammage: [
      {
        unite: "en vrac (1-5 kg)",
      },
      {
        liste: [25, 29, 30, 42, 50, 100, 120, 200],
      },
    ],
    Description:
      "Le poivre blanc est une variété de poivre qui provient des baies mûres du poivrier.  Contrairement au poivre noir, le poivre blanc est obtenu à partir de baies mûres qui ont été débarrassées de leur enveloppe externe. Il a donc une couleur blanche ou crème. Le poivre blanc est finement moulu, ce qui lui confère une texture plus lisse et moins granuleuse que le poivre noir. Le poivre blanc est souvent utilisé dans les plats l'on souhaite éviter les taches noires, comme les sauces blanches, les soupes, les plats à base de poisson ou de volaille, ainsi que les plats à base de légumes. Le poivre blanc contient des composés bénéfiques pour la santé, tels que des antioxydants et des propriétés anti-inflammatoires. Il peut également aider à stimuler la digestion et à favoriser la santé intestinale. En résumé, le poivre blanc est une variété de poivre qui a une couleur blanche, un goût doux et une texture lisse. Il est utilisé dans divers plats, en particulier ceux où l'on souhaite éviter les taches noires. Il présente également des propriétés bénéfiques pour la santé.",
  },
  {
    id: 33,
    imgUrl: imgPoivreNoir,
    name: "POIVRE NOIR",
    Goût: "Fort, piquant et légèrement chaud",
    Intensité: ["Intense"],
    Parfum: ["Epicé"],
    Texture: ["grains", "poudre", "concassée"],
    Origine_géographique: "Madagascar",
    Grammage: [
      {
        unite: "en vrac (1-5 kg)",
      },
      {
        liste: [20, 25, 30, 37, 44, 48, 100, 120, 200],
      },
    ],
    Description:
      "Le poivre noir est une variété de poivre qui provient des baies séchées et non mûres du poivrier. Le poivre noir est généralement moulu en petits grains, ce qui lui confère une texture granuleuse. Le poivre noir est utilisé dans de nombreux plats et recettes du monde entier. Il ajoute de la saveur et de la chaleur aux sauces, aux viandes, aux légumes, aux soupes et aux marinades. Le poivre noir contient des composés bénéfiques pour la santé, tels que des antioxydants et des propriétés anti-inflammatoires. Il peut également favoriser la digestion et stimuler le métabolisme. En résumé, le poivre noir est une variété de poivre avec une couleur noire, un goût fort et piquant, ainsi qu'une texture granuleuse. Il est utilisé dans de nombreuses cuisines du monde entier et présente également des propriétés bénéfiques pour la santé.",
  },
  {
    id: 34,
    imgUrl: imgVoatsiperiferyNoir,
    name: "VOATSIPERIFERY NOIR",
    Goût: "Unique avec des notes d'agrumes, de bois et d'épices",
    Parfum: ["intense", "complexe"],
    Origine_géographique: "Madagascar",
    Grammage: [
      {
        unite: "en vrac (1-5 kg)",
      },
      {
        liste: [26, 40, 100, 200],
      },
    ],
    Description:
      "Le voatsiperifery noir de Madagascar est une variété spécifique de poivre noir qui provient de la région forestière de Madagascar. Le voatsiperifery noir est cultivé uniquement à Madagascar, dans les forêts tropicales de l'île. Il est récolté à la main et est considéré comme l'un des poivres les plus rares et les plus précieux au monde. Les grains de voatsiperifery noir sont généralement petits et ont une couleur brun foncé à noire. Ils sont souvent irréguliers et légèrement allongés. Le voatsiperifery noir est utilisé pour rehausser la saveur des plats, en particulier les viandes, les légumes et les plats de fruits de mer. Il ajoute une touche exotique et parfumée aux recettes. Comme les autres variétés de poivre noir, le voatsiperifery noir contient des antioxydants et des propriétés anti-inflammatoires. Il peut également aider à stimuler la digestion et à favoriser le métabolisme.En résumé, le voatsiperifery noir de Madagascar est une variété rare et précieuse de poivre noir. Il offre un goût unique et un arôme intense, et est utilisé pour rehausser la saveur des plats dans de nombreuses cuisines. Il présente également des propriétés bénéfiques pour la santé.",
  },
  {
    id: 35,
    imgUrl: imgVoatsiperiferyRouge,
    name: "VOATSIPERIFERY ROUGE",
    Goût: "complexe, épicée et boisée, avec des notes légèrement sucrées, Il possède également une légère touche citronnée.",
    Intensité: ["Modérément piquante", "sans être trop forte"],
    Parfum: [
      "Puissant et intense",
      "libérant des parfums aromatiques et exotiques rappelant la forêt tropicale",
    ],
    Origine_géographique: "Madagascar",
    Composition_nutritionnelle: ["vitamines", "minéraux", "antioxydants"],
    Grammage: [
      {
        unite: "en vrac (1-5 kg)",
      },
      {
        liste: [26, 27, 45, 70, 200],
      },
    ],
    Description:
      "Le voatsiperifery rouge est une variété de poivre originaire de Madagascar. Il est exclusivement cultivé à Madagascar, notamment dans les régions tropicales et humides de l'île. Il se présente sous la forme de petites baies rouges, d'environ 4 à 5 millimètres de diamètre. Les baies sont récoltées à maturité, ce qui leur confère leur couleur rouge vif. Le voatsiperifery rouge est apprécié pour sa saveur unique et est utilisé principalement comme condiment. Il peut être utilisé pour assaisonner les viandes, les poissons, les légumes et les sauces. Le voatsiperifery rouge est considéré comme l'un des poivres les plus rares et les plus précieux au monde en raison de son origine limitée à Madagascar et de sa récolte manuelle fastidieuse. Il convient de noter que la disponibilité du voatsiperifery rouge peut varier en fonction des saisons et de l'offre sur le marché.",
  },
  {
    id: 36,
    imgUrl: imgVoatsiperiferyBlanc,
    name: "VOATSIPERIFERY BLANC",
    Goût: "Unique et complexe ayant des notes chaudes et boisées, avec des nuances d'agrumes et de fleurs.",
    Intensité: ["Légère chaleur qui se développe lentement sur la langue"],
    Parfum: ["Intense et aromatique", " arômes floraux et fruités"],
    Origine_géographique: "Madagascar",
    Grammage: [
      {
        unite: "en vrac (1-5 kg)",
      },
      {
        liste: [30, 52, 70, 250],
      },
    ],
    Description:
      "Le voatsiperifery blanc est une variété rare et précieuse de poivre originaire de Madagascar. Il pousse exclusivement dans les forêts tropicales de Madagascar. Les baies de voatsiperifery blanc sont petites, mesurant généralement moins de 5 millimètres de diamètre. Elles ont une forme irrégulière et une couleur blanche ou crème. Les baies de voatsiperifery blanc sont récoltées à la main à maturité. Contrairement à d'autres types de poivre, elles ne sont pas séchées mais utilisées fraîches ou légèrement fermentées pour préserver leur saveur délicate. Le voatsiperifery blanc est très apprécié par les chefs cuisiniers du monde entier en raison de sa saveur exquise.Il est souvent utilisé pour rehausser les plats de viande, de volaille, de fruits de mer, de légumes et même de desserts. Le voatsiperifery blanc est considéré comme l'un des poivres les plus rares et les plus chers au monde en raison de sa rareté, de sa saveur unique et de son processus de récolte laborieux. Il convient de noter que le voatsiperifery blanc peut être difficile à trouver en dehors de Madagascar, mais il est possible de l'acheter en ligne ou dans certains magasins spécialisés.",
  },
  {
    id: 37,
    imgUrl: imgVanille,
    name: "VANILLE",
    Parfum: ["Doux", "sucré", "légèrement floral"],
    Texture: ["gousse", "poudre"],
    Origine_géographique: "Madagascar",
    Grammage: [
      {
        unite: "en vrac (1-5 kg)",
      },
      {
        liste: [20, 35, 50],
      },
    ],
    Description:
      "La vanille est une épice dérivée des gousses séchées de certaines espèces d'orchidées. Elle est originaire principalement du Mexique, mais elle est également cultivée dans d'autres régions tropicales telles que Madagascar, la Réunion et Tahiti. Elle nécessite un climat chaud et humide pour pousser. La vanille est largement utilisée comme arôme dans les produits alimentaires. Elle est couramment utilisée dans les desserts tels que les crèmes glacées, les pâtisseries, les boissons chaudes et les sauces sucrées. Elle peut également être utilisée dans certains plats salés pour ajouter une touche d'arôme subtil. La vanille contient des antioxydants et des composés anti-inflammatoires. Elle a également été étudiée pour ses propriétés analgésiques, antidépressives et relaxantes. Cependant, il est important de noter que ces effets potentiels sur la santé sont principalement basés sur des études préliminaires et plus de recherches sont nécessaires pour confirmer ces résultats. En résumé, la vanille est une épice précieuse avec un arôme doux et sucré. Elle est largement utilisée dans la cuisine pour parfumer les desserts et les boissons chaudes. La vanille contient également des antioxydants et peut avoir certaines propriétés bénéfiques pour la santé.",
  },
  {
    id: 38,
    imgUrl: "",
    name: "MORINGA",
    Texture: ["poudre"],
    Origine_géographique: "Madagascar",
    Composition_nutritionnelle: [
      "vitamines (A, C, E), minéraux (calcium, fer, potassium), protéines.",
    ],
    Grammage: [
      {
        unite: "en vrac (1-5 kg)",
      },
      {
        liste: [],
      },
    ],
    Description:
      "Leinga est un arbre originaire d'Inde, mais il pousse également dans d'autres régions tropicales. Le moringa est utilisé dans la médecine traditionnelle pour traiter divers problèmes de santé. Il est réputé pour ses propriétés anti-inflammatoires, antioxydantes, antibactériennes et antifongiques. Certaines études suggèrent qu'il peut aider à réduire le cholestérol, à réguler la glycémie et à renforcer le système immunitaire. Les feuilles, les fleurs et les graines du moringa sont comestibles. Les feuilles peuvent être consommées crues, cuites ou sous forme de poudre. Les graines peuvent être utilisées pour extraire une huile riche en nutriments. Le moringa est également utilisé dans la préparation de thé, de soupes, de salades et de smoothies. Le moringa est une plante résistante qui peut pousser dans des sols pauvres et dans des conditions climatiques difficiles. Il peut également être cultivé toute l'année. En raison de sa valeur nutritive et de sa capacité à s'adapter à des environnements divers, le moringa est considéré comme une culture durable et bénéfique pour l'environnement. En résumé, le moringa est un arbre à haute valeur nutritionnelle qui possède des propriétés médicinales bénéfiques pour la santé. Il peut être utilisé dans la cuisine pour enrichir les plats en vitamines et minéraux. De plus, sa capacité à pousser dans des conditions difficiles en fait une culture durable.",
  },
  {
    id: 39,
    imgUrl: "",
    name: "RIBAMBELLE D'EPICE",
    Grammage: [
      {
        unite: "",
      },
      {
        liste: [100],
      },
    ],
    Description: `Série de 10 épices en chapelet: 
        Voatsiperifery en poudre
        Cannelle en poudre 
        Poivre noir en poudre 
        Curcuma en poudre 
        Gingembre en poudre  
        Mélange 3 baies  
        Girofle en poudre  
        Voatsiperifery noir en grains 
        Cannelle en baton 
        Poivre noir en grains`,
  },
  {
    id: 40,
    imgUrl: imgPoivreNoir,
    name: "L'EPICE POIVRE NOIR",
    Grammage: [
      {
        unite: "",
      },
      {
        liste: [40],
      },
    ],
    Description: `Série de 5 épices en chapelet: 
        Poivre noir en grains 
        Voasiperifery blanc en grains 
        Mélange 3 baies 
        Poivre blanc en grains 
        Voasiperifery noir en grains `,
  },
  {
    id: 41,
    imgUrl: imgFleurDeSel,
    name: "L'EPICE FLEUR DE SEL",
    Grammage: [
      {
        unite: "",
      },
      {
        liste: [100],
      },
    ],
    Description: `Série de 5 fleurs de sel en chapelet: 
        Combava en poudre 
        Baie rose concassée 
        Voatsiperifery blanc 
        Vanille en poudre 
        Combava et gingembre en poudre`,
  },
  {
    id: 42,
    imgUrl: "",
    name: "L'EPICE AIL EN POUDRE",
    Grammage: [
      {
        unite: "",
      },
      {
        liste: [60],
      },
    ],
    Description: `Série de 5 épices en chapelet: 
        Ail en poudre 
        Combava en poudre 
        Piment rouge en poudre 
        Poivre noir moulu 
        Sel nature`,
  },
  {
    id: 43,
    imgUrl: "",
    name: "L'EPICE COMBAVA EN POUDRE",
    Grammage: [
      {
        unite: "",
      },
      {
        liste: [50],
      },
    ],
    Description: `Série de 5 épices en poudre en chapelet: 
        Combava en poudre 
        Voatsiperifery noir moulu 
        Curcuma en poudre 
        Gingembre en poudre 
        Poivre noir moulu`,
  },
];
