import { BackgroundType, ItemType } from './types';
import WestImage from '@assets/west.png';
import TerrariaImage from '@assets/terraria.png';

export const backgrounds: BackgroundType[] = [
    {
        id: 0,
        type: ItemType.background,
        image: WestImage,
        name: ['Запад', 'West', 'Kuzey'],
        description: [
            'Диппер обладает острым умом и невероятной сообразительностью. Он всегда находит нестандартные решения для разгадки самых сложных загадок и тайн, с которыми сталкивается.\nНесмотря на свой юный возраст, Диппер проявляет невероятную смелость и решимость в самых опасных ситуациях. Он готов сразиться с любым вызовом, чтобы защитить своих друзей и семью.\nДиппер всегда стоит на стороне добра и справедливости. Он готов помочь тем, кто в беде, и верен своим друзьям и близким до конца.',
            'Dipper has a sharp mind and incredible intelligence. He always finds unconventional solutions to solve the most complex riddles and mysteries he encounters.\nDespite his young age, Dipper shows incredible courage and determination in the most dangerous situations. He is willing to fight any challenge to protect his friends and family.\nDipper always stands on the side of goodness and justice. He is ready to help those in need and is loyal to his friends and family to the end',
            "Dipper'ın keskin bir zihni ve inanılmaz bir zekası vardır. Karşılaştığı en zor bilmeceleri ve gizemleri çözmek için her zaman alışılmadık çözümler bulur.\nGenç yaşına rağmen Dipper en tehlikeli durumlarda inanılmaz bir cesaret ve kararlılık gösterir. Arkadaşlarını ve ailesini korumak için her türlü zorlukla mücadele etmeye hazırdır.\nDipper her zaman iyiliğin ve adaletin yanında durur. Başı dertte olanlara yardım etmeye hazırdır ve arkadaşlarına ve ailesine sonuna kadar sadıktır",
        ],
        price: 0,
    },
    {
        id: 5,
        type: ItemType.background,
        image: TerrariaImage,
        name: ['Террария', 'Terraria', 'Terraria'],
        description: [
            'Диппер обладает острым умом и невероятной сообразительностью. Он всегда находит нестандартные решения для разгадки самых сложных загадок и тайн, с которыми сталкивается.\nНесмотря на свой юный возраст, Диппер проявляет невероятную смелость и решимость в самых опасных ситуациях. Он готов сразиться с любым вызовом, чтобы защитить своих друзей и семью.\nДиппер всегда стоит на стороне добра и справедливости. Он готов помочь тем, кто в беде, и верен своим друзьям и близким до конца.',
            'Dipper has a sharp mind and incredible intelligence. He always finds unconventional solutions to solve the most complex riddles and mysteries he encounters.\nDespite his young age, Dipper shows incredible courage and determination in the most dangerous situations. He is willing to fight any challenge to protect his friends and family.\nDipper always stands on the side of goodness and justice. He is ready to help those in need and is loyal to his friends and family to the end',
            "Dipper'ın keskin bir zihni ve inanılmaz bir zekası vardır. Karşılaştığı en zor bilmeceleri ve gizemleri çözmek için her zaman alışılmadık çözümler bulur.\nGenç yaşına rağmen Dipper en tehlikeli durumlarda inanılmaz bir cesaret ve kararlılık gösterir. Arkadaşlarını ve ailesini korumak için her türlü zorlukla mücadele etmeye hazırdır.\nDipper her zaman iyiliğin ve adaletin yanında durur. Başı dertte olanlara yardım etmeye hazırdır ve arkadaşlarına ve ailesine sonuna kadar sadıktır",
        ],
        price: 100,
    },
];
