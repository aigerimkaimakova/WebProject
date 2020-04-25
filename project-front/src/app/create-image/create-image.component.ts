import {Component, OnInit, ViewChild} from '@angular/core';
import {Caategory} from "../models/category.model";
import {Immage} from "../models/image.model"
import {ActivatedRoute, Router} from "@angular/router";
import {ImageService} from "../image.service";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-create-image',
  templateUrl: './create-image.component.html',
  styleUrls: ['./create-image.component.css']
})
export class CreateImageComponent implements OnInit {
  panelTitle: string;
  previewPhoto = false;
  imgForm: FormGroup;
  image: Immage;
  categories: Caategory[] = [
    {id: 1, name: 'Contemporary Art'},
    {id: 2, name: 'Post-War Art'},
    {id: 3, name: 'Impressionist & Modern Art'},
    {id: 4, name: 'Street Art'}
  ]
  constructor(
    private formBuilder: FormBuilder,
    private imageService: ImageService,
    // tslint:disable-next-line:variable-name
    private _router: Router,
    // tslint:disable-next-line:variable-name
    private _route: ActivatedRoute) {
  }
  ngModel = {
    id: 0,
    category_id: 0,
    name: '',
    price: 0,
    description: '',
    images: ''
  }

  ngOnInit(): void {
  }
  onCreate(): void {
    this.imageService.set(this.ngModel).subscribe();
  }
// Subscribe to route parameter changes and react accordingly
//   ngOnInit() {
//     this._route.paramMap.subscribe(parameterMap => {
//       const id = +parameterMap.get('id');
//       this.getImage(id);
//     });
//   }
//   getImage( id: number) {
//     if (id === 0) {
//       this.image = {
//         id: null,
//         category: 'select',
//         name: null,
//         price: null,
//         description: null,
//         images: null
//       };
//       this.panelTitle = 'Create Image';
//       this.imgForm = this.createImgForm.reset();
//     } else {
//       this.panelTitle = 'Edit Image';
//       this.imageService.getImage(id).subscribe(
//         (employee) => this.image = employee,
//         (err: any) => console.log(err)
//       );
//     }
//   }
//   togglePhotoPreview() {
//     this.previewPhoto = !this.previewPhoto;
//   }
//   saveImg(): void {
//     if (this.image.id == null) {
//       this.imageService.addImage(this.image).subscribe(
//         (data: Immage) => {
//           console.log(data);
//           this.createImgForm.reset();
//           this._router.navigate(['/edit:id']);
//         },
//         (error: any) => console.log(error)
//       );
//     } else {
//       this.imageService.updateImg(this.image).subscribe(
//         () => {
//           this.createImgForm.reset();
//           this._router.navigate(['/edit/:id']);
//         },
//         (error: any) => console.log(error)
//       );
//     }
//   }
}
