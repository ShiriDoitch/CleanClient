import { OnInit, Component } from "@angular/core";
import { BookingDTO } from "../Models/booking";
import { BookingService } from "../Services/booking.service";
import { CommonModule } from "@angular/common";

 
@Component({
  selector: 'app-schedule-of-cleaner', 
  imports: [CommonModule],     // השם שבו תשתמשי ב-HTML (למשל <app-schedule-of-cleaner>)
  templateUrl: './schedule-of-cleaner.html', // הנתיב לקובץ ה-HTML
  styleUrls: ['./schedule-of-cleaner.css']    // הנתיב לקובץ ה-CSS
})
export class CleanerListComponent implements OnInit {
  bookings: BookingDTO[] = [];

  constructor(private bookingService: BookingService) { }

  ngOnInit(): void {
    const cleanerId = 123; 
    this.bookingService.getBookingsByCleaner(cleanerId).subscribe(data => {
      this.bookings = data;
    });
  }
}
