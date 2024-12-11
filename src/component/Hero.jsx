import Header from "./Header";
export default function Hero({header_variant, children, bg = "./bg-dna.jpeg"}) {
	return (
		<div className=" min-h-svh rounded-3xl" style={{backgroundImage: bg}}>
			<Header variant={header_variant} />
			{children}
		</div>
	);
}
