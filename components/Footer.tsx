/* This example requires Tailwind CSS v2.0+ */
import Image from 'next/image';
import Link from 'next/link';
import { SVGProps } from 'react';
import {
  RiDribbbleFill,
  RiFacebookBoxFill,
  RiGithubFill,
  RiInstagramFill,
  RiTwitterXFill,
} from 'react-icons/ri';
import { TbBrandFacebook } from 'react-icons/tb';

const navigation = {
  solutions: [
    { name: 'Marketing', href: '#' },
    { name: 'Analytics', href: '#' },
    { name: 'Commerce', href: '#' },
    { name: 'Insights', href: '#' },
  ],
  support: [
    { name: 'Pricing', href: '#' },
    { name: 'Documentation', href: '#' },
    { name: 'Guides', href: '#' },
    { name: 'API Status', href: '#' },
  ],
  company: [
    { name: 'About', href: '#' },
    { name: 'Blog', href: '#' },
    { name: 'Jobs', href: '#' },
    { name: 'Press', href: '#' },
    { name: 'Partners', href: '#' },
  ],
  legal: [
    { name: 'Claim', href: '#' },
    { name: 'Privacy', href: '#' },
    { name: 'Terms', href: '#' },
  ],
  social: [
    {
      name: 'Facebook',
      href: '#',
      icon: RiFacebookBoxFill,
    },
    {
      name: 'Instagram',
      href: '#',
      icon: RiInstagramFill,
    },
    {
      name: 'Twitter',
      href: '#',
      icon: RiTwitterXFill,
    },
    {
      name: 'GitHub',
      href: '#',
      icon: RiGithubFill,
    },
    {
      name: 'Dribbble',
      href: '#',
      icon: RiDribbbleFill,
    },
  ],
};

export default function Example() {
  return (
    <footer className='bg-transparent' aria-labelledby='footer-heading'>
      <h2 id='footer-heading' className='sr-only'>
        Footer
      </h2>
      <div className='mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16'>
        <div className='xl:grid xl:grid-cols-3 xl:gap-8'>
          <div className='space-y-8 xl:col-span-1'>
            <div className='relative h-12 object-contain'>
              <Image
                className='h-12'
                src='/logo/axewhy-colorful-logo.png'
                alt='Company name'
                height={100}
                width={100}
              />
            </div>
            <h1 className='text-4xl font-bold tracking-tight text-white'>
              huskbee
            </h1>
            <p className='text-base text-neutral-500'>
              Making the world a better place through constructing elegant
              hierarchies.
            </p>
            <div className='flex space-x-6'>
              {navigation.social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className='text-neutral-400 hover:text-neutral-500'
                >
                  <span className='sr-only'>{item.name}</span>
                  <item.icon className='h-6 w-6' aria-hidden='true' />
                </a>
              ))}
            </div>
          </div>
          <div className='mt-12 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0'>
            <div className='md:grid md:grid-cols-2 md:gap-8'>
              <div>
                <h3 className='text-sm font-semibold uppercase tracking-wider text-neutral-400'>
                  Solutions
                </h3>
                <ul className='mt-4 space-y-4'>
                  {navigation.solutions.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className='text-base text-neutral-500 transition duration-200 hover:text-indigo-400'
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className='mt-12 md:mt-0'>
                <h3 className='text-sm font-semibold uppercase tracking-wider text-neutral-400'>
                  Support
                </h3>
                <ul className='mt-4 space-y-4'>
                  {navigation.support.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className='text-base text-neutral-500 transition duration-200 hover:text-indigo-400'
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className='md:grid md:grid-cols-2 md:gap-8'>
              <div>
                <h3 className='text-sm font-semibold uppercase tracking-wider text-neutral-400'>
                  Company
                </h3>
                <ul className='mt-4 space-y-4'>
                  {navigation.company.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className='text-base text-neutral-500 transition duration-200 hover:text-indigo-400'
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className='mt-12 md:mt-0'>
                <h3 className='text-sm font-semibold uppercase tracking-wider text-neutral-400'>
                  Legal
                </h3>
                <ul className='mt-4 space-y-4'>
                  {navigation.legal.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className='text-base text-neutral-500 transition duration-200 hover:text-indigo-400'
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className='mt-12 border-t border-neutral-200 pt-8 text-center'>
          <p className='text-base text-neutral-400 xl:text-center'>
            &copy; 2022{' '}
            <Link href='#!' className='font-semibold text-indigo-500'>
              Foxbeta Pvt. ltd.
            </Link>{' '}
            All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
