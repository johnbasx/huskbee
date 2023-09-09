import { PartnerInputProps } from "./AddNewPartner";

export const PartnerName = ({
  label,
  name,
  register,
  required,
}: PartnerInputProps) => {
  return (
    <div className="sm:col-span-4">
      <label
        htmlFor="name"
        className="block text-sm font-medium leading-6 text-gray-100"
      >
        {label}
      </label>
      <div className="mt-2">
        <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
          <input
            {...register(name, { required })}
            type="text"
            name="name"
            id="name"
            autoComplete="name"
            className="block w-full px-4 py-2 text-gray-200 border rounded-md border-gray-500 bg-gray-800 focus:ring-opacity-40 focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300 autofill:bg-zinc-700/50"
            placeholder="janesmith"
          />
        </div>
      </div>
    </div>
  );
};

export const Description = ({
  label,
  name,
  register,
  required,
}: PartnerInputProps) => {
  return (
    <div className="col-span-full">
      <label
        htmlFor="description"
        className="block text-sm font-medium leading-6 text-gray-100"
      >
        {label}
      </label>
      <div className="mt-2">
        <textarea
          {...register(name, { required })}
          id="description"
          placeholder="write something about the partner"
          name="description"
          rows={3}
          className="block w-full px-4 py-2 text-gray-200 border rounded-md border-gray-500 bg-gray-800 focus:ring-opacity-40 focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300 autofill:bg-zinc-700/50"
          defaultValue={""}
        />
      </div>
    </div>
  );
};

export const Logo = ({
  label,
  name,
  register,
  required,
}: PartnerInputProps) => {
  return (
    <div className="col-span-full">
      <label
        className="block mb-2 text-sm font-medium text-gray-50 "
        htmlFor="logo"
      >
        {label}
      </label>
      <input
        {...register(name, { required })}
        name="logo"
        className="block w-full px-4 py-2 text-gray-200 border rounded-md border-gray-500 bg-gray-800 focus:ring-opacity-40 focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300 autofill:bg-zinc-700/50"
        id="logo"
        type="file"
      />
    </div>
  );
};

export const HeroImage = ({
  label,
  name,
  register,
  required,
}: PartnerInputProps) => {
  return (
    <div className="col-span-full">
      <label
        className="block mb-2 text-sm font-medium text-gray-50 "
        htmlFor="partner-hero-image"
      >
        {label}
      </label>
      <input
        {...register(name, { required })}
        name="hero_image"
        className="block w-full px-4 py-2 text-gray-200 border rounded-md border-gray-500 bg-gray-800 focus:ring-opacity-40 focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300 autofill:bg-zinc-700/50"
        id="partner-hero-image"
        type="file"
      />
    </div>
  );
};
