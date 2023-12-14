import { GetDaysLeft, GetPercentage } from "@utils/index";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import Image, { ImageProps } from "next/image";
import {
	TbBrandWhatsapp,
	TbCalendarCheck,
	TbDevicesHeart,
	TbEmergencyBed,
	TbMoodHeart,
	TbPhone,
	TbPigMoney,
	TbTag,
	TbTrendingUp,
	TbUser,
	TbUserHeart,
	TbUserUp,
} from "react-icons/tb";

import { CROWDFUNDING_BASE_URL } from "@constants/api-urls";
import { FundraiserEventsProps } from "../../organiser/fundraiser-detail/[fundraiserId]";
import { IconType } from "react-icons";
import ImageScrollWithThumbnails from "@components/exocrowd-client/scroll/ImageScrollWithThumbnails";
import Layout from "@components/exocrowd-client/Layout";
import Link from "next/link";
import React from "react";
import { toIndianCurrency } from "@components/exocrowd-client/scroll/FundraiserCardScroll";

const temprary_phone = 919920512634;
const urgent = false;

const FundraiserDetailsPage = ({
	fundraiser_detail,
  }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
	console.log('DETAIL: ', fundraiser_detail);
	return (
		<Layout title="Exocrowd - fundraiser details page">
			<section className="bg-neutral-50 py-4 md:py-16 mx-auto max-w-7xl">
				{urgent && <UrgentFundraiserFlag />}
				<FundraiserTitle title={fundraiser_detail.title} />
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
					<div className="col-span-1 lg:col-span-2 px-4 md:pr-0">
						<ImageScrollWithThumbnails fundraisers_photos={fundraiser_detail.fundraiser_photo} />
						<div className="block md:hidden mt-4">
							<DonationDetailSideUpdates total_donation={fundraiser_detail.total_donation} target_amount={fundraiser_detail.target_amount} total_donors={fundraiser_detail.total_donors} end_date={fundraiser_detail.end_date} />
						</div>

						<FundraiserOrganiserTag
							organiser_name={fundraiser_detail.organiser_name}
							beneficiary_name="Gaurav"
						/>
						<FundraiserDetailDescription />
					</div>
					<div className="col-span-1 lg:col-span-1 px-4 mt-4 md:mt-0 sticky top-24 self-start">
						{/* fundraiser details info */}
						<DonationDetailSideUpdates total_donation={fundraiser_detail.total_donation} target_amount={fundraiser_detail.target_amount} total_donors={fundraiser_detail.total_donors} end_date={fundraiser_detail.end_date}  />
						<DonationDetailOrganiserDisplay />
					</div>
				</div>
			</section>
		</Layout>
	);
};

export const FundraiserOrganiserTag = ({
	organiser_name,
	beneficiary_name,
}: { organiser_name: string; beneficiary_name: string }) => {
	return (
		<div className="flex flex-col gap-0 py-4">
			<div className="inline-flex items-start md:items-center text-xs line-clamp-2 md:text-sm gap-2">
				<TbUser />
				<p>
					{organiser_name} is organizing this fundraiser on behalf of{" "}
					{beneficiary_name}.
				</p>
			</div>
			<div className="inline-flex flex-wrap gap-3 md:gap-4 text-xs md:text-sm">
				<span className="inline-flex gap-2 items-center">
					<TbCalendarCheck /> Created 2d ago
				</span>
				<span>&bull;</span>
				<p className="inline-flex items-center gap-2">
					<TbTag />
					<Link href="#!" className="underline">
						Medical
					</Link>
				</p>
			</div>
		</div>
	);
};

