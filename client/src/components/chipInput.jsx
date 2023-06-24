import { Chip, ChipsInput, initTE } from "tw-elements";
initTE({ Chip, ChipsInput });

const ChipInputFeild = () => {
  useEffect(() => {
    const chipsInput = new ChipsInput(
      document.getElementById("chipsInputId"),
      options,
      classes
    );

    const chip = new Chip(document.getElementById("chipId"), options, classes);
  }, []);

  return (
    <div
      data-te-chips-init
      data-te-chips-placeholder
      className="mb-0 min-h-[45px] border-none pb-0 shadow-none outline-none transition-all duration-300 ease-[cubic-bezier(0.25,0.1,0.25,1)] hover:cursor-text"
    ></div>
  );
};
export default ChipInputFeild;
