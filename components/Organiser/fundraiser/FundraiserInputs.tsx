import { FundraiserInputProps } from "./CreateFundraiser";

export const Title = ({
  label,
  name,
  register,
  required,
}: FundraiserInputProps) => {
  return (
    <>
      <div className="sm:col-span-4">
        <label
          htmlFor="title"
          className="block text-sm font-medium leading-6 text-gray-100"
        >
          {label}
        </label>
        <div className="mt-2">
          <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
            <input
              {...register(name, { required })}
              type="text"
              name="title"
              id="title"
              autoComplete="title"
              className="block w-full px-4 py-2 text-gray-200 border rounded-md border-gray-500 bg-gray-800 focus:ring-opacity-40 focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300 autofill:bg-zinc-700/50"
              placeholder="janesmith"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export const Goal = ({
  label,
  name,
  register,
  required,
}: FundraiserInputProps) => {
  return (
    <>
      <label
        htmlFor="goal"
        className="block text-sm font-semibold leading-6 text-gray-200"
      >
        {label}
      </label>
      <div className="mt-2.5">
        <input
          {...register(name, { required })}
          type="text"
          name="goal"
          id="goal"
          autoComplete="goal"
          className="block w-full px-4 py-2 text-gray-200 border rounded-md border-gray-500 bg-gray-800 focus:ring-opacity-40 focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300 autofill:bg-zinc-700/50"
        />
      </div>
    </>
  );
};

export const Description = ({
  label,
  name,
  register,
  required,
}: FundraiserInputProps) => {
  return (
    <>
      <label
        htmlFor="description"
        className="block text-sm font-semibold leading-6 text-gray-200"
      >
        {label}
      </label>
      <div className="mt-2.5">
        <textarea
          {...register(name, { required })}
          name="description"
          id="description"
          rows={4}
          className="block w-full px-4 py-2 text-gray-200 border rounded-md border-gray-500 bg-gray-800 focus:ring-opacity-40 focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300 autofill:bg-zinc-700/50"
          defaultValue={""}
        />
      </div>
    </>
  );
};
