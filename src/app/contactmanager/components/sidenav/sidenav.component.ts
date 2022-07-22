import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';

const smallBrPoint = 750;
@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  users!:Observable<User[]>;
  constructor(private breakPointObvserver: BreakpointObserver,
    private userService:UserService) { }
  showFiller:boolean = false;
  isScreenSmall:boolean = false;
  ngOnInit(): void {
    this.breakPointObvserver.observe([`(max-width:${smallBrPoint}px)`]).subscribe((state:BreakpointState)=>{
      this.isScreenSmall = state.matches;
    })
    this.users = this.userService.users;
    this.userService.loadAll()
    this.users.subscribe(data => {
      console.log(data)
    })
  }

}
