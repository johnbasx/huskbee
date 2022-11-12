import {Fragment, useState, useEffect} from 'react';
import {Combobox, Transition, Dialog} from '@headlessui/react';
import {CheckIcon, AtSymbolIcon} from '@heroicons/react/24/outline';

interface PeopleProps {
  id: number;
  name: string;
}

interface DialogProps {
  openSearch: (value: boolean) => void;
  closeSearch: (value: boolean) => void;
  testValue: boolean | undefined;
}

const people: PeopleProps[] = [
  {id: 1, name: 'Wade Cooper'},
  {id: 2, name: 'Arlene Mccoy'},
  {id: 3, name: 'Devon Webb'},
  {id: 4, name: 'Tom Cook'},
  {id: 5, name: 'Tanya Fox'},
  {id: 6, name: 'Hellen Schmidt'},
];

const TestHead = ({testValue}: any) => {
  const [selected, setSelected] = useState(people[0]);
  const [query, setQuery] = useState('');
  const [isOpen, setIsOpen] = useState(true);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  console.log(testValue);

  const filteredPeople =
    query === ''
      ? people
      : people.filter(person =>
          person.name
            .toLowerCase()
            .replace(/\s+/g, '')
            .includes(query.toLowerCase().replace(/\s+/g, '')),
        );

  return (
    <Dialog open={isOpen} onClose={() => closeModal}>
      <Dialog.Overlay className="fixed inset-0" />
      <div className="relative my-4">
        <div className="absolute top-2 w-full">
          <Combobox value={selected} onChange={setSelected}>
            <div className="relative mt-1">
              <div className="relative w-full cursor-default overflow-hidden rounded-lg bg-gray-700/50 text-left shadow-md backdrop-blur-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-purple-300 sm:text-sm">
                <Combobox.Input
                  className="w-full border-none bg-gray-700/50 py-3 pl-3 pr-10 text-sm font-medium leading-5 text-gray-100 backdrop-blur-lg focus:ring-0"
                  autoComplete="off"
                  displayValue={(person: PeopleProps) => person.name}
                  onChange={event => setQuery(event.target.value)}
                />
                <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
                  <AtSymbolIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                </Combobox.Button>
              </div>
              <Transition
                as={Fragment}
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
                afterLeave={() => setQuery('')}
              >
                <Combobox.Options className="absolute my-2 max-h-72 w-full overflow-auto rounded-lg bg-gray-700/50 py-1 text-base font-medium shadow-lg ring-1 ring-black ring-opacity-5 backdrop-blur-xl focus:outline-none sm:text-sm">
                  {filteredPeople.length === 0 && query !== '' ? (
                    <div className="relative cursor-default select-none py-2 px-4 text-gray-700">
                      Nothing found.
                    </div>
                  ) : (
                    filteredPeople.map(person => (
                      <Combobox.Option
                        key={person.id}
                        className={({active}) =>
                          `relative mx-2 cursor-default select-none rounded-md py-2 pl-10 pr-4 ${
                            active ? 'bg-purple-700/50 text-white' : 'text-gray-100'
                          }`
                        }
                        value={person}
                      >
                        {({selected, active}) => (
                          <>
                            <span
                              className={`block truncate ${
                                selected ? 'font-medium' : 'font-normal'
                              }`}
                            >
                              {person.name}
                            </span>
                            {selected ? (
                              <span
                                className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                                  active ? 'text-white' : 'text-teal-600'
                                }`}
                              >
                                <CheckIcon className="h-5 w-5" aria-hidden="true" />
                              </span>
                            ) : null}
                          </>
                        )}
                      </Combobox.Option>
                    ))
                  )}
                </Combobox.Options>
              </Transition>
            </div>
          </Combobox>
        </div>
      </div>
    </Dialog>
  );
};

export default TestHead;
