import { defineConfig } from 'dumi';

export default defineConfig({
  themeConfig: {
    name: 'test',
  },
  locales: [
    { id: 'zh-CN', name: '中文' },
    { id: 'en-US', name: 'English' },
  ],
});
