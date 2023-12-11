import Link from "next/link";
import React from "react";
import { nanoid } from "nanoid";
import {
  FaDribbble,
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import Image from "next/image";
import { TbBrandFacebook, TbBrandFacebookFilled } from "react-icons/tb";

export const footerLinks = [
  {
    id: nanoid(),
    category: "Explore",
    links: [
      {
        id: nanoid(),
        name: "About",
        url: "/about",
      },
      {
        id: nanoid(),
        name: "Our Farmers",
        url: "/press",
      },
      {
        id: nanoid(),
        name: "New Projects",
        url: "/career",
      },
    ],
  },
  {
    id: nanoid(),
    category: "Services",
    links: [
      {
        id: nanoid(),
        name: "Our platform",
        url: "/services",
      },
      {
        id: nanoid(),
        name: "SN services",
        url: "/services",
      },
      {
        id: nanoid(),
        name: "App downloads",
        url: "/contact",
      },
    ],
  },
  {
    id: nanoid(),
    category: "Others",
    links: [
      {
        id: nanoid(),
        name: "Careers",
        url: "/career",
      },
      {
        id: nanoid(),
        name: "Press",
        url: "/press",
      },
      {
        id: nanoid(),
        name: "Contact Us",
        url: "/contact",
      },
    ],
  },
];
const copyrightYear = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className='bg-black text-white lg:grid lg:grid-cols-5'>
      <div className='relative block h-[25vh] lg:col-span-2 lg:h-full'>
        <Image
          src='/exocrowd-wlogo.svg'
          alt='Exocrowd Logo'
          width={1000}
          height={1000}
          className='absolute p-10 lg:p-24 inset-0 h-full w-full object-contain'
        />
      </div>

      <div className='px-4 py-16 sm:px-6 lg:col-span-3 lg:px-8'>
        <div className='grid grid-cols-1 gap-8 sm:grid-cols-2'>
          <div>
            <p>
              <span className='text-xs uppercase tracking-wide text-gray-50'>
                {" "}
                Call us{" "}
              </span>

              <a
                href='#'
                className='block text-2xl font-bold font-sans text-gray-50 hover:opacity-75 sm:text-3xl'
              >
                +91-9953366748
              </a>
            </p>

            <ul className='mt-8 space-y-1 text-sm text-gray-100'>
              <li>Monday to Friday: 10am - 5pm</li>
              <li>Weekend: 10am - 3pm</li>
            </ul>

            <ul className='mt-8 flex gap-6'>
              <li>
                <a
                  href='/'
                  rel='noreferrer'
                  target='_blank'
                  className='text-gray-100 transition hover:opacity-75'
                >
                  <span className='sr-only'>Facebook</span>

                  <FaFacebook className='h-6 w-6' />
                </a>
              </li>

              <li>
                <a
                  href='/'
                  rel='noreferrer'
                  target='_blank'
                  className='text-gray-100 transition hover:opacity-75'
                >
                  <span className='sr-only'>Instagram</span>

                  <FaInstagram className='h-6 w-6' />
                </a>
              </li>

              <li>
                <a
                  href='/'
                  rel='noreferrer'
                  target='_blank'
                  className='text-gray-100 transition hover:opacity-75'
                >
                  <span className='sr-only'>Twitter</span>

                  <FaTwitter className='h-6 w-6' />
                </a>
              </li>

              <li>
                <a
                  href='/'
                  rel='noreferrer'
                  target='_blank'
                  className='text-gray-100 transition hover:opacity-75'
                >
                  <span className='sr-only'>GitHub</span>

                  <FaGithub className='h-6 w-6' />
                </a>
              </li>

              <li>
                <a
                  href='/'
                  rel='noreferrer'
                  target='_blank'
                  className='text-gray-100 transition hover:opacity-75'
                >
                  <span className='sr-only'>Dribbble</span>

                  <FaDribbble className='h-6 w-6' />
                </a>
              </li>
            </ul>
          </div>

          <div className='grid grid-cols-1 gap-4 sm:grid-cols-2'>
            <div>
              <p className='font-medium text-gray-50'>Services</p>

              <ul className='mt-6 space-y-4 text-sm'>
                <li>
                  <a
                    href='#'
                    className='text-gray-100 transition hover:opacity-75'
                  >
                    {" "}
                    1on1 Coaching{" "}
                  </a>
                </li>

                <li>
                  <a
                    href='#'
                    className='text-gray-100 transition hover:opacity-75'
                  >
                    {" "}
                    Company Review{" "}
                  </a>
                </li>

                <li>
                  <a
                    href='#'
                    className='text-gray-100 transition hover:opacity-75'
                  >
                    {" "}
                    Accounts Review{" "}
                  </a>
                </li>

                <li>
                  <a
                    href='#'
                    className='text-gray-100 transition hover:opacity-75'
                  >
                    {" "}
                    HR Consulting{" "}
                  </a>
                </li>

                <li>
                  <a
                    href='#'
                    className='text-gray-100 transition hover:opacity-75'
                  >
                    {" "}
                    SEO Optimisation{" "}
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <p className='font-medium text-gray-50'>Company</p>

              <ul className='mt-6 space-y-4 text-sm'>
                <li>
                  <a
                    href='#'
                    className='text-gray-100 transition hover:opacity-75'
                  >
                    {" "}
                    About{" "}
                  </a>
                </li>

                <li>
                  <a
                    href='#'
                    className='text-gray-100 transition hover:opacity-75'
                  >
                    {" "}
                    Meet the Team{" "}
                  </a>
                </li>

                <li>
                  <a
                    href='#'
                    className='text-gray-100 transition hover:opacity-75'
                  >
                    {" "}
                    Accounts Review{" "}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className='mt-12 border-t border-gray-600 pt-12'>
          <div className='sm:flex sm:items-center sm:justify-between'>
            <ul className='flex flex-wrap gap-4 text-xs'>
              <li>
                <a
                  href='#'
                  className='text-gray-50 transition hover:opacity-75'
                >
                  {" "}
                  Terms & Conditions{" "}
                </a>
              </li>

              <li>
                <a
                  href='#'
                  className='text-gray-50 transition hover:opacity-75'
                >
                  {" "}
                  Privacy Policy{" "}
                </a>
              </li>

              <li>
                <a
                  href='#'
                  className='text-gray-50 transition hover:opacity-75'
                >
                  {" "}
                  Cookies{" "}
                </a>
              </li>
            </ul>

            <p className='mt-8 text-xs text-gray-50 sm:mt-0'>
              &copy; 2022. Company Name. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
