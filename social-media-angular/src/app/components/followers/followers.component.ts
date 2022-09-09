import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FollowersService } from 'src/app/services/followers.service';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-followers',
  templateUrl: './followers.component.html',
  styleUrls: ['./followers.component.css']
})
export class FollowersComponent implements OnInit {

  toFollowForm = new FormGroup({
    userName: new FormControl(''),
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    
  })

  constructor(private followersService : FollowersService, private router : Router) { }
  public isFollow: boolean = false;
  ngOnInit(): void {
  }

  onClick(){
    this.isFollow = !this.isFollow;

  }




  onSubmit(e: any): void{
    e.preventDefault;
    //  this.followersService.follow(this.toFollowForm.value.userName, this.toFollowForm.value.firstName, this.toFollowForm.value.lastName)
    //   .subscribe(
    //     (response) => {
    //       this.followersService.toFollowUser = response
    //       this.router.navigate(['toFollowUser'])
    //     }
    //   )
  }

}
