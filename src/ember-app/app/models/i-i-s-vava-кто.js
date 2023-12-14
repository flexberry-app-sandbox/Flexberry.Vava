import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as КтоMixin
} from '../mixins/regenerated/models/i-i-s-vava-кто';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(КтоMixin, Validations, {
});

defineProjections(Model);

export default Model;
