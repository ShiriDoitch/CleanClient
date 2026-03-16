//DTO
export class CleanerDTO {
  id!: number;
  firstName!: string;
  lastName!: string;
  phonNumber!: string;
  city!: string;
  street!: string;
  descriptionOnMe!: string;
  bornIsrael!: boolean;
  availability!: boolean;
  hebrewSpeaker!: boolean;
  pricePerHour!: number;
  upToKm!: number;
  
  // שדות אופציונליים כי לא תמיד יש למנקה פידבקים מיד
  arrFidback?: any[]; 
  arrAvailability?: any[]; 
}

// * CleanerPostModel - מחלקה המייצגת את הנתונים שנשלחים לשרת
export class CleanerPostModel {
  idOfCleaner!: number;
  firstName!: string;
  lastName!: string;
  userName!: string;
  password!: string;
  phonNumber!: string;
  city!: string;
  street!: string;
  descriptionOnMe!: string;
  bornIsrael!: boolean;
  hebrewSpeaker!: boolean;
  mikud!: string;
  pricePerHour!: number;
  upToKm!: number;
}







