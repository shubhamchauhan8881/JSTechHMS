import Badge from "./Badge";

export default function FeaturedCard({ props }){
    return (
    <article className="mb-12">
    <a href={props.href} className="group block">
      <div className="relative h-[300px] w-full mb-6 overflow-hidden rounded-2xl">
        <img
          src={props.image}
          alt={props.title}
          className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="space-y-4">
        <time className="text-lg text-blue-600">{props.date}</time>
        <div className="flex items-center gap-4">
          <h3 className="text-4xl font-semibold flex-1">{props.title}</h3>
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
        <p className="text-gray-600 text-xl leading-relaxed">{props.description}</p>
        { console.log(props.tags) }
        {
            props.tags && (
          <div className="flex gap-2">
            {props.tags.map((tag) => (
              <Badge key={tag.name} tag={tag} className={`bg-[${tag.bg}] text-[${tag.textColor}] `} />
            ))}
          </div>
        )}
      </div>
    </a>
  </article>)
}