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
          <a
            v-if="frontmatter.cvLink"
            :href="frontmatter.cvLink"
            target="_blank"
          >
            Curriculum Vitae
          </a>
          <a
            v-if="frontmatter.sourceCode"
            :href="frontmatter.sourceCode"
            target="_blank"
          >
            Source Code
          </a>
        </div>

        <h2>Tech Stack</h2>
        <p>I have experience in the following web technologies:</p>
        <div class="even-tech-bg-color">
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
              <img src="/img/about/DotNetCoreLogoVector.svg.png" alt=" " />
              <div class="logo-content">
                <p>ASP.NET Web API</p>
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
  background-color: beige;
  margin-bottom: 1rem;
}
.pseudo-col {
  margin: 5px;
  max-width: 180px;
  min-width: 180px;
}
.logo-content {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding-bottom: 15px;
  padding-left: 15px;
  padding-right: 15px;
  /*background: rgba(0, 0, 0, 0.6);*/
  color: hsl(305, 32%, 24%);
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
  padding-top: 1.5em;
  display: block;
  margin: auto;
}
</style>
