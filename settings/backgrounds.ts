import { BackgroundType, ItemType } from './types';
// import WestImage from '@assets/west.png';
// import TerrariaImage from '@assets/terraria.png';
// import JojoGb from '@assets/bg-1.jpg';
import lesBG0 from '@assets/lesBG0.jpg';
import carBG5 from '@assets/carBG5.jpg';
import carBG10 from '@assets/carBG10.jpg';
import carBG15 from '@assets/carBG15.jpg';
import carBG20 from '@assets/carBG20.jpg';
import carBG25 from '@assets/carBG25.jpg';
import carBG30 from '@assets/carBG30.jpg';
import carBG35 from '@assets/carBG35.jpg';

export const backgrounds: BackgroundType[] = [
    {
        id: 0,
        type: ItemType.background,
        image: lesBG0,
        name: ['Запад', 'West', 'Kuzey'],
        description: [
            'Диппер обладает острым умом и невероятной сообразительностью. Он всегда находит нестандартные решения для разгадки самых сложных загадок и тайн, с которыми сталкивается.\nНесмотря на свой юный возраст, Диппер проявляет невероятную смелость и решимость в самых опасных ситуациях. Он готов сразиться с любым вызовом, чтобы защитить своих друзей и семью.\nДиппер всегда стоит на стороне добра и справедливости. Он готов помочь тем, кто в беде, и верен своим друзьям и близким до конца.',
            'Dipper has a sharp mind and incredible intelligence. He always finds unconventional solutions to solve the most complex riddles and mysteries he encounters.\nDespite his young age, Dipper shows incredible courage and determination in the most dangerous situations. He is willing to fight any challenge to protect his friends and family.\nDipper always stands on the side of goodness and justice. He is ready to help those in need and is loyal to his friends and family to the end',
            "Dipper'ın keskin bir zihni ve inanılmaz bir zekası vardır. Karşılaştığı en zor bilmeceleri ve gizemleri çözmek için her zaman alışılmadık çözümler bulur.\nGenç yaşına rağmen Dipper en tehlikeli durumlarda inanılmaz bir cesaret ve kararlılık gösterir. Arkadaşlarını ve ailesini korumak için her türlü zorlukla mücadele etmeye hazırdır.\nDipper her zaman iyiliğin ve adaletin yanında durur. Başı dertte olanlara yardım etmeye hazırdır ve arkadaşlarına ve ailesine sonuna kadar sadıktır",
        ],
        price: 0,
        coinsPerSecondBonus: 1.2,
        luckyBonusX5: 0.05,
        damageBonus: 0.05,
    },
    {
        id: 5,
        type: ItemType.background,
        image: carBG5,
        name: ['Террария', 'Terraria', 'Terraria'],
        description: [
            'Диппер обладает острым умом и невероятной сообразительностью. Он всегда находит нестандартные решения для разгадки самых сложных загадок и тайн, с которыми сталкивается.\nНесмотря на свой юный возраст, Диппер проявляет невероятную смелость и решимость в самых опасных ситуациях. Он готов сразиться с любым вызовом, чтобы защитить своих друзей и семью.\nДиппер всегда стоит на стороне добра и справедливости. Он готов помочь тем, кто в беде, и верен своим друзьям и близким до конца.',
            'Dipper has a sharp mind and incredible intelligence. He always finds unconventional solutions to solve the most complex riddles and mysteries he encounters.\nDespite his young age, Dipper shows incredible courage and determination in the most dangerous situations. He is willing to fight any challenge to protect his friends and family.\nDipper always stands on the side of goodness and justice. He is ready to help those in need and is loyal to his friends and family to the end',
            "Dipper'ın keskin bir zihni ve inanılmaz bir zekası vardır. Karşılaştığı en zor bilmeceleri ve gizemleri çözmek için her zaman alışılmadık çözümler bulur.\nGenç yaşına rağmen Dipper en tehlikeli durumlarda inanılmaz bir cesaret ve kararlılık gösterir. Arkadaşlarını ve ailesini korumak için her türlü zorlukla mücadele etmeye hazırdır.\nDipper her zaman iyiliğin ve adaletin yanında durur. Başı dertte olanlara yardım etmeye hazırdır ve arkadaşlarına ve ailesine sonuna kadar sadıktır",
        ],
        price: 100,

        coinsPerSecondBonus: 1.2,
        luckyBonusX5: 0.05,
        damageBonus: 0.05,
    },
    {
        id: 10,
        type: ItemType.background,
        image: carBG10,
        name: ['Джо Джо ref', 'West', 'Kuzey'],
        description: [
            'Диппер обладает острым умом и невероятной сообразительностью. Он всегда находит нестандартные решения для разгадки самых сложных загадок и тайн, с которыми сталкивается.\nНесмотря на свой юный возраст, Диппер проявляет невероятную смелость и решимость в самых опасных ситуациях. Он готов сразиться с любым вызовом, чтобы защитить своих друзей и семью.\nДиппер всегда стоит на стороне добра и справедливости. Он готов помочь тем, кто в беде, и верен своим друзьям и близким до конца.',
            'Dipper has a sharp mind and incredible intelligence. He always finds unconventional solutions to solve the most complex riddles and mysteries he encounters.\nDespite his young age, Dipper shows incredible courage and determination in the most dangerous situations. He is willing to fight any challenge to protect his friends and family.\nDipper always stands on the side of goodness and justice. He is ready to help those in need and is loyal to his friends and family to the end',
            "Dipper'ın keskin bir zihni ve inanılmaz bir zekası vardır. Karşılaştığı en zor bilmeceleri ve gizemleri çözmek için her zaman alışılmadık çözümler bulur.\nGenç yaşına rağmen Dipper en tehlikeli durumlarda inanılmaz bir cesaret ve kararlılık gösterir. Arkadaşlarını ve ailesini korumak için her türlü zorlukla mücadele etmeye hazırdır.\nDipper her zaman iyiliğin ve adaletin yanında durur. Başı dertte olanlara yardım etmeye hazırdır ve arkadaşlarına ve ailesine sonuna kadar sadıktır",
        ],
        price: 100,

        coinsPerSecondBonus: 1.2,
        luckyBonusX5: 0.05,
        damageBonus: 0.05,
    },
    {
        id: 15,
        type: ItemType.background,
        image: carBG15,
        name: ['Джо Джо ref', 'West', 'Kuzey'],
        description: [
            'Диппер обладает острым умом и невероятной сообразительностью. Он всегда находит нестандартные решения для разгадки самых сложных загадок и тайн, с которыми сталкивается.\nНесмотря на свой юный возраст, Диппер проявляет невероятную смелость и решимость в самых опасных ситуациях. Он готов сразиться с любым вызовом, чтобы защитить своих друзей и семью.\nДиппер всегда стоит на стороне добра и справедливости. Он готов помочь тем, кто в беде, и верен своим друзьям и близким до конца.',
            'Dipper has a sharp mind and incredible intelligence. He always finds unconventional solutions to solve the most complex riddles and mysteries he encounters.\nDespite his young age, Dipper shows incredible courage and determination in the most dangerous situations. He is willing to fight any challenge to protect his friends and family.\nDipper always stands on the side of goodness and justice. He is ready to help those in need and is loyal to his friends and family to the end',
            "Dipper'ın keskin bir zihni ve inanılmaz bir zekası vardır. Karşılaştığı en zor bilmeceleri ve gizemleri çözmek için her zaman alışılmadık çözümler bulur.\nGenç yaşına rağmen Dipper en tehlikeli durumlarda inanılmaz bir cesaret ve kararlılık gösterir. Arkadaşlarını ve ailesini korumak için her türlü zorlukla mücadele etmeye hazırdır.\nDipper her zaman iyiliğin ve adaletin yanında durur. Başı dertte olanlara yardım etmeye hazırdır ve arkadaşlarına ve ailesine sonuna kadar sadıktır",
        ],
        price: 100,

        coinsPerSecondBonus: 1.2,
        luckyBonusX5: 0.05,
        damageBonus: 0.05,
    },
    {
        id: 20,
        type: ItemType.background,
        image: carBG20,
        name: ['Джо Джо ref', 'West', 'Kuzey'],
        description: [
            'Диппер обладает острым умом и невероятной сообразительностью. Он всегда находит нестандартные решения для разгадки самых сложных загадок и тайн, с которыми сталкивается.\nНесмотря на свой юный возраст, Диппер проявляет невероятную смелость и решимость в самых опасных ситуациях. Он готов сразиться с любым вызовом, чтобы защитить своих друзей и семью.\nДиппер всегда стоит на стороне добра и справедливости. Он готов помочь тем, кто в беде, и верен своим друзьям и близким до конца.',
            'Dipper has a sharp mind and incredible intelligence. He always finds unconventional solutions to solve the most complex riddles and mysteries he encounters.\nDespite his young age, Dipper shows incredible courage and determination in the most dangerous situations. He is willing to fight any challenge to protect his friends and family.\nDipper always stands on the side of goodness and justice. He is ready to help those in need and is loyal to his friends and family to the end',
            "Dipper'ın keskin bir zihni ve inanılmaz bir zekası vardır. Karşılaştığı en zor bilmeceleri ve gizemleri çözmek için her zaman alışılmadık çözümler bulur.\nGenç yaşına rağmen Dipper en tehlikeli durumlarda inanılmaz bir cesaret ve kararlılık gösterir. Arkadaşlarını ve ailesini korumak için her türlü zorlukla mücadele etmeye hazırdır.\nDipper her zaman iyiliğin ve adaletin yanında durur. Başı dertte olanlara yardım etmeye hazırdır ve arkadaşlarına ve ailesine sonuna kadar sadıktır",
        ],
        price: 100,

        coinsPerSecondBonus: 1.2,
        luckyBonusX5: 0.05,
        damageBonus: 0.05,
    },
    {
        id: 25,
        type: ItemType.background,
        image: carBG25,
        name: ['Джо Джо ref', 'West', 'Kuzey'],
        description: [
            'Диппер обладает острым умом и невероятной сообразительностью. Он всегда находит нестандартные решения для разгадки самых сложных загадок и тайн, с которыми сталкивается.\nНесмотря на свой юный возраст, Диппер проявляет невероятную смелость и решимость в самых опасных ситуациях. Он готов сразиться с любым вызовом, чтобы защитить своих друзей и семью.\nДиппер всегда стоит на стороне добра и справедливости. Он готов помочь тем, кто в беде, и верен своим друзьям и близким до конца.',
            'Dipper has a sharp mind and incredible intelligence. He always finds unconventional solutions to solve the most complex riddles and mysteries he encounters.\nDespite his young age, Dipper shows incredible courage and determination in the most dangerous situations. He is willing to fight any challenge to protect his friends and family.\nDipper always stands on the side of goodness and justice. He is ready to help those in need and is loyal to his friends and family to the end',
            "Dipper'ın keskin bir zihni ve inanılmaz bir zekası vardır. Karşılaştığı en zor bilmeceleri ve gizemleri çözmek için her zaman alışılmadık çözümler bulur.\nGenç yaşına rağmen Dipper en tehlikeli durumlarda inanılmaz bir cesaret ve kararlılık gösterir. Arkadaşlarını ve ailesini korumak için her türlü zorlukla mücadele etmeye hazırdır.\nDipper her zaman iyiliğin ve adaletin yanında durur. Başı dertte olanlara yardım etmeye hazırdır ve arkadaşlarına ve ailesine sonuna kadar sadıktır",
        ],
        price: 100,

        coinsPerSecondBonus: 1.2,
        luckyBonusX5: 0.05,
        damageBonus: 0.05,
    },
    {
        id: 30,
        type: ItemType.background,
        image: carBG30,
        name: ['Джо Джо ref', 'West', 'Kuzey'],
        description: [
            'Диппер обладает острым умом и невероятной сообразительностью. Он всегда находит нестандартные решения для разгадки самых сложных загадок и тайн, с которыми сталкивается.\nНесмотря на свой юный возраст, Диппер проявляет невероятную смелость и решимость в самых опасных ситуациях. Он готов сразиться с любым вызовом, чтобы защитить своих друзей и семью.\nДиппер всегда стоит на стороне добра и справедливости. Он готов помочь тем, кто в беде, и верен своим друзьям и близким до конца.',
            'Dipper has a sharp mind and incredible intelligence. He always finds unconventional solutions to solve the most complex riddles and mysteries he encounters.\nDespite his young age, Dipper shows incredible courage and determination in the most dangerous situations. He is willing to fight any challenge to protect his friends and family.\nDipper always stands on the side of goodness and justice. He is ready to help those in need and is loyal to his friends and family to the end',
            "Dipper'ın keskin bir zihni ve inanılmaz bir zekası vardır. Karşılaştığı en zor bilmeceleri ve gizemleri çözmek için her zaman alışılmadık çözümler bulur.\nGenç yaşına rağmen Dipper en tehlikeli durumlarda inanılmaz bir cesaret ve kararlılık gösterir. Arkadaşlarını ve ailesini korumak için her türlü zorlukla mücadele etmeye hazırdır.\nDipper her zaman iyiliğin ve adaletin yanında durur. Başı dertte olanlara yardım etmeye hazırdır ve arkadaşlarına ve ailesine sonuna kadar sadıktır",
        ],
        price: 100,

        coinsPerSecondBonus: 1.2,
        luckyBonusX5: 0.05,
        damageBonus: 0.05,
    },
    {
        id: 35,
        type: ItemType.background,
        image: carBG35,
        name: ['Джо Джо ref', 'West', 'Kuzey'],
        description: [
            'Диппер обладает острым умом и невероятной сообразительностью. Он всегда находит нестандартные решения для разгадки самых сложных загадок и тайн, с которыми сталкивается.\nНесмотря на свой юный возраст, Диппер проявляет невероятную смелость и решимость в самых опасных ситуациях. Он готов сразиться с любым вызовом, чтобы защитить своих друзей и семью.\nДиппер всегда стоит на стороне добра и справедливости. Он готов помочь тем, кто в беде, и верен своим друзьям и близким до конца.',
            'Dipper has a sharp mind and incredible intelligence. He always finds unconventional solutions to solve the most complex riddles and mysteries he encounters.\nDespite his young age, Dipper shows incredible courage and determination in the most dangerous situations. He is willing to fight any challenge to protect his friends and family.\nDipper always stands on the side of goodness and justice. He is ready to help those in need and is loyal to his friends and family to the end',
            "Dipper'ın keskin bir zihni ve inanılmaz bir zekası vardır. Karşılaştığı en zor bilmeceleri ve gizemleri çözmek için her zaman alışılmadık çözümler bulur.\nGenç yaşına rağmen Dipper en tehlikeli durumlarda inanılmaz bir cesaret ve kararlılık gösterir. Arkadaşlarını ve ailesini korumak için her türlü zorlukla mücadele etmeye hazırdır.\nDipper her zaman iyiliğin ve adaletin yanında durur. Başı dertte olanlara yardım etmeye hazırdır ve arkadaşlarına ve ailesine sonuna kadar sadıktır",
        ],
        price: 100,

        coinsPerSecondBonus: 1.2,
        luckyBonusX5: 0.05,
        damageBonus: 0.05,
    },
];
