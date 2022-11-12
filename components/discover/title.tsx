import React from "react";
import { BsFillPlayCircleFill } from "react-icons/bs";
import { IconType } from "react-icons";

export type DiscoverTitleProps = {
  title: string;
  about: string;
  icon?: IconType;
};

const DiscoverTitle = ({
  title,
  about,
  icon: Icon = BsFillPlayCircleFill,
}: DiscoverTitleProps) => {
  return (
    <div className="space-y-2">
      <div className="flex items-center justify-start space-x-4">
        <h1 className="font-bold text-2xl">{title}</h1>
        <Icon className="h-5 w-5 text-purple-500" />
      </div>
      <div className="w-3/5">
        <p className="text-xs">
          {/* Now streaming Manipur&apos;s top talent. */}
          {about}
          {/* Watch, play and interact with them only on Boxfree. */}
        </p>
      </div>
    </div>
  );
};

export default DiscoverTitle;
