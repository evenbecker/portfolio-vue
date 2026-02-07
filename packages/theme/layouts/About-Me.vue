<template>
  <Common>
    <template #page>
      <section class="about-me__wrapper">
        <h1 class="about-me__title">{{ frontmatter.me }}</h1>
        <SNS large />
        <div class="about-me__description">
          <img :src="$withBase(frontmatter.image)" alt="me" />
          <div class="about-me__description__text">
            <p>{{ frontmatter.description }}</p>
          </div>
        </div>

        <div class="about-me__links">
          <p>
            Check my
            <a
              href="https://www.linkedin.com/in/even-becker-0885a0169"
              target="_blank"
            >
              Linkedin page</a
            >
            to know more about my work experience as a software engineer.
            <br />
            Check my list of
            <a
              v-if="frontmatter.sourceCode"
              :href="frontmatter.sourceCode"
              target="_blank"
            >
              Github Readme files
            </a>
            to get more details about the tech stack and features of my personal
            projects.
          </p>
        </div>

        <h2>Tech Stack</h2>
        <p>I have experience in the following web technologies:</p>
        <div class="even-tech-bg-color">
          <div class="pseudo-col">
            <div class="logo-item">
              <img src="/img/about/Git.png" alt=" " />
              <div class="logo-content">
                <p>Git</p>
              </div>
            </div>
          </div>
          <div class="pseudo-col">
            <div class="logo-item">
              <img src="/img/about/DotNetCoreLogoVector.svg.png" alt=" " />
              <div class="logo-content">
                <p>ASP.NET Web API</p>
              </div>
            </div>
          </div>
          <div class="pseudo-col">
            <div class="logo-item">
              <img src="/img/about/Java.png" alt=" " />
              <div class="logo-content">
                <p>Java</p>
              </div>
            </div>
          </div>
          <div class="pseudo-col">
            <div class="logo-item">
              <img src="/img/about/python-icon.svg" alt=" " />
              <div class="logo-content">
                <p>Python</p>
              </div>
            </div>
          </div>
          <div class="pseudo-col">
            <div class="logo-item">
              <img src="/img/about/TypeScript.png" alt=" " />
              <div class="logo-content">
                <p>TypeScript</p>
              </div>
            </div>
          </div>
          <div class="pseudo-col">
            <div class="logo-item">
              <img src="/img/about/PostgresSQL.png" alt=" " />
              <div class="logo-content">
                <p>PostgreSQL</p>
              </div>
            </div>
          </div>
          <div class="pseudo-col">
            <div class="logo-item">
              <img src="/img/about/vite-icon.svg" alt=" " />
              <div class="logo-content">
                <p>Vite</p>
              </div>
            </div>
          </div>
          <div class="pseudo-col">
            <div class="logo-item">
              <img src="/img/about/Angular.png" alt=" " />
              <div class="logo-content">
                <p>Angular</p>
              </div>
            </div>
          </div>
          <div class="pseudo-col">
            <div class="logo-item">
              <img src="/img/about/Next.js.png" alt=" " />
              <div class="logo-content">
                <p>Next.js</p>
              </div>
            </div>
          </div>
          <div class="pseudo-col">
            <div class="logo-item">
              <img src="/img/about/React.png" alt=" " />
              <div class="logo-content">
                <p>React</p>
              </div>
            </div>
          </div>
          <div class="pseudo-col">
            <div class="logo-item">
              <img src="/img/about/Material-UI.png" alt=" " />
              <div class="logo-content">
                <p>Material UI</p>
              </div>
            </div>
          </div>
          <div class="pseudo-col">
            <div class="logo-item">
              <img src="/img/about/Vue.js.png" alt=" " />
              <div class="logo-content">
                <p>Vue 3</p>
              </div>
            </div>
          </div>
          <div class="pseudo-col">
            <div class="logo-item">
              <img src="/img/about/sass-icon.svg" alt=" " />
              <div class="logo-content">
                <p>Sass</p>
              </div>
            </div>
          </div>
          <div class="pseudo-col">
            <div class="logo-item">
              <img src="/img/about/Tailwind-CSS.png" alt=" " />
              <div class="logo-content">
                <p>Tailwind-CSS</p>
              </div>
            </div>
          </div>
          <div class="pseudo-col">
            <div class="logo-item">
              <img src="/img/about/Bootstrap.svg" alt=" " />
              <div class="logo-content">
                <p>Bootstrap 5</p>
              </div>
            </div>
          </div>
        </div>

        <h2>Miscellaneous</h2>
        <p>
          I don't google; I
          <a href="https://www.startpage.com/" target="_blank"> startpage</a>
          with the Brave browser or Waterfox.
        </p>
        <p>
          I wrote
          <a href="https://orcid.org/0000-0002-2004-9472" target="_blank">
            some publications
          </a>
          about digital privacy, 5G and Wi-Fi.
        </p>
        <p>
          My profile picture is inspired by the anime in
          <a href="http://www.youtube.com/@emiliamerge7201" target="_blank">
            EmiliaMerge
          </a>
          videos about Linux.
        </p>
      </section>
    </template>
  </Common>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import Common from '@theme/Common.vue';
import { usePageFrontmatter } from '@vuepress/client';
import type { GungnirThemePageOptions } from 'vuepress-theme-gungnir/lib/shared';
import { useThemeLocaleData } from '../src/extended-theme/themeLocalData';
import { GungnirThemeAboutMePageFrontmatter } from '../src/extended-theme/custom-pages/aboutMe';
import SNS from '@theme/SNS.vue';

const themeLocale = useThemeLocaleData();
const frontmatter = usePageFrontmatter<GungnirThemeAboutMePageFrontmatter>();
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const pageInfo = computed(() => {
  const info = (
    themeLocale.value.pages && themeLocale.value.pages.aboutMe
      ? themeLocale.value.pages.aboutMe
      : {}
  ) as GungnirThemePageOptions;
  if (info.title === undefined)
    info.title = themeLocale.value.pageText?.aboutMe;
  return info;
});
</script>

<style lang="scss">
@import '../src/extended-theme/custom-pages/aboutMe.scss';
.even-tech-bg-color {
  width: 100%;
  background-color: rgb(223, 233, 245);
  padding-bottom: 1rem;
  padding-top: 1rem;
  padding-left: 16px;
  display: flex;
  flex-wrap: wrap;
  border-radius: 10px;
}
.pseudo-col {
  margin: 5px;
  max-width: 170px;
  min-width: 170px;
}
.logo-content {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding-bottom: 0px;
  padding-left: 15px;
  padding-right: 15px;
  /*background: rgba(0, 0, 0, 0.6);*/
  text-align: center;
  color: black;
}
.logo-item {
  height: 9em;
  border-radius: 15px;
  border: 1px solid #74747468;
  background-color: white;
  overflow: hidden;
  position: relative;
  transition: transform 0.3s ease;
}

.logo-item:hover {
  transform: scale(1.05);
}
.logo-item img {
  width: 5em;
  height: auto;
  padding-top: 1em;
  display: block;
  margin: auto;
}
</style>
