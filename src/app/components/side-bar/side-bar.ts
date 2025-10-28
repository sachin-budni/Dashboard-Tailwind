import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FileIcon, LayoutDashboard, LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-side-bar',
  imports: [LucideAngularModule, RouterLink],
  templateUrl: './side-bar.html',
  styleUrl: './side-bar.scss',
})
export class SideBar {
  readonly FileIcon = FileIcon;
  readonly LayoutDashboardIcon = LayoutDashboard;
}
