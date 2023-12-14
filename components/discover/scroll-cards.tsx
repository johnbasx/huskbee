import { BOOKING_BASE_URL } from "@constants/api-urls";
import { FaFire } from "react-icons/fa";
import { GiRoundStar } from "react-icons/gi";
import Image from "next/image";
import Link from "next/link";
import Moment from "react-moment";
import { upcomingEvents } from "@store/index";

export type HEventCardProps = {
	imageSrc: string;
	pill?: string;
	title: string;
	link: string;
	about: string;
	date: string;
	star?: boolean;
	managedBy?: string;
};

const ScrollCards = () => {
	const { events } = upcomingEvents();

	const BookButton = ({ link }: { link: string }) => (
		<Link href={link} className="w-full">
			<button
				type="button"
				className="flex justify-center text-center text-lg bg-purple-600 hover:bg-purple-700 w-full transition duration-200 border-purple-500 border rounded-lg py-1 px-3 font-bold"
			>
				Book Now
			</button>
		</Link>
	);

	const Card = ({
		imageSrc,
		pill,
		title,
		link,
		about,
		date,
		star = false,
		managedBy,
	}: HEventCardProps) => {
		const dateToFormat = new Date(date);
		return imageSrc ? (
			title ? (
				<div className="flex-none w-4/5 sm:w-1/4 mr-4 pb-2 border border-zinc-500/20 rounded-3xl overflow-hidden bg-zinc-900/30 relative">
					<div className="flex flex-col h-full relative">
						{pill && (
							<div className="absolute pointer-events-none right-2 top-2 bg-pink-600 rounded-md inline-flex text-3xs font-bold px-2 py-1 space-x-1 shadow-lg border border-pink-400/50">
								<span className="">{pill}</span>
								<FaFire className="text-yellow-400 h-3 w-3" />
							</div>
						)}
						<a href="#!" className="space-y-2">
							<div className="flex-1">
								<Image
									className="w-full aspect-video object-cover shadow-md hover:shadow-xl rounded-t-3xl"
									src={imageSrc}
									alt="Scroll Cards"
									width={100}
									height={100}
								/>
							</div>
							<div className="px-4 py-2 space-y-3">
								<div className="flex justify-between items-baseline text-ellipsis overflow-hidden">
									<h3 className="font-bold w-4/5 truncate text-slate-100 text-xl">
										{title}
									</h3>
									{star && <GiRoundStar className="h-4 w-4 text-yellow-400" />}
								</div>
								<div className="grid grid-cols-2 space-x-2">
									{managedBy && (
										<div className="">
											<p className="text-xs text-gray-400">Organized by</p>
											<p className="text-sm text-ellipsis line-clamp-1 text-zinc-200">
												{managedBy}
											</p>
										</div>
									)}
									<div>
										<p className="text-xs text-gray-400">Date</p>
										<p className="text-sm text-ellipsis line-clamp-1 text-zinc-200">
											<Moment date={dateToFormat} />
										</p>
									</div>
								</div>

								<div className="text-xs overflow-hidden h-10">
									<p className="text-ellipsis line-clamp-2">{about}</p>
								</div>

								<div className="flex justify-between space-x-2 items-center">
									<BookButton link={link} />
								</div>
							</div>
						</a>
					</div>
				</div>
			) : null
		) : null;
	};

	const MoreCard = () => (
		<div className="flex-none grid grid-cols-1 content-center w-4/5 mr-4 pb-2 rounded-3xl overflow-hidden relative">
			<div className="border flex flex-col h-full rounded-3xl border-zinc-500/20 bg-zinc-900/30 relative">
				<a href="#!" className="space-y-2">
					<div className="flex-1">
						<p>more</p>
					</div>
				</a>
			</div>
		</div>
	);

	return (
		<div className="">
			<div
				id="scrollContainer"
				className="flex flex-no-wrap overflow-visible overflow-x-scroll hide-scroll-bar scrolling-touch items-start"
			>
				{events?.map((event) => (
					<Card
						key={event.id}
						imageSrc={event.hero_image}
						title={event.name}
						date={event.start_date}
						about={event.description}
						link={`/event-detail/${event.id}`}
						pill="Hot"
						managedBy="NOS Groups"
						star
					/>
				))}
				{/* <Card
          imageSrc="https://images.unsplash.com/photo-1522158637959-30385a09e0da?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGV2ZW50fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
          title="Chand Nigthou's Soulful voice is coming"
          date="30 Nov, 2022"
          about="Chand Ningthou at his best concert yet. Event organized by NOS Groups."
          link="#!"
          pill="Upcoming"
          managedBy="Foxbeta Pvt. Ltd."
          star
        />
        <Card
          imageSrc="https://images.unsplash.com/photo-1569930784237-ea65a2f40a83?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjh8fGV2ZW50fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
          title="Esgou - Grand Opening"
          date="12 Dec, 2022"
          about="Ready to use Tailwind CSS Portfolio Components, copy-paste HTML components code, and build your awesome website, dashboard, landing page, and more."
          link="#!"
          pill="Trending"
          managedBy="Meraki Unagi Private Limited"
          star
        /> */}
				<MoreCard />
			</div>
		</div>
	);
};

export default ScrollCards;
