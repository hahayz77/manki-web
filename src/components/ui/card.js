const Card = ({ children, ...props }) => {
    return <div {...props}>{children}</div>;
  };
  
  const CardHeader = ({ children, ...props }) => <div {...props}>{children}</div>;
  const CardContent = ({ children, ...props }) => <div {...props}>{children}</div>;
  const CardTitle = ({ children, ...props }) => <div {...props}>{children}</div>;
  const CardDescription = ({ children, ...props }) => <div {...props}>{children}</div>;
  
  export { Card, CardHeader, CardContent, CardTitle, CardDescription };