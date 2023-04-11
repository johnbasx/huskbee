import { Path, SubmitHandler, UseFormRegister, useForm } from "react-hook-form"

import { IFormValues } from "../../../pages/organiser/create-event";

type InputProps = {
    label: Path<IFormValues>;
    register: UseFormRegister<IFormValues>;
    required: boolean;
  };

const EventDescription = ({ label, register, required }: InputProps) => (
    <>
       <label
              htmlFor="event-name"
              className="block text-sm font-medium text-gray-50"
            >
              {label}
            </label>
            <div className="mt-1">
              <input
              {...register(label, { required })}
                type="text"
                name="event-name"
                id="event-name"
                autoComplete="given-name"
                className="block w-full px-4 py-2 text-gray-200 border rounded-md border-gray-500 bg-gray-800 focus:ring-opacity-40 focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300 autofill:bg-zinc-700/50"
              />
            </div>
    </>
  );
 
  export default EventDescription