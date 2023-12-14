import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  дата: DS.attr('date'),
  код: DS.attr('number'),
  сотрудники: DS.belongsTo('i-i-s-vava-сотрудники', { inverse: null, async: false })
});

export let ValidationRules = {
  дата: {
    descriptionKey: 'models.i-i-s-vava-кто.validations.дата.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  код: {
    descriptionKey: 'models.i-i-s-vava-кто.validations.код.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  сотрудники: {
    descriptionKey: 'models.i-i-s-vava-кто.validations.сотрудники.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('КтоE', 'i-i-s-vava-кто', {
    код: attr('Код', { index: 0 }),
    дата: attr('Дата', { index: 1 }),
    сотрудники: belongsTo('i-i-s-vava-сотрудники', 'Сотрудники', {
      фамилия: attr('Фамилия', { index: 3, hidden: true })
    }, { index: 2, displayMemberPath: 'фамилия' })
  });

  modelClass.defineProjection('КтоL', 'i-i-s-vava-кто', {
    код: attr('Код', { index: 0 }),
    дата: attr('Дата', { index: 1 }),
    сотрудники: belongsTo('i-i-s-vava-сотрудники', 'Фамилия', {
      фамилия: attr('Фамилия', { index: 2 }),
      имя: attr('Имя', { index: 3 }),
      отчество: attr('Отчество', { index: 4 })
    }, { index: -1, hidden: true })
  });
};
