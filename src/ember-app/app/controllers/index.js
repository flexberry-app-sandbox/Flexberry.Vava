import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.vava.caption'),
          title: i18n.t('forms.application.sitemap.vava.title'),
          children: [{
            link: 'i-i-s-vava-должности-l',
            caption: i18n.t('forms.application.sitemap.vava.i-i-s-vava-должности-l.caption'),
            title: i18n.t('forms.application.sitemap.vava.i-i-s-vava-должности-l.title'),
            icon: 'address card',
            children: null
          }, {
            link: 'i-i-s-vava-кто-l',
            caption: i18n.t('forms.application.sitemap.vava.i-i-s-vava-кто-l.caption'),
            title: i18n.t('forms.application.sitemap.vava.i-i-s-vava-кто-l.title'),
            icon: 'tasks',
            children: null
          }, {
            link: 'i-i-s-vava-сотрудники-l',
            caption: i18n.t('forms.application.sitemap.vava.i-i-s-vava-сотрудники-l.caption'),
            title: i18n.t('forms.application.sitemap.vava.i-i-s-vava-сотрудники-l.title'),
            icon: 'chart line',
            children: null
          }]
        }
      ]
    };
  }),
})