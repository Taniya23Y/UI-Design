import PropTypes from "prop-types";

const FrameComponent = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch h-[46.938rem] relative text-left text-[1.5rem] text-darkslategray font-inter ${className}`}
    >
      <div className="absolute top-[10.063rem] left-[-11.687rem] rounded-[50%] [background:linear-gradient(180deg,_#fdc898,_rgba(181,_23,_255,_0.11))] w-[26.75rem] h-[26.75rem]" />
      <img
        className="absolute h-full top-[0rem] bottom-[0rem] left-[-21.875rem] max-h-full w-[47.125rem] z-[1]"
        loading="lazy"
        alt=""
        src="/animation.svg"
      />
      <h3 className="m-0 absolute top-[19.438rem] left-[17rem] text-inherit font-medium font-inherit inline-block min-w-[4.25rem] z-[2] mq450:text-[1.188rem]">
        Home
      </h3>
      <div className="absolute top-[27.188rem] left-[16.375rem] flex flex-row items-start justify-start pt-[0.625rem] px-[0.625rem] pb-[0.5rem] z-[2] text-violet-200 border-b-[1px] border-solid border-violet-200">
        <h3 className="m-0 relative text-inherit font-medium font-inherit inline-block min-w-[3.75rem] mq450:text-[1.188rem]">
          Work
        </h3>
      </div>
    </div>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent;
