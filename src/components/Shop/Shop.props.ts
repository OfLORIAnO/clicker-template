export interface ShopProps extends React.HTMLAttributes<HTMLDivElement> {
    className?: string;
    setIsShopOpen: (value: boolean) => void;
    isShopOpen: boolean;
}
