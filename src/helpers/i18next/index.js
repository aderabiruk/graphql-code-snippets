import i18next from 'i18next'
import config from '../../config'

import en from './messages/en.json'

export function initializei18Next () {
  i18next.init({
    lng: config.LOCALE,
    resources: {
      en: {
        translation: en
      }
    }
  })
}

export function translate (key, options) {
  return i18next.t(key, options)
}
