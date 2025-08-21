import type { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonVariants = "primary" | "outline" | "secondary" | "success" | "danger";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    variant?: ButtonVariants;
    fullWidth?: boolean;
    isLoading?: boolean;
}

const Button = ({
    children,
    variant = "primary",
    fullWidth = false,
    isLoading = false,
    className,
    disabled,
    ...rest
}: ButtonProps) => {
    return (
        <div>
            <button type="button">Clique aqui</button>
        </div>
    );
};

export default Button;