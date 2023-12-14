import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

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
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Vava',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Vava',
          title: 'Vava'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
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
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
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
