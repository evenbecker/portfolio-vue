import { defineClientConfig } from '@vuepress/client';
import { addIcons } from 'oh-vue-icons';
import './styles/_links.scss';
import './styles/_tags.scss';
import { FaTag, CoArchLinux, CoExternalLink, FaUser } from 'oh-vue-icons/icons';

addIcons(FaTag, CoArchLinux, CoExternalLink, FaUser);

export default defineClientConfig({});
