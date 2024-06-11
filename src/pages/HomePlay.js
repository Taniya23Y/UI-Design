import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const HomePlay = () => {
  const navigate = useNavigate();

  const onNavigationContainerClick = useCallback(() => {
    navigate("/animation");
  }, [navigate]);

  return (
    <div className="w-full relative bg-gray-100 overflow-hidden flex flex-row items-start justify-between pt-[26.062rem] pb-[22.75rem] pr-[1.562rem] pl-[19.812rem] box-border leading-[normal] tracking-[normal] gap-[1.25rem] text-left text-[7.938rem] text-white font-inter mq700:pl-[4.938rem] mq700:box-border mq950:flex-wrap mq975:pl-[9.875rem] mq975:box-border">
      <div className="w-[21rem] flex flex-col items-start justify-start max-w-full">
        <div className="self-stretch flex flex-row items-start justify-start relative max-w-full">
          <h1 className="m-0 flex-1 relative text-inherit font-light font-inherit inline-block max-w-full z-[1] mq450:text-[2rem] mq950:text-[3.188rem]">
            Hello.
          </h1>
          <div className="h-[46.938rem] w-[47.125rem] absolute !m-[0] right-[-42.75rem] bottom-[-21.562rem]">
            <img
              className="absolute top-[0rem] left-[0rem] w-full h-full"
              loading="lazy"
              alt=""
              src="/animation.svg"
            />
            <div className="absolute top-[10.063rem] left-[10.188rem] rounded-[50%] [background:linear-gradient(180deg,_#fdc898,_rgba(181,_23,_255,_0.11))] w-[26.75rem] h-[26.75rem] z-[1]" />
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[0.812rem] text-[1.125rem]">
          <div className="relative font-medium">My name is Lorem Ipsum</div>
          <div className="self-stretch relative text-[1rem] leading-[140%] font-light z-[1]">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex `}</div>
        </div>
      </div>
      <div className="flex flex-col items-start justify-start pt-[2rem] px-[0rem] pb-[0rem] text-[1.5rem] text-violet-100">
        <div className="flex flex-col items-start justify-start gap-[5.312rem]">
          <div className="flex flex-row items-start justify-start pt-[0.625rem] px-[0.625rem] pb-[0.5rem] border-b-[1px] border-solid border-violet-200">
            <div className="relative font-medium inline-block min-w-[4.25rem] mq450:text-[1.188rem]">
              Home
            </div>
          </div>
          <div
            className="flex flex-row items-start justify-start p-[0.625rem] cursor-pointer text-gray-200"
            onClick={onNavigationContainerClick}
          >
            <div className="relative font-medium inline-block min-w-[3.75rem] mq450:text-[1.188rem]">
              Work
            </div>
          </div>
        </div>
      </div>
      <div className="h-[3.375rem] w-[3.375rem] absolute !m-[0] top-[11.436rem] right-[33.113rem] rounded-[50%] [background:linear-gradient(180deg,_#fdc898,_rgba(181,_23,_255,_0.11))] [transform:_rotate(45deg)] [transform-origin:0_0] z-[1]" />
      <div className="h-[3.375rem] w-[3.375rem] absolute !m-[0] top-[4.749rem] left-[41.388rem] rounded-[50%] [background:linear-gradient(180deg,_#fdc898,_rgba(181,_23,_255,_0.11))] [transform:_rotate(45deg)] [transform-origin:0_0]" />
      <div className="h-[3.375rem] w-[3.375rem] absolute !m-[0] bottom-[13.689rem] left-[32.95rem] rounded-[50%] [background:linear-gradient(180deg,_#fdc898,_rgba(181,_23,_255,_0.11))] [transform:_rotate(45deg)] [transform-origin:0_0]" />
      <div className="h-[3.375rem] w-[3.375rem] absolute !m-[0] right-[30.738rem] bottom-[19.814rem] rounded-[50%] [background:linear-gradient(180deg,_#fdc898,_rgba(181,_23,_255,_0.11))] [transform:_rotate(45deg)] [transform-origin:0_0]" />
    </div>
  );
};

export default HomePlay;
