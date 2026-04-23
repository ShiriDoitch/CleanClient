import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CleanerDTO,CleanerPostModel } from '../Models/cleaner';

@Injectable({
  providedIn: 'root'
})
export class CleanerService {

  // ודאי שהפורט (7001 בדוגמה) תואם למה שמופיע אצלך ב-Visual Studio
  private apiUrl = 'https://localhost:7189/api/Cleaners'; 

  constructor(private _httpClient: HttpClient) { }

  /**
   * שליפת כל המנקים מהשרת
   * @returns Observable של מערך DTOs
   */
  getAllCleaners(): Observable<CleanerDTO[]> {
    return this._httpClient.get<CleanerDTO[]>(this.apiUrl);
  }

  /**
   * שליפת מנקה ספציפי לפי מזהה
   * @param id המזהה של המנקה
   */
  getCleanerById(id: number): Observable<CleanerDTO> {
    return this._httpClient.get<CleanerDTO>(`${this.apiUrl}/${id}`);
  }

  /**
   * הוספת מנקה חדש למערכת
   * @param cleaner הנתונים מהטופס (PostModel הכולל סיסמה ושם משתמש)
   */
  addCleaner(cleaner: CleanerPostModel): Observable<CleanerPostModel> {
    return this._httpClient.post<CleanerPostModel>(this.apiUrl, cleaner);
  }

  /**
   * עדכון נתוני מנקה קיים
   * @param cleaner אובייקט המנקה המעודכן
   */
  updateCleaner(cleaner: CleanerPostModel): Observable<void> {
    return this._httpClient.put<void>(`${this.apiUrl}/${cleaner}`, cleaner);
  }

  /**
   * מחיקת מנקה מהמערכת
   * @param id מזהה המנקה למחיקה
   */
  deleteCleaner(id: number): Observable<void> {
    return this._httpClient.delete<void>(`${this.apiUrl}/${id}`);
  }
}
