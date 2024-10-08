import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { bootstrapLinkedin, bootstrapGithub, bootstrapEnvelopeAtFill} from '@ng-icons/bootstrap-icons';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, NgIconComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  viewProviders: [provideIcons({bootstrapLinkedin, bootstrapGithub, bootstrapEnvelopeAtFill})]
})

export class AppComponent {
  title = 'Anouk de Graaf';

  buttons = [ {
    link: "https://www.linkedin.com/in/anouk-de-graaf",
    icon: 'bootstrapLinkedin'
  },
  {
    link: "https://github.com/anoukx99",
    icon: 'bootstrapGithub'
  }
]
}
