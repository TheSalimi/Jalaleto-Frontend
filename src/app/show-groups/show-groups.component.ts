import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import * as moment from 'jalali-moment';
import { CreateGroupDialogComponent } from '../create-group-dialog/create-group-dialog.component';
import { RestService } from '../shared/services/Rest.service';
import { Subject, debounceTime, distinctUntilChanged } from 'rxjs';
import { Group } from '../shared/types/Group';
import { Router } from '@angular/router';
import { NzSkeletonParagraph } from 'ng-zorro-antd/skeleton';
@Component({
  selector: 'app-show-groups',
  templateUrl: './show-groups.component.html',
  styleUrls: ['./show-groups.component.scss']
})
export class ShowGroupsComponent implements OnInit {

  @Output() showGroup: EventEmitter<Group> = new EventEmitter<Group>();
  @Input() selectedGroup: Group = null;
  @Input() allGroupsLoading: boolean = false;
  @Input() myGroupsLoading: boolean = false;
  @Output() backToDashboard: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private matDialog: MatDialog, private restService: RestService,
    private router: Router) {

  }

  ngOnInit(): void {

    this.SearchInputChangeHandler();
  }
  @Input() allGroups: Group[] = [];
  @Input() myGroups: Group[] = [];
  filterdGroups: Group[] = [];
  isSearching: boolean = false;
  searchString: string;
  searchInputChanges = new Subject<string>();
  @Output() groupAdded: EventEmitter<boolean> = new EventEmitter<boolean>();

  CreateGroup() {
    const dialogRef: MatDialogRef<any, any> = this.matDialog.open(CreateGroupDialogComponent, {
      disableClose: true,
      hasBackdrop: true,
      autoFocus: false
    })

    dialogRef.afterClosed().subscribe((res) => {
      if (res)
        this.groupAdded.emit(true);

    })
  }

  OpenGroup(group: Group) {
    this.showGroup.emit(group);
  }

  SearchInputChangeHandler() {
    this.searchInputChanges
      .pipe(debounceTime(500), distinctUntilChanged())
      .subscribe((value) => {
        this.Search(value);
      })
  }

  Search(groupName: string) {
    if (!groupName || groupName == '')
      this.filterdGroups = [];
    else
      this.restService.post('Group/Search?GroupName=' + groupName, null).subscribe((res) => {
        console.log(res);
        this.filterdGroups = res['data'];
      })
  }

  DisableSearching() {
    setTimeout(() => {
      this.isSearching = false;
    }, 500)
  }

  NavigateDashboard() {
    this.backToDashboard.emit(true);
  }
}