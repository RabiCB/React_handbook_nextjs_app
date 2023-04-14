import {createClient} from "next-sanity"
import imageUrlBuilder from '@sanity/image-url'



const Client=createClient({
    projectId: '7vti6eyd',
    dataset: 'production',
    useCdn:true,
    apiVersion:"2021-10-21"
    

})
const builder = imageUrlBuilder(Client)

export function urlFor(source:any) {
    return builder.image(source)
  }

export default Client