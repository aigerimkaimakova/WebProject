import { Component, OnInit } from '@angular/core';
import {IMAGES} from '../mock-images';

@Component({
  selector: 'app-image-list',
  templateUrl: './image-list.component.html',
  styleUrls: ['./image-list.component.css']
})
export class ImageListComponent implements OnInit {
  images = IMAGES;

  constructor() { }

  ngOnInit(): void {
  }

}
