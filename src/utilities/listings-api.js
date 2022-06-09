// API modules are where the code lives to communicate
// with the server via AJAX
import sendRequest from './send-request';
const BASE_URL = '/api/listings';

export function getAll() {
  return sendRequest(BASE_URL);
}

export function getById(id) {
  return sendRequest(`${BASE_URL}/${id}`);
}

export function createListing(listingData) {
  return sendRequest(BASE_URL, 'POST', listingData);
}

export function deleteListing(id) {
  return sendRequest(`${BASE_URL}/:${id}`, 'DELETE' );
}