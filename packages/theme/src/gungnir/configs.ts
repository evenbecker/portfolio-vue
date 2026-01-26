import { navbar } from './navbar'
import { pages } from './pages'
import { gungnirThemeExtended } from '../extended-theme/config'

const isProd = process.env.NODE_ENV === 'production'

export const gungnirThemeConfig = gungnirThemeExtended({
  repo: 'evenbecker/evenbecker.github.io',
  docsDir: 'portfolio-vue',
  docsBranch: 'main',
  personalInfo: {
    name: "Hello, I'm Even Becker",
    avatar: '/img/avatar.jpg',
    description: 'Welcome to my website!',
    sns: {
      github: 'evenbecker',
      linkedin: 'even-becker-0885a0169',
    },
  },
  homeHeaderImages: [
    {
      path: '/img/home-bg/2.jpg',
      mask: 'rgba(40, 57, 101, .2)',
    },

    {
      path: '/img/home-bg/4.jpg',
      mask: 'rgba(40, 57, 101, .2)',
    },
  ],
  pages,
  navbar,
  themePlugins: {
    git: isProd,
    katex: true,
    mdPlus: {
      all: true,
    },
  },
  footer: `
      <a href="https://github.com/evenbecker" target="_blank">Even Becker</a>  &copy; 2026
      <br>
       Developed with <a href="https://v2.vuepress.vuejs.org" target="_blank">VuePress</a> </a>
    `,
})
