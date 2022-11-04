import { HttpErrorResponse } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { CollectionReference, DocumentData, collection } from '@firebase/firestore'
import { collectionData, Firestore } from '@angular/fire/firestore'
import { catchError, Observable, throwError } from 'rxjs'
import { IClient } from '../models/client'
import { ErrorService } from './error.service'

@Injectable({
  providedIn: 'root'
})
export class DocumentsService {
  private documentsCollection: CollectionReference<DocumentData>
  constructor(private errorService: ErrorService, private readonly firestore: Firestore) {
    this.documentsCollection = collection(this.firestore, 'documents')
  }

  private errorHandler(error: HttpErrorResponse) {
    this.errorService.handler(error.message)
    return throwError(() => error.message)
  }

  getAll() {
    return collectionData(this.documentsCollection, {
      idField: 'id',
    }) as Observable<IClient[]>;
  }


  /* getData(): Observable<IClient[]> {
    const dbInstance = collection(this.firestore, 'documents')

    getDocs(dbInstance).then(res => {
      this.data = [
        ...res.docs.map(item => {
          return { ...(item.data() as IClient), id: item.id }
        })
      ]
    })
    catchError(this.errorHandler.bind(this))
  } */
}
