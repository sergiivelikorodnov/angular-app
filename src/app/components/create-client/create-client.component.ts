import { Component, OnInit } from '@angular/core'
import { Timestamp } from '@angular/fire/firestore'
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { throwError } from 'rxjs'
import { DocumentsService } from 'src/app/services/documents.service'
import { ErrorService } from 'src/app/services/error.service'
import { ModalService } from 'src/app/services/modal.service'

@Component({
  selector: 'app-create-client',
  templateUrl: './create-client.component.html'
})
export class CreateClientComponent implements OnInit {
  constructor(
    private documentsService: DocumentsService,
    public modalService: ModalService,
    private errorService: ErrorService
  ) {}
  title = 'Create client'

  //create FormGroup with default values
  form = new FormGroup({
    client: new FormControl<string>('', [Validators.required, Validators.minLength(5)]),
    amount: new FormControl<number | null>(null, [Validators.required, Validators.pattern('^[0-9]*$')]),
    date: new FormControl<string>(new Date().toISOString().slice(0, 10), [Validators.required]),
    notice: new FormControl<string | null>(null)
  })

  //get access to FormControl to process errors
  get client() {
    return this.form.controls.client as FormControl
  }

  get date() {
    return this.form.controls.date as FormControl
  }

  get amount() {
    return this.form.controls.amount as FormControl
  }

  ngOnInit(): void {}

  submit() {
    //Process Create Firestore Client
    this.form.value.client &&
      this.form.value.amount &&
      this.form.value.date &&
      this.documentsService
        .create({
          client: this.form.value.client,
          amount: this.form.value.amount,
          creatingDate: Timestamp.fromDate(new Date()),
          date: Timestamp.fromDate(new Date(this.form.value.date)),
          notice: this.form.value.notice
        })
        .then(() => {
          this.modalService.close()
        })
        .catch(err => this.errorHandler(err))
  }

  // Error handler
  private errorHandler(error: any) {
    this.errorService.handler(error.message)
    return throwError(() => error.message)
  }
}
