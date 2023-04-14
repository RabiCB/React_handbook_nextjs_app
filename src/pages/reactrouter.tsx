import React,{useState} from 'react'
import Head from 'next/head'
import Client from 'Client'
import { Variables } from 'Types'
import { urlFor } from 'Client'

const reactrouter = ({router}:any) => {
    const [react,setReact]=useState(router)
  return (
    <>
     <Head>
        <title>useEffect</title>
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

            
            <p className="text-justify text-sm ">{value?.ending}</p>
            <img
              className="w-full  h-[360px] object-contain rounded-lg"
              src={urlFor(value?.image.asset._ref).url()}
            />
            <div className="text-justify text-sm flex flex-col gap-4 ">
              <p>{value?.guide}</p>
              <span className="bg-[#333] text-white h-10 px-4 rounded-lg flex items-center">
                 {value?.npm}
                </span>
                <span className="bg-[#333] text-white h-10 px-4 rounded-lg flex items-center">
                  {value?.yarn}
                </span>

            </div>
          </div>
        ))}
      </div>
      </>
  )
}

export default reactrouter

export async function getServerSideProps(context: any) {
    const query = `*[_type == "About" && name=="React-router"]`;
    const router = await Client.fetch(query);
  
    return {
      props: {
        router,
      },
    };
  }