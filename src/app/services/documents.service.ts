import { Injectable } from '@angular/core'
import { CollectionReference, DocumentData, collection } from '@firebase/firestore'
import { addDoc, collectionData, deleteDoc, doc, Firestore, updateDoc } from '@angular/fire/firestore'
import { Observable } from 'rxjs'
import { IClient } from '../models/client'

@Injectable({
  providedIn: 'root'
})
export class DocumentsService {
  private documentsCollection: CollectionReference<DocumentData>
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
    const documentReference = doc(this.firestore, `documents/${document.id}`)
    return updateDoc(documentReference, { ...document })
  }

  delete(id: string) {
    const documentReference = doc(this.firestore, `documents/${id}`)
    return deleteDoc(documentReference)
  }
}
