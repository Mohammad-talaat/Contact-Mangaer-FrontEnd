import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss']
})
export class MainContentComponent implements OnInit {
  user:User | undefined | null;

  constructor(private userService:UserService,
    private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params=>{
      const id = params['id'];
      this.user = null
      this.userService.users.subscribe(users => {
        if(users.length == 0) return
        setTimeout(() => {
          this.user =  this.userService.userById(id)
        }, 500);
      })
    })
  }

}
