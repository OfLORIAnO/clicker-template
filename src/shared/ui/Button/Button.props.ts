export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    className?: string;
    bordered?: boolean;
    viewDisabled?: boolean;
}
