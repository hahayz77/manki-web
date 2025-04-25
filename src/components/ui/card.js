const Card = ({ children, ...props }) => {
    return <div {...props}>{children}</div>;
};

Card.Header = ({ children, ...props }) => <div {...props}>{children}</div>;
Card.Body = ({ children, ...props }) => <div {...props}>{children}</div>;
Card.Title = ({ children, ...props }) => <div {...props}>{children}</div>;
Card.Description = ({ children, ...props }) => <div {...props}>{children}</div>;

export { Card };
