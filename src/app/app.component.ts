import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { MySharedLibraryService } from 'my-shared-library';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'shell';

  constructor(private sharedService: MySharedLibraryService) {
    this.sharedService.addTodo('hola');
  }
}
