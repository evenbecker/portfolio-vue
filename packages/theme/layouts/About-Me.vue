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

        <h2>Experience</h2>
        <div
          v-for="(experienceItem, experienceId) in frontmatter.experience"
          :key="`experience-group-${experienceId}`"
          class="top-line-wrapper"
        >
          <div class="line-content">
            <p>
              <span>
                <b>{{ experienceItem.name }}</b
                ><span v-if="experienceItem.company" style="display: inline">
                  at
                </span>
                <a
                  v-if="experienceItem.company"
                  :href="experienceItem.company.url"
                  target="_blank"
                >
                  {{ experienceItem.company.placeName }}
                </a>
              </span>
              <span class="line-content__year">{{ experienceItem.year }}</span>
            </p>
            <span
              v-if="experienceItem.extras"
              class="line-content__description"
              >{{ experienceItem.extras }}</span
            >
          </div>
        </div>

        <h2>Miscellaneous</h2>
        <ul>
          <li
            v-for="(
              miscellaneousItem, miscellaneousId
            ) in frontmatter.miscellaneous"
            :key="`experience-group-${miscellaneousId}`"
          >
            {{ miscellaneousItem.desc }}
          </li>
        </ul>
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
</style>
