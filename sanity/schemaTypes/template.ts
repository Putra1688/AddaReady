import { LayoutGrid } from "lucide-react";

export default {
  name: 'template',
  title: 'Katalog Template',
  type: 'document',
  icon: LayoutGrid,
  fields: [
    {
      name: 'title',
      title: 'Nama Template',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug (URL)',
      type: 'slug',
      options: { source: 'title' },
    },
    {
      name: 'tech_stack',
      title: 'Tech Stack',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        list: [
          { title: 'React', value: 'react' },
          { title: 'Next.js', value: 'nextjs' },
          { title: 'Native', value: 'native' },
          { title: 'Native Advance', value: 'native-advance' },
        ],
      },
    },
    {
      name: 'thumbnail',
      title: 'Screenshot Utama',
      type: 'image',
      options: { hotspot: true },
    },
    {
      name: 'demo_url',
      title: 'Link Demo Website',
      type: 'url',
    },
    {
      name: 'category',
      title: 'Paket Layanan',
      type: 'string',
      options: {
        list: ['Good', 'Impressive', 'Excellent'],
      },
    },
  ],
}