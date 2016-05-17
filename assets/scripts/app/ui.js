'use strict';

const app = require('../app-data.js');
const loadMap = require('../app/google_map_signin.js');
const loadBucket = require('./handlebars.js');

const getLocationsSuccess = (data) => {
  console.log('win');
  console.log(data);
  loadBucket.loadBucket();
};

const getLocationsFailure = (data) => {
  console.log('you fail');
  console.log(data);

};

const addLocationSuccess = (data) => {
  console.log('Success');
  console.log(data);
  app.user.locations = data.user.locations;
  loadMap.clearMap();
  loadMap.addPoints();
};

const addLocationFailure = (data) => {
  console.log('you fail');
  console.log(data);

};

const getPhotosFailure = (data) => {
  console.log('get photos failed');
  console.log(data);

};

const getPhotosSuccess = (data) => {
  console.log('Photo Success');
  console.log(data);
  app.photos = data.photos.photo[0];
  app.flickrURL = 'http://farm' + app.photos.farm + '.static.flickr.com/' + app.photos.server + '/' + app.photos.id + '_' + app.photos.secret + '.jpg';
  console.log(app.flickrURL);
  $('#photoResult').html('<img src="' + app.flickrURL + '">');

};

module.exports = {
  getLocationsSuccess,
  getLocationsFailure,
  addLocationSuccess,
  addLocationFailure,
  getPhotosFailure,
  getPhotosSuccess


};
