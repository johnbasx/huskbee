import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  TbBabyCarriage,
  TbBuildingCommunity,
  TbCross,
  TbEmpathize,
  TbMedicalCross,
  TbSchool,
} from "react-icons/tb";

export const causesData = [
  {
    id: 1,
    title: "Medical",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur, vitae animi. In quae provident, ratione asperiores magnam quidem culpa cum suscipit repudiandae, quaerat aliquam cupiditate optio laudantium facere repellendus odio!",
    Icon: TbMedicalCross,
    link: "#!",
    image: "/images/hospitalized.jpg",
  },
  {
    id: 2,
    title: "Relief Camps",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur, vitae animi. In quae provident, ratione asperiores magnam quidem culpa cum suscipit repudiandae, quaerat aliquam cupiditate optio laudantium facere repellendus odio!",
    Icon: TbBuildingCommunity,
    link: "#!",
    image: "/images/relief-camp.jpg",
  },
  {
    id: 3,
    title: "Education",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur, vitae animi. In quae provident, ratione asperiores magnam quidem culpa cum suscipit repudiandae, quaerat aliquam cupiditate optio laudantium facere repellendus odio!",
    Icon: TbSchool,
    link: "#!",
    image: "/images/education.jpg",
  },
  {
    id: 4,
    title: "Children",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur, vitae animi. In quae provident, ratione asperiores magnam quidem culpa cum suscipit repudiandae, quaerat aliquam cupiditate optio laudantium facere repellendus odio!",
    Icon: TbBabyCarriage,
    link: "#!",
    image: "/images/children.jpg",
  },
  {
    id: 5,
    title: "Memorial",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur, vitae animi. In quae provident, ratione asperiores magnam quidem culpa cum suscipit repudiandae, quaerat aliquam cupiditate optio laudantium facere repellendus odio!",
    Icon: TbCross,
    link: "#!",
    image: "/images/memorial.jpg",
  },
  {
    id: 6,
    title: "Others",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur, vitae animi. In quae provident, ratione asperiores magnam quidem culpa cum suscipit repudiandae, quaerat aliquam cupiditate optio laudantium facere repellendus odio!",
    Icon: TbEmpathize,
    link: "#!",
    image: "/images/others.jpg",
  },
];

const CausesSection = () => {
  return (
    <section>
      <div className='max-w-screen-2xl mx-auto px-4 py-14 sm:px-6 sm:py-18 lg:px-8 lg:py-40'>
        <div className='grid grid-cols-1 gap-y-8 lg:grid-cols-2 lg:items-center lg:gap-x-16'>
          <div className='mx-0 max-w-lg text-left lg:mx-0 lg:text-left'>
            <h2 className='text-4xl font-semibold sm:text-5xl lg:text-6xl'>
              Causes you can raise funds for
            </h2>

            <p className='mt-4 text-gray-600'>
              Be it for a personal need, social cause or a creative idea - you
              can count on us for the project that you want to raise funds for.
            </p>

            {/* <a
              href='#'
              className='mt-8 inline-block rounded-full bg-blue-500 px-12 py-3 font-semibold text-white transition hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-500'
            >
              Get Started Today
            </a> */}
          </div>

          <div className='grid grid-cols-2 gap-4 md:grid-cols-3'>
            {causesData.map((item, index) => (
              <Link
                key={"causes-" + item.title}
                href={item.link}
                className='relative overflow-hidden rounded-2xl shadow transition hover:shadow-lg'
              >
                <Image
                  alt={item.title}
                  height={100}
                  width={100}
                  src={item.image}
                  className='absolute inset-0 h-full w-full object-cover'
                />

                <div className='relative h-full text-white bg-gradient-to-t from-slate-950/90 to-slate-900/25'>
                  <div className='p-4'>
                    <item.Icon className='h-6 w-6' />

                    <h3 className='mt-6 sm:mt-8 lg:mt-10 text-lg font-bold text-white'>
                      {item.title}
                    </h3>

                    <p className='mt-2 line-clamp-2 text-sm/relaxed text-white/95'>
                      {item.description}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CausesSection;
