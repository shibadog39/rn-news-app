import 'dotenv/config'
import { ConfigContext } from '@expo/config'

export default ({ config }: ConfigContext) => ({
  ...config,
  extra: {
    newsApiKey: process.env.NEWS_API_KEY,
  },
})
