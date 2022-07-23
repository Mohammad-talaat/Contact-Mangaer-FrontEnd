import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Note } from '../../models/note';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit, AfterViewInit {
  @Input() notes!:Note[]
  @ViewChild(MatPaginator) paginator!: MatPaginator
  displayedColumns: string[] = ['position', 'title', 'date'];
  dataSource!: MatTableDataSource<Note>
  constructor() { }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator
  }
  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<Note>(this.notes);
  }

}


function viewchild(MatPaginator: any) {
  throw new Error('Function not implemented.');
}

