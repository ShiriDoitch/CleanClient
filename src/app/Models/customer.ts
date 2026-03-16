/**
 * CustomerDTO - מחלקה המייצגת לקוח כפי שהוא מתקבל מהשרת
 * משמשת להצגת נתוני לקוח במערכת
 */
export class CustomerDTO {
  id!: number;
  firstName!: string;
  lastName!: string;
  phonNumber!: string;
  city!: string;
  street!: string;
  mikud!: string;
  numberFlat!: number;
}

/**
 * CustomerPostModel - מחלקה המייצגת נתוני לקוח לשליחה לשרת
 * משמשת להרשמה או עדכון פרטי לקוח
 */
export class CustomerPostModel {
  userName!: string;
  password!: string;
  idOfCustomer!: number; // תעודת זהות
  firstName!: string;
  lastName!: string;
  phonNumber!: string;
  city!: string;
  street!: string;
  mikud!: string;
  numberFlat!: number;
}