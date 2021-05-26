import { OnInit, Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-my-bootstrap-modal',
    template: `<div class="modal-header">
        <h5 class="modal-title">Please Confirm...</h5>
        <button type="button" class="close" data-dismiss="modal" (click)="closeModal('dismiss')">
            <span aria-hidden="true">&times;</span>
        </button>
    </div>
    <div class="modal-body">
        <p>{{ comment }}</p>
        <p>Role: {{ role.roleType }}</p>
        <p>Details: {{ role.role }}</p>
    </div>
    <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal" (click)="closeModal(false)">Close</button>
        <button type="button" class="btn btn-primary" (click)="closeModal(true)">Confirm</button>
    </div>`,
})
export class MyModifyRoleModalComponent implements OnInit {

    @Input() fromParent;

    comment: string
    role: any
    constructor(
        public activeModal: NgbActiveModal
    ) { }

    ngOnInit() {
        console.log(this.fromParent);
        this.comment = this.fromParent.comment;
        this.role = this.fromParent.role;
    }

    closeModal(sendData) {
        this.activeModal.close(sendData);
    }
}