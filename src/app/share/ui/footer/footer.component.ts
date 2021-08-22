import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(): void{
    alert('Chức năng hiện tại đang trong giai đoạn phát triển, chúng tôi sẽ cố gắng hoàn thiện sớm nhất xin cảm ơn !')
  }
}
