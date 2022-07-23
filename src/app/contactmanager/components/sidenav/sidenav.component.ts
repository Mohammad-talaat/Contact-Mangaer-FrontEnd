import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDrawer, MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';
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

  direction:string | any = 'ltr'
  isDarkTheme:boolean = false;
  users!:Observable<User[]>;
  constructor(private breakPointObvserver: BreakpointObserver,private router:Router,
    private userService:UserService) { }
  showFiller:boolean = false;
  isScreenSmall:boolean = false;
  @ViewChild(MatDrawer) drawer !: MatDrawer

  toggleTheme(){
    this.isDarkTheme = !this.isDarkTheme
  }

  toggleDir(){
    this.direction = this.direction == 'ltr'? 'rtl':'ltr'
  }

  ngOnInit(): void {
    this.breakPointObvserver.observe([`(max-width:${smallBrPoint}px)`]).subscribe((state:BreakpointState)=>{
      this.isScreenSmall = state.matches;
    })
    this.users = this.userService.users;

    this.userService.loadAll()


    this.router.events.subscribe(()=>{
      if(this.isScreenSmall){
        this.drawer.close()
      }
    })

  }

}
