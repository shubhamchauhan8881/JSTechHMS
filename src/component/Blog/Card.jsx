
import Badge from "./Badge";
// eslint-disable-next-line react/prop-types
export  default function Card({props}) {
  
  // eslint-disable-next-line react/prop-types
  const { title, description, date, image, tags, href}  = props;

  return (
    <article key={title}>
    <a href={href} className="group grid md:grid-cols-3 gap-8">
      <div className="relative h-[200px] md:h-full w-full overflow-hidden rounded-2xl">
        <img
          src={image}
          alt={title}
          className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="md:col-span-2 flex flex-col justify-center space-y-4">
        <time className="text-lg text-blue-600">{date}</time>
        <div className="flex items-center gap-4">
          <h3 className="text-xl font-semibold flex-1">{title}</h3>
          <svg
            className="w-6 h-6 transition-transform duration-300 group-hover:translate-x-1"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
            />
          </svg>
        </div>
        <p className="text-gray-600 text-lg leading-relaxed">{description}</p>
        {tags && (
          <div className="flex gap-2">
            {tags.map((tag) => (
              <Badge key={tag.name} tag={tag} className={`bg-[${tag.bg}] text-[${tag.textColor}]`} />
            ))}
          </div>
        )}
      </div>
    </a>
  </article>
  )
}