import { TicketInputProps } from './TicketVariants';

export const OriginalPrice = ({
  label,
  name,
  register,
  required,
}: TicketInputProps) => {
  return (
    <div className='sm:col-span-4'>
      <label
        htmlFor='original_price'
        className='block text-sm font-medium leading-6 text-neutral-100'
      >
        {label}
      </label>
      <div className='mt-2'>
        <div className='flex rounded-md shadow-sm ring-1 ring-inset ring-neutral-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md'>
          <input
            {...register(name, { required })}
            type='number'
            name='original_price'
            id='original_price'
            autoComplete='name'
            className='block w-full rounded-md border border-neutral-500 bg-neutral-800 px-4 py-2 text-neutral-200 autofill:bg-zinc-700/50 focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40'
          />
        </div>
      </div>
    </div>
  );
};

export const OfferPrice = ({
  label,
  name,
  register,
  required,
}: TicketInputProps) => {
  return (
    <div className='col-span-full'>
      <label
        htmlFor='offer_price'
        className='block text-sm font-medium leading-6 text-neutral-100'
      >
        {label}
      </label>
      <div className='mt-2'>
        <input
          {...register(name, { required })}
          type='number'
          id='offer_price'
          name='offer_price'
          className='block w-full rounded-md border border-neutral-500 bg-neutral-800 px-4 py-2 text-neutral-200 autofill:bg-zinc-700/50 focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40'
          defaultValue={''}
        />
      </div>
    </div>
  );
};

export const Type = ({ label, name, register, required }: TicketInputProps) => {
  return (
    <div className='col-span-full'>
      <label
        className='mb-2 block text-sm font-medium text-neutral-50 '
        htmlFor='type'
      >
        {label}
      </label>
      <input
        {...register(name, { required })}
        name='type'
        type='text'
        className='block w-full rounded-md border border-neutral-500 bg-neutral-800 px-4 py-2 text-neutral-200 autofill:bg-zinc-700/50 focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40'
        id='type'
      />
    </div>
  );
};

export const TotalTickets = ({
  label,
  name,
  register,
  required,
}: TicketInputProps) => {
  return (
    <div className='col-span-full'>
      <label
        className='mb-2 block text-sm font-medium text-neutral-50 '
        htmlFor='total_tickets'
      >
        {label}
      </label>
      <input
        {...register(name, { required })}
        type='number'
        name='total_tickets'
        className='block w-full rounded-md border border-neutral-500 bg-neutral-800 px-4 py-2 text-neutral-200 autofill:bg-zinc-700/50 focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40'
        id='total_tickets'
      />
    </div>
  );
};
