import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('about');
  this.route('contact');
  this.route('header');
  this.route('rental', {path: '.rental/:rental_id'});
                      //^^^THIS is a DYNAMIC SEGMENT. It will represent
                      //the id of a given rental in firebase, so that's all
                      //that will be selected
});

export default Router;
