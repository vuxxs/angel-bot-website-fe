import { FC, useState } from "react";

// TODO add usage once implemented to angel-bot
interface ExpandableTextProps {
  name: string;
  description: string;
}

const ExpandableText: FC<ExpandableTextProps> = ({ name, description }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="flex items-center bg-gray-100 rounded-lg shadow-md p-4 mb-4 w-full max-w-md">
      <div className="bg-red-500 text-white rounded-lg px-2 py-1 mr-2 select-none">
        {name}
      </div>
      <div
        className={`text-gray-700 flex-grow cursor-pointer ${
          isExpanded
            ? ""
            : "overflow-hidden overflow-ellipsis whitespace-nowrap"
        }`}
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {description}
      </div>
    </div>
  );
};

export default ExpandableText;
