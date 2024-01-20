import React from 'react';
import { RegistrationFormsStore } from '@store/index';
import Link from 'next/link';

const steps = [
  { id: 'Step 1', name: 'organisation detail', href: '#', status: 'complete' },
  { id: 'Step 2', name: 'Address', href: '#', status: 'current' },
  { id: 'Step 3', name: 'Bank Detail', href: '#', status: 'upcoming' },
];

const ProgressStepsBar = () => {
  const {
    setOrgDetailFormStatus,
    setAddressFormStatus,
    setBankDetailFormStatus,
  } = RegistrationFormsStore();

  const ChooseFormHandler = (formId: string) => {
    if (formId === 'Step 1') {
      setOrgDetailFormStatus(true);
      setAddressFormStatus(false);
      setBankDetailFormStatus(false);
    } else if (formId === 'Step 2') {
      setOrgDetailFormStatus(false);
      setAddressFormStatus(true);
      setBankDetailFormStatus(false);
    } else if (formId === 'Step 3') {
      setOrgDetailFormStatus(false);
      setAddressFormStatus(false);
      setBankDetailFormStatus(true);
    }
  };
  return (
    <nav aria-label='Progress'>
      <ol className='space-y-4 md:flex md:space-x-8 md:space-y-0'>
        {steps.map((step) => (
          <li key={step.name} className='md:flex-1'>
            {step.status === 'complete' ? (
              <Link
                href={step.href}
                className='group flex flex-col border-l-4 border-indigo-600 py-2 pl-4 hover:border-indigo-800 md:border-l-0 md:border-t-4 md:pb-0 md:pl-0 md:pt-4'
                onClick={() => ChooseFormHandler(step.id)}
              >
                {/* <div className="w-1/2 h-1 bg-black"></div> */}
                <span className='text-xs font-semibold uppercase tracking-wide text-indigo-600 group-hover:text-indigo-800'>
                  {step.id}
                </span>
                <span className='text-sm font-medium text-neutral-900'>
                  {step.name}
                </span>
              </Link>
            ) : step.status === 'current' ? (
              <Link
                href={step.href}
                className='flex flex-col border-l-4 border-indigo-600 py-2 pl-4 md:border-l-0 md:border-t-4 md:pb-0 md:pl-0 md:pt-4'
                aria-current='step'
                onClick={() => ChooseFormHandler(step.id)}
              >
                <span className='text-xs font-semibold uppercase tracking-wide text-indigo-600'>
                  {step.id}
                </span>
                <span className='text-sm font-medium text-neutral-900'>
                  {step.name}
                </span>
              </Link>
            ) : (
              <Link
                href={step.href}
                className='group flex flex-col border-l-4 border-neutral-200 py-2 pl-4 hover:border-neutral-300 md:border-l-0 md:border-t-4 md:pb-0 md:pl-0 md:pt-4'
                onClick={() => ChooseFormHandler(step.id)}
              >
                <span className='text-xs font-semibold uppercase tracking-wide text-neutral-500 group-hover:text-neutral-700'>
                  {step.id}
                </span>
                <span className='text-sm font-medium text-neutral-900'>
                  {step.name}
                </span>
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default ProgressStepsBar;
