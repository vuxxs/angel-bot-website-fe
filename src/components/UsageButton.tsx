import Link from "next/link";

const UsageButton = () => {
  return (
    <Link href="/usage">
      <div className="bg-blue-500 hover:bg-blue-700 angel-square-button">
        Usage
      </div>
    </Link>
  );
};

export default UsageButton;
