// schemas/pet.js
export default {
    name: 'Titles',
    type: 'document',
      title: 'Title',
    fields: [
      {
        name: 'name',
        type: 'string',
        title: 'Name of the title',
        validation:(Rule:any)=>Rule.required()
      }
    ]
  }