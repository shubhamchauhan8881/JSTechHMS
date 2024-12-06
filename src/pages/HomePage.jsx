import C from "../component/C";
import Footer from "../component/Footer";
import Header from "../component/Header";

export default function HomePage() {
	return (
		<>
			<div className="hero min-h-screen rounded-3xl">
				<Header />

				<div className="flex items-stretch px-10">
					<div className="w-2/3">
						<h1 className="font-bold text-7xl leading-tight">
							Get the Best{" "}
							<span className="text-[#0064E6]">Medical</span>{" "}
							<br />{" "}
							<span className="text-[#0064E6]">Expertise</span>{" "}
							for Every Life
							<br /> Moment.
						</h1>

						<div className="max-w-[18.2rem] mt-2 ">
							<C />
						</div>
					</div>

					<div className="w-1/3">
						<div className="h-[30rem] w-full relative">
							<div className="absolute max-w-36 top-5 -left-20 bg-white rounded-xl p-2">
								<div className="flex justify-between items-center">
									<div className="flex">
										<div className="h-8 border border-white w-8 bg-blue-500 rounded-full"></div>
										<div className="h-8 border border-white relative -left-3 w-8 bg-red-500 rounded-full"></div>
										<div className="h-8 border border-white relative -left-6 w-8 bg-pink-500 rounded-full"></div>
									</div>
									<button className="bg-[#0064E6] text-white rounded-full h-8 w-8 flex items-center justify-center">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 24 24"
											strokeWidth={2}
											stroke="currentColor"
											className="size-5">
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
											/>
										</svg>
									</button>
								</div>
								<div className="mt-0.5">
									<h1 className="font-bold text-lg">
										Our Patients
									</h1>
									<p className="text-xs">
										About 20K+ patients have trusted us and
										shared what they felt during their
										consultation with us.
									</p>
								</div>
							</div>

							<div className="absolute max-w-60 -bottom-16 right-8 bg-white rounded-xl p-4">
								<h1 className="text-5xl font-bold">
									10<span className="text-[#0064E6]">+</span>
								</h1>
								<p className="mt-2 text-xs">
									We have experience with our doctors in
									providing health services for our patients.
								</p>
							</div>
							<img
								src="Image Holder.png"
								alt=""
								className="h-full w-full object-strech object-center"
							/>
						</div>
					</div>
				</div>
			</div>
			<section className="px-10">
				<div className="mt-40">
					<h2 className="text-[55px] font-semibold leading-tight">
						Your Health,{" "}
						<span className="text-myblue"> Our Priority</span>
					</h2>
					<p className="text-2xl">
						Exceptional Medical Services Tailored for You
					</p>
					<div className="flex  justify-evenly mt-12">
						<div className="pt-8 ps-8 pe-4 pb-4 flex flex-col gap-10  w-[22rem] h-[26rem] bg-[#BDD9FF] rounded-3xl relative">
							<div>
								<h4 className="text-3xl font-bold text-left">
									Instant Video Consultation
								</h4>
								<p className="text-sm mt-1 font-medium">
									Connect within 60 seconds.
								</p>
							</div>

							<div className="ms-auto grow overflow-hidden">
								<img
									src="/i9KYIumN 1.png"
									alt="Small Icon"
									className="h-full w-full object-contain"
								/>
							</div>

							<button className="absolute left-8 bottom-8 bg-black text-white rounded-full h-12 w-12 flex items-center justify-center">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									strokeWidth={2}
									stroke="currentColor"
									className="size-4">
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
									/>
								</svg>
							</button>
						</div>

						<div className="pt-8 ps-8 pe-4 pb-4 flex flex-col gap-2  w-[22rem] h-[26rem] bg-[#BDD9FF] rounded-3xl relative">
							<div>
								<h4 className="text-3xl font-bold text-left">
									Find The Doctors Near You.
								</h4>
								<p className="text-sm mt-1 font-medium">
									Confirmed Appointments.
								</p>
							</div>

							<div className="grow overflow-hidden ms-auto pt-8 p-4">
								<img
									src="/nurse.png"
									alt="Small Icon"
									className="h-full w-full object-contain"
								/>
							</div>

							<button className="absolute left-8 bottom-8 bg-black text-white rounded-full h-12 w-12 flex items-center justify-center">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									strokeWidth={2}
									stroke="currentColor"
									className="size-4">
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
									/>
								</svg>
							</button>
						</div>

						<div className="pt-8 ps-8 pe-4 pb-4 flex flex-col gap-10  w-[22rem] h-[26rem] bg-[#BDD9FF] rounded-3xl relative">
							<div>
								<h4 className="text-3xl font-bold text-left">
									24/7 <br />
									Medicine
								</h4>
								<p className="text-sm mt-1 font-medium">
									Essentials At Your Door Step.
								</p>
							</div>

							<div className="ms-auto grow overflow-hidden">
								<img
									src="/medicine-297778_1280 1.png"
									alt="Small Icon"
									className="h-full w-full object-contain"
								/>
							</div>

							<button className="absolute left-8 bottom-8 bg-black text-white rounded-full h-12 w-12 flex items-center justify-center">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									strokeWidth={2}
									stroke="currentColor"
									className="size-4">
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
									/>
								</svg>
							</button>
						</div>
					</div>
				</div>

				<div className="mt-20">
					<h2 className="text-2xl mb-6 uppercase font-semibold leading-tight">
						Why
						<span className="text-myblue"> Choose Us</span>
					</h2>
					<p className="text-5xl leading-tight font-semibold">
						<span className="text-myblue">
							Choose us for personalized care and advanced
							treatments delivered by experienced professionals.
						</span>
						s Your health and well-being are our top priority, every
						step of the way.
					</p>
				</div>

				<section className="bg-white py-12 px-6">
					<div className="container mx-auto flex flex-col lg:flex-row items-center gap-8">
						<div className="w-full lg:w-1/2">
							<div className="relative lg:w-1/2  mt-4 left-40 border-gray-800 shadow-2xl ">
								<img
									src="/Doc.jpg"
									alt="Doctor"
									className="w-170 h-170 object-cover rounded-lg shadow-lg"
								/>
								<div className="absolute bottom-0 mb-0  left-60   bg-blue-600 w-20 h-20 rounded-xl shadow-2xl"></div>
							</div>
						</div>

						<div className="w-full lg:w-1/2">
							<h3 className="text-lg font-semibold mb-2">
								Our Doctors
							</h3>

							<h2 className="text-3xl font-bold text-black-800 mb-4">
								Consultation with our <br />
								professional doctors
							</h2>
							<p className="text-gray-600 mb-6">
								Not to worry, our professional doctors are
								experienced in
								<br />
								treating and serving the needs of patients. We
								have doctors
								<br /> from various specialties, so our patients
								will be facilitated in curing all diseases.
							</p>

							<div className="flex flex-col sm:flex-row gap-6">
								<div>
									<h4 className="text-3xl font-bold text-gray-800">
										10{" "}
										<span className="text-blue-600 text-center">
											+
										</span>
										<span>years helping patients</span>
									</h4>

									<h4 className="text-3xl font-bold text-gray-800">
										100{" "}
										<span className="text-blue-600 text-center">
											k
										</span>
										<span>
											patients served successfully
										</span>
									</h4>
								</div>
							</div>
						</div>
					</div>
				</section>

				<section>
					<div className="py-16 px-6 bg-white  ">
						<div className="mb-10">
							<h1>
								Your{" "}
								<span className="text-blue-600">
									Experience
								</span>
								,
								<span className="text-blue-600">
									Our Commitment
								</span>
							</h1>
							<p>Exceptional Care Designed Around You</p>
						</div>
					</div>

					<div className="bg-gradient-to-r from-blue-200 via-blue-300 to-blue-500 rounded-lg shadow-lg p-8">
						<div className="flex flex-col lg:flex-row items-center justify-between">
							<div className="mb-6 lg:mb-0">
								<h2>
									What our patients <br />
									say about us
								</h2>
							</div>

							<div className="bg-white p-6 rounded-lg shadow-md w-full lg:w-1/2">
								<div className="flex items-center">
									<img
										src="./assets/Image.svg"
										alt="User"
										className="w-12 h-12 rounded-full mr-4"
									/>
									<div>
										<h3 className="text-lg font-bold text-gray-800">
											Synthia Maxwell
										</h3>
										<p className="text-sm text-gray-500">
											18 October
										</p>
									</div>
								</div>
								<p className="text-gray-600 mt-4">
									Loris Imus Loris Imus Loris Imus Loris Imus
									Loris Imus Loris Imus Loris Imus
								</p>
								<div className="flex items-center mt-4">
									<div className="flex space-x-1 text-yellow-400">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											className="h-5 w-5"
											fill="currentColor"
											viewBox="0 0 20 20">
											<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.187 3.67a1 1 0 00.95.69h3.862c.969 0 1.371 1.24.588 1.81l-3.126 2.293a1 1 0 00-.364 1.118l1.2 3.713c.3.928-.755 1.688-1.54 1.118l-3.173-2.329a1 1 0 00-1.175 0l-3.173 2.33c-.785.57-1.84-.19-1.54-1.119l1.2-3.712a1 1 0 00-.364-1.118L2.522 8.398c-.784-.57-.38-1.81.588-1.81h3.862a1 1 0 00.95-.69l1.187-3.67z" />
										</svg>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											className="h-5 w-5"
											fill="currentColor"
											viewBox="0 0 20 20">
											<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.187 3.67a1 1 0 00.95.69h3.862c.969 0 1.371 1.24.588 1.81l-3.126 2.293a1 1 0 00-.364 1.118l1.2 3.713c.3.928-.755 1.688-1.54 1.118l-3.173-2.329a1 1 0 00-1.175 0l-3.173 2.33c-.785.57-1.84-.19-1.54-1.119l1.2-3.712a1 1 0 00-.364-1.118L2.522 8.398c-.784-.57-.38-1.81.588-1.81h3.862a1 1 0 00.95-.69l1.187-3.67z" />
										</svg>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											className="h-5 w-5"
											fill="currentColor"
											viewBox="0 0 20 20">
											<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.187 3.67a1 1 0 00.95.69h3.862c.969 0 1.371 1.24.588 1.81l-3.126 2.293a1 1 0 00-.364 1.118l1.2 3.713c.3.928-.755 1.688-1.54 1.118l-3.173-2.329a1 1 0 00-1.175 0l-3.173 2.33c-.785.57-1.84-.19-1.54-1.119l1.2-3.712a1 1 0 00-.364-1.118L2.522 8.398c-.784-.57-.38-1.81.588-1.81h3.862a1 1 0 00.95-.69l1.187-3.67z" />
										</svg>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											className="h-5 w-5"
											fill="currentColor"
											viewBox="0 0 20 20">
											<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.187 3.67a1 1 0 00.95.69h3.862c.969 0 1.371 1.24.588 1.81l-3.126 2.293a1 1 0 00-.364 1.118l1.2 3.713c.3.928-.755 1.688-1.54 1.118l-3.173-2.329a1 1 0 00-1.175 0l-3.173 2.33c-.785.57-1.84-.19-1.54-1.119l1.2-3.712a1 1 0 00-.364-1.118L2.522 8.398c-.784-.57-.38-1.81.588-1.81h3.862a1 1 0 00.95-.69l1.187-3.67z" />
										</svg>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											className="h-5 w-5 text-gray-300"
											fill="currentColor"
											viewBox="0 0 20 20">
											<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.187 3.67a1 1 0 00.95.69h3.862c.969 0 1.371 1.24.588 1.81l-3.126 2.293a1 1 0 00-.364 1.118l1.2 3.713c.3.928-.755 1.688-1.54 1.118l-3.173-2.329a1 1 0 00-1.175 0l-3.173 2.33c-.785.57-1.84-.19-1.54-1.119l1.2-3.712a1 1 0 00-.364-1.118L2.522 8.398c-.784-.57-.38-1.81.588-1.81h3.862a1 1 0 00.95-.69l1.187-3.67z" />
										</svg>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
			</section>
			<Footer />
		</>
	);
}
