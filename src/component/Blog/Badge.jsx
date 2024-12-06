// eslint-disable-next-line react/prop-types
export default function Badge({tag,className=""}) {  
  const { name, bg, textColor } = tag;
  return (
    <span
    key={name}
    className="px-3 py-1 text-sm rounded-full font-medium"
    style={{ backgroundColor: bg, color: textColor }}
    >
      {name}
    </span>
  )
}
