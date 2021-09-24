import { Component, OnInit } from '@angular/core';
import {TokenStorageService} from '../../services/auth/token-storage.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-sidebar-admin',
  templateUrl: './sidebar-admin.component.html',
  styleUrls: ['./sidebar-admin.component.scss']
})
export class SidebarAdminComponent implements OnInit {

  constructor(private tokenStorageService: TokenStorageService,
              private router: Router) { }

  ngOnInit(): void {
  }

  logout(): void{
    this.tokenStorageService.logout();
    window.location.reload();
  }
}
