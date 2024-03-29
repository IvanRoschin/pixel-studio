import { defineField, defineType } from "sanity"

export default defineType({
  name: "about",
  title: "Section About",
  type: "document",
  fields: [
    defineField({
        name: "title",
        title: "Section title",
        description: "Section title",
        type: "string",
    }),
    defineField({
        name: 'content',
        title: 'Content',
        type: 'array',
        of: [
          {
            type: 'block'
          },
          {
            type: 'image',
            fields: [
              {
                type: 'text',
                name: 'alt',
                title: 'Alternative text',
                description: `Some of your visitors cannot see images, 
                  be they blind, color-blind, low-sighted; 
                  alternative text is of great help for those 
                  people that can rely on it to have a good idea of 
                  what\'s on your page.`,
                  options: {
            isHighlighted: true
          }
              },
            ]
          }
        ]
      }),
      defineField({
        name: "advantages",
        title: "Company Advantages",
        description: "Company Advantages",
        type: "array",
        of: [{ type: "reference", to: { type: "advantageItem" } }],
    }),
  ],
});