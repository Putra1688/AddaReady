/**
* This configuration file lets you run `$ sanity [command]` from your terminal
* @see https://www.sanity.io/docs/cli-configuration
*/
import {defineCliConfig} from 'sanity/cli'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'iwc1z111'
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'

export default defineCliConfig({api: {projectId, dataset}})
