import { CharacterType, ItemType } from './types';
import les0 from '@assets/les0.png';
import les5 from '@assets/les5.png';
import les10 from '@assets/les10.png';
import les15 from '@assets/les15.png';
import les20 from '@assets/les20.png';
import les25 from '@assets/les25.png';
import les30 from '@assets/les30.png';
import les35 from '@assets/les35.png';
import les40 from '@assets/les40.png';
import les45 from '@assets/les45.png';
import les50 from '@assets/les50.png';
import les55 from '@assets/les55.png';


export const characters: CharacterType[] = [
    {
        id: 0,
        type: ItemType.character,
        image: les0,
        name: ['Мышь', 'Mouse', 'Fare'],
        description: [
            'Мышь - это маленькое и ловкое создание, которое всегда осторожно исследует окружающий мир в поисках пищи и убежища. Она обладает быстрыми реакциями и отличным чутьем, что помогает ей выживать в различных условиях. Хотя мыши могут казаться скромными, они обладают внутренней силой и смекалкой.',
            'A mouse is a small and agile creature that always carefully explores the world around it in search of food and shelter. It has quick reflexes and a keen sense of smell, which helps it survive in various conditions. Although mice may seem modest, they possess inner strength and resourcefulness.',
            "Fare, her zaman dikkatlice etrafa bakınarak yiyecek ve barınak arayan küçük ve çevik bir yaratıktır. Hızlı reflekslere ve keskin bir koku alma duyusuna sahiptir, bu da onun çeşitli koşullarda hayatta kalmasına yardımcı olur. Fareler mütevazı görünebilir, ancak içlerinde bir güç ve zeka vardır.",
        ],
        price: 0,
        damageBonus: 0, // ? Процент в десятичной дроби
        luckyBonusX5: 0, // ? Процент в десятичной дроби (шанс получить Х5)
        coinsPerSecondBonus: 1, // ? Множитель от текущего
    },
    {
        id: 5,
        type: ItemType.character,
        image: les5,
        name: ['Белка', 'Squirrel', 'Sincap'],
        description: [
            'Белка - это энергичное и ловкое создание, которое всегда полно энтузиазма и жизненной энергии. Она с удовольствием прыгает с ветки на ветку, собирая орехи и ягоды для будущей зимы. Белка символизирует активность и настойчивость в достижении своих целей.',
            'A squirrel is an energetic and agile creature that is always full of enthusiasm and life energy. It enjoys jumping from branch to branch, gathering nuts and berries for the upcoming winter. Squirrels symbolize activity and perseverance in achieving their goals.',
            "Sincap, her zaman enerji dolu ve yaşam enerjisiyle dolu olan çevik bir yaratıktır. Kışın geleceği için ceviz ve meyve toplamaktan hoşlanır. Sincaplar, hedeflerine ulaşma konusunda faaliyet ve kararlılığı sembolize eder.",
        ],
        price: 500,
        damageBonus: 0.005,
        luckyBonusX5: 0.001,
        coinsPerSecondBonus: 1.1,
    },
    {
        id: 10,
        type: ItemType.character,
        image: les10,
        name: ['Кролик', 'Rabbit', 'Tavşan'],
        description: [
            'Кролик - это пушистое и миленькое создание, которое предпочитает жить в норах и лесных полянах. Он известен своей скромностью и робостью, но при необходимости может быть быстрым и проворным. Кролик символизирует нежность и защиту своей семьи.',
            'A rabbit is a fluffy and cute creature that prefers to live in burrows and forest clearings. It is known for its modesty and shyness, but when necessary, it can be fast and agile. Rabbits symbolize tenderness and protection of their family.',
            "Tavşan, tüylü ve sevimli bir yaratıktır ve tünellerde ve orman açıklıklarında yaşamayı tercih eder. Alçakgönüllülüğü ve utangaçlığı ile bilinir, ancak gerektiğinde hızlı ve çeviktir. Tavşanlar, ailenin zarafetini ve korunmasını sembolize eder.",
        ],
        price: 1000,
        damageBonus: 0.008,
        luckyBonusX5: 0.002,
        coinsPerSecondBonus: 1.2,
    },
    {
        id: 15,
        type: ItemType.character,
        image: les15,
        name: ['Ёжик', 'Hedgehog', 'Kirpi'],
        description: [
            'Ёжик - это спокойное и оборонительное создание, которое предпочитает скрываться под кустами и в кустарниках. Он обладает острыми иглами, которые служат ему в качестве защиты от хищников. Ёжик символизирует осторожность и предусмотрительность в каждом действии.',
            'A hedgehog is a calm and defensive creature that prefers to hide under bushes and in shrubs. It has sharp spines that serve as protection against predators. Hedgehogs symbolize caution and foresight in every action.',
            "Kirpi, sakin ve savunmacı bir yaratıktır ve genellikle çalılar altında saklanmayı tercih eder. Tehditkarlara karşı koruma sağlayan keskin dikenlere sahiptir. Kirpiler, her eylemde dikkat ve öngörüyü sembolize eder.",
        ],
        price: 2000,
        damageBonus: 0.012,
        luckyBonusX5: 0.003,
        coinsPerSecondBonus: 1.3,
    },
    {
        id: 20,
        type: ItemType.character,
        image: les20,
        name: ['Бобёр', 'Beaver', 'Kunduz'],
        description: [
            'Бобёр - это крепкое и трудолюбивое создание, которое строит свои дома из дерева и веток. Он известен своими мощными зубами, которые позволяют ему обгладывать стволы деревьев. Бобёр символизирует семейное благополучие и трудолюбие.',
            'A beaver is a strong and hardworking creature that builds its homes from wood and branches. It is known for its powerful teeth, which allow it to gnaw through tree trunks. Beavers symbolize family well-being and diligence.',
            "Kunduz, evlerini odun ve dallardan inşa eden güçlü ve çalışkan bir yaratıktır. Ağaç gövdelerini kemirmesine izin veren güçlü dişlere sahiptir. Kunduzlar, aile refahını ve çalışkanlığı sembolize eder.",
        ],
        price: 4000,
        damageBonus: 0.015,
        luckyBonusX5: 0.004,
        coinsPerSecondBonus: 1.4,
    },
    {
        id: 25,
        type: ItemType.character,
        image: les25,
        name: ['Сова', 'Owl', 'Baykuş'],
        description: [
            'Сова - это таинственное и мудрое создание, которое активно охотится ночью, используя свои острые когти и превосходное зрение. Она символизирует мудрость и интуицию, всегда оставаясь бдительной и начеку.',
            'An owl is a mysterious and wise creature that actively hunts at night, using its sharp claws and excellent vision. It symbolizes wisdom and intuition, always remaining vigilant and alert.',
            "Baykuş, gizemli ve bilge bir yaratıktır ve genellikle gece avlanır, keskin pençelerini ve mükemmel görüşünü kullanır. Bilgelik ve sezgiyi sembolize eder, her zaman uyanık ve dikkatli kalır.",
        ],
        price: 8000,
        damageBonus: 0.018,
        luckyBonusX5: 0.005,
        coinsPerSecondBonus: 1.5,
    },
    {
        id: 30,
        type: ItemType.character,
        image: les30,
        name: ['Лиса', 'Fox', 'Tilki'],
        description: [
            'Лиса - это хитрое и ловкое создание, которое всегда идет своим путем, обходя препятствия и находя выход из любой ситуации. Она обладает острым умом и изящным обаянием, что помогает ей добиваться своих целей. Лиса символизирует хитрость и сообразительность.',
            'A fox is a cunning and agile creature that always follows its own path, avoiding obstacles and finding a way out of any situation. It has a sharp mind and graceful charm, which helps it achieve its goals. Foxes symbolize cunning and resourcefulness.',
            "Tilki, her zaman kendi yolunu izleyen kurnaz ve çevik bir yaratıktır, engellerden kaçınır ve her durumda bir çıkış yolu bulur. Keskin bir zihne ve zarif bir cazibeye sahiptir, bu da onun hedeflerine ulaşmasına yardımcı olur. Tilki, kurnazlık ve kaynaklılığı sembolize eder.",
        ],
        price: 16000,
        damageBonus: 0.021,
        luckyBonusX5: 0.006,
        coinsPerSecondBonus: 1.6,
    },
    {
        id: 35,
        type: ItemType.character,
        image: les35,
        name: ['Волк', 'Wolf', 'Kurt'],
        description: [
            'Волк - это сильное и дикое создание, которое живет в стае и обладает выдающимися охотничьими навыками. Он предан своей семье и готов защищать ее любой ценой. Волк символизирует силу и преданность.',
            'A wolf is a strong and wild creature that lives in packs and possesses outstanding hunting skills. It is loyal to its family and ready to defend it at any cost. Wolves symbolize strength and loyalty.',
            "Kurt, sürüler halinde yaşayan güçlü ve vahşi bir yaratıktır ve üstün av yeteneklerine sahiptir. Ailesine sadıktır ve onu her koşulda korumaya hazırdır. Kurtlar, gücü ve sadakati sembolize eder.",
        ],
        price: 32000,
        damageBonus: 0.024,
        luckyBonusX5: 0.007,
        coinsPerSecondBonus: 1.7,
    },
    {
        id: 40,
        type: ItemType.character,
        image: les40,
        name: ['Кабан', 'Wild boar', 'Yaban domuzu'],
        description: [
            'Кабан - это крупное и могучее создание, которое обитает в лесах и полях, питаясь корнями и плодами. Он известен своей боевитостью и агрессивностью, особенно во время защиты своей территории. Кабан символизирует силу и защиту своего пространства.',
            'A wild boar is a large and powerful creature that inhabits forests and fields, feeding on roots and fruits. It is known for its combativeness and aggression, especially when defending its territory. Wild boars symbolize strength and protection of their space.',
            "Yaban domuzu, ormanlarda ve tarlalarda yaşayan büyük ve güçlü bir yaratıktır, kökler ve meyvelerle beslenir. Saldırganlığı ve agresifliği ile tanınır, özellikle de kendi alanını savunurken. Domuzlar, gücü ve kendi alanlarını korumayı sembolize eder.",
        ],
        price: 64000,
        damageBonus: 0.027,
        luckyBonusX5: 0.008,
        coinsPerSecondBonus: 1.8,
    },
    {
        id: 45,
        type: ItemType.character,
        image: les45,
        name: ['Олень', 'Deer', 'Geyik'],
        description: [
            'Олень - это изящное и красивое создание, которое обитает в лесах и горных долинах. Он известен своими мощными рогами, которые использует в борьбе за самку и территорию. Олень символизирует грацию и природную красоту.',
            'A deer is an elegant and beautiful creature that lives in forests and mountain valleys. It is known for its powerful antlers, which it uses in battles for mates and territory. Deer symbolize grace and natural beauty.',
            "Geyik, ormanlarda ve dağ vadilerinde yaşayan zarif ve güzel bir yaratıktır. Boynuzlarıyla, eşler ve alanlar için savaşlarda kullanır. Geyikler, zarafeti ve doğal güzelliği sembolize eder.",
        ],
        price: 128000,
        damageBonus: 0.03,
        luckyBonusX5: 0.009,
        coinsPerSecondBonus: 1.9,
    },
    {
        id: 50,
        type: ItemType.character,
        image: les50,
        name: ['Лось', 'Elk', 'Geyik'],
        description: [
            'Лось - это массивное и могучее создание, которое обитает в северных лесах и болотистых районах. Он известен своей выносливостью и силой, особенно во время сезона размножения. Лось символизирует мужество и силу духа.',
            'An elk is a massive and mighty creature that lives in northern forests and marshy areas. It is known for its endurance and strength, especially during the mating season. Elks symbolize courage and strength of spirit.',
            "Geyik, kuzey ormanlarında ve bataklıklarda yaşayan iri ve güçlü bir yaratıktır. Dayanıklılığı ve ruh gücü ile bilinir, özellikle de çiftleşme mevsiminde. Saraylar, cesareti ve ruh gücünü sembolize eder.",
        ],
        price: 256000,
        damageBonus: 0.033,
        luckyBonusX5: 0.01,
        coinsPerSecondBonus: 2,
    },
    {
        id: 55,
        type: ItemType.character,
        image: les55,
        name: ['Медведь', 'Bear', 'Ayı'],
        description: [
            'Медведь - это крупное и мощное создание, которое обитает в лесах и горных районах. Он известен своей силой и храбростью, а также своим неповторимым шерстяным покровом. Медведь символизирует силу и мудрость в природном мире.',
            'A bear is a large and powerful creature that inhabits forests and mountain regions. It is known for its strength and courage, as well as its unique fur coat. Bears symbolize strength and wisdom in the natural world.',
            "Ayı, ormanlarda ve dağlık bölgelerde yaşayan büyük ve güçlü bir yaratıktır. Gücü ve cesaretiyle tanınır, ayrıca benzersiz kürk kapağıyla da. Ayılar, doğal dünyada gücü ve bilgeliği sembolize eder.",
        ],
        price: 512000,
        damageBonus: 0.036,
        luckyBonusX5: 0.011,
        coinsPerSecondBonus: 2.1,
    },
];
