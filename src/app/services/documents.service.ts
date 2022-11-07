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

  //get All coolection data from Firestore
  getAll() {
    return collectionData(this.documentsCollection, {
      idField: 'id'
    }) as Observable<IClient[]>
  }

  //create document to Firestore
  create(document: IClient) {
    return addDoc(this.documentsCollection, document)
  }

  //update document to Firestore
  update(document: IClient) {
    const documentReference = doc(this.firestore, `documents/${document.id}`)
    return updateDoc(documentReference, { ...document })
  }

  //delete document from Firestore
  delete(document: IClient) {
    const documentReference = doc(this.firestore, `documents/${document.id}`)
    this.selectedClient$.next(null)
    return deleteDoc(documentReference)
  }

  //To remember selected client
  selectedDocument(document: IClient | null) {
    this.selectedClient$.next(document)
  }
}
