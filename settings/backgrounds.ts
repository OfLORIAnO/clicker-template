import { BackgroundType, ItemType } from './types';
import BGles0 from '@assets/BGles0.jpg';
import BGles5 from '@assets/BGles5.jpg';
import BGles10 from '@assets/BGles10.jpg';
import BGles15 from '@assets/BGles15.jpg';
import BGles20 from '@assets/BGles20.jpg';
import BGles25 from '@assets/BGles25.jpg';
import BGles30 from '@assets/BGles30.jpg';
import BGles35 from '@assets/BGles35.jpg';
import BGles40 from '@assets/BGles40.jpg';
import BGles45 from '@assets/BGles45.jpg';
import BGles50 from '@assets/BGles50.jpg';
import BGles55 from '@assets/BGles55.jpg';

export const backgrounds: BackgroundType[] = [
    {
        id: 0,
        type: ItemType.background,
        image: BGles0,
        name: ['Утренний лес', 'Morning forest', 'Sabah ormanı'],
        description: [
            'Утренний лес приветствует вас своим тихим шепотом и прохладой. Лучи утреннего солнца проникают сквозь густую зелень, создавая игру света и тени на земле. В воздухе витает аромат свежести и жизни.',
            'The morning forest greets you with its quiet whispers and coolness. Sunlight filters through the dense foliage, creating a play of light and shadow on the ground. The air is filled with the scent of freshness and life.',
            "Sabah ormanı, sessiz fısıltıları ve serinliğiyle sizi karşılıyor. Güneş ışığı yoğun yeşillikler arasından süzülerek yerde ışık ve gölge oyunu oluşturuyor. Havada tazelik ve yaşam kokusu hakim.",
        ],
        price: 0,
        damageBonus: 0, // ? Процент в десятичной дроби
        luckyBonusX5: 0, // ? Процент в десятичной дроби (шанс получить Х5)
        coinsPerSecondBonus: 1, // ? Множитель от текущего
    },
    {
        id: 5,
        type: ItemType.background,
        image: BGles5,
        name: ['Дупло', 'The hollow', 'Boşluk'],
        description: [
            'Дупло в старом дубе выглядит как приглашение в скрытый мир. Его темная глубина создаёт уют и защищает от внешнего мира. По утрам из дупла доносится тихий шорох лесных обитателей, а на закате он наполняется мягким светом, создавая волшебную атмосферу.',
            'The hollow in the old oak looks like an invitation to a hidden world. Its dark depths provide coziness and protection from the outside world. In the mornings, soft rustling sounds from within the hollow can be heard, and at sunset, it fills with gentle light, creating a magical atmosphere.',
            "Eski meşede bulunan boşluk, gizli bir dünyaya davet gibi görünüyor. Koyu derinlikleri dış dünyadan korunma ve sıcaklık sağlıyor. Sabahları boşluktan gelen yumuşak hışırtıları duyulurken, gün batımında hafif ışıkla dolup sihirli bir atmosfer oluşturuyor.",
        ],
        price: 500,
        damageBonus: 0.05,
        luckyBonusX5: 0.001,
        coinsPerSecondBonus: 1.1,
    },
    {
        id: 10,
        type: ItemType.background,
        image: BGles10,
        name: ['Нора кролика', 'Rabbit hole', 'Tavşan deliği'],
        description: [
            'Нора кролика скрыта среди густых зарослей и выглядит как неприметный холмик с порталом в подземный мир. Её вход украшен мягкими пушистыми клочками мха. Внутри норы царит уют и тепло, где кролик чувствует себя в безопасности.',
            'The rabbit burrow is hidden among thick bushes and resembles an inconspicuous mound with a portal to the underground world. Its entrance is adorned with soft fluffy patches of moss. Inside the burrow, there is a sense of coziness and warmth, where the rabbit feels safe and secure.',
            "Tavşan yuvası, kalın çalılıklar arasında gizlenmiş ve yeraltı dünyasına bir portalı andırıyor. Girişi yumuşak tüylü yosun parçalarıyla süslenmiş. Yuva içinde, tavşanın kendini güvende hissettiği bir sıcaklık ve rahatlık hakim.",
        ],
        price: 1000,
        damageBonus: 0.08,
        luckyBonusX5: 0.002,
        coinsPerSecondBonus: 1.2,
    },
    {
        id: 15,
        type: ItemType.background,
        image: BGles15,
        name: ['Летний густой лес', 'Summer dense forest', 'Yaz yoğun ormanı'],
        description: [
            'Летний густой лес пропитан запахом смолы и земли. Каждый шаг сопровождается треском веток под ногами и глухим журчанием потоков, скрытых где-то в глубине. Лучи солнца проникают сквозь густую листву, создавая мозаику света и тени на земле.',
            'The dense summer forest is imbued with the scent of resin and earth. Every step is accompanied by the crackling of twigs underfoot and the muted murmuring of streams hidden somewhere in the depths. Sunbeams penetrate through the thick foliage, creating a mosaic of light and shadow on the ground.',
            "Yoğun yaz ormanı reçine ve toprak kokusuyla dolu. Her adım, ayak altında çıt çıtlayan dalların ve derinliklerde gizlenmiş pınarların hafif mırıltılarıyla eşlik ediyor. Güneş ışınları yoğun yapraklar arasından sızarak yerde ışık ve gölge mozaikleri oluşturuyor.",
        ],
        price: 2000,
        damageBonus: 0.12,
        luckyBonusX5: 0.003,
        coinsPerSecondBonus: 1.3,
    },
    {
        id: 20,
        type: ItemType.background,
        image: BGles20,
        name: ['Плотина бобра', 'Beaver dam', 'Kunduz Barajı'],
        description: [
            'Плотина бобра пересекает ручей, создавая маленькое водохранилище среди леса. Её деревянные брёвна блестят на солнце, а вода шумит, преодолевая преграды. Вокруг плотины видны следы активности бобров и многообразие растительности, привлекая внимание разнообразной жизни в этом уникальном уголке природы.',
            'The beaver dam crosses a stream, creating a small reservoir amidst the forest. Its wooden logs glisten in the sunlight, while the water murmurs as it overcomes obstacles. Around the dam, traces of beaver activity and a variety of vegetation attract attention to the diverse life in this unique corner of nature.',
            "Kunduz barajı bir dereyi geçerek ormanın içinde küçük bir su birikintisi oluşturur. Tahta kütükler güneşte parıldarken, su engelleri aşarken mırıldanır. Barajın etrafında, kunduz etkinliğine ve çeşitli bitki örtüsüne dikkat çeken izler bulunur.",
        ],
        price: 4000,
        damageBonus: 0.15,
        luckyBonusX5: 0.004,
        coinsPerSecondBonus: 1.4,
    },
    {
        id: 25,
        type: ItemType.background,
        image: BGles25,
        name: ['Ветки дерева, освещённые полной луной', 'Tree branches illuminated by the full moon', 'Dolunayla aydınlatılan ağaç dalları'],
        description: [
            'Ветки дерева, освещённые полной луной, выглядят как черные силуэты на серебристом фоне ночного неба. Тени играют на земле, создавая загадочные узоры. В это время лес наполнен магией и таинственностью, словно приглашая к древним тайнам и загадкам.',
            'Tree branches illuminated by the full moon appear as black silhouettes against the silvery backdrop of the night sky. Shadows play on the ground, creating mysterious patterns. At this time, the forest is filled with magic and mystery, as if inviting exploration of ancient secrets and riddles.',
            "Dolunay tarafından aydınlatılan ağaç dalları, gece gökyüzünün gümüş arka planına karşı siyah siluetler gibi görünür. Gölgeler, gizemli desenler oluşturarak yerde oynar. Bu zamanlarda, orman sihir ve gizemle doludur, sanki eski sırları ve bilmeceyi keşfetmeye davet eder.",
        ],
        price: 8000,
        damageBonus: 0.18,
        luckyBonusX5: 0.005,
        coinsPerSecondBonus: 1.5,
    },
    {
        id: 30,
        type: ItemType.background,
        image: BGles30,
        name: ['Открытый зимний лес', 'Open winter forest', 'Açık Kış Ormanı'],
        description: [
            'Открытый зимний лес представляет собой белоснежное пространство, где каждое дерево украшено легким слоем снега. Воздух пронизан свежестью, а мягкий шуршащий звук снега под ногами создаёт ощущение покоя и спокойствия. Вдалеке виднеются следы животных, которые также наслаждаются зимним утром в лесу.',
            'The open winter forest presents a white expanse where each tree is adorned with a light layer of snow. The air is permeated with freshness, and the soft crunching sound of snow underfoot creates a sense of peace and tranquility. In the distance, traces of animals can be seen, also enjoying the winter morning in the forest.',
            "Açık kış ormanı, her ağacın hafif karla süslendiği beyaz bir alan sunar. Hava tazelikle dolar, ayak altında karın hafif çıtırtısı huzur ve sükûnet hissi uyandırır. Uzakta, hayvan izleri de gözlemlenebilir, onlar da ormandaki kış sabahının tadını çıkarırlar.",
        ],
        price: 16000,
        damageBonus: 0.21,
        luckyBonusX5: 0.006,
        coinsPerSecondBonus: 1.6,
    },
    {
        id: 35,
        type: ItemType.background,
        image: BGles35,
        name: ['Густой зимний лес', 'Dense winter forest', 'Yoğun kış ormanı'],
        description: [
            'Зимний лес густой и загадочный, словно скрытый за вуалью тайны. Плотный снежный покров создаёт ощущение уединения и неприступности. Солнечные лучи проникают сквозь ветви, раскрашивая снежные холмы в разные оттенки белого и голубого.',
            'The dense winter forest is mysterious and enigmatic, as if hidden behind a veil of secrecy. The thick blanket of snow creates a feeling of seclusion and impregnability. Sunbeams penetrate through the branches, painting the snowy hills in various shades of white and blue.',
            "Yoğun kış ormanı gizemli ve esrarengizdir, sanki bir gizlilik perdesinin ardında gizlenmiştir. Kalın kar örtüsü, bir mahremiyet ve dayanıklılık hissi oluşturur. Güneş ışınları dallar arasından sızar, karlı tepeleri farklı beyaz ve mavi tonlarla boyar.",
        ],
        price: 32000,
        damageBonus: 0.24,
        luckyBonusX5: 0.007,
        coinsPerSecondBonus: 1.7,
    },
    {
        id: 40,
        type: ItemType.background,
        image: BGles40,
        name: ['Дуб в зимнем лесу', 'An oak tree in the winter forest', 'Kış ormanındaki meşe'],
        description: [
            'Дуб в зимнем лесу стоит могучим стражем, его голые ветви выступают на фоне яркого зимнего неба. Вокруг дуба видны следы животных, которые нашли в нём свой дом и источник пищи. Несмотря на суровость зимы, дуб испускает ауру силы и стойкости.',
            'The oak in the winter forest stands as a mighty guardian, its bare branches protruding against the bright winter sky. Around the oak, traces of animals can be seen, which have found their home and source of food in it. Despite the harshness of winter, the oak emits an aura of strength and resilience.',
            "Kış ormanındaki meşe, kuvvetli bir koruyucu gibi durur, çıplak dalları parlak kış gökyüzüne karşı belirir. Meşe etrafında, onun ev ve yiyecek kaynağını bulmuş olan hayvan izleri görülür. Kışın sertliğine rağmen, meşe güç ve direnişin bir atmosferi yayar.",
        ],
        price: 64000,
        damageBonus: 0.27,
        luckyBonusX5: 0.008,
        coinsPerSecondBonus: 1.8,
    },
    {
        id: 45,
        type: ItemType.background,
        image: BGles45,
        name: ['Густой осенний лес', 'Dense autumn forest', 'Yoğun sonbahar ormanı'],
        description: [
            'Густой осенний лес кажется ожившим ковром из разноцветных листьев. Воздух пропитан запахом увядших листьев и земли. Шумят деревья, сотрясая своими ветвями, словно прощаясь с уходящим летом и готовясь к зимнему покою.',
            'The dense autumn forest resembles a living carpet of colorful leaves. The air is filled with the scent of fallen leaves and earth. The trees rustle, shaking their branches, as if bidding farewell to the departing summer and preparing for winter rest.',
            "Yoğun sonbahar ormanı, renkli yaprakların yaşayan bir halısına benzer. Hava, dökülen yaprakların ve toprağın kokusuyla dolar. Ağaçlar, dallarını sallayarak, ayrılan yazı uğurlamak ve kış dinlenmesine hazırlanmak gibi bir hissiyat oluşturur.",
        ],
        price: 128000,
        damageBonus: 0.3,
        luckyBonusX5: 0.009,
        coinsPerSecondBonus: 1.9,
    },
    {
        id: 50,
        type: ItemType.background,
        image: BGles50,
        name: ['Утренний осенний лес', 'Morning autumn forest', 'Sabah sonbahar ormanı'],
        description: [
            'Осенний лес утром окутан туманом, словно завесой, размывающей контуры деревьев и создающей загадочную атмосферу. Утренний свет проникает сквозь пелену тумана, придавая окружающему миру мягкие и нежные оттенки. Листья падают с деревьев, словно медленный танец прощания с уходящим сезоном.',
            'The autumn forest in the morning is shrouded in mist, like a curtain blurring the outlines of trees and creating a mysterious atmosphere. Morning light filters through the veil of mist, giving the surrounding world soft and gentle shades. Leaves fall from the trees, like a slow dance bidding farewell to the departing season.',
            "Sonbahar ormanı sabahları sisle sarılır, ağaçların sınırlarını belirsizleştiren bir perde gibi. Sabah ışığı sis perdesinden süzülerek etrafındaki dünyaya yumuşak ve nazik tonlar kazandırır. Yapraklar ağaçlardan düşer, sanki mevsimin sona ermesine veda eden yavaş bir dans gibi.",
        ],
        price: 256000,
        damageBonus: 0.33,
        luckyBonusX5: 0.01,
        coinsPerSecondBonus: 2,
    },
    {
        id: 55,
        type: ItemType.background,
        image: BGles55,
        name: ['Весенний лес', 'Spring forest', 'İlkbahar ormanı'],
        description: [
            'Весенний лес приветствует своих посетителей морем зелени и цветов. Ветви деревьев украшены свежими почками, а под ногами расстилается цветущий ковёр из первоцветов и зелёной травы. В воздухе витает аромат весенней свежести, а птицы заполняют лес своими пением, создавая мелодичный концерт природы.',
            'The spring forest welcomes its visitors with a sea of greenery and flowers. Tree branches are adorned with fresh buds, and beneath them lies a blooming carpet of wildflowers and green grass. The air is filled with the scent of spring freshness, and birds fill the forest with their songs, creating a melodious concert of nature.',
            "İlkbahar ormanı, ziyaretçilerini yeşillik ve çiçeklerle dolu bir denizle karşılıyor. Ağaç dalları taze tomurcuklarla süslenmiş, altında vahşi çiçekler ve yeşil çimenlerin çiçek açan bir halısı serilmiştir. Hava, ilkbahar tazeliği kokusuyla doludur ve kuşlar şarkılarıyla ormanı doldurarak doğanın melodik bir konseri oluştururlar.",
        ],
        price: 512000,
        damageBonus: 0.36,
        luckyBonusX5: 0.011,
        coinsPerSecondBonus: 2.1,
    },
];
