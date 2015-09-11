import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-fetch-client';
import {User} from 'github-api';
import 'fetch';

@inject(HttpClient)
export class Users {
  http: HttpClient;
  heading = 'Github Users';
  users: User[] = [];

  constructor(http: HttpClient) {
    http.configure(config => {
      config
        .useStandardConfiguration()
        .withBaseUrl('https://api.github.com/');
    });

    this.http = http;
  }

  activate() {
    return this.http.fetch('users')
      .then(response => response.json())
      .then(users => this.users = users);
  }
}
