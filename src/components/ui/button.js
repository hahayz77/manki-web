import { Button as NextUIButton } from "@heroui/react";

const Button = ({ children, ...props }) => {
    return (
        <NextUIButton {...props}>
            {children}
        </NextUIButton>
    );
};

export { Button };
