import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Announcement } from './../announcement';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AnnouncementService {
  constructor(private httpClient: HttpClient) {}

  baseURL = 'https://newsapi20221108120432.azurewebsites.net/api/Announcements';

  readonly httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  serviceCall() {
    console.log('Service was called!');
  }

  getAnnouncements(): Observable<Announcement[]> {
    return this.httpClient.get<Announcement[]>(this.baseURL, this.httpOptions);
  }

  addAnnouncement(Announcement: Announcement) {
    const body = { ...Announcement};

    this.httpClient
      .post(this.baseURL, Announcement, this.httpOptions)
      .subscribe((response) => {
        return response;
      });
  }

  deleteAnnouncement(id: string) {
    this.httpClient
      .delete(this.baseURL + '/' + id, this.httpOptions)
      .subscribe((response) => {
        return response;
      });
  }
}
