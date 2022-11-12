import classNames from "classnames";
import React from "react";

export type DiscoverContentProps = {
  children: React.ReactNode;
  className?: string;
  classNameChild?: string;
};

const DiscoverContainer = ({
  children,
  className,
  classNameChild,
}: DiscoverContentProps) => {
  return (
    <div className={classNames("px-3 mb-4", className)}>
      <div
        className={classNames(
          "flex flex-col space-y-4 px-5 border-zinc-800/50 border py-5 bg-zinc-900/20 rounded-3xl",
          classNameChild
        )}
      >
        {children}
      </div>
    </div>
  );
};

export default DiscoverContainer;
