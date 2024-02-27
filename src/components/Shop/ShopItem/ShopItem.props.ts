import { ItemType } from '@settings/types';

export interface ShopItemProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    itemId: number;
    className?: string;
    itemType: ItemType;
    image: string;
    isSelected: boolean;
    isActive: boolean;
    isLocked?: boolean;
}
