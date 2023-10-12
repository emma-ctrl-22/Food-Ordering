import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'Restaurant',

  projectId: 'edd7k95l',
  dataset: 'restaurant',

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
