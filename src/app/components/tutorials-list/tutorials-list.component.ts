import { Component, OnInit } from '@angular/core';
import { Tutorial } from 'src/app/models/tutorial.model';

@Component({
  selector: 'app-tutorials-list',
  templateUrl: './tutorials-list.component.html',
  styleUrls: ['./tutorials-list.component.css']
})
export class TutorialsListComponent implements OnInit {
  tutorials?: Tutorial[] = [
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
  currentTutorial?: Tutorial;

  constructor() { }

  ngOnInit(): void {
  }

}
