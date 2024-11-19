import { Component, OnInit, inject } from '@angular/core';
import { AuthService } from '@demo/auth';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  auth = inject(AuthService);

  ngOnInit(): void {
    console.warn('userName', this.auth.userName);
  }

  search(): void {
    alert('Not implemented in this demo!');
  }
}
