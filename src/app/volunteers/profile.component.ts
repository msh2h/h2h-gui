import { Component, OnInit, Input, ViewChild } from "@angular/core";
import { FormGroup, FormControl, Validators, Form } from "@angular/forms";
import { ActivatedRoute, Params, Router } from "@angular/router";
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { Appointment } from '../_models/appointment';
import { HosVisScheduleDialogComponent } from '../hos-vis-schedule-dialog/hos-vis-schedule-dialog.component';
import { VolunteerRole } from '../_models/volunteerRole';
import { Hospital } from '../_models/hospital';
import { VolunteersService } from '../_services/volunteers.service';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  templateUrl: "profile.component.html",
  styleUrls: ["volunteer.scss"],
})
export class ProfileComponent implements OnInit {

  userId: string;
  profile: any;
  isLoaded: boolean = false;
  error: any;

  addInfoForm = new FormGroup({
    Answer1: new FormControl(),
    Answer2: new FormControl(),
    Answer3: new FormControl(),
    Answer4: new FormControl()
  })

  newComment: string;

  visitScheduleGroup = new FormGroup({});

  viewDate: Date = new Date();
  events = [];

  closeResult = '';
  modalData;

  appointments: Appointment[] = [{
    Id: 1,
    Subject: 'Testing',
    StartTime: new Date(2021, 1, 11, 9, 0),
    EndTime: new Date(2021, 1, 11, 10, 0),
    IsAllDay: false,
    RecurrenceRule: 'FREQ=DAILY;INTERVAL=1;COUNT=3',
  }, {
    Id: 2,
    Subject: 'Vacation',
    StartTime: new Date(2021, 1, 12, 11, 0),
    EndTime: new Date(2021, 1, 12, 12, 0),
    IsAllDay: false,
    RecurrenceRule: 'FREQ=DAILY;INTERVAL=1;COUNT=2',
  }];

  constructor(
    private activatedRoute: ActivatedRoute,
    private modalService: NgbModal,
    private spinner: NgxSpinnerService,
    private volService: VolunteersService) {
    // this.userId = this.activatedRoute.snapshot.params['userId'];
    activatedRoute.queryParams.subscribe(
      params => console.log(params['userId'])
    )
  }

  ngOnInit() {
    this.spinner.show();
    setTimeout(() => { this.spinner.hide(); }, 5000);
    this.userId = this.activatedRoute.snapshot.params['userId'];
    this.volService.getProfileById(this.userId)
      .subscribe(
        result => {
          this.profile = result;
          console.log(this.profile);
          this.init();
          this.spinner.hide();
          this.isLoaded = true;
        },
        error => {
          this.error = error;
          this.spinner.hide();
          this.isLoaded = true;
        }
      );
  }

  init() {
    if (this.profile) {
      this.addInfoForm = new FormGroup({
        Answer1: new FormControl(this.profile.knowUsFrom, Validators.nullValidator),
        Answer2: new FormControl(this.profile.liveInShanghai ? "yes" : "no", Validators.nullValidator),
        Answer3: new FormControl(this.profile.speakChinese ? "yes" : "no", Validators.nullValidator),
        Answer4: new FormControl(this.profile.student ? "yes" : "no", Validators.nullValidator),
      })
    }
  }

  canAddComment(): boolean {
    return !(this.newComment == null || this.newComment == undefined || this.newComment.length == 0);
  }

  onAddComment() {
    this.profile.comments = this.profile.comments.concat([
      {
        commentTIme: new Date(),
        comment: this.newComment,
      },
    ]);
    this.newComment = null;
  }

  getHistoryCommentsList() {
    return this.profile.comments;
  }

  onHosVisitSchedule() {
    console.log("confirm");
  }

  openVerticallyCentered(content, data) {
    this.modalData = data;
    console.log("modal data: " + this.modalData);
    const modal: NgbModalRef = this.modalService.open(content, { centered: true, size: 'xl', scrollable: true });
    modal.result.then(
      (result) => { console.log(result); }
      , (reason) => { console.log(reason); }
    );
  }
}
