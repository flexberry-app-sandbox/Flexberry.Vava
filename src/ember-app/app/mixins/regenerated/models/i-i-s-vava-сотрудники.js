import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  имя: DS.attr('string'),
  код: DS.attr('number'),
  отчество: DS.attr('string'),
  телефон: DS.attr('string'),
  фамилия: DS.attr('string'),
  должности: DS.belongsTo('i-i-s-vava-должности', { inverse: null, async: false })
});

export let ValidationRules = {
  имя: {
    descriptionKey: 'models.i-i-s-vava-сотрудники.validations.имя.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  код: {
    descriptionKey: 'models.i-i-s-vava-сотрудники.validations.код.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  отчество: {
    descriptionKey: 'models.i-i-s-vava-сотрудники.validations.отчество.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  телефон: {
    descriptionKey: 'models.i-i-s-vava-сотрудники.validations.телефон.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  фамилия: {
    descriptionKey: 'models.i-i-s-vava-сотрудники.validations.фамилия.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  должности: {
    descriptionKey: 'models.i-i-s-vava-сотрудники.validations.должности.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('СотрудникиE', 'i-i-s-vava-сотрудники', {
    код: attr('Код', { index: 0 }),
    фамилия: attr('Фамилия', { index: 1 }),
    имя: attr('Имя', { index: 2 }),
    отчество: attr('Отчество', { index: 3 }),
    телефон: attr('Телефон', { index: 4 }),
    должности: belongsTo('i-i-s-vava-должности', 'Должности', {
      название: attr('Название', { index: 6, hidden: true })
    }, { index: 5, displayMemberPath: 'название' })
  });

  modelClass.defineProjection('СотрудникиL', 'i-i-s-vava-сотрудники', {
    код: attr('Код', { index: 0 }),
    фамилия: attr('Фамилия', { index: 1 }),
    имя: attr('Имя', { index: 2 }),
    отчество: attr('Отчество', { index: 3 }),
    телефон: attr('Телефон', { index: 4 }),
    должности: belongsTo('i-i-s-vava-должности', 'Название', {
      название: attr('Название', { index: 5 })
    }, { index: -1, hidden: true })
  });
};
