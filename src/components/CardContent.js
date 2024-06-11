import PropTypes from "prop-types";

const CardContent = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-row items-start justify-end py-[0rem] pr-[1.75rem] pl-[0rem] box-border max-w-full text-left text-[8.125rem] text-white font-inter ${className}`}
    >
      <div className="flex-1 flex flex-col items-start justify-start gap-[2rem] max-w-full mq925:gap-[1rem]">
        <div className="self-stretch flex flex-col items-start justify-start max-w-full">
          <div className="w-[18.25rem] h-[11.063rem] flex flex-row items-start justify-start p-[0.625rem] box-border">
            <h1 className="m-0 self-stretch flex-1 relative text-inherit font-medium font-inherit mq450:text-[2rem] mq925:text-[3.25rem]">
              ABC
            </h1>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start p-[0.625rem] box-border max-w-full text-[1rem]">
            <p className="m-0 h-[2.375rem] flex-1 relative font-medium inline-block max-w-full">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
        <div className="w-[9.188rem] h-[2.313rem] flex flex-row items-center justify-start text-[0.875rem]">
          <div className="self-stretch flex-1 flex flex-row items-start justify-start p-[0.625rem]">
            <a className="[text-decoration:none] self-stretch flex-1 relative font-light text-[inherit] whitespace-nowrap">
              Learn more
            </a>
          </div>
          <div className="flex flex-col items-start justify-start p-[0.625rem]">
            <img
              className="w-[2rem] h-[0rem] relative"
              alt=""
              src="/arrow-1.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

CardContent.propTypes = {
  className: PropTypes.string,
};

export default CardContent;
