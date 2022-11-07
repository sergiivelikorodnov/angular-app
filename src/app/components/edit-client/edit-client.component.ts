import { Component, Input, OnInit } from '@angular/core'
import { Timestamp } from '@angular/fire/firestore'
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { IClient } from 'src/app/models/client'
import { DocumentsService } from 'src/app/services/documents.service'
import { ModalService } from 'src/app/services/modal.service'

@Component({
  selector: 'app-edit-client',
  templateUrl: '../create-client/create-client.component.html',
  styleUrls: ['./edit-client.component.scss']
})
export class EditClientComponent implements OnInit {
  constructor(private documentsService: DocumentsService, private modalService: ModalService) {}
  @Input() clientData: IClient
  form: FormGroup

  ngOnInit(): void {
    this.form = new FormGroup({
      client: new FormControl<string>(this.clientData.client, [Validators.required, Validators.minLength(5)]),
      amount: new FormControl<number | null>(this.clientData.amount, [
        Validators.required,
        Validators.pattern('^[0-9]*$')
      ]),
      date: new FormControl<string>(new Date(this.clientData.date.seconds * 1000).toISOString().slice(0, 10), [
        Validators.required
      ]),
      notice: new FormControl<string | null>(this.clientData.notice ? this.clientData.notice : null)
    })
  }

  get client() {
    return this.form.controls.client as FormControl
  }

  get date() {
    return this.form.controls.date as FormControl
  }

  get amount() {
    return this.form.controls.amount as FormControl
  }

  submit() {
    this.form.value.client &&
      this.form.value.amount &&
      this.form.value.date &&
      this.documentsService
        .update({
          id: this.clientData.id,
          creatingDate: this.clientData.creatingDate,
          client: this.form.value.client,
          amount: this.form.value.amount,
          date: Timestamp.fromDate(new Date(this.form.value.date)),
          notice: this.form.value.notice
        })
        .then(() => {
          this.modalService.close()
        })
  }
}
