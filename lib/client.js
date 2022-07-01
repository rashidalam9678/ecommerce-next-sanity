import sanityClient from '@sanity/client'
import imageUrlBuilder  from '@sanity/client';

export const client= sanityClient({
    projectId: 'w6hyuoq1',
    dataset: 'production',
    apiVersion:'2022-06-06',
    useCdn:true,
    token:process.env.NEXT_PUBLIC_SANITY_TOKEN
})
const builder = imageUrlBuilder(client);
export const urlFor= (source)=>builder.image(source)