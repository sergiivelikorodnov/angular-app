import { Injectable } from '@angular/core'
import { CollectionReference, DocumentData, collection } from '@firebase/firestore'
import { addDoc, collectionData, deleteDoc, doc, Firestore, updateDoc } from '@angular/fire/firestore'
import { BehaviorSubject, Observable, throwError } from 'rxjs'
import { IClient } from '../models/client'

@Injectable({
  providedIn: 'root'
})
export class DocumentsService {
  private documentsCollection: CollectionReference<DocumentData>
  selectedClient$ = new BehaviorSubject<IClient | null>(null)

  constructor(private readonly firestore: Firestore) {
    this.documentsCollection = collection(this.firestore, 'documents')
  }

  getAll() {
    return collectionData(this.documentsCollection, {
      idField: 'id'
    }) as Observable<IClient[]>
  }

  create(document: IClient) {
    return addDoc(this.documentsCollection, document)
  }

  update(document: IClient) {
    console.log(document)

    const documentReference = doc(this.firestore, `documents/${document.id}`)
    return updateDoc(documentReference, { ...document })
  }

  delete(id: string) {
    const documentReference = doc(this.firestore, `documents/${id}`)
    this.selectedClient$.next(null)
    return deleteDoc(documentReference)
  }

  selectedDocument(document: IClient | null) {
    this.selectedClient$.next(document)
  }
}
