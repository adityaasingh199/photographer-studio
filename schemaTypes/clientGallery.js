import {defineType, defineField} from 'sanity'
import {LockIcon} from '@sanity/icons/Lock'

export default defineType({
  name: 'clientGallery',
  title: 'Client Gallery (private)',
  type: 'document',
  icon: LockIcon,
  fields: [
    defineField({
      name: 'clientName',
      title: 'Client ka naam',
      type: 'string',
      validation: (Rule) => Rule.required().error('Client ka naam daalna zaroori hai'),
    }),
    defineField({
      name: 'slug',
      title: 'Gallery ka link (URL)',
      type: 'slug',
      description:
        'Client ka naam likhne ke baad "Generate" button dabayein — website ka link apne aap ban jayega. Isko change mat karein agar link kahin bhej chuke hain.',
      options: {
        source: 'clientName',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required().error('Link banane ke liye "Generate" button dabayein'),
    }),
    defineField({
      name: 'shootDate',
      title: 'Shoot ki date',
      type: 'date',
    }),
    defineField({
      name: 'passcode',
      title: 'Password jo client ko denge',
      type: 'string',
      description:
        'Ye halka sa protection hai. Bahut private photos yahan na daalein. Koi technical insaan chahe toh ye password dekh sakta hai.',
      validation: (Rule) => Rule.required().error('Password daalna zaroori hai'),
    }),
    defineField({
      name: 'coverImages',
      title: 'Cover photos',
      type: 'array',
      description: 'Ye photo gallery ki list mein dikhegi. Ek saath multiple cover photos select kar sakte hain.',
      of: [{type: 'image', options: {hotspot: true}}],
      options: {layout: 'grid'},
      validation: (Rule) => Rule.min(1).error('Kam se kam ek cover photo daalni zaroori hai'),
    }),
    defineField({
      name: 'photos',
      title: 'Saari photos',
      type: 'array',
      of: [{type: 'image', options: {hotspot: true}}],
      options: {layout: 'grid'},
      validation: (Rule) => Rule.min(1).error('Kam se kam ek photo daalni zaroori hai'),
    }),
  ],
  preview: {
    select: {
      title: 'clientName',
      subtitle: 'shootDate',
      media: 'coverImages.0',
    },
    prepare({title, subtitle, media}) {
      return {
        title,
        subtitle: subtitle
          ? new Date(subtitle).toLocaleDateString('en-IN', {
              year: 'numeric',
              month: 'short',
              day: 'numeric',
            })
          : 'No date',
        media,
      }
    },
  },
})
