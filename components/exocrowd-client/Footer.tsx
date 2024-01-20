import Link from 'next/link';
import React from 'react';
import { nanoid } from 'nanoid';
import {
  FaDribbble,
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from 'react-icons/fa';
import Image from 'next/image';
import { TbBrandFacebook, TbBrandFacebookFilled } from 'react-icons/tb';

// export const footerLinks = [
//   {
//     id: nanoid(),
//     category: "Explore",
//     links: [
//       {
//         id: nanoid(),
//         name: "About",
//         url: "/about",
//       },
//       {
//         id: nanoid(),
//         name: "Our Farmers",
//         url: "/press",
//       },
//       {
//         id: nanoid(),
//         name: "New Projects",
//         url: "/career",
//       },
//     ],
//   },
//   {
//     id: nanoid(),
//     category: "Services",
//     links: [
//       {
//         id: nanoid(),
//         name: "Our platform",
//         url: "/services",
//       },
//       {
//         id: nanoid(),
//         name: "SN services",
//         url: "/services",
//       },
//       {
//         id: nanoid(),
//         name: "App downloads",
//         url: "/contact",
//       },
//     ],
//   },
//   {
//     id: nanoid(),
//     category: "Others",
//     links: [
//       {
//         id: nanoid(),
//         name: "Careers",
//         url: "/career",
//       },
//       {
//         id: nanoid(),
//         name: "Press",
//         url: "/press",
//       },
//       {
//         id: nanoid(),
//         name: "Contact Us",
//         url: "/contact",
//       },
//     ],
//   },
// ];
const copyrightYear = new Date().getFullYear();

export const socialLinks = [
  {
    id: nanoid(),
    name: 'Facebook',
    Icon: FaFacebook,
    link: '#!',
  },
  {
    id: nanoid(),
    name: 'Instagram',
    Icon: FaInstagram,
    link: '#!',
  },
  {
    id: nanoid(),
    name: 'Twitter',
    Icon: FaTwitter,
    link: '#!',
  },
  {
    id: nanoid(),
    name: 'Github',
    Icon: FaGithub,
    link: '#!',
  },
  {
    id: nanoid(),
    name: 'Dribbble',
    Icon: FaDribbble,
    link: '#!',
  },
];

export const footerLinks = [
  {
    id: nanoid(),
    category: 'Causes',
    links: [
      {
        id: nanoid(),
        name: 'Relief Camps',
        link: '/relief-camps',
      },
      {
        id: nanoid(),
        name: 'Medical Funding',
        link: '/medical-funding',
      },
      {
        id: nanoid(),
        name: 'Education Funding',
        link: '/education-funding',
      },
      {
        id: nanoid(),
        name: 'Sports Funding',
        link: '/sports-funding',
      },
      {
        id: nanoid(),
        name: 'Child Welfare',
        link: '/child-welfare',
      },
      {
        id: nanoid(),
        name: 'Animal Support',
        link: '/animal-support',
      },
    ],
  },
  {
    id: nanoid(),
    category: 'How it works?',
    links: [
      {
        id: nanoid(),
        name: 'Fundraising for NGOs',
        link: '/fundraising-for-ngos',
      },
      {
        id: nanoid(),
        name: 'Sponsor a child',
        link: '/sponsor-a-child',
      },
      {
        id: nanoid(),
        name: 'What is crowdfunding',
        link: '/what-is-crowdfunding',
      },
      {
        id: nanoid(),
        name: 'Fundraising tips',
        link: '/fundraising-tips',
      },
      {
        id: nanoid(),
        name: 'Withdraw funds',
        link: '/withdraw-funds',
      },
    ],
  },
];

const Footer = () => {
  return (
    <footer className='bg-black text-white lg:grid lg:grid-cols-5'>
      <div className='relative block h-[25vh] lg:col-span-2 lg:h-full'>
        <Image
          src='/exocrowd-wlogo.svg'
          alt='Exocrowd Logo'
          width={1000}
          height={1000}
          className='absolute inset-0 h-full w-full object-contain p-10 lg:p-24'
        />
      </div>

      <div className='px-4 py-16 sm:px-6 lg:col-span-3 lg:px-8'>
        <div className='grid grid-cols-1 gap-8 sm:grid-cols-2'>
          <div>
            <p>
              <span className='text-xs uppercase tracking-wide text-neutral-200'>
                Helpline
              </span>

              <a
                href='#!'
                className='block text-2xl font-bold text-neutral-50 hover:opacity-75 sm:text-3xl'
              >
                +91-9953366748
              </a>
            </p>

            <ul className='mt-8 space-y-1 text-sm text-neutral-50'>
              <span className='text-xs uppercase tracking-wide text-neutral-200'>
                email
              </span>
              <li className='font-semibold'>support@exocrowd.in</li>
              <li className='font-semibold'>24x7 support</li>
            </ul>

            <ul className='mt-8 flex gap-6'>
              {socialLinks.map((item, index) => (
                <li key={item.id}>
                  <Link
                    href={item.link}
                    rel='noreferrer'
                    target='_blank'
                    className='text-neutral-200 transition hover:opacity-75'
                  >
                    <span className='sr-only'>{item.name}</span>

                    <item.Icon className='h-6 w-6' />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className='grid grid-cols-1 gap-4 sm:grid-cols-2'>
            {footerLinks.map(({ links, id, category }, index) => (
              <div key={id}>
                <p className='font-semibold text-neutral-50'>{category}</p>

                <ul className='mt-6 space-y-4 text-sm'>
                  {links.map((item, indexJ) => (
                    <li key={item.id}>
                      <a
                        href={item.link}
                        className='text-neutral-100 transition hover:opacity-75'
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className='mt-12 border-t border-neutral-600 pt-12'>
          <div className='sm:flex sm:items-center sm:justify-between'>
            <ul className='flex flex-wrap gap-4 text-xs'>
              <li>
                <a
                  href='#!'
                  className='text-neutral-50 transition hover:opacity-75'
                >
                  Terms & Conditions
                </a>
              </li>

              <li>
                <a
                  href='#!'
                  className='text-neutral-50 transition hover:opacity-75'
                >
                  Privacy Policy
                </a>
              </li>

              <li>
                <a
                  href='#!'
                  className='text-neutral-50 transition hover:opacity-75'
                >
                  Cookies
                </a>
              </li>
            </ul>

            <p className='mt-8 text-xs text-neutral-50 sm:mt-0'>
              &copy; {copyrightYear}. Exocrowd. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
