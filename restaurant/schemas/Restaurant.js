import {defineField, defineType} from 'sanity'

export default {
  name: 'Restaurant',
  title: 'restaurant',
  type: 'document',
  fields: [
    {
      name: "name",
      title: "restaurant",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "short_description",
      title: "Short description",
      type: "string",
      validation:(Rule) => Rule.max(200),
    },
    {
      name: "image",
      title: "Image of the Restaurant",
      type: "image",
    },
    {
      name: "lat",
      title: "Latitude of the Restaurant",
      type: "number",
    },
    {
      name: "long",
      title: "Longitude of the Restaurant",
      type: "number",
    },
    {
      name: "address",
      title: "Restaurant address",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "ratng",
      title: "Enter a Rating from (1-5 Stars)",
      type: "number",
      validation: (Rule) => Rule.required()
      .min(1)
      .max(5)
      .error("Please enter a value between 1 and 5"),
      
    },
    
  ],
}
