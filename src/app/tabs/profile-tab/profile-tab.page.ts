import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-profile-tab',
  templateUrl: 'profile-tab.page.html',
  styleUrls: ['profile-tab.page.scss']
})
export class ProfileTabPage {

  constructor(private authService: AuthService) { }

  logout() {
    this.authService.logout();
  }
}
