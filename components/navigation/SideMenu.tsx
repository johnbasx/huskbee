import React from 'react';

export interface SideMenuProps {
  //   children: React.ReactNode
  menuIsOpen: boolean;
  setMenuIsOpen: (menuIsOpen: boolean) => void;
}

const SideMenu = ({ menuIsOpen, setMenuIsOpen }: SideMenuProps) => {
  return (
    <div
      className='fixed inset-0 z-50 overflow-y-auto transition-all delay-200 lg:hidden'
      id='headlessui-dialog-7'
      role='dialog'
      aria-modal='true'
    >
      {/* backdrop blur */}
      <div
        className='fixed inset-0 bg-black/20 backdrop-blur-sm dark:bg-neutral-900/80'
        id='headlessui-dialog-overlay-10'
        aria-hidden='true'
        onKeyDown={() => setMenuIsOpen(false)}
        onClick={() => setMenuIsOpen(false)}
      />

      {/* Sidebar start */}
      <div className='relative w-full max-w-[calc(100%)] bg-black p-6'>
        {/* Close button */}
        <button
          type='button'
          className='hover:text-zing-300 absolute right-5 top-5 z-10 flex h-8 w-8 items-center justify-center text-white dark:text-white dark:hover:text-zinc-200'
          tabIndex={0}
          onClick={() => setMenuIsOpen(false)}
        >
          <span className='sr-only'>Close navigation</span>
          <svg viewBox='0 0 10 10' className='h-2.5 w-2.5 overflow-visible'>
            <title>Close navigation SVG</title>
            <path
              d='M0 0L10 10M10 0L0 10'
              fill='none'
              stroke='currentColor'
              strokeWidth='2'
              strokeLinecap='round'
            />
          </svg>
        </button>
        <nav id='nav' className='relative lg:text-sm lg:leading-6'>
          <div className='pointer-events-none sticky top-0 -ml-0.5'>
            <div className='pointer-events-auto relative bg-white dark:bg-primary'>
              <button
                type='button'
                className='dark:highlight-white/5 hidden w-full items-center rounded-md py-1.5 pl-2 pr-3 text-sm leading-6 text-neutral-400 shadow-sm ring-1 ring-neutral-900/10 hover:ring-neutral-300 dark:bg-neutral-800 dark:hover:bg-neutral-700 lg:flex'
              >
                <svg
                  width='24'
                  height='24'
                  fill='none'
                  aria-hidden='true'
                  className='mr-3 flex-none'
                >
                  <path
                    d='m19 19-3.5-3.5'
                    stroke='currentColor'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                  <circle
                    cx='11'
                    cy='11'
                    r='6'
                    stroke='currentColor'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                </svg>
                Quick search...
                <span className='ml-auto flex-none pl-3 text-xs font-semibold'>
                  ⌘K
                </span>
              </button>
            </div>
          </div>
          <ul>
            <li>
              <a
                href='/docs/installation'
                className='group mb-4 flex items-center font-medium text-white hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-zinc-300 lg:text-sm lg:leading-6'
              >
                <div className='dark:group-hover:highlight-white/10 dark:highlight-white/5 mr-4 rounded-md shadow-sm ring-1 ring-neutral-900/5 group-hover:shadow group-hover:shadow-sky-200 group-hover:ring-neutral-900/10 dark:bg-neutral-700 dark:shadow-none dark:ring-0 dark:group-hover:bg-sky-500 dark:group-hover:shadow-none'>
                  <svg className='h-6 w-6' viewBox='0 0 24 24' fill='none'>
                    <title>Documentation SVG</title>

                    <path
                      fillRule='evenodd'
                      clipRule='evenodd'
                      d='M8.5 7c1.093 0 2.117.27 3 .743V17a6.345 6.345 0 0 0-3-.743c-1.093 0-2.617.27-3.5.743V7.743C5.883 7.27 7.407 7 8.5 7Z'
                      className='fill-sky-200 group-hover:fill-sky-500 dark:fill-neutral-400 dark:group-hover:fill-sky-300'
                    />
                    <path
                      fillRule='evenodd'
                      clipRule='evenodd'
                      d='M15.5 7c1.093 0 2.617.27 3.5.743V17c-.883-.473-2.407-.743-3.5-.743s-2.117.27-3 .743V7.743a6.344 6.344 0 0 1 3-.743Z'
                      className='fill-sky-400 group-hover:fill-sky-500 dark:fill-neutral-600 dark:group-hover:fill-sky-200'
                    />
                  </svg>
                </div>
                Documentation
              </a>
            </li>
            <li>
              <a
                href='https://tailwindui.com/components?utm_source=tailwindcss&amp;utm_medium=navigation'
                className='group mb-4 flex items-center font-medium text-zinc-50 hover:text-zinc-200 dark:text-zinc-50 dark:hover:text-zinc-200 lg:text-sm lg:leading-6'
              >
                <div className='dark:group-hover:highlight-white/10 dark:highlight-white/5 mr-4 rounded-md shadow-sm ring-1 ring-neutral-900/5 group-hover:shadow group-hover:shadow-indigo-200 group-hover:ring-neutral-900/10 dark:bg-neutral-700 dark:shadow-none dark:ring-0 dark:group-hover:bg-indigo-500 dark:group-hover:shadow-none'>
                  <svg className='h-6 w-6' viewBox='0 0 24 24' fill='none'>
                    <title>Components SVG</title>

                    <path
                      d='m6 9 6-3 6 3v6l-6 3-6-3V9Z'
                      className='fill-indigo-100 group-hover:fill-indigo-200 dark:fill-neutral-300'
                    />
                    <path
                      d='m6 9 6 3v7l-6-3V9Z'
                      className='fill-indigo-300 group-hover:fill-indigo-400 dark:fill-neutral-400 dark:group-hover:fill-indigo-300'
                    />
                    <path
                      d='m18 9-6 3v7l6-3V9Z'
                      className='fill-indigo-400 group-hover:fill-indigo-500 dark:fill-neutral-500 dark:group-hover:fill-indigo-400'
                    />
                  </svg>
                </div>
                Components
              </a>
            </li>
            <li>
              <a
                href='https://www.youtube.com/tailwindlabs'
                className='group mb-4 flex items-center font-medium text-neutral-700 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-300 lg:text-sm lg:leading-6'
              >
                <div className='dark:group-hover:highlight-white/10 dark:highlight-white/5 mr-4 rounded-md shadow-sm ring-1 ring-neutral-900/5 group-hover:shadow group-hover:shadow-pink-200 group-hover:ring-neutral-900/10 dark:bg-neutral-700 dark:shadow-none dark:ring-0 dark:group-hover:bg-pink-500 dark:group-hover:shadow-none'>
                  <svg className='h-6 w-6' viewBox='0 0 24 24' fill='none'>
                    <title>Screen cast SVG</title>

                    <path
                      fillRule='evenodd'
                      clipRule='evenodd'
                      d='M19 12a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z'
                      className='fill-pink-400 group-hover:fill-pink-500 dark:fill-neutral-500 dark:group-hover:fill-pink-300'
                    />
                    <path
                      d='M11.082 9.107a.685.685 0 0 0-.72-.01.757.757 0 0 0-.362.653v4.5c0 .27.138.52.362.653.224.133.5.13.72-.01l3.571-2.25A.758.758 0 0 0 15 12a.758.758 0 0 0-.347-.643l-3.571-2.25Z'
                      className='fill-pink-50 group-hover:fill-pink-100 dark:fill-neutral-300 dark:group-hover:fill-white'
                    />
                  </svg>
                </div>
                Screencasts
              </a>
            </li>
            <li>
              <a
                href='https://play.tailwindcss.com'
                className='group mb-4 flex items-center font-medium text-neutral-700 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-300 lg:text-sm lg:leading-6'
              >
                <div className='dark:group-hover:highlight-white/10 dark:highlight-white/5 mr-4 rounded-md shadow-sm ring-1 ring-neutral-900/5 group-hover:shadow group-hover:shadow-blue-200 group-hover:ring-neutral-900/10 dark:bg-neutral-700 dark:shadow-none dark:ring-0 dark:group-hover:bg-blue-500 dark:group-hover:shadow-none'>
                  <svg className='h-6 w-6' viewBox='0 0 24 24' fill='none'>
                    <title>Playground SVG</title>

                    <path
                      d='M4 12a7 7 0 0 1 7-7h2a7 7 0 1 1 0 14h-2a7 7 0 0 1-7-7Z'
                      className='fill-blue-400 group-hover:fill-blue-500 dark:fill-neutral-500 dark:group-hover:fill-blue-400'
                    />
                    <path
                      d='M10.25 9.75 7.75 12l2.5 2.25'
                      strokeWidth='1.5'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      className='stroke-neutral-400 group-hover:stroke-white'
                    />
                    <path
                      d='m13.75 9.75 2.5 2.25-2.5 2.25'
                      strokeWidth='1.5'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      className='stroke-blue-200 dark:stroke-neutral-300 dark:group-hover:stroke-white'
                    />
                  </svg>
                </div>
                Playground
              </a>
            </li>
            <li>
              <a
                href='/resources'
                className='group mb-4 flex items-center font-semibold text-sky-500 dark:text-sky-400 lg:text-sm lg:leading-6'
              >
                <div className='dark:group-hover:highlight-white/10 dark:highlight-white/10 mr-4 rounded-md shadow-sm ring-1 ring-neutral-900/5 group-hover:shadow group-hover:shadow-purple-200 group-hover:ring-neutral-900/10 dark:bg-purple-400 dark:shadow-none dark:ring-0 dark:group-hover:bg-purple-400 dark:group-hover:shadow-none'>
                  <svg className='h-6 w-6' viewBox='0 0 24 24' fill='none'>
                    <title>Resources SVG</title>

                    <path
                      d='M6 8a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V8ZM6 15a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-1Z'
                      className='fill-purple-400 group-hover:fill-purple-500 dark:fill-purple-300 '
                    />
                    <path
                      d='M13 8a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2V8Z'
                      className='fill-purple-200 group-hover:fill-purple-300 dark:fill-white'
                    />
                    <path
                      d='M13 15a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-1Z'
                      className='fill-purple-400 group-hover:fill-purple-500 dark:fill-purple-300'
                    />
                  </svg>
                </div>
                <span className='dark:text-purple-400'>Resources</span>
              </a>
            </li>
            <li>
              <a
                href='https://github.com/tailwindlabs/tailwindcss/discussions'
                className='group mb-8 flex items-center font-medium text-neutral-700 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-300 lg:text-sm lg:leading-6'
              >
                <div className='dark:group-hover:highlight-white/10 dark:highlight-white/5 mr-4 rounded-md shadow-sm ring-1 ring-neutral-900/5 group-hover:shadow group-hover:shadow-violet-200 group-hover:ring-neutral-900/10 dark:bg-neutral-700 dark:shadow-none dark:ring-0 dark:group-hover:bg-violet-500 dark:group-hover:shadow-none'>
                  <svg className='h-6 w-6' viewBox='0 0 24 24' fill='none'>
                    <title>Community SVG</title>

                    <path
                      fillRule='evenodd'
                      clipRule='evenodd'
                      d='M11 5a6 6 0 0 0-4.687 9.746c.215.27.315.62.231.954l-.514 2.058a1 1 0 0 0 1.485 1.1l2.848-1.71c.174-.104.374-.15.576-.148H13a6 6 0 0 0 0-12h-2Z'
                      className='fill-violet-400 group-hover:fill-violet-500 dark:fill-neutral-500 dark:group-hover:fill-violet-300'
                    />
                    <circle
                      cx='12'
                      cy='11'
                      r='1'
                      className='fill-white dark:fill-neutral-300 dark:group-hover:fill-white'
                    />
                    <circle
                      cx='9'
                      cy='11'
                      r='1'
                      className='fill-violet-200 dark:fill-neutral-300 dark:group-hover:fill-white'
                    />
                    <circle
                      cx='15'
                      cy='11'
                      r='1'
                      className='fill-violet-200 dark:fill-neutral-400 dark:group-hover:fill-white'
                    />
                  </svg>
                </div>
                Community
              </a>
            </li>
            <li className='mt-12 lg:mt-8'>
              <h5 className='mb-8 font-semibold text-neutral-900 dark:text-neutral-200 lg:mb-3'>
                Getting Started
              </h5>
              <ul className='space-y-6 border-l border-neutral-100 dark:border-neutral-700 lg:space-y-2'>
                <li>
                  <a
                    className='-ml-px block border-l border-transparent pl-4 text-neutral-700 hover:border-neutral-400 hover:text-neutral-900 dark:text-neutral-400 dark:hover:border-neutral-500 dark:hover:text-neutral-300'
                    href='/docs/installation'
                  >
                    Installation
                  </a>
                </li>
                <li>
                  <a
                    className='-ml-px block border-l border-transparent pl-4 text-neutral-700 hover:border-neutral-400 hover:text-neutral-900 dark:text-neutral-400 dark:hover:border-neutral-500 dark:hover:text-neutral-300'
                    href='/docs/editor-setup'
                  >
                    Editor Setup
                  </a>
                </li>
                <li>
                  <a
                    className='-ml-px block border-l border-transparent pl-4 text-neutral-700 hover:border-neutral-400 hover:text-neutral-900 dark:text-neutral-400 dark:hover:border-neutral-500 dark:hover:text-neutral-300'
                    href='/docs/using-with-preprocessors'
                  >
                    Using with Preprocessors
                  </a>
                </li>
                <li>
                  <a
                    className='-ml-px block border-l border-transparent pl-4 text-neutral-700 hover:border-neutral-400 hover:text-neutral-900 dark:text-neutral-400 dark:hover:border-neutral-500 dark:hover:text-neutral-300'
                    href='/docs/optimizing-for-production'
                  >
                    Optimizing for Production
                  </a>
                </li>
                <li>
                  <a
                    className='-ml-px block border-l border-transparent pl-4 text-neutral-700 hover:border-neutral-400 hover:text-neutral-900 dark:text-neutral-400 dark:hover:border-neutral-500 dark:hover:text-neutral-300'
                    href='/docs/browser-support'
                  >
                    Browser Support
                  </a>
                </li>
                <li>
                  <a
                    className='-ml-px block border-l border-transparent pl-4 text-neutral-700 hover:border-neutral-400 hover:text-neutral-900 dark:text-neutral-400 dark:hover:border-neutral-500 dark:hover:text-neutral-300'
                    href='/docs/upgrade-guide'
                  >
                    Upgrade Guide
                  </a>
                </li>
              </ul>
            </li>
            <li className='mt-12 lg:mt-8'>
              <h5 className='mb-8 font-semibold text-neutral-900 dark:text-neutral-200 lg:mb-3'>
                Core Concepts
              </h5>
              <ul className='space-y-6 border-l border-neutral-100 dark:border-neutral-700 lg:space-y-2'>
                <li>
                  <a
                    className='-ml-px block border-l border-transparent pl-4 text-neutral-700 hover:border-neutral-400 hover:text-neutral-900 dark:text-neutral-400 dark:hover:border-neutral-500 dark:hover:text-neutral-300'
                    href='/docs/utility-first'
                  >
                    Utility-First Fundamentals
                  </a>
                </li>
                <li>
                  <a
                    className='-ml-px block border-l border-transparent pl-4 text-neutral-700 hover:border-neutral-400 hover:text-neutral-900 dark:text-neutral-400 dark:hover:border-neutral-500 dark:hover:text-neutral-300'
                    href='/docs/hover-focus-and-other-states'
                  >
                    Hover, Focus, and Other States
                  </a>
                </li>
                <li>
                  <a
                    className='-ml-px block border-l border-transparent pl-4 text-neutral-700 hover:border-neutral-400 hover:text-neutral-900 dark:text-neutral-400 dark:hover:border-neutral-500 dark:hover:text-neutral-300'
                    href='/docs/responsive-design'
                  >
                    Responsive Design
                  </a>
                </li>
                <li>
                  <a
                    className='-ml-px block border-l border-transparent pl-4 text-neutral-700 hover:border-neutral-400 hover:text-neutral-900 dark:text-neutral-400 dark:hover:border-neutral-500 dark:hover:text-neutral-300'
                    href='/docs/dark-mode'
                  >
                    Dark Mode
                  </a>
                </li>
                <li>
                  <a
                    className='-ml-px block border-l border-transparent pl-4 text-neutral-700 hover:border-neutral-400 hover:text-neutral-900 dark:text-neutral-400 dark:hover:border-neutral-500 dark:hover:text-neutral-300'
                    href='/docs/reusing-styles'
                  >
                    Reusing Styles
                  </a>
                </li>
                <li>
                  <a
                    className='-ml-px block border-l border-transparent pl-4 text-neutral-700 hover:border-neutral-400 hover:text-neutral-900 dark:text-neutral-400 dark:hover:border-neutral-500 dark:hover:text-neutral-300'
                    href='/docs/adding-custom-styles'
                  >
                    Adding Custom Styles
                  </a>
                </li>
                <li>
                  <a
                    className='-ml-px block border-l border-transparent pl-4 text-neutral-700 hover:border-neutral-400 hover:text-neutral-900 dark:text-neutral-400 dark:hover:border-neutral-500 dark:hover:text-neutral-300'
                    href='/docs/functions-and-directives'
                  >
                    Functions &amp; Directives
                  </a>
                </li>
              </ul>
            </li>
            <li className='mt-12 lg:mt-8'>
              <h5 className='mb-8 font-semibold text-neutral-900 dark:text-neutral-200 lg:mb-3'>
                Customization
              </h5>
              <ul className='space-y-6 border-l border-neutral-100 dark:border-neutral-700 lg:space-y-2'>
                <li>
                  <a
                    className='-ml-px block border-l border-transparent pl-4 text-neutral-700 hover:border-neutral-400 hover:text-neutral-900 dark:text-neutral-400 dark:hover:border-neutral-500 dark:hover:text-neutral-300'
                    href='/docs/configuration'
                  >
                    Configuration
                  </a>
                </li>
                <li>
                  <a
                    className='-ml-px block border-l border-transparent pl-4 text-neutral-700 hover:border-neutral-400 hover:text-neutral-900 dark:text-neutral-400 dark:hover:border-neutral-500 dark:hover:text-neutral-300'
                    href='/docs/content-configuration'
                  >
                    Content
                  </a>
                </li>
                <li>
                  <a
                    className='-ml-px block border-l border-transparent pl-4 text-neutral-700 hover:border-neutral-400 hover:text-neutral-900 dark:text-neutral-400 dark:hover:border-neutral-500 dark:hover:text-neutral-300'
                    href='/docs/theme'
                  >
                    Theme
                  </a>
                </li>
                <li>
                  <a
                    className='-ml-px block border-l border-transparent pl-4 text-neutral-700 hover:border-neutral-400 hover:text-neutral-900 dark:text-neutral-400 dark:hover:border-neutral-500 dark:hover:text-neutral-300'
                    href='/docs/screens'
                  >
                    Screens
                  </a>
                </li>
                <li>
                  <a
                    className='-ml-px block border-l border-transparent pl-4 text-neutral-700 hover:border-neutral-400 hover:text-neutral-900 dark:text-neutral-400 dark:hover:border-neutral-500 dark:hover:text-neutral-300'
                    href='/docs/customizing-colors'
                  >
                    Colors
                  </a>
                </li>
                <li>
                  <a
                    className='-ml-px block border-l border-transparent pl-4 text-neutral-700 hover:border-neutral-400 hover:text-neutral-900 dark:text-neutral-400 dark:hover:border-neutral-500 dark:hover:text-neutral-300'
                    href='/docs/customizing-spacing'
                  >
                    Spacing
                  </a>
                </li>
                <li>
                  <a
                    className='-ml-px block border-l border-transparent pl-4 text-neutral-700 hover:border-neutral-400 hover:text-neutral-900 dark:text-neutral-400 dark:hover:border-neutral-500 dark:hover:text-neutral-300'
                    href='/docs/plugins'
                  >
                    Plugins
                  </a>
                </li>
                <li>
                  <a
                    className='-ml-px block border-l border-transparent pl-4 text-neutral-700 hover:border-neutral-400 hover:text-neutral-900 dark:text-neutral-400 dark:hover:border-neutral-500 dark:hover:text-neutral-300'
                    href='/docs/presets'
                  >
                    Presets
                  </a>
                </li>
              </ul>
            </li>
            <li className='mt-12 lg:mt-8'>
              <h5 className='mb-8 font-semibold text-neutral-900 dark:text-neutral-200 lg:mb-3'>
                Base Styles
              </h5>
              <ul className='space-y-6 border-l border-neutral-100 dark:border-neutral-700 lg:space-y-2'>
                <li>
                  <a
                    className='-ml-px block border-l border-transparent pl-4 text-neutral-700 hover:border-neutral-400 hover:text-neutral-900 dark:text-neutral-400 dark:hover:border-neutral-500 dark:hover:text-neutral-300'
                    href='/docs/preflight'
                  >
                    Preflight
                  </a>
                </li>
              </ul>
            </li>
            <li className='mt-12 lg:mt-8'>
              <h5 className='mb-8 font-semibold text-neutral-900 dark:text-neutral-200 lg:mb-3'>
                Layout
              </h5>
              <ul className='space-y-6 border-l border-neutral-100 dark:border-neutral-700 lg:space-y-2'>
                <li>
                  <a
                    className='-ml-px block border-l border-transparent pl-4 text-neutral-700 hover:border-neutral-400 hover:text-neutral-900 dark:text-neutral-400 dark:hover:border-neutral-500 dark:hover:text-neutral-300'
                    href='/docs/aspect-ratio'
                  >
                    Aspect Ratio
                  </a>
                </li>
                <li>
                  <a
                    className='-ml-px block border-l border-transparent pl-4 text-neutral-700 hover:border-neutral-400 hover:text-neutral-900 dark:text-neutral-400 dark:hover:border-neutral-500 dark:hover:text-neutral-300'
                    href='/docs/container'
                  >
                    Container
                  </a>
                </li>
                <li>
                  <a
                    className='-ml-px block border-l border-transparent pl-4 text-neutral-700 hover:border-neutral-400 hover:text-neutral-900 dark:text-neutral-400 dark:hover:border-neutral-500 dark:hover:text-neutral-300'
                    href='/docs/columns'
                  >
                    Columns
                  </a>
                </li>
                <li>
                  <a
                    className='-ml-px block border-l border-transparent pl-4 text-neutral-700 hover:border-neutral-400 hover:text-neutral-900 dark:text-neutral-400 dark:hover:border-neutral-500 dark:hover:text-neutral-300'
                    href='/docs/break-after'
                  >
                    Break After
                  </a>
                </li>
                <li>
                  <a
                    className='-ml-px block border-l border-transparent pl-4 text-neutral-700 hover:border-neutral-400 hover:text-neutral-900 dark:text-neutral-400 dark:hover:border-neutral-500 dark:hover:text-neutral-300'
                    href='/docs/break-before'
                  >
                    Break Before
                  </a>
                </li>
                <li>
                  <a
                    className='-ml-px block border-l border-transparent pl-4 text-neutral-700 hover:border-neutral-400 hover:text-neutral-900 dark:text-neutral-400 dark:hover:border-neutral-500 dark:hover:text-neutral-300'
                    href='/docs/break-inside'
                  >
                    Break Inside
                  </a>
                </li>
                <li>
                  <a
                    className='-ml-px block border-l border-transparent pl-4 text-neutral-700 hover:border-neutral-400 hover:text-neutral-900 dark:text-neutral-400 dark:hover:border-neutral-500 dark:hover:text-neutral-300'
                    href='/docs/box-decoration-break'
                  >
                    Box Decoration Break
                  </a>
                </li>
                <li>
                  <a
                    className='-ml-px block border-l border-transparent pl-4 text-neutral-700 hover:border-neutral-400 hover:text-neutral-900 dark:text-neutral-400 dark:hover:border-neutral-500 dark:hover:text-neutral-300'
                    href='/docs/box-sizing'
                  >
                    Box Sizing
                  </a>
                </li>
                <li>
                  <a
                    className='-ml-px block border-l border-transparent pl-4 text-neutral-700 hover:border-neutral-400 hover:text-neutral-900 dark:text-neutral-400 dark:hover:border-neutral-500 dark:hover:text-neutral-300'
                    href='/docs/display'
                  >
                    Display
                  </a>
                </li>
                <li>
                  <a
                    className='-ml-px block border-l border-transparent pl-4 text-neutral-700 hover:border-neutral-400 hover:text-neutral-900 dark:text-neutral-400 dark:hover:border-neutral-500 dark:hover:text-neutral-300'
                    href='/docs/float'
                  >
                    Floats
                  </a>
                </li>
                <li>
                  <a
                    className='-ml-px block border-l border-transparent pl-4 text-neutral-700 hover:border-neutral-400 hover:text-neutral-900 dark:text-neutral-400 dark:hover:border-neutral-500 dark:hover:text-neutral-300'
                    href='/docs/clear'
                  >
                    Clear
                  </a>
                </li>
                <li>
                  <a
                    className='-ml-px block border-l border-transparent pl-4 text-neutral-700 hover:border-neutral-400 hover:text-neutral-900 dark:text-neutral-400 dark:hover:border-neutral-500 dark:hover:text-neutral-300'
                    href='/docs/isolation'
                  >
                    Isolation
                  </a>
                </li>
                <li>
                  <a
                    className='-ml-px block border-l border-transparent pl-4 text-neutral-700 hover:border-neutral-400 hover:text-neutral-900 dark:text-neutral-400 dark:hover:border-neutral-500 dark:hover:text-neutral-300'
                    href='/docs/object-fit'
                  >
                    Object Fit
                  </a>
                </li>
                <li>
                  <a
                    className='-ml-px block border-l border-transparent pl-4 text-neutral-700 hover:border-neutral-400 hover:text-neutral-900 dark:text-neutral-400 dark:hover:border-neutral-500 dark:hover:text-neutral-300'
                    href='/docs/object-position'
                  >
                    Object Position
                  </a>
                </li>
                <li>
                  <a
                    className='-ml-px block border-l border-transparent pl-4 text-neutral-700 hover:border-neutral-400 hover:text-neutral-900 dark:text-neutral-400 dark:hover:border-neutral-500 dark:hover:text-neutral-300'
                    href='/docs/overflow'
                  >
                    Overflow
                  </a>
                </li>
                <li>
                  <a
                    className='-ml-px block border-l border-transparent pl-4 text-neutral-700 hover:border-neutral-400 hover:text-neutral-900 dark:text-neutral-400 dark:hover:border-neutral-500 dark:hover:text-neutral-300'
                    href='/docs/overscroll-behavior'
                  >
                    Overscroll Behavior
                  </a>
                </li>
                <li>
                  <a
                    className='-ml-px block border-l border-transparent pl-4 text-neutral-700 hover:border-neutral-400 hover:text-neutral-900 dark:text-neutral-400 dark:hover:border-neutral-500 dark:hover:text-neutral-300'
                    href='/docs/position'
                  >
                    Position
                  </a>
                </li>
                <li>
                  <a
                    className='-ml-px block border-l border-transparent pl-4 text-neutral-700 hover:border-neutral-400 hover:text-neutral-900 dark:text-neutral-400 dark:hover:border-neutral-500 dark:hover:text-neutral-300'
                    href='/docs/top-right-bottom-left'
                  >
                    Top / Right / Bottom / Left
                  </a>
                </li>
                <li>
                  <a
                    className='-ml-px block border-l border-transparent pl-4 text-neutral-700 hover:border-neutral-400 hover:text-neutral-900 dark:text-neutral-400 dark:hover:border-neutral-500 dark:hover:text-neutral-300'
                    href='/docs/visibility'
                  >
                    Visibility
                  </a>
                </li>
                <li>
                  <a
                    className='-ml-px block border-l border-transparent pl-4 text-neutral-700 hover:border-neutral-400 hover:text-neutral-900 dark:text-neutral-400 dark:hover:border-neutral-500 dark:hover:text-neutral-300'
                    href='/docs/z-index'
                  >
                    Z-Index
                  </a>
                </li>
              </ul>
            </li>
            <li className='mt-12 lg:mt-8'>
              <h5 className='mb-8 font-semibold text-neutral-900 dark:text-neutral-200 lg:mb-3'>
                Flexbox &amp; Grid
              </h5>
              <ul className='space-y-6 border-l border-neutral-100 dark:border-neutral-700 lg:space-y-2'>
                <li>
                  <a
                    className='-ml-px block border-l border-transparent pl-4 text-neutral-700 hover:border-neutral-400 hover:text-neutral-900 dark:text-neutral-400 dark:hover:border-neutral-500 dark:hover:text-neutral-300'
                    href='/docs/flex-basis'
                  >
                    Flex Basis
                  </a>
                </li>
                <li>
                  <a
                    className='-ml-px block border-l border-transparent pl-4 text-neutral-700 hover:border-neutral-400 hover:text-neutral-900 dark:text-neutral-400 dark:hover:border-neutral-500 dark:hover:text-neutral-300'
                    href='/docs/flex-direction'
                  >
                    Flex Direction
                  </a>
                </li>
                <li>
                  <a
                    className='-ml-px block border-l border-transparent pl-4 text-neutral-700 hover:border-neutral-400 hover:text-neutral-900 dark:text-neutral-400 dark:hover:border-neutral-500 dark:hover:text-neutral-300'
                    href='/docs/flex-wrap'
                  >
                    Flex Wrap
                  </a>
                </li>
                <li>
                  <a
                    className='-ml-px block border-l border-transparent pl-4 text-neutral-700 hover:border-neutral-400 hover:text-neutral-900 dark:text-neutral-400 dark:hover:border-neutral-500 dark:hover:text-neutral-300'
                    href='/docs/flex'
                  >
                    Flex
                  </a>
                </li>
                <li>
                  <a
                    className='-ml-px block border-l border-transparent pl-4 text-neutral-700 hover:border-neutral-400 hover:text-neutral-900 dark:text-neutral-400 dark:hover:border-neutral-500 dark:hover:text-neutral-300'
                    href='/docs/flex-grow'
                  >
                    Flex Grow
                  </a>
                </li>
                <li>
                  <a
                    className='-ml-px block border-l border-transparent pl-4 text-neutral-700 hover:border-neutral-400 hover:text-neutral-900 dark:text-neutral-400 dark:hover:border-neutral-500 dark:hover:text-neutral-300'
                    href='/docs/flex-shrink'
                  >
                    Flex Shrink
                  </a>
                </li>
                <li>
                  <a
                    className='-ml-px block border-l border-transparent pl-4 text-neutral-700 hover:border-neutral-400 hover:text-neutral-900 dark:text-neutral-400 dark:hover:border-neutral-500 dark:hover:text-neutral-300'
                    href='/docs/order'
                  >
                    Order
                  </a>
                </li>
                <li>
                  <a
                    className='-ml-px block border-l border-transparent pl-4 text-neutral-700 hover:border-neutral-400 hover:text-neutral-900 dark:text-neutral-400 dark:hover:border-neutral-500 dark:hover:text-neutral-300'
                    href='/docs/grid-template-columns'
                  >
                    Grid Template Columns
                  </a>
                </li>
                <li>
                  <a
                    className='-ml-px block border-l border-transparent pl-4 text-neutral-700 hover:border-neutral-400 hover:text-neutral-900 dark:text-neutral-400 dark:hover:border-neutral-500 dark:hover:text-neutral-300'
                    href='/docs/grid-column'
                  >
                    Grid Column Start / End
                  </a>
                </li>
                <li>
                  <a
                    className='-ml-px block border-l border-transparent pl-4 text-neutral-700 hover:border-neutral-400 hover:text-neutral-900 dark:text-neutral-400 dark:hover:border-neutral-500 dark:hover:text-neutral-300'
                    href='/docs/grid-template-rows'
                  >
                    Grid Template Rows
                  </a>
                </li>
                <li>
                  <a
                    className='-ml-px block border-l border-transparent pl-4 text-neutral-700 hover:border-neutral-400 hover:text-neutral-900 dark:text-neutral-400 dark:hover:border-neutral-500 dark:hover:text-neutral-300'
                    href='/docs/grid-row'
                  >
                    Grid Row Start / End
                  </a>
                </li>
                <li>
                  <a
                    className='-ml-px block border-l border-transparent pl-4 text-neutral-700 hover:border-neutral-400 hover:text-neutral-900 dark:text-neutral-400 dark:hover:border-neutral-500 dark:hover:text-neutral-300'
                    href='/docs/grid-auto-flow'
                  >
                    Grid Auto Flow
                  </a>
                </li>
                <li>
                  <a
                    className='-ml-px block border-l border-transparent pl-4 text-neutral-700 hover:border-neutral-400 hover:text-neutral-900 dark:text-neutral-400 dark:hover:border-neutral-500 dark:hover:text-neutral-300'
                    href='/docs/grid-auto-columns'
                  >
                    Grid Auto Columns
                  </a>
                </li>
                <li>
                  <a
                    className='-ml-px block border-l border-transparent pl-4 text-neutral-700 hover:border-neutral-400 hover:text-neutral-900 dark:text-neutral-400 dark:hover:border-neutral-500 dark:hover:text-neutral-300'
                    href='/docs/grid-auto-rows'
                  >
                    Grid Auto Rows
                  </a>
                </li>
                <li>
                  <a
                    className='-ml-px block border-l border-transparent pl-4 text-neutral-700 hover:border-neutral-400 hover:text-neutral-900 dark:text-neutral-400 dark:hover:border-neutral-500 dark:hover:text-neutral-300'
                    href='/docs/gap'
                  >
                    Gap
                  </a>
                </li>
                <li>
                  <a
                    className='-ml-px block border-l border-transparent pl-4 text-neutral-700 hover:border-neutral-400 hover:text-neutral-900 dark:text-neutral-400 dark:hover:border-neutral-500 dark:hover:text-neutral-300'
                    href='/docs/justify-content'
                  >
                    Justify Content
                  </a>
                </li>
                <li>
                  <a
                    className='-ml-px block border-l border-transparent pl-4 text-neutral-700 hover:border-neutral-400 hover:text-neutral-900 dark:text-neutral-400 dark:hover:border-neutral-500 dark:hover:text-neutral-300'
                    href='/docs/justify-items'
                  >
                    Justify Items
                  </a>
                </li>
                <li>
                  <a
                    className='-ml-px block border-l border-transparent pl-4 text-neutral-700 hover:border-neutral-400 hover:text-neutral-900 dark:text-neutral-400 dark:hover:border-neutral-500 dark:hover:text-neutral-300'
                    href='/docs/justify-self'
                  >
                    Justify Self
                  </a>
                </li>
                <li>
                  <a
                    className='-ml-px block border-l border-transparent pl-4 text-neutral-700 hover:border-neutral-400 hover:text-neutral-900 dark:text-neutral-400 dark:hover:border-neutral-500 dark:hover:text-neutral-300'
                    href='/docs/align-content'
                  >
                    Align Content
                  </a>
                </li>
                <li>
                  <a
                    className='-ml-px block border-l border-transparent pl-4 text-neutral-700 hover:border-neutral-400 hover:text-neutral-900 dark:text-neutral-400 dark:hover:border-neutral-500 dark:hover:text-neutral-300'
                    href='/docs/align-items'
                  >
                    Align Items
                  </a>
                </li>
                <li>
                  <a
                    className='-ml-px block border-l border-transparent pl-4 text-neutral-700 hover:border-neutral-400 hover:text-neutral-900 dark:text-neutral-400 dark:hover:border-neutral-500 dark:hover:text-neutral-300'
                    href='/docs/align-self'
                  >
                    Align Self
                  </a>
                </li>
                <li>
                  <a
                    className='-ml-px block border-l border-transparent pl-4 text-neutral-700 hover:border-neutral-400 hover:text-neutral-900 dark:text-neutral-400 dark:hover:border-neutral-500 dark:hover:text-neutral-300'
                    href='/docs/place-content'
                  >
                    Place Content
                  </a>
                </li>
                <li>
                  <a
                    className='-ml-px block border-l border-transparent pl-4 text-neutral-700 hover:border-neutral-400 hover:text-neutral-900 dark:text-neutral-400 dark:hover:border-neutral-500 dark:hover:text-neutral-300'
                    href='/docs/place-items'
                  >
                    Place Items
                  </a>
                </li>
                <li>
                  <a
                    className='-ml-px block border-l border-transparent pl-4 text-neutral-700 hover:border-neutral-400 hover:text-neutral-900 dark:text-neutral-400 dark:hover:border-neutral-500 dark:hover:text-neutral-300'
                    href='/docs/place-self'
                  >
                    Place Self
                  </a>
                </li>
              </ul>
            </li>
            <li className='mt-12 lg:mt-8'>
              <h5 className='mb-8 font-semibold text-neutral-900 dark:text-neutral-200 lg:mb-3'>
                Spacing
              </h5>
              <ul className='space-y-6 border-l border-neutral-100 dark:border-neutral-700 lg:space-y-2'>
                <li>
                  <a
                    className='-ml-px block border-l border-transparent pl-4 text-neutral-700 hover:border-neutral-400 hover:text-neutral-900 dark:text-neutral-400 dark:hover:border-neutral-500 dark:hover:text-neutral-300'
                    href='/docs/padding'
                  >
                    Padding
                  </a>
                </li>
                <li>
                  <a
                    className='-ml-px block border-l border-transparent pl-4 text-neutral-700 hover:border-neutral-400 hover:text-neutral-900 dark:text-neutral-400 dark:hover:border-neutral-500 dark:hover:text-neutral-300'
                    href='/docs/margin'
                  >
                    Margin
                  </a>
                </li>
                <li>
                  <a
                    className='-ml-px block border-l border-transparent pl-4 text-neutral-700 hover:border-neutral-400 hover:text-neutral-900 dark:text-neutral-400 dark:hover:border-neutral-500 dark:hover:text-neutral-300'
                    href='/docs/space'
                  >
                    Space Between
                  </a>
                </li>
              </ul>
            </li>
            <li className='mt-12 lg:mt-8'>
              <h5 className='mb-8 font-semibold text-neutral-900 dark:text-neutral-200 lg:mb-3'>
                Sizing
              </h5>
              <ul className='space-y-6 border-l border-neutral-100 dark:border-neutral-700 lg:space-y-2'>
                <li>
                  <a
                    className='-ml-px block border-l border-transparent pl-4 text-neutral-700 hover:border-neutral-400 hover:text-neutral-900 dark:text-neutral-400 dark:hover:border-neutral-500 dark:hover:text-neutral-300'
                    href='/docs/width'
                  >
                    Width
                  </a>
                </li>
                <li>
                  <a
                    className='-ml-px block border-l border-transparent pl-4 text-neutral-700 hover:border-neutral-400 hover:text-neutral-900 dark:text-neutral-400 dark:hover:border-neutral-500 dark:hover:text-neutral-300'
                    href='/docs/min-width'
                  >
                    Min-Width
                  </a>
                </li>
                <li>
                  <a
                    className='-ml-px block border-l border-transparent pl-4 text-neutral-700 hover:border-neutral-400 hover:text-neutral-900 dark:text-neutral-400 dark:hover:border-neutral-500 dark:hover:text-neutral-300'
                    href='/docs/max-width'
                  >
                    Max-Width
                  </a>
                </li>
                <li>
                  <a
                    className='-ml-px block border-l border-transparent pl-4 text-neutral-700 hover:border-neutral-400 hover:text-neutral-900 dark:text-neutral-400 dark:hover:border-neutral-500 dark:hover:text-neutral-300'
                    href='/docs/height'
                  >
                    Height
                  </a>
                </li>
                <li>
                  <a
                    className='-ml-px block border-l border-transparent pl-4 text-neutral-700 hover:border-neutral-400 hover:text-neutral-900 dark:text-neutral-400 dark:hover:border-neutral-500 dark:hover:text-neutral-300'
                    href='/docs/min-height'
                  >
                    Min-Height
                  </a>
                </li>
                <li>
                  <a
                    className='-ml-px block border-l border-transparent pl-4 text-neutral-700 hover:border-neutral-400 hover:text-neutral-900 dark:text-neutral-400 dark:hover:border-neutral-500 dark:hover:text-neutral-300'
                    href='/docs/max-height'
                  >
                    Max-Height
                  </a>
                </li>
              </ul>
            </li>
            <li className='mt-12 lg:mt-8'>
              <h5 className='mb-8 font-semibold text-neutral-900 dark:text-neutral-200 lg:mb-3'>
                Typography
              </h5>
              <ul className='space-y-6 border-l border-neutral-100 dark:border-neutral-700 lg:space-y-2'>
                <li>
                  <a
                    className='-ml-px block border-l border-transparent pl-4 text-neutral-700 hover:border-neutral-400 hover:text-neutral-900 dark:text-neutral-400 dark:hover:border-neutral-500 dark:hover:text-neutral-300'
                    href='/docs/font-family'
                  >
                    Font Family
                  </a>
                </li>
                <li>
                  <a
                    className='-ml-px block border-l border-transparent pl-4 text-neutral-700 hover:border-neutral-400 hover:text-neutral-900 dark:text-neutral-400 dark:hover:border-neutral-500 dark:hover:text-neutral-300'
                    href='/docs/font-size'
                  >
                    Font Size
                  </a>
                </li>
                <li>
                  <a
                    className='-ml-px block border-l border-transparent pl-4 text-neutral-700 hover:border-neutral-400 hover:text-neutral-900 dark:text-neutral-400 dark:hover:border-neutral-500 dark:hover:text-neutral-300'
                    href='/docs/font-smoothing'
                  >
                    Font Smoothing
                  </a>
                </li>
                <li>
                  <a
                    className='-ml-px block border-l border-transparent pl-4 text-neutral-700 hover:border-neutral-400 hover:text-neutral-900 dark:text-neutral-400 dark:hover:border-neutral-500 dark:hover:text-neutral-300'
                    href='/docs/font-style'
                  >
                    Font Style
                  </a>
                </li>
                <li>
                  <a
                    className='-ml-px block border-l border-transparent pl-4 text-neutral-700 hover:border-neutral-400 hover:text-neutral-900 dark:text-neutral-400 dark:hover:border-neutral-500 dark:hover:text-neutral-300'
                    href='/docs/font-weight'
                  >
                    Font Weight
                  </a>
                </li>
                <li>
                  <a
                    className='-ml-px block border-l border-transparent pl-4 text-neutral-700 hover:border-neutral-400 hover:text-neutral-900 dark:text-neutral-400 dark:hover:border-neutral-500 dark:hover:text-neutral-300'
                    href='/docs/font-variant-numeric'
                  >
                    Font Variant Numeric
                  </a>
                </li>
                <li>
                  <a
                    className='-ml-px block border-l border-transparent pl-4 text-neutral-700 hover:border-neutral-400 hover:text-neutral-900 dark:text-neutral-400 dark:hover:border-neutral-500 dark:hover:text-neutral-300'
                    href='/docs/letter-spacing'
                  >
                    Letter Spacing
                  </a>
                </li>
                <li>
                  <a
                    className='-ml-px block border-l border-transparent pl-4 text-neutral-700 hover:border-neutral-400 hover:text-neutral-900 dark:text-neutral-400 dark:hover:border-neutral-500 dark:hover:text-neutral-300'
                    href='/docs/line-height'
                  >
                    Line Height
                  </a>
                </li>
                <li>
                  <a
                    className='-ml-px block border-l border-transparent pl-4 text-neutral-700 hover:border-neutral-400 hover:text-neutral-900 dark:text-neutral-400 dark:hover:border-neutral-500 dark:hover:text-neutral-300'
                    href='/docs/list-style-type'
                  >
                    List Style Type
                  </a>
                </li>
                <li>
                  <a
                    className='-ml-px block border-l border-transparent pl-4 text-neutral-700 hover:border-neutral-400 hover:text-neutral-900 dark:text-neutral-400 dark:hover:border-neutral-500 dark:hover:text-neutral-300'
                    href='/docs/list-style-position'
                  >
                    List Style Position
                  </a>
                </li>
                <li>
                  <a
                    className='-ml-px block border-l border-transparent pl-4 text-neutral-700 hover:border-neutral-400 hover:text-neutral-900 dark:text-neutral-400 dark:hover:border-neutral-500 dark:hover:text-neutral-300'
                    href='/docs/text-align'
                  >
                    Text Align
                  </a>
                </li>
                <li>
                  <a
                    className='-ml-px block border-l border-transparent pl-4 text-neutral-700 hover:border-neutral-400 hover:text-neutral-900 dark:text-neutral-400 dark:hover:border-neutral-500 dark:hover:text-neutral-300'
                    href='/docs/text-color'
                  >
                    Text Color
                  </a>
                </li>
                <li>
                  <a
                    className='-ml-px block border-l border-transparent pl-4 text-neutral-700 hover:border-neutral-400 hover:text-neutral-900 dark:text-neutral-400 dark:hover:border-neutral-500 dark:hover:text-neutral-300'
                    href='/docs/text-decoration'
                  >
                    Text Decoration
                  </a>
                </li>
                <li>
                  <a
                    className='-ml-px block border-l border-transparent pl-4 text-neutral-700 hover:border-neutral-400 hover:text-neutral-900 dark:text-neutral-400 dark:hover:border-neutral-500 dark:hover:text-neutral-300'
                    href='/docs/text-decoration-color'
                  >
                    Text Decoration Color
                  </a>
                </li>
                <li>
                  <a
                    className='-ml-px block border-l border-transparent pl-4 text-neutral-700 hover:border-neutral-400 hover:text-neutral-900 dark:text-neutral-400 dark:hover:border-neutral-500 dark:hover:text-neutral-300'
                    href='/docs/text-decoration-style'
                  >
                    Text Decoration Style
                  </a>
                </li>
                <li>
                  <a
                    className='-ml-px block border-l border-transparent pl-4 text-neutral-700 hover:border-neutral-400 hover:text-neutral-900 dark:text-neutral-400 dark:hover:border-neutral-500 dark:hover:text-neutral-300'
                    href='/docs/text-decoration-thickness'
                  >
                    Text Decoration Thickness
                  </a>
                </li>
                <li>
                  <a
                    className='-ml-px block border-l border-transparent pl-4 text-neutral-700 hover:border-neutral-400 hover:text-neutral-900 dark:text-neutral-400 dark:hover:border-neutral-500 dark:hover:text-neutral-300'
                    href='/docs/text-underline-offset'
                  >
                    Text Underline Offset
                  </a>
                </li>
                <li>
                  <a
                    className='-ml-px block border-l border-transparent pl-4 text-neutral-700 hover:border-neutral-400 hover:text-neutral-900 dark:text-neutral-400 dark:hover:border-neutral-500 dark:hover:text-neutral-300'
                    href='/docs/text-transform'
                  >
                    Text Transform
                  </a>
                </li>
                <li>
                  <a
                    className='-ml-px block border-l border-transparent pl-4 text-neutral-700 hover:border-neutral-400 hover:text-neutral-900 dark:text-neutral-400 dark:hover:border-neutral-500 dark:hover:text-neutral-300'
                    href='/docs/text-overflow'
                  >
                    Text Overflow
                  </a>
                </li>
                <li>
                  <a
                    className='-ml-px block border-l border-transparent pl-4 text-neutral-700 hover:border-neutral-400 hover:text-neutral-900 dark:text-neutral-400 dark:hover:border-neutral-500 dark:hover:text-neutral-300'
                    href='/docs/text-indent'
                  >
                    Text Indent
                  </a>
                </li>
                <li>
                  <a
                    className='-ml-px block border-l border-transparent pl-4 text-neutral-700 hover:border-neutral-400 hover:text-neutral-900 dark:text-neutral-400 dark:hover:border-neutral-500 dark:hover:text-neutral-300'
                    href='/docs/vertical-align'
                  >
                    Vertical Align
                  </a>
                </li>
                <li>
                  <a
                    className='-ml-px block border-l border-transparent pl-4 text-neutral-700 hover:border-neutral-400 hover:text-neutral-900 dark:text-neutral-400 dark:hover:border-neutral-500 dark:hover:text-neutral-300'
                    href='/docs/whitespace'
                  >
                    Whitespace
                  </a>
                </li>
                <li>
                  <a
                    className='-ml-px block border-l border-transparent pl-4 text-neutral-700 hover:border-neutral-400 hover:text-neutral-900 dark:text-neutral-400 dark:hover:border-neutral-500 dark:hover:text-neutral-300'
                    href='/docs/word-break'
                  >
                    Word Break
                  </a>
                </li>
                <li>
                  <a
                    className='-ml-px block border-l border-transparent pl-4 text-neutral-700 hover:border-neutral-400 hover:text-neutral-900 dark:text-neutral-400 dark:hover:border-neutral-500 dark:hover:text-neutral-300'
                    href='/docs/content'
                  >
                    Content
                  </a>
                </li>
              </ul>
            </li>
            <li className='mt-12 lg:mt-8'>
              <h5 className='mb-8 font-semibold text-neutral-900 dark:text-neutral-200 lg:mb-3'>
                Backgrounds
              </h5>
              <ul className='space-y-6 border-l border-neutral-100 dark:border-neutral-700 lg:space-y-2'>
                <li>
                  <a
                    className='-ml-px block border-l border-transparent pl-4 text-neutral-700 hover:border-neutral-400 hover:text-neutral-900 dark:text-neutral-400 dark:hover:border-neutral-500 dark:hover:text-neutral-300'
                    href='/docs/background-attachment'
                  >
                    Background Attachment
                  </a>
                </li>
                <li>
                  <a
                    className='-ml-px block border-l border-transparent pl-4 text-neutral-700 hover:border-neutral-400 hover:text-neutral-900 dark:text-neutral-400 dark:hover:border-neutral-500 dark:hover:text-neutral-300'
                    href='/docs/background-clip'
                  >
                    Background Clip
                  </a>
                </li>
                <li>
                  <a
                    className='-ml-px block border-l border-transparent pl-4 text-neutral-700 hover:border-neutral-400 hover:text-neutral-900 dark:text-neutral-400 dark:hover:border-neutral-500 dark:hover:text-neutral-300'
                    href='/docs/background-color'
                  >
                    Background Color
                  </a>
                </li>
                <li>
                  <a
                    className='-ml-px block border-l border-transparent pl-4 text-neutral-700 hover:border-neutral-400 hover:text-neutral-900 dark:text-neutral-400 dark:hover:border-neutral-500 dark:hover:text-neutral-300'
                    href='/docs/background-origin'
                  >
                    Background Origin
                  </a>
                </li>
                <li>
                  <a
                    className='-ml-px block border-l border-transparent pl-4 text-neutral-700 hover:border-neutral-400 hover:text-neutral-900 dark:text-neutral-400 dark:hover:border-neutral-500 dark:hover:text-neutral-300'
                    href='/docs/background-position'
                  >
                    Background Position
                  </a>
                </li>
                <li>
                  <a
                    className='-ml-px block border-l border-transparent pl-4 text-neutral-700 hover:border-neutral-400 hover:text-neutral-900 dark:text-neutral-400 dark:hover:border-neutral-500 dark:hover:text-neutral-300'
                    href='/docs/background-repeat'
                  >
                    Background Repeat
                  </a>
                </li>
                <li>
                  <a
                    className='-ml-px block border-l border-transparent pl-4 text-neutral-700 hover:border-neutral-400 hover:text-neutral-900 dark:text-neutral-400 dark:hover:border-neutral-500 dark:hover:text-neutral-300'
                    href='/docs/background-size'
                  >
                    Background Size
                  </a>
                </li>
                <li>
                  <a
                    className='-ml-px block border-l border-transparent pl-4 text-neutral-700 hover:border-neutral-400 hover:text-neutral-900 dark:text-neutral-400 dark:hover:border-neutral-500 dark:hover:text-neutral-300'
                    href='/docs/background-image'
                  >
                    Background Image
                  </a>
                </li>
                <li>
                  <a
                    className='-ml-px block border-l border-transparent pl-4 text-neutral-700 hover:border-neutral-400 hover:text-neutral-900 dark:text-neutral-400 dark:hover:border-neutral-500 dark:hover:text-neutral-300'
                    href='/docs/gradient-color-stops'
                  >
                    Gradient Color Stops
                  </a>
                </li>
              </ul>
            </li>
            <li className='mt-12 lg:mt-8'>
              <h5 className='mb-8 font-semibold text-neutral-900 dark:text-neutral-200 lg:mb-3'>
                Borders
              </h5>
              <ul className='space-y-6 border-l border-neutral-100 dark:border-neutral-700 lg:space-y-2'>
                <li>
                  <a
                    className='-ml-px block border-l border-transparent pl-4 text-neutral-700 hover:border-neutral-400 hover:text-neutral-900 dark:text-neutral-400 dark:hover:border-neutral-500 dark:hover:text-neutral-300'
                    href='/docs/border-radius'
                  >
                    Border Radius
                  </a>
                </li>
                <li>
                  <a
                    className='-ml-px block border-l border-transparent pl-4 text-neutral-700 hover:border-neutral-400 hover:text-neutral-900 dark:text-neutral-400 dark:hover:border-neutral-500 dark:hover:text-neutral-300'
                    href='/docs/border-width'
                  >
                    Border Width
                  </a>
                </li>
                <li>
                  <a
                    className='-ml-px block border-l border-transparent pl-4 text-neutral-700 hover:border-neutral-400 hover:text-neutral-900 dark:text-neutral-400 dark:hover:border-neutral-500 dark:hover:text-neutral-300'
                    href='/docs/border-color'
                  >
                    Border Color
                  </a>
                </li>
                <li>
                  <a
                    className='-ml-px block border-l border-transparent pl-4 text-neutral-700 hover:border-neutral-400 hover:text-neutral-900 dark:text-neutral-400 dark:hover:border-neutral-500 dark:hover:text-neutral-300'
                    href='/docs/border-style'
                  >
                    Border Style
                  </a>
                </li>
                <li>
                  <a
                    className='-ml-px block border-l border-transparent pl-4 text-neutral-700 hover:border-neutral-400 hover:text-neutral-900 dark:text-neutral-400 dark:hover:border-neutral-500 dark:hover:text-neutral-300'
                    href='/docs/divide-width'
                  >
                    Divide Width
                  </a>
                </li>
                <li>
                  <a
                    className='-ml-px block border-l border-transparent pl-4 text-neutral-700 hover:border-neutral-400 hover:text-neutral-900 dark:text-neutral-400 dark:hover:border-neutral-500 dark:hover:text-neutral-300'
                    href='/docs/divide-color'
                  >
                    Divide Color
                  </a>
                </li>
                <li>
                  <a
                    className='-ml-px block border-l border-transparent pl-4 text-neutral-700 hover:border-neutral-400 hover:text-neutral-900 dark:text-neutral-400 dark:hover:border-neutral-500 dark:hover:text-neutral-300'
                    href='/docs/divide-style'
                  >
                    Divide Style
                  </a>
                </li>
                <li>
                  <a
                    className='-ml-px block border-l border-transparent pl-4 text-neutral-700 hover:border-neutral-400 hover:text-neutral-900 dark:text-neutral-400 dark:hover:border-neutral-500 dark:hover:text-neutral-300'
                    href='/docs/outline-width'
                  >
                    Outline Width
                  </a>
                </li>
                <li>
                  <a
                    className='-ml-px block border-l border-transparent pl-4 text-neutral-700 hover:border-neutral-400 hover:text-neutral-900 dark:text-neutral-400 dark:hover:border-neutral-500 dark:hover:text-neutral-300'
                    href='/docs/outline-color'
                  >
                    Outline Color
                  </a>
                </li>
                <li>
                  <a
                    className='-ml-px block border-l border-transparent pl-4 text-neutral-700 hover:border-neutral-400 hover:text-neutral-900 dark:text-neutral-400 dark:hover:border-neutral-500 dark:hover:text-neutral-300'
                    href='/docs/outline-style'
                  >
                    Outline Style
                  </a>
                </li>
                <li>
                  <a
                    className='-ml-px block border-l border-transparent pl-4 text-neutral-700 hover:border-neutral-400 hover:text-neutral-900 dark:text-neutral-400 dark:hover:border-neutral-500 dark:hover:text-neutral-300'
                    href='/docs/outline-offset'
                  >
                    Outline Offset
                  </a>
                </li>
                <li>
                  <a
                    className='-ml-px block border-l border-transparent pl-4 text-neutral-700 hover:border-neutral-400 hover:text-neutral-900 dark:text-neutral-400 dark:hover:border-neutral-500 dark:hover:text-neutral-300'
                    href='/docs/ring-width'
                  >
                    Ring Width
                  </a>
                </li>
                <li>
                  <a
                    className='-ml-px block border-l border-transparent pl-4 text-neutral-700 hover:border-neutral-400 hover:text-neutral-900 dark:text-neutral-400 dark:hover:border-neutral-500 dark:hover:text-neutral-300'
                    href='/docs/ring-color'
                  >
                    Ring Color
                  </a>
                </li>
                <li>
                  <a
                    className='-ml-px block border-l border-transparent pl-4 text-neutral-700 hover:border-neutral-400 hover:text-neutral-900 dark:text-neutral-400 dark:hover:border-neutral-500 dark:hover:text-neutral-300'
                    href='/docs/ring-offset-width'
                  >
                    Ring Offset Width
                  </a>
                </li>
                <li>
                  <a
                    className='-ml-px block border-l border-transparent pl-4 text-neutral-700 hover:border-neutral-400 hover:text-neutral-900 dark:text-neutral-400 dark:hover:border-neutral-500 dark:hover:text-neutral-300'
                    href='/docs/ring-offset-color'
                  >
                    Ring Offset Color
                  </a>
                </li>
              </ul>
            </li>
            <li className='mt-12 lg:mt-8'>
              <h5 className='mb-8 font-semibold text-neutral-900 dark:text-neutral-200 lg:mb-3'>
                Effects
              </h5>
              <ul className='space-y-6 border-l border-neutral-100 dark:border-neutral-700 lg:space-y-2'>
                <li>
                  <a
                    className='-ml-px block border-l border-transparent pl-4 text-neutral-700 hover:border-neutral-400 hover:text-neutral-900 dark:text-neutral-400 dark:hover:border-neutral-500 dark:hover:text-neutral-300'
                    href='/docs/box-shadow'
                  >
                    Box Shadow
                  </a>
                </li>
                <li>
                  <a
                    className='-ml-px block border-l border-transparent pl-4 text-neutral-700 hover:border-neutral-400 hover:text-neutral-900 dark:text-neutral-400 dark:hover:border-neutral-500 dark:hover:text-neutral-300'
                    href='/docs/box-shadow-color'
                  >
                    Box Shadow Color
                  </a>
                </li>
                <li>
                  <a
                    className='-ml-px block border-l border-transparent pl-4 text-neutral-700 hover:border-neutral-400 hover:text-neutral-900 dark:text-neutral-400 dark:hover:border-neutral-500 dark:hover:text-neutral-300'
                    href='/docs/opacity'
                  >
                    Opacity
                  </a>
                </li>
                <li>
                  <a
                    className='-ml-px block border-l border-transparent pl-4 text-neutral-700 hover:border-neutral-400 hover:text-neutral-900 dark:text-neutral-400 dark:hover:border-neutral-500 dark:hover:text-neutral-300'
                    href='/docs/mix-blend-mode'
                  >
                    Mix Blend Mode
                  </a>
                </li>
                <li>
                  <a
                    className='-ml-px block border-l border-transparent pl-4 text-neutral-700 hover:border-neutral-400 hover:text-neutral-900 dark:text-neutral-400 dark:hover:border-neutral-500 dark:hover:text-neutral-300'
                    href='/docs/background-blend-mode'
                  >
                    Background Blend Mode
                  </a>
                </li>
              </ul>
            </li>
            <li className='mt-12 lg:mt-8'>
              <h5 className='mb-8 font-semibold text-neutral-900 dark:text-neutral-200 lg:mb-3'>
                Filters
              </h5>
              <ul className='space-y-6 border-l border-neutral-100 dark:border-neutral-700 lg:space-y-2'>
                <li>
                  <a
                    className='-ml-px block border-l border-transparent pl-4 text-neutral-700 hover:border-neutral-400 hover:text-neutral-900 dark:text-neutral-400 dark:hover:border-neutral-500 dark:hover:text-neutral-300'
                    href='/docs/blur'
                  >
                    Blur
                  </a>
                </li>
                <li>
                  <a
                    className='-ml-px block border-l border-transparent pl-4 text-neutral-700 hover:border-neutral-400 hover:text-neutral-900 dark:text-neutral-400 dark:hover:border-neutral-500 dark:hover:text-neutral-300'
                    href='/docs/brightness'
                  >
                    Brightness
                  </a>
                </li>
                <li>
                  <a
                    className='-ml-px block border-l border-transparent pl-4 text-neutral-700 hover:border-neutral-400 hover:text-neutral-900 dark:text-neutral-400 dark:hover:border-neutral-500 dark:hover:text-neutral-300'
                    href='/docs/contrast'
                  >
                    Contrast
                  </a>
                </li>
                <li>
                  <a
                    className='-ml-px block border-l border-transparent pl-4 text-neutral-700 hover:border-neutral-400 hover:text-neutral-900 dark:text-neutral-400 dark:hover:border-neutral-500 dark:hover:text-neutral-300'
                    href='/docs/drop-shadow'
                  >
                    Drop Shadow
                  </a>
                </li>
                <li>
                  <a
                    className='-ml-px block border-l border-transparent pl-4 text-neutral-700 hover:border-neutral-400 hover:text-neutral-900 dark:text-neutral-400 dark:hover:border-neutral-500 dark:hover:text-neutral-300'
                    href='/docs/grayscale'
                  >
                    Grayscale
                  </a>
                </li>
                <li>
                  <a
                    className='-ml-px block border-l border-transparent pl-4 text-neutral-700 hover:border-neutral-400 hover:text-neutral-900 dark:text-neutral-400 dark:hover:border-neutral-500 dark:hover:text-neutral-300'
                    href='/docs/hue-rotate'
                  >
                    Hue Rotate
                  </a>
                </li>
                <li>
                  <a
                    className='-ml-px block border-l border-transparent pl-4 text-neutral-700 hover:border-neutral-400 hover:text-neutral-900 dark:text-neutral-400 dark:hover:border-neutral-500 dark:hover:text-neutral-300'
                    href='/docs/invert'
                  >
                    Invert
                  </a>
                </li>
                <li>
                  <a
                    className='-ml-px block border-l border-transparent pl-4 text-neutral-700 hover:border-neutral-400 hover:text-neutral-900 dark:text-neutral-400 dark:hover:border-neutral-500 dark:hover:text-neutral-300'
                    href='/docs/saturate'
                  >
                    Saturate
                  </a>
                </li>
                <li>
                  <a
                    className='-ml-px block border-l border-transparent pl-4 text-neutral-700 hover:border-neutral-400 hover:text-neutral-900 dark:text-neutral-400 dark:hover:border-neutral-500 dark:hover:text-neutral-300'
                    href='/docs/sepia'
                  >
                    Sepia
                  </a>
                </li>
                <li>
                  <a
                    className='-ml-px block border-l border-transparent pl-4 text-neutral-700 hover:border-neutral-400 hover:text-neutral-900 dark:text-neutral-400 dark:hover:border-neutral-500 dark:hover:text-neutral-300'
                    href='/docs/backdrop-blur'
                  >
                    Backdrop Blur
                  </a>
                </li>
                <li>
                  <a
                    className='-ml-px block border-l border-transparent pl-4 text-neutral-700 hover:border-neutral-400 hover:text-neutral-900 dark:text-neutral-400 dark:hover:border-neutral-500 dark:hover:text-neutral-300'
                    href='/docs/backdrop-brightness'
                  >
                    Backdrop Brightness
                  </a>
                </li>
                <li>
                  <a
                    className='-ml-px block border-l border-transparent pl-4 text-neutral-700 hover:border-neutral-400 hover:text-neutral-900 dark:text-neutral-400 dark:hover:border-neutral-500 dark:hover:text-neutral-300'
                    href='/docs/backdrop-contrast'
                  >
                    Backdrop Contrast
                  </a>
                </li>
                <li>
                  <a
                    className='-ml-px block border-l border-transparent pl-4 text-neutral-700 hover:border-neutral-400 hover:text-neutral-900 dark:text-neutral-400 dark:hover:border-neutral-500 dark:hover:text-neutral-300'
                    href='/docs/backdrop-grayscale'
                  >
                    Backdrop Grayscale
                  </a>
                </li>
                <li>
                  <a
                    className='-ml-px block border-l border-transparent pl-4 text-neutral-700 hover:border-neutral-400 hover:text-neutral-900 dark:text-neutral-400 dark:hover:border-neutral-500 dark:hover:text-neutral-300'
                    href='/docs/backdrop-hue-rotate'
                  >
                    Backdrop Hue Rotate
                  </a>
                </li>
                <li>
                  <a
                    className='-ml-px block border-l border-transparent pl-4 text-neutral-700 hover:border-neutral-400 hover:text-neutral-900 dark:text-neutral-400 dark:hover:border-neutral-500 dark:hover:text-neutral-300'
                    href='/docs/backdrop-invert'
                  >
                    Backdrop Invert
                  </a>
                </li>
                <li>
                  <a
                    className='-ml-px block border-l border-transparent pl-4 text-neutral-700 hover:border-neutral-400 hover:text-neutral-900 dark:text-neutral-400 dark:hover:border-neutral-500 dark:hover:text-neutral-300'
                    href='/docs/backdrop-opacity'
                  >
                    Backdrop Opacity
                  </a>
                </li>
                <li>
                  <a
                    className='-ml-px block border-l border-transparent pl-4 text-neutral-700 hover:border-neutral-400 hover:text-neutral-900 dark:text-neutral-400 dark:hover:border-neutral-500 dark:hover:text-neutral-300'
                    href='/docs/backdrop-saturate'
                  >
                    Backdrop Saturate
                  </a>
                </li>
                <li>
                  <a
                    className='-ml-px block border-l border-transparent pl-4 text-neutral-700 hover:border-neutral-400 hover:text-neutral-900 dark:text-neutral-400 dark:hover:border-neutral-500 dark:hover:text-neutral-300'
                    href='/docs/backdrop-sepia'
                  >
                    Backdrop Sepia
                  </a>
                </li>
              </ul>
            </li>
            <li className='mt-12 lg:mt-8'>
              <h5 className='mb-8 font-semibold text-neutral-900 dark:text-neutral-200 lg:mb-3'>
                Tables
              </h5>
              <ul className='space-y-6 border-l border-neutral-100 dark:border-neutral-700 lg:space-y-2'>
                <li>
                  <a
                    className='-ml-px block border-l border-transparent pl-4 text-neutral-700 hover:border-neutral-400 hover:text-neutral-900 dark:text-neutral-400 dark:hover:border-neutral-500 dark:hover:text-neutral-300'
                    href='/docs/border-collapse'
                  >
                    Border Collapse
                  </a>
                </li>
                <li>
                  <a
                    className='-ml-px block border-l border-transparent pl-4 text-neutral-700 hover:border-neutral-400 hover:text-neutral-900 dark:text-neutral-400 dark:hover:border-neutral-500 dark:hover:text-neutral-300'
                    href='/docs/table-layout'
                  >
                    Table Layout
                  </a>
                </li>
              </ul>
            </li>
            <li className='mt-12 lg:mt-8'>
              <h5 className='mb-8 font-semibold text-neutral-900 dark:text-neutral-200 lg:mb-3'>
                Transitions &amp; Animation
              </h5>
              <ul className='space-y-6 border-l border-neutral-100 dark:border-neutral-700 lg:space-y-2'>
                <li>
                  <a
                    className='-ml-px block border-l border-transparent pl-4 text-neutral-700 hover:border-neutral-400 hover:text-neutral-900 dark:text-neutral-400 dark:hover:border-neutral-500 dark:hover:text-neutral-300'
                    href='/docs/transition-property'
                  >
                    Transition Property
                  </a>
                </li>
                <li>
                  <a
                    className='-ml-px block border-l border-transparent pl-4 text-neutral-700 hover:border-neutral-400 hover:text-neutral-900 dark:text-neutral-400 dark:hover:border-neutral-500 dark:hover:text-neutral-300'
                    href='/docs/transition-duration'
                  >
                    Transition Duration
                  </a>
                </li>
                <li>
                  <a
                    className='-ml-px block border-l border-transparent pl-4 text-neutral-700 hover:border-neutral-400 hover:text-neutral-900 dark:text-neutral-400 dark:hover:border-neutral-500 dark:hover:text-neutral-300'
                    href='/docs/transition-timing-function'
                  >
                    Transition Timing Function
                  </a>
                </li>
                <li>
                  <a
                    className='-ml-px block border-l border-transparent pl-4 text-neutral-700 hover:border-neutral-400 hover:text-neutral-900 dark:text-neutral-400 dark:hover:border-neutral-500 dark:hover:text-neutral-300'
                    href='/docs/transition-delay'
                  >
                    Transition Delay
                  </a>
                </li>
                <li>
                  <a
                    className='-ml-px block border-l border-transparent pl-4 text-neutral-700 hover:border-neutral-400 hover:text-neutral-900 dark:text-neutral-400 dark:hover:border-neutral-500 dark:hover:text-neutral-300'
                    href='/docs/animation'
                  >
                    Animation
                  </a>
                </li>
              </ul>
            </li>
            <li className='mt-12 lg:mt-8'>
              <h5 className='mb-8 font-semibold text-neutral-900 dark:text-neutral-200 lg:mb-3'>
                Transforms
              </h5>
              <ul className='space-y-6 border-l border-neutral-100 dark:border-neutral-700 lg:space-y-2'>
                <li>
                  <a
                    className='-ml-px block border-l border-transparent pl-4 text-neutral-700 hover:border-neutral-400 hover:text-neutral-900 dark:text-neutral-400 dark:hover:border-neutral-500 dark:hover:text-neutral-300'
                    href='/docs/scale'
                  >
                    Scale
                  </a>
                </li>
                <li>
                  <a
                    className='-ml-px block border-l border-transparent pl-4 text-neutral-700 hover:border-neutral-400 hover:text-neutral-900 dark:text-neutral-400 dark:hover:border-neutral-500 dark:hover:text-neutral-300'
                    href='/docs/rotate'
                  >
                    Rotate
                  </a>
                </li>
                <li>
                  <a
                    className='-ml-px block border-l border-transparent pl-4 text-neutral-700 hover:border-neutral-400 hover:text-neutral-900 dark:text-neutral-400 dark:hover:border-neutral-500 dark:hover:text-neutral-300'
                    href='/docs/translate'
                  >
                    Translate
                  </a>
                </li>
                <li>
                  <a
                    className='-ml-px block border-l border-transparent pl-4 text-neutral-700 hover:border-neutral-400 hover:text-neutral-900 dark:text-neutral-400 dark:hover:border-neutral-500 dark:hover:text-neutral-300'
                    href='/docs/skew'
                  >
                    Skew
                  </a>
                </li>
                <li>
                  <a
                    className='-ml-px block border-l border-transparent pl-4 text-neutral-700 hover:border-neutral-400 hover:text-neutral-900 dark:text-neutral-400 dark:hover:border-neutral-500 dark:hover:text-neutral-300'
                    href='/docs/transform-origin'
                  >
                    Transform Origin
                  </a>
                </li>
              </ul>
            </li>
            <li className='mt-12 lg:mt-8'>
              <h5 className='mb-8 font-semibold text-neutral-900 dark:text-neutral-200 lg:mb-3'>
                Interactivity
              </h5>
              <ul className='space-y-6 border-l border-neutral-100 dark:border-neutral-700 lg:space-y-2'>
                <li>
                  <a
                    className='-ml-px block border-l border-transparent pl-4 text-neutral-700 hover:border-neutral-400 hover:text-neutral-900 dark:text-neutral-400 dark:hover:border-neutral-500 dark:hover:text-neutral-300'
                    href='/docs/accent-color'
                  >
                    Accent Color
                  </a>
                </li>
                <li>
                  <a
                    className='-ml-px block border-l border-transparent pl-4 text-neutral-700 hover:border-neutral-400 hover:text-neutral-900 dark:text-neutral-400 dark:hover:border-neutral-500 dark:hover:text-neutral-300'
                    href='/docs/appearance'
                  >
                    Appearance
                  </a>
                </li>
                <li>
                  <a
                    className='-ml-px block border-l border-transparent pl-4 text-neutral-700 hover:border-neutral-400 hover:text-neutral-900 dark:text-neutral-400 dark:hover:border-neutral-500 dark:hover:text-neutral-300'
                    href='/docs/cursor'
                  >
                    Cursor
                  </a>
                </li>
                <li>
                  <a
                    className='-ml-px block border-l border-transparent pl-4 text-neutral-700 hover:border-neutral-400 hover:text-neutral-900 dark:text-neutral-400 dark:hover:border-neutral-500 dark:hover:text-neutral-300'
                    href='/docs/caret-color'
                  >
                    Caret Color
                  </a>
                </li>
                <li>
                  <a
                    className='-ml-px block border-l border-transparent pl-4 text-neutral-700 hover:border-neutral-400 hover:text-neutral-900 dark:text-neutral-400 dark:hover:border-neutral-500 dark:hover:text-neutral-300'
                    href='/docs/pointer-events'
                  >
                    Pointer Events
                  </a>
                </li>
                <li>
                  <a
                    className='-ml-px block border-l border-transparent pl-4 text-neutral-700 hover:border-neutral-400 hover:text-neutral-900 dark:text-neutral-400 dark:hover:border-neutral-500 dark:hover:text-neutral-300'
                    href='/docs/resize'
                  >
                    Resize
                  </a>
                </li>
                <li>
                  <a
                    className='-ml-px block border-l border-transparent pl-4 text-neutral-700 hover:border-neutral-400 hover:text-neutral-900 dark:text-neutral-400 dark:hover:border-neutral-500 dark:hover:text-neutral-300'
                    href='/docs/scroll-behavior'
                  >
                    Scroll Behavior
                  </a>
                </li>
                <li>
                  <a
                    className='-ml-px block border-l border-transparent pl-4 text-neutral-700 hover:border-neutral-400 hover:text-neutral-900 dark:text-neutral-400 dark:hover:border-neutral-500 dark:hover:text-neutral-300'
                    href='/docs/scroll-margin'
                  >
                    Scroll Margin
                  </a>
                </li>
                <li>
                  <a
                    className='-ml-px block border-l border-transparent pl-4 text-neutral-700 hover:border-neutral-400 hover:text-neutral-900 dark:text-neutral-400 dark:hover:border-neutral-500 dark:hover:text-neutral-300'
                    href='/docs/scroll-padding'
                  >
                    Scroll Padding
                  </a>
                </li>
                <li>
                  <a
                    className='-ml-px block border-l border-transparent pl-4 text-neutral-700 hover:border-neutral-400 hover:text-neutral-900 dark:text-neutral-400 dark:hover:border-neutral-500 dark:hover:text-neutral-300'
                    href='/docs/scroll-snap-align'
                  >
                    Scroll Snap Align
                  </a>
                </li>
                <li>
                  <a
                    className='-ml-px block border-l border-transparent pl-4 text-neutral-700 hover:border-neutral-400 hover:text-neutral-900 dark:text-neutral-400 dark:hover:border-neutral-500 dark:hover:text-neutral-300'
                    href='/docs/scroll-snap-stop'
                  >
                    Scroll Snap Stop
                  </a>
                </li>
                <li>
                  <a
                    className='-ml-px block border-l border-transparent pl-4 text-neutral-700 hover:border-neutral-400 hover:text-neutral-900 dark:text-neutral-400 dark:hover:border-neutral-500 dark:hover:text-neutral-300'
                    href='/docs/scroll-snap-type'
                  >
                    Scroll Snap Type
                  </a>
                </li>
                <li>
                  <a
                    className='-ml-px block border-l border-transparent pl-4 text-neutral-700 hover:border-neutral-400 hover:text-neutral-900 dark:text-neutral-400 dark:hover:border-neutral-500 dark:hover:text-neutral-300'
                    href='/docs/touch-action'
                  >
                    Touch Action
                  </a>
                </li>
                <li>
                  <a
                    className='-ml-px block border-l border-transparent pl-4 text-neutral-700 hover:border-neutral-400 hover:text-neutral-900 dark:text-neutral-400 dark:hover:border-neutral-500 dark:hover:text-neutral-300'
                    href='/docs/user-select'
                  >
                    User Select
                  </a>
                </li>
                <li>
                  <a
                    className='-ml-px block border-l border-transparent pl-4 text-neutral-700 hover:border-neutral-400 hover:text-neutral-900 dark:text-neutral-400 dark:hover:border-neutral-500 dark:hover:text-neutral-300'
                    href='/docs/will-change'
                  >
                    Will Change
                  </a>
                </li>
              </ul>
            </li>
            <li className='mt-12 lg:mt-8'>
              <h5 className='mb-8 font-semibold text-neutral-900 dark:text-neutral-200 lg:mb-3'>
                SVG
              </h5>
              <ul className='space-y-6 border-l border-neutral-100 dark:border-neutral-700 lg:space-y-2'>
                <li>
                  <a
                    className='-ml-px block border-l border-transparent pl-4 text-neutral-700 hover:border-neutral-400 hover:text-neutral-900 dark:text-neutral-400 dark:hover:border-neutral-500 dark:hover:text-neutral-300'
                    href='/docs/fill'
                  >
                    Fill
                  </a>
                </li>
                <li>
                  <a
                    className='-ml-px block border-l border-transparent pl-4 text-neutral-700 hover:border-neutral-400 hover:text-neutral-900 dark:text-neutral-400 dark:hover:border-neutral-500 dark:hover:text-neutral-300'
                    href='/docs/stroke'
                  >
                    Stroke
                  </a>
                </li>
                <li>
                  <a
                    className='-ml-px block border-l border-transparent pl-4 text-neutral-700 hover:border-neutral-400 hover:text-neutral-900 dark:text-neutral-400 dark:hover:border-neutral-500 dark:hover:text-neutral-300'
                    href='/docs/stroke-width'
                  >
                    Stroke Width
                  </a>
                </li>
              </ul>
            </li>
            <li className='mt-12 lg:mt-8'>
              <h5 className='mb-8 font-semibold text-neutral-900 dark:text-neutral-200 lg:mb-3'>
                Accessibility
              </h5>
              <ul className='space-y-6 border-l border-neutral-100 dark:border-neutral-700 lg:space-y-2'>
                <li>
                  <a
                    className='-ml-px block border-l border-transparent pl-4 text-neutral-700 hover:border-neutral-400 hover:text-neutral-900 dark:text-neutral-400 dark:hover:border-neutral-500 dark:hover:text-neutral-300'
                    href='/docs/screen-readers'
                  >
                    Screen Readers
                  </a>
                </li>
              </ul>
            </li>
            <li className='mt-12 lg:mt-8'>
              <h5 className='mb-8 font-semibold text-neutral-900 dark:text-neutral-200 lg:mb-3'>
                Official Plugins
              </h5>
              <ul className='space-y-6 border-l border-neutral-100 dark:border-neutral-700 lg:space-y-2'>
                <li>
                  <a
                    className='-ml-px block border-l border-transparent pl-4 text-neutral-700 hover:border-neutral-400 hover:text-neutral-900 dark:text-neutral-400 dark:hover:border-neutral-500 dark:hover:text-neutral-300'
                    href='/docs/typography-plugin'
                  >
                    Typography
                  </a>
                </li>
                <li>
                  <a
                    className='-ml-px block border-l border-transparent pl-4 text-neutral-700 hover:border-neutral-400 hover:text-neutral-900 dark:text-neutral-400 dark:hover:border-neutral-500 dark:hover:text-neutral-300'
                    href='https://github.com/tailwindlabs/tailwindcss-forms'
                  >
                    Forms
                  </a>
                </li>
                <li>
                  <a
                    className='-ml-px block border-l border-transparent pl-4 text-neutral-700 hover:border-neutral-400 hover:text-neutral-900 dark:text-neutral-400 dark:hover:border-neutral-500 dark:hover:text-neutral-300'
                    href='https://github.com/tailwindlabs/tailwindcss-aspect-ratio'
                  >
                    Aspect Ratio
                  </a>
                </li>
                <li>
                  <a
                    className='-ml-px block border-l border-transparent pl-4 text-neutral-700 hover:border-neutral-400 hover:text-neutral-900 dark:text-neutral-400 dark:hover:border-neutral-500 dark:hover:text-neutral-300'
                    href='https://github.com/tailwindlabs/tailwindcss-line-clamp'
                  >
                    Line Clamp
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default SideMenu;
