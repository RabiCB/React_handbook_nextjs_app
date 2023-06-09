import React, { useState } from "react";
import { Variables } from "Types";
import { urlFor } from "Client";
import Client from "Client";
import Head from "next/head";
const UseState = ({ usestate }: any) => {
  const [react, setReact] = useState(usestate);

  return (
    <>
      <Head>
        <title>useState</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="  max-md:ml-0  ml-56 px-4  pr-4 pt-20 pb-8">
        {react?.map((value: Variables) => (
          <div className="flex flex-col gap-4" key={value?.id}>
            <h4 className=" text-[#0EA5E9] text-xl font-semibold ">
              {value.name}
            </h4>
            <p className="text-justify text-sm ">{value?.content}</p>

            <img
              className="w-full  h-[360px] object-contain rounded-lg"
              src={urlFor(value?.image.asset._ref).url()}
              alt="code "
            />
            <p className="text-justify text-sm ">{value?.ending}</p>
            <div className="text-justify text-sm flex flex-col gap-4 ">
              <p>{value?.guide}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default UseState;

export async function getServerSideProps(context: any) {
  const query = `*[_type == "About" && name=="useState"]`;
  const usestate = await Client.fetch(query);

  return {
    props: {
      usestate,
    },
  };
}
