import IosevkaWoff2 from './iosevka-regular.woff2'

const iosevka = {
  fontFamily: 'Iosevka',
  fontStyle: 'normal',
  fontDisplay: 'swap',
  src: `
    local('Iosevka')
    url(${IosevkaWoff2}) format('woff2')
  `,
}

export default iosevka
