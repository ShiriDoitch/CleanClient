import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
// ודאי שיש לך אינטרפייס בשם Booking שתואם לשדות ב-.NET
import { BookingDTO,BookingPostModel } from '../Models/booking';
@Injectable({
  providedIn: 'root'
})
export class BookingService {

  // כתובת ה-API עבור הזמנות
  private apiUrl = 'https://localhost:7189/api/Bookings'

  constructor(private _httpClient:HttpClient) { }

  /**
   * GET: api/Bookings
   * שליפת כל ההזמנות
   */
  getBookings(): Observable<BookingDTO[]> {
    return this._httpClient.get<BookingDTO[]>(this.apiUrl)
  }

  /**
   * GET: api/Bookings/{id}
   * שליפת הזמנה לפי קוד הזמנה (BookingCode)
   */
  getBookingById(id: number): Observable<BookingDTO> {
    return this._httpClient.get<BookingDTO>(`${this.apiUrl}/${id}`);
  }

  /**
   * POST: api/Bookings
   * יצירת הזמנה חדשה
   */
  addBooking(booking: BookingPostModel): Observable<BookingPostModel> {
    return this._httpClient.post<BookingPostModel>(this.apiUrl, booking);
  }

  /**
   * PUT: api/Bookings/{id}
   * עדכון פרטי הזמנה קיימת
   */
  updateBooking(id: number, booking: BookingPostModel): Observable<BookingPostModel> {
    return this._httpClient.put<BookingPostModel>(`${this.apiUrl}/${id}`, booking);
  }

  /**
   * DELETE: api/Bookings/{id}
   * ביטול/מחיקת הזמנה
   */
  deleteBooking(id: number): Observable<void> {
    return this._httpClient.delete<void>(`${this.apiUrl}/${id}`);
  }
}
