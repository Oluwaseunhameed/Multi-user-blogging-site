import getConfig from 'next/config'
const { publicRuntimeConfig } = getConfig()

export const API = publicRuntimeConfig.PRODUCTION ? 'https://multi-user-blog.com' : 'http://locahost:8000'
export const APP_NAME = publicRuntimeConfig.APP_NAME