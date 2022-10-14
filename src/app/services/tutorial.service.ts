import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tutorial } from '../models/tutorial.model';

const baseUrl = 'http://localhost:8086/api/tutorials';

@Injectable({
  providedIn: 'root'
})
export class TutorialService {
  tutorials: Tutorial[] = [
    {
    id: 1,
    title: 'title1',
    description: 'description one1',
    published: true
  },
  {
    id: 2,
    title: 'title2',
    description: 'description one2',
    published: true
  },
  {
    id: 3,
    title: 'title3',
    description: 'description one3',
    published: true
  }

];
count: number = 0;

  constructor(private http: HttpClient) { }

  // getAll(): Tutorial[] {
  //   return this.tutorials;
  //   this.count = 3;
  // }

  getAll(): Observable<Tutorial[]> {
    return this.http.get<Tutorial[]>(baseUrl);
  }
 
  // create(data:Tutorial): Tutorial {
  //    this.count++;
  //   data.id = this.count;
  //   data.published = true;
  //   this.tutorials.push(data);
  //   return data;
  // }

  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }

}
