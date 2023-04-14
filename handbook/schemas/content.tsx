// schemas/pet.js
export default {
  name: 'About',
  type: 'document',
  title: 'About',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'name of the title ',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'content',
      type: 'string',
      title: 'about content',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'ending',
      type: 'string',
      title: 'ending of the content',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'guide',
      type: 'string',
      title: 'guide for installation',
      
    },
    {
      name: 'image',
      type: 'image',
      title: 'image for example',
    },
    {
      name: 'npm',
      type: 'string',
      title: ' installation query for npm',
      
    },
    {
      name: 'yarn',
      type: 'string',
      title: ' installation query for yarn',
      
    },
    {
        name:"additional_image",
        type:"image",
        title:"addtional image for example"
    },
    {
      name: 'npm_additional_package',
      type: 'string',
      title: 'addtional packages for npm',
    },
    {
      name: 'yarn_additional_package',
      type: 'string',
      title: 'addtional packages for yarn',
    },
  ],
}
