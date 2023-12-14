import { Serializer as КтоSerializer } from
  '../mixins/regenerated/serializers/i-i-s-vava-кто';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(КтоSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