export const FundraiserDetailDescription = () => {
	return (
		<div className="py-4">
			<h2 className="text-lg font-bold">About the fundraiser</h2>
			<div className="mt-8 prose prose-slate mx-auto lg:prose-lg">
				<p className="lead">
					Until now, trying to style an article, document, or blog post with
					Tailwind has been a tedious task that required a keen eye for
					typography and a lot of complex custom CSS.
				</p>
				<p>
					By default, Tailwind removes all of the default browser styling from
					paragraphs, headings, lists and more. This ends up being really useful
					for building application UIs because you spend less time undoing
					user-agent styles, but when you <em>really are</em> just trying to
					style some content that came from a rich-text editor in a CMS or a
					markdown file, it can be surprising and unintuitive.
				</p>
				<p>
					We get lots of complaints about it actually, with people regularly
					asking us things like:
				</p>
				<blockquote>
					<p>
						Why is Tailwind removing the default styles on my <code>h1</code>{" "}
						elements? How do I disable this? What do you mean I lose all the
						other base styles too?
					</p>
				</blockquote>
				<p>
					We hear you, but we&apos;re not convinced that simply disabling our
					base styles is what you really want. You don&apos;t want to have to
					remove annoying margins every time you use a <code>p</code> element in
					a piece of your dashboard UI. And I doubt you really want your blog
					posts to use the user-agent styles either — you want them to look{" "}
					<em>awesome</em>, not awful.
				</p>
				<p>
					The <code>@tailwindcss/typography</code> plugin is our attempt to give
					you what you <em>actually</em> want, without any of the downsides of
					doing something stupid like disabling our base styles.
				</p>
				<p>
					It adds a new <code>prose</code> class that you can slap on any block
					of vanilla HTML content and turn it into a beautiful, well-formatted
					document:
				</p>
				<pre>
					<code className="language-html">
						&lt;article class=&quot;prose&quot;&gt; &lt;h1&gt;Garlic bread with
						cheese: What the science tells us&lt;/h1&gt; &lt;p&gt; For years
						parents have espoused the health benefits of eating garlic bread
						with cheese to their children, with the food earning such an iconic
						status in our culture that kids will often dress up as warm, cheesy
						loaf for Halloween. &lt;/p&gt; &lt;p&gt; But a recent study shows
						that the celebrated appetizer may be linked to a series of rabies
						cases springing up around the country. &lt;/p&gt; &lt;!-- ... --&gt;
						&lt;/article&gt;
					</code>
				</pre>
				<p>
					For more information about how to use the plugin and the features it
					includes,{" "}
					<a href="https://github.com/tailwindcss/typography/blob/master/README.md">
						read the documentation
					</a>
					.
				</p>
				<hr />
				<h2>What to expect from here on out</h2>
				<p>
					What follows from here is just a bunch of absolute nonsense I&apos;ve
					written to dogfood the plugin itself. It includes every sensible
					typographic element I could think of, like <strong>bold text</strong>,
					unordered lists, ordered lists, code blocks, block quotes,{" "}
					<em>and even italics</em>.
				</p>
				<p>
					It&apos;s important to cover all of these use cases for a few reasons:
				</p>
				<ol>
					<li>We want everything to look good out of the box.</li>
					<li>
						Really just the first reason, that&apos;s the whole point of the
						plugin.
					</li>
					<li>
						Here&apos;s a third pretend reason though a list with three items
						looks more realistic than a list with two items.
					</li>
				</ol>
				<p>Now we&apos;re going to try out another header style.</p>
				<h3>Typography should be easy</h3>
				<p>
					So that&apos;s a header for you — with any luck if we&apos;ve done our
					job correctly that will look pretty reasonable.
				</p>
				<p>Something a wise person once told me about typography is:</p>
				<blockquote>
					<p>
						Typography is pretty important if you don&apos;t want your stuff to
						look like trash. Make it good then it won&apos;t be bad.
					</p>
				</blockquote>
				<p>
					It&apos;s probably important that images look okay here by default as
					well:
				</p>
				<figure>
					<img
						src="https://images.unsplash.com/photo-1556740758-90de374c12ad?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1000&amp;q=80"
						alt=""
					/>
					<figcaption>
						Contrary to popular belief, Lorem Ipsum is not simply random text.
						It has roots in a piece of classical Latin literature from 45 BC,
						making it over 2000 years old.
					</figcaption>
				</figure>
				<p>
					Now I&apos;m going to show you an example of an unordered list to make
					sure that looks good, too:
				</p>
				<ul>
					<li>So here is the first item in this list.</li>
					<li>In this example we&apos;re keeping the items short.</li>
					<li>Later, we7apos;ll use longer, more complex list items.</li>
				</ul>
				<p>And that&apos;s the end of this section.</p>
				<h2>What if we stack headings?</h2>
				<h3>We should make sure that looks good, too.</h3>
				<p>
					Sometimes you have headings directly underneath each other. In those
					cases you often have to undo the top margin on the second heading
					because it usually looks better for the headings to be closer together
					than a paragraph followed by a heading should be.
				</p>
				<h3>When a heading comes after a paragraph …</h3>
				<p>
					When a heading comes after a paragraph, we need a bit more space, like
					I already mentioned above. Now let&apos;s see what a more complex list
					would look like.
				</p>
				<ul>
					<li>
						<p>
							<strong>
								I often do this thing where list items have headings.
							</strong>
						</p>
						<p>
							For some reason I think this looks cool which is unfortunate
							because it&apos;s pretty annoying to get the styles right.
						</p>
						<p>
							I often have two or three paragraphs in these list items, too, so
							the hard part is getting the spacing between the paragraphs, list
							item heading, and separate list items to all make sense. Pretty
							tough honestly, you could make a strong argument that you just
							shouldn&apos;t write this way.
						</p>
					</li>
					<li>
						<p>
							<strong>Since this is a list, I need at least two items.</strong>
						</p>
						<p>
							I explained what I&apos;m doing already in the previous list item,
							but a list wouldn&apos;t be a list if it only had one item, and we
							really want this to look realistic. That&apos;s why I&apos;ve
							added this second list item so I actually have something to look
							at when writing the styles.
						</p>
					</li>
					<li>
						<p>
							<strong>
								It&apos;s not a bad idea to add a third item either.
							</strong>
						</p>
						<p>
							I think it probably would&apos;ve been fine to just use two items
							but three is definitely not worse, and since I seem to be having
							no trouble making up arbitrary things to type, I might as well
							include it.
						</p>
					</li>
				</ul>
				<p>
					After this sort of list I usually have a closing statement or
					paragraph, because it kinda looks weird jumping right to a heading.
				</p>
				<h2>Code should look okay by default.</h2>
				<p>
					I think most people are going to use{" "}
					<a href="https://highlightjs.org/">highlight.js</a> or{" "}
					<a href="https://prismjs.com/">Prism</a> or something if they want to
					style their code blocks but it wouldn&apos;t hurt to make them look{" "}
					<em>okay</em> out of the box, even with no syntax highlighting.
				</p>
				<p>
					Here&apos;s what a default <code>tailwind.config.js</code> file looks
					like at the time of writing:
				</p>
				<pre>
					<code className="language-js">module.exports</code>
				</pre>
				<p>Hopefully that looks good enough to you.</p>
				<h3>What about nested lists?</h3>
				<p>
					Nested lists basically always look bad which is why editors like
					Medium don&apos;t even let you do it, but I guess since some of you
					goofballs are going to do it we have to carry the burden of at least
					making it work.
				</p>
				<ol>
					<li>
						<strong>Nested lists are rarely a good idea.</strong>
						<ul>
							<li>
								You might feel like you are being really &quot;organized&quot;
								or something but you are just creating a gross shape on the
								screen that is hard to read.
							</li>
							<li>
								Nested navigation in UIs is a bad idea too, keep things as flat
								as possible.
							</li>
							<li>
								Nesting tons of folders in your source code is also not helpful.
							</li>
						</ul>
					</li>
					<li>
						<strong>
							Since we need to have more items, here&apos;s another one.
						</strong>
						<ul>
							<li>
								I&apos;m not sure if we&apos;ll bother styling more than two
								levels deep.
							</li>
							<li>
								Two is already too much, three is guaranteed to be a bad idea.
							</li>
							<li>If you nest four levels deep you belong in prison.</li>
						</ul>
					</li>
					<li>
						<strong>
							Two items isn&apos;t really a list, three is good though.
						</strong>
						<ul>
							<li>
								Again please don&apos;t nest lists if you want people to
								actually read your content.
							</li>
							<li>Nobody wants to look at this.</li>
							<li>I&apos;m upset that we even have to bother styling this.</li>
						</ul>
					</li>
				</ol>
				<p>
					The most annoying thing about lists in Markdown is that{" "}
					<code>&lt;li&gt;</code> elements aren&apos;t given a child{" "}
					<code>&lt;p&gt;</code> tag unless there are multiple paragraphs in the
					list item. That means I have to worry about styling that annoying
					situation too.
				</p>
				<ul>
					<li>
						<p>
							<strong>For example, here&apos;s another nested list.</strong>
						</p>
						<p>But this time with a second paragraph.</p>
						<ul>
							<li>
								These list items won&apos;t have <code>&lt;p&gt;</code> tags
							</li>
							<li>Because they are only one line each</li>
						</ul>
					</li>
					<li>
						<p>
							<strong>
								But in this second top-level list item, they will.
							</strong>
						</p>
						<p>
							This is especially annoying because of the spacing on this
							paragraph.
						</p>
						<ul>
							<li>
								<p>
									As you can see here, because I&apos;ve added a second line,
									this list item now has a <code>&lt;p&gt;</code> tag.
								</p>
								<p>
									This is the second line I&apos;m talking about by the way.
								</p>
							</li>
							<li>
								<p>
									Finally here&apos;s another list item so it&apos;s more like a
									list.
								</p>
							</li>
						</ul>
					</li>
					<li>
						<p>
							A closing list item, but with no nested list, because why not?
						</p>
					</li>
				</ul>
				<p>And finally a sentence to close off this section.</p>
				<h2>There are other elements we need to style</h2>
				<p>
					I almost forgot to mention links, like{" "}
					<a href="https://tailwindcss.com">
						this link to the Tailwind CSS website
					</a>
					. We almost made them blue but that&apos;s so yesterday, so we went
					with dark gray, feels edgier.
				</p>
				<p>We even included table styles, check it out:</p>
				<table>
					<thead>
						<tr>
							<th>Wrestler</th>
							<th>Origin</th>
							<th>Finisher</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>Bret The Hitman Hart</td>
							<td>Calgary, AB</td>
							<td>Sharpshooter</td>
						</tr>
						<tr>
							<td>Stone Cold Steve Austin</td>
							<td>Austin, TX</td>
							<td>Stone Cold Stunner</td>
						</tr>
						<tr>
							<td>Randy Savage</td>
							<td>Sarasota, FL</td>
							<td>Elbow Drop</td>
						</tr>
						<tr>
							<td>Vader</td>
							<td>Boulder, CO</td>
							<td>Vader Bomb</td>
						</tr>
						<tr>
							<td>Razor Ramon</td>
							<td>Chuluota, FL</td>
							<td>Razor&apos;s Edge</td>
						</tr>
					</tbody>
				</table>
				<p>
					We also need to make sure inline code looks good, like if I wanted to
					talk about <code>&lt;span&gt;</code> elements or tell you the good
					news about <code>@tailwindcss/typography</code>.
				</p>
				<h3>
					Sometimes I even use <code>code</code> in headings
				</h3>
				<p>
					Even though it&apos;s probably a bad idea, and historically I&apos;ve
					had a hard time making it look good. This{" "}
					<em>wrap the code blocks in backticks</em> trick works pretty well
					though really.
				</p>
				<p>
					Another thing I&apos;ve done in the past is put a <code>code</code>{" "}
					tag inside of a link, like if I wanted to tell you about the{" "}
					<a href="https://github.com/tailwindcss/docs">
						<code>tailwindcss/docs</code>
					</a>{" "}
					repository. I don&apos;t love that there is an underline below the
					backticks but it is absolutely not worth the madness it would require
					to avoid it.
				</p>
				<h4>
					We haven&apos;t used an <code>h4</code> yet
				</h4>
				<p>
					But now we have. Please don&apos;t use <code>h5</code> or{" "}
					<code>h6</code> in your content, Medium only supports two heading
					levels for a reason, you animals. I honestly considered using a{" "}
					<code>before</code> pseudo-element to scream at you if you use an{" "}
					<code>h5</code> or <code>h6</code>.
				</p>
				<p>
					We don&apos;t style them at all out of the box because <code>h4</code>{" "}
					elements are already so small that they are the same size as the body
					copy. What are we supposed to do with an <code>h5</code>, make it{" "}
					<em>smaller</em> than the body copy? No thanks.
				</p>
				<h3>We still need to think about stacked headings though.</h3>
				<h4>
					Let&apos;s make sure we don&apos;t screw that up with <code>h4</code>{" "}
					elements, either.
				</h4>
				<p>
					Phew, with any luck we have styled the headings above this text and
					they look pretty good.
				</p>
				<p>
					Let&apos;s add a closing paragraph here so things end with a decently
					sized block of text. I can&apos;t explain why I want things to end
					that way but I have to assume it&apos;s because I think things will
					look weird or unbalanced if there is a heading too close to the end of
					the document.
				</p>
				<p>
					What I&apos;ve written here is probably long enough, but adding this
					final sentence can&apos;t hurt.
				</p>
			</div>
		</div>
	);
};

