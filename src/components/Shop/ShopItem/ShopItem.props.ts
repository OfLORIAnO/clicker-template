export interface ShopItemProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    itemId: number;
    className?: string;
    image: string;
    isSelected: boolean;
    isActive: boolean;
    isLocked?: boolean;
}
