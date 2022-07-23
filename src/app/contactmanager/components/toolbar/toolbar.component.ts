import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NewContactDialogComponent } from '../new-contact-dialog/new-contact-dialog.component';




@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
@Output() toggleSideNav = new EventEmitter<void>()

  sideNavDrawer:boolean = false;
  constructor(private dialog:MatDialog) { }

  ngOnInit(): void {
  }

  openAddContactDialog():void{
    let dialogRef = this.dialog.open(NewContactDialogComponent,{
      width: '450px'
    })

    dialogRef.afterClosed().subscribe(result=>{
      console.log('the dialog was closed', result)
    })
  }

}