type DonationDetailType ={
	total_donation: number
	target_amount: number
	total_donors: number
	end_date: string
}
export const DonationDetailSideUpdates = ({total_donation,target_amount,total_donors,end_date}:DonationDetailType) => {
	return (
		<div className="bg-white rounded-2xl p-5 shadow-lg">
			<div className="flex flex-col gap-4 mb-4">
				<div className="text-base flex flex-col gap-2">
					<div className="flex flex-col">
						<span className="text-xs font-medium uppercase text-slate-500">
							Total Contributions
						</span>
						<span className="font-bold text-slate-800 text-4xl font-nato tracking-tight">
							{toIndianCurrency(total_donation)}
							{/* <span className="font-nunito">raised</span> */}
						</span>
					</div>
					<span className="text-base font-nunito text-slate-600">
						raised out of{" "}
						<span className="font-nato">{toIndianCurrency(target_amount)}</span>
					</span>
				</div>

				<div>
					<span id="ProgressLabel" className="sr-only">
						Donation Progress
					</span>

					<span
						// role="progressbar"
						// aria-labelledby="ProgressLabel"
						// aria-valuenow="75"
						className="block rounded-full bg-blue-900/20"
					>
						<span
							className="block h-2 rounded-full bg-gradient-to-r from-blue-600 to-blue-500"
							style={{ width:GetPercentage(total_donation, target_amount)}}
							// Dynamic data for progress bar
						/>
					</span>
				</div>
				<span className="font-nato inline-flex items-center gap-2 text-sm font-medium text-slate-500">
					<span>
						 {total_donors}
						 <span className="font-nunito"> donations</span>
					</span>
					<span className="text-slate-400">&bull;</span>
					<span>
					{GetDaysLeft(end_date=end_date)<0?`fundraiser ended`:<>{GetDaysLeft(end_date=end_date)}<span className="font-nunito">days left</span></>}	
				
					</span>
				</span>
			</div>
			<div className="flex flex-col gap-2 border-b pb-3 border-dashed">
				<button
					type="button"
					className="rounded-xl py-3 px-4 bg-slate-950 text-white w-full font-semibold text-lg"
				>
					Contribute now
				</button>
				<button
					type="button"
					className="rounded-xl py-3 px-4 bg-blue-600 text-white w-full font-semibold text-lg"
				>
					Share this fundraiser
				</button>

				<button
					type="button"
					className="rounded-xl py-3 px-4 bg-slate-100 border text-slate-700 w-full font-semibold text-sm"
				>
					Make monthly contributions
				</button>
				<span className="inline-flex mt-1 text-sm justify-center items-center text-center font-medium text-slate-500 gap-1">
					<span className="font-nato">345</span>
					shares
					<span>&bull;</span>

					<span className="font-nato">204</span>
					subscribed donations
				</span>
			</div>

			<div className="flex flex-col gap-6 mt-4">
				<span className="font-nato inline-flex items-center gap-2 font-semibold text-emerald-600">
					<span className="bg-emerald-100 rounded-full p-2.5">
						<TbTrendingUp className="text-xl" />
					</span>
					1.4K <span className="font-nunito"> people just donated</span>
				</span>
				<DonatedUserAndAmountSmallDisplay
					username="Anonymous"
					donated_amount={2500}
					redirect_link="#!"
					redirect_text="Recent donations"
					Icon={TbDevicesHeart}
				/>
				<DonatedUserAndAmountSmallDisplay
					username="Dravid Singh"
					donated_amount={13500}
					redirect_link="#!"
					redirect_text="Top donations"
					Icon={TbMoodHeart}
				/>
				<DonatedUserAndAmountSmallDisplay
					username="Dr. Leishem"
					donated_amount={2500}
					redirect_link="#!"
					redirect_text="First donation"
					Icon={TbUserUp}
				/>
				<div className="flex flex-wrap gap-2">
					<Link
						href="#!"
						className="bg-slate-50 text-xs inline-flex items-center gap-1 text-center max-w-fit rounded-md border font-semibold px-4 py-1.5"
					>
						<TbPigMoney />
						View all transactions
					</Link>
					<Link
						href="#!"
						className="bg-slate-50 text-xs inline-flex items-center gap-1 text-center max-w-fit rounded-md border font-semibold px-4 py-1.5"
					>
						<TbUserHeart />
						View all donors
					</Link>
				</div>
			</div>
		</div>
	);
};

