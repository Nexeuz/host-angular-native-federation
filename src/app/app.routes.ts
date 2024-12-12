import { loadRemoteModule } from '@angular-architects/native-federation';
import { Routes } from '@angular/router';
import { AppComponent } from './app.component';

export const routes: Routes = [
  {
    path: 'remote-feature',
    loadComponent: () =>
      loadRemoteModule({
        remoteName: 'remote',
        exposedModule: './Component',
      }).then((m) => m.AppComponent),
  },
];
