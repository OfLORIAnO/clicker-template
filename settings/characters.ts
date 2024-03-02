import { CharacterType, ItemType } from './types';
import DipperImage from '@assets/dipper.png';
import Jojo from '@assets/jojo-1.png';
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
import car60 from '@assets/car60.png';
import car65 from '@assets/car65.png';
import car70 from '@assets/car70.png';

export const characters: CharacterType[] = [
    {
        id: 0,
        type: ItemType.character,
        image: les0,
        name: ['Лада Гранта', 'Lada Granta', 'Dipper'],
        description: [
            'Надежный и экономичный автомобиль для повседневных поездок. Гранта - символ простоты и функциональности, она никогда не подведет вас, обеспечивая комфорт и удовольствие от вождения на протяжении многих лет.',
            'A reliable and economical car for everyday trips. Granta is a symbol of simplicity and functionality, it will never let you down, providing comfort and driving pleasure for many years.',
            "Dipper'ın keskin bir zihni ve inanılmaz bir zekası vardır. Karşılaştığı en zor bilmeceleri ve gizemleri çözmek için her zaman alışılmadık çözümler bulur.\nGenç yaşına rağmen Dipper en tehlikeli durumlarda inanılmaz bir cesaret ve kararlılık gösterir. Arkadaşlarını ve ailesini korumak için her türlü zorlukla mücadele etmeye hazırdır.\nDipper her zaman iyiliğin ve adaletin yanında durur. Başı dertte olanlara yardım etmeye hazırdır ve arkadaşlarına ve ailesine sonuna kadar sadıktır",
        ],
        price: 0,
        damageBonus: 0, // ? Процент в десятичной дроби
        luckyBonusX5: 0.05, // ? Процент в десятичной дроби (шанс получить Х5)
        coinsPerSecondBonus: 1, // ? Множитель от текущего
    },
    {
        id: 5,
        type: ItemType.character,
        image: les5,
        name: ['Хёндай Солярис', 'Hyundai Solaris', 'Dipper'],
        description: [
            'Элегантный и стильный автомобиль с удивительной экономичностью и надежностью. Солярис - идеальный выбор для городской жизни, предлагая комфорт и передовые технологии по доступной цене.',
            'An elegant and stylish car with amazing efficiency and reliability. Solaris is the ideal choice for city life, offering comfort and advanced technology at an affordable price.',
            "Dipper'ın keskin bir zihni ve inanılmaz bir zekası vardır. Karşılaştığı en zor bilmeceleri ve gizemleri çözmek için her zaman alışılmadık çözümler bulur.\nGenç yaşına rağmen Dipper en tehlikeli durumlarda inanılmaz bir cesaret ve kararlılık gösterir. Arkadaşlarını ve ailesini korumak için her türlü zorlukla mücadele etmeye hazırdır.\nDipper her zaman iyiliğin ve adaletin yanında durur. Başı dertte olanlara yardım etmeye hazırdır ve arkadaşlarına ve ailesine sonuna kadar sadıktır",
        ],
        price: 500,
        damageBonus: 0.05,
        luckyBonusX5: 0.05,
        coinsPerSecondBonus: 1.2,
    },
    {
        id: 10,
        type: ItemType.character,
        image: les10,
        name: ['Рено Логан', 'Renault Logan', 'Dipper'],
        description: [
            'Просторный и функциональный автомобиль с привлекательным дизайном. Логан - это надежный спутник для семейных поездок и ежедневных деловых поездок, обеспечивая комфорт и безопасность на дороге.',
            'A spacious and functional car with an attractive design. Logan is a reliable companion for family trips and daily business trips, providing comfort and safety on the road.',
            "Dipper'ın keskin bir zihni ve inanılmaz bir zekası vardır. Karşılaştığı en zor bilmeceleri ve gizemleri çözmek için her zaman alışılmadık çözümler bulur.\nGenç yaşına rağmen Dipper en tehlikeli durumlarda inanılmaz bir cesaret ve kararlılık gösterir. Arkadaşlarını ve ailesini korumak için her türlü zorlukla mücadele etmeye hazırdır.\nDipper her zaman iyiliğin ve adaletin yanında durur. Başı dertte olanlara yardım etmeye hazırdır ve arkadaşlarına ve ailesine sonuna kadar sadıktır",
        ],
        price: 1500,
        damageBonus: 0.05,
        luckyBonusX5: 0.05,
        coinsPerSecondBonus: 1.2,
    },
    {
        id: 10,
        type: ItemType.character,
        image: les10,
        name: ['Рено Логан', 'Renault Logan', 'Dipper'],
        description: [
            'Просторный и функциональный автомобиль с привлекательным дизайном. Логан - это надежный спутник для семейных поездок и ежедневных деловых поездок, обеспечивая комфорт и безопасность на дороге.',
            'A spacious and functional car with an attractive design. Logan is a reliable companion for family trips and daily business trips, providing comfort and safety on the road.',
            "Dipper'ın keskin bir zihni ve inanılmaz bir zekası vardır. Karşılaştığı en zor bilmeceleri ve gizemleri çözmek için her zaman alışılmadık çözümler bulur.\nGenç yaşına rağmen Dipper en tehlikeli durumlarda inanılmaz bir cesaret ve kararlılık gösterir. Arkadaşlarını ve ailesini korumak için her türlü zorlukla mücadele etmeye hazırdır.\nDipper her zaman iyiliğin ve adaletin yanında durur. Başı dertte olanlara yardım etmeye hazırdır ve arkadaşlarına ve ailesine sonuna kadar sadıktır",
        ],
        price: 1500,
        damageBonus: 0.05,
        luckyBonusX5: 0.05,
        coinsPerSecondBonus: 1.2,
    },
    {
        id: 15,
        type: ItemType.character,
        image: les15,
        name: ['Фольксваген Поло', 'Volkswagen Polo', 'Dipper'],
        description: [
            'Изысканный и утонченный автомобиль с выдающейся динамикой и качеством исполнения. Поло - это сочетание немецкого мастерства и инновационных технологий, приносящих удовольствие от вождения в любой ситуации.',
            'A refined and sophisticated car with outstanding dynamics and workmanship. Polo is a combination of German craftsmanship and innovative technology that brings driving pleasure in any situation.',
            "Dipper'ın keskin bir zihni ve inanılmaz bir zekası vardır. Karşılaştığı en zor bilmeceleri ve gizemleri çözmek için her zaman alışılmadık çözümler bulur.\nGenç yaşına rağmen Dipper en tehlikeli durumlarda inanılmaz bir cesaret ve kararlılık gösterir. Arkadaşlarını ve ailesini korumak için her türlü zorlukla mücadele etmeye hazırdır.\nDipper her zaman iyiliğin ve adaletin yanında durur. Başı dertte olanlara yardım etmeye hazırdır ve arkadaşlarına ve ailesine sonuna kadar sadıktır",
        ],
        price: 1500,
        damageBonus: 0.05,
        luckyBonusX5: 0.05,
        coinsPerSecondBonus: 1.2,
    },
    {
        id: 20,
        type: ItemType.character,
        image: les20,
        name: ['Шкода Рапид', 'Skoda Rapid', 'Dipper'],
        description: [
            'Просторный и практичный автомобиль, сочетающий в себе функциональность и стиль. Рапид - это идеальный выбор для тех, кто ценит комфорт и надежность, не жертвуя при этом качеством.',
            'A spacious and practical car that combines functionality and style. Rapid is the ideal choice for those who value comfort and reliability without sacrificing quality.',
            "Dipper'ın keskin bir zihni ve inanılmaz bir zekası vardır. Karşılaştığı en zor bilmeceleri ve gizemleri çözmek için her zaman alışılmadık çözümler bulur.\nGenç yaşına rağmen Dipper en tehlikeli durumlarda inanılmaz bir cesaret ve kararlılık gösterir. Arkadaşlarını ve ailesini korumak için her türlü zorlukla mücadele etmeye hazırdır.\nDipper her zaman iyiliğin ve adaletin yanında durur. Başı dertte olanlara yardım etmeye hazırdır ve arkadaşlarına ve ailesine sonuna kadar sadıktır",
        ],
        price: 1500,
        damageBonus: 0.05,
        luckyBonusX5: 0.05,
        coinsPerSecondBonus: 1.2,
    },
    {
        id: 25,
        type: ItemType.character,
        image: les25,
        name: ['Дачия Сандеро', 'Dacia Sandero', 'Dipper'],
        description: [
            'Простой и надежный автомобиль, который предлагает отличное сочетание цены и качества. Сандеро - это практичный выбор для тех, кто ищет неприхотливый автомобиль для повседневных нужд.',
            'A simple and reliable car that offers an excellent combination of price and quality. Sandero is a practical choice for those looking for an unpretentious car for everyday needs.',
            "Dipper'ın keskin bir zihni ve inanılmaz bir zekası vardır. Karşılaştığı en zor bilmeceleri ve gizemleri çözmek için her zaman alışılmadık çözümler bulur.\nGenç yaşına rağmen Dipper en tehlikeli durumlarda inanılmaz bir cesaret ve kararlılık gösterir. Arkadaşlarını ve ailesini korumak için her türlü zorlukla mücadele etmeye hazırdır.\nDipper her zaman iyiliğin ve adaletin yanında durur. Başı dertte olanlara yardım etmeye hazırdır ve arkadaşlarına ve ailesine sonuna kadar sadıktır",
        ],
        price: 1500,
        damageBonus: 0.05,
        luckyBonusX5: 0.05,
        coinsPerSecondBonus: 1.2,
    },
    {
        id: 30,
        type: ItemType.character,
        image: les30,
        name: ['Киа Рио', 'Kia Rio', 'Dipper'],
        description: [
            'Стильный и динамичный автомобиль с современным дизайном и передовыми технологиями. Рио - это символ элегантности и комфорта, обеспечивающий плавное и уверенное вождение в городской суете.',
            'Dipper has a sharp mind and incredible intelligence. He always finds unconventional solutions to solve the most complex riddles and mysteries he encounters.\nDespite his young age, Dipper shows incredible courage and determination in the most dangerous situations. He is willing to fight any challenge to protect his friends and family.\nDipper always stands on the side of goodness and justice. He is ready to help those in need and is loyal to his friends and family to the end',
            "Dipper'ın keskin bir zihni ve inanılmaz bir zekası vardır. Karşılaştığı en zor bilmeceleri ve gizemleri çözmek için her zaman alışılmadık çözümler bulur.\nGenç yaşına rağmen Dipper en tehlikeli durumlarda inanılmaz bir cesaret ve kararlılık gösterir. Arkadaşlarını ve ailesini korumak için her türlü zorlukla mücadele etmeye hazırdır.\nDipper her zaman iyiliğin ve adaletin yanında durur. Başı dertte olanlara yardım etmeye hazırdır ve arkadaşlarına ve ailesine sonuna kadar sadıktır",
        ],
        price: 1500,
        damageBonus: 0.05,
        luckyBonusX5: 0.05,
        coinsPerSecondBonus: 1.2,
    },
    {
        id: 35,
        type: ItemType.character,
        image: les35,
        name: ['Тойота Королла', 'Toyota Corolla', 'Dipper'],
        description: [
            'Легендарный и надежный автомобиль, который сочетает в себе качество, надежность и инновационные технологии. Королла - это символ долговечности и комфорта, который оставляет неповторимые впечатления от каждой поездки.',
            'Dipper has a sharp mind and incredible intelligence. He always finds unconventional solutions to solve the most complex riddles and mysteries he encounters.\nDespite his young age, Dipper shows incredible courage and determination in the most dangerous situations. He is willing to fight any challenge to protect his friends and family.\nDipper always stands on the side of goodness and justice. He is ready to help those in need and is loyal to his friends and family to the end',
            "Dipper'ın keskin bir zihni ve inanılmaz bir zekası vardır. Karşılaştığı en zor bilmeceleri ve gizemleri çözmek için her zaman alışılmadık çözümler bulur.\nGenç yaşına rağmen Dipper en tehlikeli durumlarda inanılmaz bir cesaret ve kararlılık gösterir. Arkadaşlarını ve ailesini korumak için her türlü zorlukla mücadele etmeye hazırdır.\nDipper her zaman iyiliğin ve adaletin yanında durur. Başı dertte olanlara yardım etmeye hazırdır ve arkadaşlarına ve ailesine sonuna kadar sadıktır",
        ],
        price: 1500,
        damageBonus: 0.05,
        luckyBonusX5: 0.05,
        coinsPerSecondBonus: 1.2,
    },
    {
        id: 40,
        type: ItemType.character,
        image: les40,
        name: ['Форд Фокус', 'Ford Focus', 'Dipper'],
        description: [
            'Динамичный и спортивный автомобиль, предлагающий удовольствие от вождения и выдающиеся характеристики. Фокус - это идеальный выбор для тех, кто ценит стиль и производительность в одном пакете.',
            'Dipper has a sharp mind and incredible intelligence. He always finds unconventional solutions to solve the most complex riddles and mysteries he encounters.\nDespite his young age, Dipper shows incredible courage and determination in the most dangerous situations. He is willing to fight any challenge to protect his friends and family.\nDipper always stands on the side of goodness and justice. He is ready to help those in need and is loyal to his friends and family to the end',
            "Dipper'ın keskin bir zihni ve inanılmaz bir zekası vardır. Karşılaştığı en zor bilmeceleri ve gizemleri çözmek için her zaman alışılmadık çözümler bulur.\nGenç yaşına rağmen Dipper en tehlikeli durumlarda inanılmaz bir cesaret ve kararlılık gösterir. Arkadaşlarını ve ailesini korumak için her türlü zorlukla mücadele etmeye hazırdır.\nDipper her zaman iyiliğin ve adaletin yanında durur. Başı dertte olanlara yardım etmeye hazırdır ve arkadaşlarına ve ailesine sonuna kadar sadıktır",
        ],
        price: 1500,
        damageBonus: 0.05,
        luckyBonusX5: 0.05,
        coinsPerSecondBonus: 1.2,
    },
    {
        id: 45,
        type: ItemType.character,
        image: les45,
        name: ['Ниссан Кашкай', 'Nissan Qashqai', 'Dipper'],
        description: [
            'Стильный и универсальный кроссовер, который предлагает комфорт и простор в сочетании с передовыми технологиями. Кашкай - это партнер для приключений и повседневных деловых поездок, готовый к любым вызовам дороги.',
            'Dipper has a sharp mind and incredible intelligence. He always finds unconventional solutions to solve the most complex riddles and mysteries he encounters.\nDespite his young age, Dipper shows incredible courage and determination in the most dangerous situations. He is willing to fight any challenge to protect his friends and family.\nDipper always stands on the side of goodness and justice. He is ready to help those in need and is loyal to his friends and family to the end',
            "Dipper'ın keskin bir zihni ve inanılmaz bir zekası vardır. Karşılaştığı en zor bilmeceleri ve gizemleri çözmek için her zaman alışılmadık çözümler bulur.\nGenç yaşına rağmen Dipper en tehlikeli durumlarda inanılmaz bir cesaret ve kararlılık gösterir. Arkadaşlarını ve ailesini korumak için her türlü zorlukla mücadele etmeye hazırdır.\nDipper her zaman iyiliğin ve adaletin yanında durur. Başı dertte olanlara yardım etmeye hazırdır ve arkadaşlarına ve ailesine sonuna kadar sadıktır",
        ],
        price: 1500,
        damageBonus: 0.05,
        luckyBonusX5: 0.05,
        coinsPerSecondBonus: 1.2,
    },
    {
        id: 50,
        type: ItemType.character,
        image: les50,
        name: ['БМВ 3 серии', 'BMW 3 Series', 'Dipper'],
        description: [
            'Премиальный и роскошный автомобиль с выдающейся динамикой и элегантным дизайном. 3 серии - это символ престижа и изысканности, который приносит удовольствие от вождения на высшем уровне.',
            'Dipper has a sharp mind and incredible intelligence. He always finds unconventional solutions to solve the most complex riddles and mysteries he encounters.\nDespite his young age, Dipper shows incredible courage and determination in the most dangerous situations. He is willing to fight any challenge to protect his friends and family.\nDipper always stands on the side of goodness and justice. He is ready to help those in need and is loyal to his friends and family to the end',
            "Dipper'ın keskin bir zihni ve inanılmaz bir zekası vardır. Karşılaştığı en zor bilmeceleri ve gizemleri çözmek için her zaman alışılmadık çözümler bulur.\nGenç yaşına rağmen Dipper en tehlikeli durumlarda inanılmaz bir cesaret ve kararlılık gösterir. Arkadaşlarını ve ailesini korumak için her türlü zorlukla mücadele etmeye hazırdır.\nDipper her zaman iyiliğin ve adaletin yanında durur. Başı dertte olanlara yardım etmeye hazırdır ve arkadaşlarına ve ailesine sonuna kadar sadıktır",
        ],
        price: 1500,
        damageBonus: 0.05,
        luckyBonusX5: 0.05,
        coinsPerSecondBonus: 1.2,
    },
    {
        id: 55,
        type: ItemType.character,
        image: les55,
        name: ['Мерседес-Бенц Класс С', 'Mercedes-Benz C-Class', 'Dipper'],
        description: [
            'Элегантный и роскошный автомобиль, который предлагает исключительный комфорт и безопасность. Класс С - это воплощение роскоши и изысканности, которое делает каждую поездку незабываемой.',
            'Dipper has a sharp mind and incredible intelligence. He always finds unconventional solutions to solve the most complex riddles and mysteries he encounters.\nDespite his young age, Dipper shows incredible courage and determination in the most dangerous situations. He is willing to fight any challenge to protect his friends and family.\nDipper always stands on the side of goodness and justice. He is ready to help those in need and is loyal to his friends and family to the end',
            "Dipper'ın keskin bir zihni ve inanılmaz bir zekası vardır. Karşılaştığı en zor bilmeceleri ve gizemleri çözmek için her zaman alışılmadık çözümler bulur.\nGenç yaşına rağmen Dipper en tehlikeli durumlarda inanılmaz bir cesaret ve kararlılık gösterir. Arkadaşlarını ve ailesini korumak için her türlü zorlukla mücadele etmeye hazırdır.\nDipper her zaman iyiliğin ve adaletin yanında durur. Başı dertte olanlara yardım etmeye hazırdır ve arkadaşlarına ve ailesine sonuna kadar sadıktır",
        ],
        price: 1500,
        damageBonus: 0.05,
        luckyBonusX5: 0.05,
        coinsPerSecondBonus: 1.2,
    },
    {
        id: 60,
        type: ItemType.character,
        image: car60,
        name: ['Ауди А6', 'Audi A6', 'Dipper'],
        description: [
            'Утонченный и стильный автомобиль, который предлагает выдающиеся характеристики и передовые технологии. A6 - это символ инноваций и комфорта, который приносит удовольствие от вождения на новый уровень.',
            'Dipper has a sharp mind and incredible intelligence. He always finds unconventional solutions to solve the most complex riddles and mysteries he encounters.\nDespite his young age, Dipper shows incredible courage and determination in the most dangerous situations. He is willing to fight any challenge to protect his friends and family.\nDipper always stands on the side of goodness and justice. He is ready to help those in need and is loyal to his friends and family to the end',
            "Dipper'ın keskin bir zihni ve inanılmaz bir zekası vardır. Karşılaştığı en zor bilmeceleri ve gizemleri çözmek için her zaman alışılmadık çözümler bulur.\nGenç yaşına rağmen Dipper en tehlikeli durumlarda inanılmaz bir cesaret ve kararlılık gösterir. Arkadaşlarını ve ailesini korumak için her türlü zorlukla mücadele etmeye hazırdır.\nDipper her zaman iyiliğin ve adaletin yanında durur. Başı dertte olanlara yardım etmeye hazırdır ve arkadaşlarına ve ailesine sonuna kadar sadıktır",
        ],
        price: 1500,
        damageBonus: 0.05,
        luckyBonusX5: 0.05,
        coinsPerSecondBonus: 1.2,
    },
    {
        id: 65,
        type: ItemType.character,
        image: car65,
        name: ['Вольво ХС60', 'Volvo XC60', 'Dipper'],
        description: [
            'Безопасный и функциональный кроссовер, который предлагает высокий уровень комфорта и надежности. ХС60 - это сочетание шведского мастерства и современных технологий, которое делает каждую поездку спокойной и комфортной.',
            'Dipper has a sharp mind and incredible intelligence. He always finds unconventional solutions to solve the most complex riddles and mysteries he encounters.\nDespite his young age, Dipper shows incredible courage and determination in the most dangerous situations. He is willing to fight any challenge to protect his friends and family.\nDipper always stands on the side of goodness and justice. He is ready to help those in need and is loyal to his friends and family to the end',
            "Dipper'ın keskin bir zihni ve inanılmaz bir zekası vardır. Karşılaştığı en zor bilmeceleri ve gizemleri çözmek için her zaman alışılmadık çözümler bulur.\nGenç yaşına rağmen Dipper en tehlikeli durumlarda inanılmaz bir cesaret ve kararlılık gösterir. Arkadaşlarını ve ailesini korumak için her türlü zorlukla mücadele etmeye hazırdır.\nDipper her zaman iyiliğin ve adaletin yanında durur. Başı dertte olanlara yardım etmeye hazırdır ve arkadaşlarına ve ailesine sonuna kadar sadıktır",
        ],
        price: 1500,
        damageBonus: 0.05,
        luckyBonusX5: 0.05,
        coinsPerSecondBonus: 1.2,
    },
    {
        id: 70,
        type: ItemType.character,
        image: car70,
        name: ['Порше 911', 'Porsche 911', 'Dipper'],
        description: [
            'Легендарный и спортивный автомобиль, который предлагает выдающиеся характеристики и эмоциональное вождение. 911 - это символ страсти и мощи, который заставляет сердца бить быстрее.',
            'Dipper has a sharp mind and incredible intelligence. He always finds unconventional solutions to solve the most complex riddles and mysteries he encounters.\nDespite his young age, Dipper shows incredible courage and determination in the most dangerous situations. He is willing to fight any challenge to protect his friends and family.\nDipper always stands on the side of goodness and justice. He is ready to help those in need and is loyal to his friends and family to the end',
            "Dipper'ın keskin bir zihni ve inanılmaz bir zekası vardır. Karşılaştığı en zor bilmeceleri ve gizemleri çözmek için her zaman alışılmadık çözümler bulur.\nGenç yaşına rağmen Dipper en tehlikeli durumlarda inanılmaz bir cesaret ve kararlılık gösterir. Arkadaşlarını ve ailesini korumak için her türlü zorlukla mücadele etmeye hazırdır.\nDipper her zaman iyiliğin ve adaletin yanında durur. Başı dertte olanlara yardım etmeye hazırdır ve arkadaşlarına ve ailesine sonuna kadar sadıktır",
        ],
        price: 1500,
        damageBonus: 0.05,
        luckyBonusX5: 0.05,
        coinsPerSecondBonus: 1.2,
    },
];
