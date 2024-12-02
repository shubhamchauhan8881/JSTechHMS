// eslint-disable-next-line react/prop-types
export default function Badge ({ children }) { 
    return <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
      {children}
    </span>
};