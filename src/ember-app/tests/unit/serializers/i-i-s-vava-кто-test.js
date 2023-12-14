import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-vava-кто', 'Unit | Serializer | i-i-s-vava-кто', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-vava-кто',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'model:i-i-s-vava-должности',
    'model:i-i-s-vava-кто',
    'model:i-i-s-vava-сотрудники',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
