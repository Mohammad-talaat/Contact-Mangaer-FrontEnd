import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';

const smallBrPoint = 750;
@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  constructor(private breakPointObvserver: BreakpointObserver) { }
  showFiller:boolean = false;
  isScreenSmall:boolean = false;
  ngOnInit(): void {
    this.breakPointObvserver.observe([`(max-width:${smallBrPoint}px)`]).subscribe((state:BreakpointState)=>{
      this.isScreenSmall = state.matches;
    })
  }

}
