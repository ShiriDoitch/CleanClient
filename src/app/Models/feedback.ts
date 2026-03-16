/**
 * FeedbackDTO - נתונים שמתקבלים מהשרת
 * כולל את הטקסט ואת פרטי המנקה המקושרים
 */
import { CleanerDTO } from "./cleaner";
export class FeedbackDTO {
  textOfFeedback!: string;
  cleanerId!: number;
  
  // כאן מגיע אובייקט המנקה המלא. 
  // השתמשתי ב-CleanerDTO שיצרנו קודם.
  cleaners!: CleanerDTO; 
}





/**
 * FeedbackPostModel - נתונים שנשלחים ליצירת פידבק חדש
 * שולחים רק את הטקסט ואת המזהה של המנקה
 */
export class FeedbackPostModel {
  textOfFeedback!: string;
  cleanerId!: number;
}