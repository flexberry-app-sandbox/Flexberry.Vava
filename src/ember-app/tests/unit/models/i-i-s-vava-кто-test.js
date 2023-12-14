import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-vava-кто', 'Unit | Model | i-i-s-vava-кто', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-vava-должности',
    'model:i-i-s-vava-кто',
    'model:i-i-s-vava-сотрудники',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
