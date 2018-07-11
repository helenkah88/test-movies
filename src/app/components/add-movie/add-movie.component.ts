import { Component, OnInit, Input, Output, EventEmitter, ElementRef, ViewChild } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Movie } from '../../models/movie';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.scss']
})
export class AddMovieComponent implements OnInit {

	@Input() movie: Movie;
	@Output() add: EventEmitter<any> = new EventEmitter();

	myform: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  /*
  	this.myform = new FormGroup({
  		title: new FormControl('ffe')
  	})*/
  	/*this.myform = this.fb.group({
  		title: ['hr', Validators.required]
  	})*/
  }

  addMovie(form) {
  	this.add.emit({form, movie: this.movie});
  }

}
