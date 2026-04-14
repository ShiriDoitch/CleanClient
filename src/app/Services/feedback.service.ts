import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FeedbackDTO,FeedbackPostModel } from '../Models/feedback';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  // כתובת ה-API עבור פידבקים (ודאי שהפורט נכון)
  private apiUrl = 'https://localhost:7189/api/Feedbacks';

  constructor(private _httpClient: HttpClient) { }

  /**
   * GET: api/Feedbacks
   * שליפת כל הפידבקים כ-DTO
   */
  getAllFeedbacks(): Observable<FeedbackDTO[]> {
    return this._httpClient.get<FeedbackDTO[]>(this.apiUrl);
  }

  /**
   * GET: api/Feedbacks/{id}
   * שליפת פידבק ספציפי (לפי הקוד בשרת, כאן חוזר ה-Entity המלא)
   */
  getFeedbackById(id: number): Observable<any> {
    return this._httpClient.get<any>(`${this.apiUrl}/${id}`);
  }

  /**
   * POST: api/Feedbacks
   * שליחת פידבק חדש
   * @param feedback אובייקט מסוג FeedbackPostModel
   */
  addFeedback(feedback: FeedbackPostModel): Observable<any> {
    return this._httpClient.post<any>(this.apiUrl, feedback);
  }

  /**
   * DELETE: api/Feedbacks/{id}
   * מחיקת פידבק
   */
  deleteFeedback(id: number): Observable<void> {
    return this._httpClient.delete<void>(`${this.apiUrl}/${id}`);
  }
}
