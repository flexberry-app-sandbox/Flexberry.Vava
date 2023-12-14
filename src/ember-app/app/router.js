import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-vava-должности-l');
  this.route('i-i-s-vava-должности-e',
  { path: 'i-i-s-vava-должности-e/:id' });
  this.route('i-i-s-vava-должности-e.new',
  { path: 'i-i-s-vava-должности-e/new' });
  this.route('i-i-s-vava-кто-l');
  this.route('i-i-s-vava-кто-e',
  { path: 'i-i-s-vava-кто-e/:id' });
  this.route('i-i-s-vava-кто-e.new',
  { path: 'i-i-s-vava-кто-e/new' });
  this.route('i-i-s-vava-сотрудники-l');
  this.route('i-i-s-vava-сотрудники-e',
  { path: 'i-i-s-vava-сотрудники-e/:id' });
  this.route('i-i-s-vava-сотрудники-e.new',
  { path: 'i-i-s-vava-сотрудники-e/new' });
});

export default Router;
