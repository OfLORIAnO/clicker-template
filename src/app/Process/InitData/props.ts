export interface IProps {
    children: React.ReactNode;
    setIsLoading: (value: boolean) => void;
    isLoading: boolean;
}
