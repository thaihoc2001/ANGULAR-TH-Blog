import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.addClass();
  }
  addClass(): void{
    // tslint:disable-next-line:only-arrow-functions typedef
    window.addEventListener('scroll', function(){
      const nav = document.querySelector('nav');
      // @ts-ignore
      nav.classList.toggle('sticky', window.scrollY > 100);
    });
  }

  scrollCV(): void{
    // @ts-ignore
    document.getElementById('cv').scrollIntoView({behavior: 'smooth'});
  }

  scrollContact(): void{
    // @ts-ignore
    document.getElementById('contact').scrollIntoView({behavior: 'smooth'});
  }

  Loading(): void{
    alert('Chức năng hiện tại đang trong giai đoạn phát triển. Tôi sẽ cố gắng hoàn thành 1 cách sớm nhất ! Xin cảm ơn');
  }

  scrollWAI(): void{
    // @ts-ignore
    document.getElementById('wai').scrollIntoView({behavior: 'smooth'});
  }

  scrollTTM(): void {
    // @ts-ignore
    document.getElementById('ttm').scrollIntoView({behavior: 'smooth'});
  }
}
