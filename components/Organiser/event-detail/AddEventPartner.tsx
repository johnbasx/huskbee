import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useEffect, useRef, useState } from "react";
import { eventPartnersStore, notEventPartnersStore } from "@store/index";

import AddNewPartner from "./AddNewPartner";
import AssignExistingPartner from "./AssignExistingPartner";
import { BOOKING_BASE_URL } from "@constants/api-urls";
import { EventPartnersProps } from "../../../pages/event-detail/[eventId]";
import { PlusSmallIcon } from "@heroicons/react/24/outline";
import { Tab } from "@headlessui/react";
import axios from "axios";

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

const AddEventPartner = ({ eventId }: { eventId: string }) => {
  const { partners } = eventPartnersStore();
  const { setNotEventPartners } = notEventPartnersStore();
  const [open, setOpen] = useState(false);
  const [allPartners, setAllPartners] = useState<EventPartnersProps[]>([]);
  const [filteredList, setFilteredList] = useState<EventPartnersProps[]>([]);

  const cancelButtonRef = useRef(null);

  let [categories] = useState({
    "Assign existing partner": (
      <AssignExistingPartner
        eventId={eventId}
        filteredList={filteredList}
        setOpen={setOpen}
      />
    ),
    "Assign new partner": <AddNewPartner eventId={eventId} setOpen={setOpen} />,
  });

  const GetPartners = async (category: string) => {
    if (category === "Assign existing partner") {
      try {
        const response = await axios.get(
          BOOKING_BASE_URL + "search-partner/?q=" + ""
        );

        // console.log(response.data);
        setAllPartners(response.data.results);
      } catch (e: any) {
        console.log(e);
      }
    }
    return;
  };

  useEffect(() => {
    FilteredPartners();
  }, [allPartners]);

  const FilteredPartners = async () => {
    // console.log("All partner ", allPartners);
    // console.log("Event partners", partners);
    if (partners && partners.length === 0) {
      // console.log("zero");
      setFilteredList(allPartners);
    } else {
      // console.log("One");
      const filteredList = allPartners.filter((partner) => {
        return partners?.some((el) => {
          return el.id !== partner.id;
        });
      });
      setFilteredList(filteredList);
    }
  };

  useEffect(() => {
    setNotEventPartners(filteredList);
    // console.log("filteredList ", filteredList);
  }, [filteredList, allPartners]);

  return (
    <>
      <button
        onClick={() => {
          setOpen(true);
        }}
        type="button"
        className="group -ml-1 bg-transparent p-1 rounded-md flex items-center focus:outline-none "
      >
        <span className="w-8 h-8 rounded-full border-2 border-dashed border-gray-300 flex items-center justify-center text-gray-400">
          <PlusSmallIcon className="h-5 w-5" aria-hidden="true" />
        </span>
        <span className="ml-4 text-sm font-medium text-blue-400 group-hover:text-blue-500">
          {partners?.length === 0 ? "Assign partners" : "Assign more partners"}
        </span>
      </button>
      <Transition.Root show={open} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          initialFocus={cancelButtonRef}
          onClose={setOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 backdrop-blur-md bg-gray-900/50" />

            {/* <div className="fixed inset-0 bg-transparent bg-opacity-75 transition-opacity" /> */}
          </Transition.Child>

          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-gray-800 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                  <div className="bg-gray-800 px-4 pb-4 pt-5 sm:p-6 sm:pb-4 ">
                    <div className="w-full h-auto max-w-md px-2 py-4 sm:px-0">
                      <Tab.Group>
                        <Tab.List className="flex space-x-1 rounded-xl bg-transparent p-1">
                          {Object.keys(categories).map((category, idx) => (
                            <Tab
                              onClick={() => GetPartners(category)}
                              key={category}
                              className={({ selected }) =>
                                classNames(
                                  "w-full py-2.5 text-sm font-medium leading-5 text-gray-50",
                                  "ring-white focus:outline-none",
                                  selected
                                    ? "border-b-2 border-white  shadow"
                                    : "text-gray50 hover:bg-white/[0.12] "
                                )
                              }
                            >
                              {category}
                            </Tab>
                          ))}
                        </Tab.List>
                        <Tab.Panels className="mt-2">
                          {/* {Object.values(categories).map((posts, idx) => ( */}
                          {/* {Object.keys(categories).map((category, idx) => ( */}
                          <Tab.Panel
                            // key={idx}
                            className={classNames(
                              "rounded-xl bg-transparent p-3",
                              "focus:outline-none "
                            )}
                          >
                            <AssignExistingPartner
                              eventId={eventId}
                              filteredList={filteredList}
                              setOpen={setOpen}
                            />
                          </Tab.Panel>
                          <Tab.Panel>
                            <AddNewPartner
                              eventId={eventId}
                              setOpen={setOpen}
                            />
                            {/* {categories[category]} */}
                            <div></div>
                          </Tab.Panel>
                          {/* ))} */}
                        </Tab.Panels>
                      </Tab.Group>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
};

export default AddEventPartner;
