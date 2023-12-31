import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormGroup, UntypedFormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-add-live-cases',
  templateUrl: './add-live-cases.component.html',
  styleUrls: ['./add-live-cases.component.scss']
})
export class AddLiveCasesComponent implements OnInit {
  form: FormGroup;
  editproduct: any;
  productview = false;
  changename: any;
  changetheproductName: any
  @ViewChild('fileInput') fileInput: ElementRef;
  videoSelect = false;
  apiMainImageSrc: string;
  images: Array<string> = [];
  apiMainImages: Array<string> = [];
  video: string;
  apiVideoUrl: string;
  submitted = false;
  mainImageSrc: string;
  noImage = "assets/noImg.png"
  types: string[] = [
    "Male",
    "Female",
    "Neutral"
  ];
  category = [
    "Anklets",
    "Bracelets",
    "Earrings",
    "Necklace",
    "Nose Pins",
    "Pendant",
    "Rings",
    "Jewellery Set",
    "Toe Rings"
  ]
  stone = [
    'LOréal',
    'Maybelline',
    'MAC',
    'Lakme',
    'Wella',
    'Toni & Guy',
    'TRESemmé',
    'Renee'
  ]
  color = [
    "Gold", "Oxidised Silver", "Rose Gold", "Silver"
  ]
  url = ['test']
  collections = [
    "Diwali", "New Year", "Mother's Day", "Christmas", "Raksha Bandhan", "Eid", "Holi", "Durga pooja", ""
  ]
  productId: string;
  edit = false;
  view = false;
  uploadEnabled: boolean = true;
  result: any;
  productDetails: any;
  isSave = false;

  constructor(private router: Router, private formBuilder: UntypedFormBuilder, private api: ApiService, private snackbar: MatSnackBar, private activeRoute: ActivatedRoute) {
    this.activeRoute.paramMap.subscribe(params => {
      this.productId = params.get('id');
      if (this.productId && this.router.url.includes('edit')) {
        this.edit = true;
        this.getProductDetails();
      } else if (this.router.url.includes('view')) {
        this.view = true;
        this.getProductDetails();
      }

    })
  }

  ngOnInit(): void {
    this.initializeForm();
    if (!this.productId) {
      this.mainImageSrc = this.noImage;
      this.generateRandomString();
    }
  }

  generateRandomString(): string {
    const characters: string = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    this.result = "";

    for (let i: number = 0; i < 12; i++) {
      const randomIndex: number = Math.floor(Math.random() * characters.length);
      this.result += characters.charAt(randomIndex);
    }

    return this.result;
  }


  getProductDetails() {
    this.api.apiGetDetailsCall(this.productId, 'Product/getOneProduct').subscribe(data => {
      this.productDetails = data.data;
      this.form.patchValue(data.data);
      this.mainImageSrc = this.productDetails?.productImages[0];
      this.images = this.productDetails?.productImages;
      this.video = this.productDetails?.productVideos[0];
      if (this.router.url.includes('view')) {
        this.form.disable();
      }
    })

  }
  allFiles: any;
  onFileChange(event: any) {
    const files = event.target.files;
    if (files.length > 0) {
      const file = files[0];
      if (file) {
        this.handleImageUpload(file);
      }
    }
  }
  
  handleImageUpload(file: File) {
    const reader = new FileReader();
    reader.onload = (e: any) => {
      if (e.target.result.includes('image/')) {
        this.mainImageSrc = e.target.result;
      } else {
        // Handle non-image file (if needed)
      }
    };
    reader.readAsDataURL(file);
  }
  
  removeImage() {
    this.mainImageSrc = null;
    // If you have additional logic to handle removal, add it here
  }
  
  clearFileInput() {
    this.fileInput.nativeElement.value = '';
  }
  
  initializeForm() {
    this.form = this.formBuilder.group({
      title: ['', Validators.required], //bc name 
      url: ['', Validators.required],
      description: ['', Validators.required],
      category: ['', Validators.required],
      subcategory: ['', Validators.required],
      ppt: ['', Validators.required],
      institution: ['', Validators.required],
      date: ['', Validators.required],
      time: ['', Validators.required],
      duration: ['', Validators.required],
    })
  }

  discard() {
    if (this.productId) {
      this.form.patchValue(this.productDetails);
    } else {
      this.form.reset();
    }
    this.router.navigate(['/liveCases/list'])
  }


  save() {

  }

}

