import React from "react";

const Footer2 = () => {
  return (
    <>
      <div className="flex flex-row justify-center gap-20">
        <div className="flex flex-row">
          <image src="phlogo.png" className="pt-2 flex h-48" />
          <div>
            <p className="text-sssm font-bold text-white p-ft uppercase pb-2 pt-8">
              Republic of the Philippines
            </p>
            <div className="flex flex-col gap-2">
              <p className="text-gray-400 text-ssssm pt-2 text-white">
                All content is in the public domain unless
                <br /> otherwise stated.
              </p>
            </div>
          </div>
        </div>
        <div>
          <p className="text-sssm font-bold text-white p-ft uppercase pb-2 pt-8">
            About GOVPH
          </p>
          <div className="flex flex-col gap-1">
            <p className="text-gray-400 text-ssssm pt-2 text-white">
              Learn more about the Philippine government, its <br /> structure,
              how government works and the people behind
              <br /> it.
            </p>
            <a className="text-gray-400 text-ssssm select-none hover:underline hover:cursor-pointer text-white">
              Official Gazette
            </a>
            <a className="text-gray-400 text-ssssm select-none hover:underline hover:cursor-pointer text-white">
              Open Data Portal
            </a>
          </div>
        </div>
        <div className="">
          <p className="text-sssm font-bold text-white p-ft uppercase pb-2 pt-8">
            Government links
          </p>
          <div className="flex flex-col pt-2 space-y-2">
            <a className="text-gray-400 text-ssssm select-none hover:underline hover:cursor-pointer text-white">
              Office of the President
            </a>
            <a className="text-gray-400 text-ssssm select-none hover:underline hover:cursor-pointer text-white">
              Office of the Vice President
            </a>
            <a className="text-gray-400 text-ssssm select-none hover:underline hover:cursor-pointer text-white">
              Senate of the Philippines
            </a>
            <a className="text-gray-400 text-ssssm select-none hover:underline hover:cursor-pointer text-white">
              House of Representatives
            </a>
            <a className="text-gray-400 text-ssssm select-none hover:underline hover:cursor-pointer text-white">
              Supreme Court
            </a>
            <a className="text-gray-400 text-ssssm select-none hover:underline hover:cursor-pointer text-white">
              Court of Appeals
            </a>
            <a className="text-gray-400 text-ssssm select-none hover:underline hover:cursor-pointer text-white">
              Sandiganbayan
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer2;