export const DonationDetailOrganiserDisplay = () => {
	return (
		<div className="bg-white shadow-lg mt-6 rounded-2xl flex flex-col gap-4 px-6 py-4">
			<h3 className="text-sm font-bold">Organisers &amp; Beneficiaries</h3>
			<DonationDetailSingleOrganiserCard
				user_group="Organiser"
				full_name="Manikanta Singh"
				username="manikantasingh"
				organisation_name="Meitei Apunba Lup"
				phone_number={temprary_phone}
				whatsapp_number={temprary_phone}
			/>
			<DonationDetailSingleOrganiserCard
				user_group="Beneficiary"
				full_name="Gaurav"
				username="gaurav555"
			/>
		</div>
	);
};

export type DonationDetailSingleOrganiserCardType = {
	user_group: string;
	full_name: string;
	username: string;
	phone_number?: number;
	whatsapp_number?: number;
	organisation_name?: string;
	profile_image?: ImageProps["src"];
};

export const DonationDetailSingleOrganiserCard = ({
	user_group,
	full_name,
	username,
	organisation_name,
	profile_image,
	phone_number,
	whatsapp_number,
}: DonationDetailSingleOrganiserCardType) => {
	return (
		<div className="inline-flex items-start gap-2">
			{profile_image ? (
				<Image
					className="rounded-full h-10 w-10 object-cover"
					alt={`profile-image-${full_name}`}
					src={profile_image}
					height={50}
					width={50}
					quality={30}
				/>
			) : (
				<div className="bg-slate-200 text-xl p-2 rounded-full text-slate-700">
					<TbUser />
				</div>
			)}

			<div className="flex flex-col text-xs">
				<span>{user_group}</span>
				<div className="text-base inline-flex items-baseline gap-2">
					<Link href="#!" className="font-bold tracking-tight text-blue-700">
						{full_name}
					</Link>
					{organisation_name && (
						<>
							<span className="text-slate-400">&bull;</span>
							<span className="font-nunito text-xs">{organisation_name}</span>
						</>
					)}
				</div>
				<div className="flex flex-wrap gap-2 mt-2">
					{phone_number && (
						<Link
							href={`tel:${phone_number}`}
							className="bg-slate-50 inline-flex items-center gap-1 text-center max-w-fit rounded-md border font-semibold px-4 py-1.5"
						>
							<TbPhone />
							Contact
						</Link>
					)}
					{whatsapp_number && (
						<Link
							href={`https://api.whatsapp.com/send?phone=${whatsapp_number}&text=Hi%20Exocrowd%2C%0AI%20want%20to%20inquire%20about%20starting%20a%20fundraiser%20for%20my%20%3Cyour%20purpose%3E`}
							aria-label="Chat on WhatsApp"
							className="bg-slate-50 inline-flex items-center gap-1 text-center max-w-fit rounded-md border font-semibold px-4 py-1.5"
						>
							<TbBrandWhatsapp />
							Send in WhatsApp
						</Link>
					)}
				</div>
			</div>
		</div>
	);
};
export type DonatedUserAndAmountSmallDisplayType = {
	username: string;
	donated_amount: number;
	redirect_link: string;
	redirect_text: string;
	Icon: IconType;
};

