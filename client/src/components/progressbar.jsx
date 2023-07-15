const ProgressBar = ({text}) => {
  const progressPercentage = 5;
  return (
    <div className="relative pt-1 mx-1">
      <div className="mb-1 text-base font-medium text-indigo-700 dark:text-indigo-500">
        {text}
      </div>

      <div className="overflow-hidden  h-4 rounded-full mb-4 text-xs flex w-full bg-gray-400 dark:bg-gray-700">
        <div
          style={{ width: `${progressPercentage}%` }}
          className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-red-500"
        ></div>
        <div
          style={{ width: `${progressPercentage}%` }}
          className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-orange-500"
        ></div>
        <div
          style={{ width: `${progressPercentage}%` }}
          className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-emerald-500"
        ></div>
      </div>
    </div>
  );
};
export default ProgressBar;
