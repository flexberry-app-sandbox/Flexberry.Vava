import {
  defineNamespace,
  defineProjections,
  Model as КтоMixin
} from '../mixins/regenerated/models/i-i-s-vava-кто';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(КтоMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
