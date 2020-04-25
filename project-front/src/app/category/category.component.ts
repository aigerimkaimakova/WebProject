import { Component, OnInit } from '@angular/core';
import {ImageService} from '../image.service';
import {CategoryService} from '../category.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  images: any;
  category: any;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private imageService: ImageService,
    private categoryService: CategoryService
  ) {
    this.router.events.subscribe((value => { this.getImages(); this.getCategory(); }));
  }

  ngOnInit(): void {
    this.getImages();
    this.getCategory();
  }
  getImages(){
    const id = +this.route.snapshot.paramMap.get('id');
    this.imageService.getImagesByCategoryId(id).subscribe(images => this.images = images);
  }
  getCategory(){
    const id = +this.route.snapshot.paramMap.get('id');
    this.categoryService.getCategory(id).subscribe(category => this.category = category);
  }
}
