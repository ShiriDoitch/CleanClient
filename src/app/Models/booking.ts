/**
 * BookingDTO - מודל לקבלת נתונים מהשרת
 * משמש גם עבור מנקה וגם עבור לקוח
 */
export class BookingDTO {
  totalPrice!: number;
  date!: Date | string;
  startWork!: string; // TimeOnly מגיע מהשרת כמחרוזת "HH:mm:ss"
  endWork!: string;
  
  // מזהים אופציונליים - תלוי מי מבקש את הנתונים
  cleanerId?: number;
  customerId?: number;
}

/**
 * BookingPostModel - מודל לשליחת הזמנה חדשה לשרת
 */
export class BookingPostModel {
  date!: Date | string;
  startWork!: string;
  endWork!: string;
  customerId!: number;
}