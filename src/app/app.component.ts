import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { ServerComponent } from './server/server.component';
import { VipComponent } from './vip/vip.component';
import { DiscordComponent } from './discord/discord.component';

@Component({
  selector: 'brasa-root',
  standalone: true,
  imports: [ServerComponent, NavbarComponent, VipComponent, DiscordComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'brasaPage';
}
