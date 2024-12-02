// eslint-disable-next-line react/prop-types
export  default function Card  ({ children, className }){
    return <div className={`bg-white rounded-lg shadow-md overflow-hidden ${className}`}>
      {children}
    </div>
};

