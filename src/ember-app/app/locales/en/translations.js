import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISVavaДолжностиLForm from './forms/i-i-s-vava-должности-l';
import IISVavaКтоLForm from './forms/i-i-s-vava-кто-l';
import IISVavaСотрудникиLForm from './forms/i-i-s-vava-сотрудники-l';
import IISVavaДолжностиEForm from './forms/i-i-s-vava-должности-e';
import IISVavaКтоEForm from './forms/i-i-s-vava-кто-e';
import IISVavaСотрудникиEForm from './forms/i-i-s-vava-сотрудники-e';
import IISVavaДолжностиModel from './models/i-i-s-vava-должности';
import IISVavaКтоModel from './models/i-i-s-vava-кто';
import IISVavaСотрудникиModel from './models/i-i-s-vava-сотрудники';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-vava-должности': IISVavaДолжностиModel,
    'i-i-s-vava-кто': IISVavaКтоModel,
    'i-i-s-vava-сотрудники': IISVavaСотрудникиModel
  },

  'application-name': 'Vava',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Vava',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Vava',
          title: 'Vava'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        vava: {
          caption: 'Vava',
          title: 'Vava',
          'i-i-s-vava-должности-l': {
            caption: 'Должности',
            title: ''
          },
          'i-i-s-vava-кто-l': {
            caption: 'Кто',
            title: ''
          },
          'i-i-s-vava-сотрудники-l': {
            caption: 'Сотрудники',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-vava-должности-l': IISVavaДолжностиLForm,
    'i-i-s-vava-кто-l': IISVavaКтоLForm,
    'i-i-s-vava-сотрудники-l': IISVavaСотрудникиLForm,
    'i-i-s-vava-должности-e': IISVavaДолжностиEForm,
    'i-i-s-vava-кто-e': IISVavaКтоEForm,
    'i-i-s-vava-сотрудники-e': IISVavaСотрудникиEForm
  },

});

export default translations;
