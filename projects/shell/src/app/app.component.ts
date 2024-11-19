import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthService } from '@demo/auth';

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [RouterModule],
  templateUrl: './app.component.html'
})
export class AppComponent {
  auth = inject(AuthService);
  title = 'shell';

  constructor() {
    this.auth.userName = 'Jane Doe';
  }
}
