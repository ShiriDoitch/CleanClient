import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CustomerDTO,CustomerPostModel } from '../Models/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  // כתובת ה-API כפי שהוגדרה ב-Route של הקונטרולר
  private apiUrl = 'https://localhost:7189/api/Customers' 

  constructor(private _httpClient: HttpClient) { }

  /**
   * GET: api/Customers
   * מחזיר את כל הלקוחות
   */
  getCustomers(): Observable<CustomerDTO[]> {
    return this._httpClient.get<CustomerDTO[]>(this.apiUrl);
  }

  /**
   * GET: api/Customers/{id}
   * מחזיר לקוח לפי מזהה
   */
  getCustomerById(id: number): Observable<CustomerDTO> {
    return this._httpClient.get<CustomerDTO>(`${this.apiUrl}/${id}`);
  }

  /**
   * POST: api/Customers
   * יצירת לקוח חדש (כולל יצירת משתמש במערכת)
   * בשרת הגדרת את זה כ-AllowAnonymous, כך שזה יעבוד גם ללא התחברות
   */
  addCustomer(customer: CustomerPostModel): Observable<CustomerPostModel> {
    return this._httpClient.post<CustomerPostModel>(this.apiUrl, customer);
  }

  /**
   * PUT: api/Customers/{id}
   * עדכון נתוני לקוח קיים
   */
  updateCustomer(id: number, customer: CustomerDTO): Observable<CustomerDTO> {
    return this._httpClient.put<CustomerDTO>(`${this.apiUrl}/${id}`, customer);
  }

  /**
   * DELETE: api/Customers/{id}
   * מחיקת לקוח
   */
  deleteCustomer(id: number): Observable<void> {
    return this._httpClient.delete<void>(`${this.apiUrl}/${id}`);
  }
}
