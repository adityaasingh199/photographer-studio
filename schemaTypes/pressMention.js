import {defineType, defineField} from 'sanity'
import {EarthGlobeIcon} from '@sanity/icons/EarthGlobe'

export default defineType({
  name: 'pressMention',
  title: 'Press Mentions',
  type: 'document',
  icon: EarthGlobeIcon,
  fields: [
    defineField({
      name: 'outlet',
      title: 'Publication ka naam',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'logos',
      title: 'Logos',
      type: 'array',
      description: 'Ek hi baar mein multiple logos upload kar sakte hain.',
      of: [{type: 'image', options: {hotspot: true}}],
      options: {layout: 'grid'},
      validation: (Rule) => Rule.min(1).error('Kam se kam ek logo daalna zaroori hai'),
    }),
    defineField({
      name: 'link',
      title: 'Link',
      type: 'url',
      description: 'Article ya mention ka link',
    }),
  ],
  preview: {
    select: {
      title: 'outlet',
      media: 'logos.0',
    },
  },
})