export const DonatedUserAndAmountSmallDisplay = ({
	username,
	donated_amount,
	redirect_link,
	redirect_text,
	Icon,
}: DonatedUserAndAmountSmallDisplayType) => {
	return (
		<div className="inline-flex items-center text-left gap-2 font-semibold text-slate-800">
			<span className="bg-blue-50 text-blue-600 rounded-full p-2.5">
				<Icon className="text-xl" />
			</span>

			<div className="flex flex-col text-sm font-nato">
				{username}
				<div className="text-sm inline-flex items-center gap-2">
					<span className="font-bold text-base tracking-tight text-black">
						{toIndianCurrency(donated_amount)}
					</span>
					<span className="text-slate-400">&bull;</span>
					<Link
						href={redirect_link}
						className="font-nunito text-slate-500 underline text-xs"
					>
						{redirect_text}
					</Link>
				</div>
			</div>
		</div>
	);
};

export const FundraiserTitle = ({ title }: { title: string }) => {
	return (
		<div className="text-left px-4 py-2">
			<h3 className="text-2xl text-slate-950 lg:text-4xl line-clamp-3 font-bold mb-2 lg:mb-4">
				{title}
				{/* Fundraiser in support for the people living in relief camps */}
			</h3>
		</div>
	);
};

export const UrgentFundraiserFlag = () => {
	return (
		<div className="px-6 mx-auto max-w-fit mb-2 lg:mb-8">
			<div className="flex bg-rose-200 line-clamp-1 items-center text-center rounded-full px-4 lg:px-4 py-2.5 lg:py-3">
				<h1 className="text-xs lg:text-base inline-flex items-center gap-2 font-semibold text-rose-900">
					<TbEmergencyBed />
					This fundraiser need urgent need of funds
				</h1>
			</div>
		</div>
	);
};
export default FundraiserDetailsPage;

export const getServerSideProps: GetServerSideProps<{
	fundraiser_detail: FundraiserEventsProps;
  }> = async (context) => {
	const { fundraiserId } = context.query;
	const data = await fetch(`${CROWDFUNDING_BASE_URL}fundraiser-detail/${fundraiserId}`);
	const fundraiser_detail = await data.json();
	
	if (!fundraiser_detail) {
	  return {
		notFound: true,
	  };
	}
	return { props: { fundraiser_detail } };
  };
