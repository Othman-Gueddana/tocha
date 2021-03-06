import { Component, OnInit } from '@angular/core';
import { ToastrService } from "ngx-toastr";
import { CompanyUsersService } from "../../services/company-users.service";
import { ClientUsersService } from "../../services/client-users.service";
import { ProductsService } from "../../services/products.service";
@Component({
  selector: 'notifications-cmp',
  templateUrl: 'notifications.component.html',
  styleUrls: ['./notifications.component.scss']
})

export class NotificationsComponent implements OnInit {
  allCompanyUsers: Array<any> = [];
  allClientUsers: Array<any> = [];
  allProducts: Array<any> = [];
  CompanyRequests = 0;
  ClientRequests = 0;
  ProductsRequests = 0;
  constructor(private toastr: ToastrService, private service1: CompanyUsersService, private service2: ClientUsersService, private service3: ProductsService) { }

  ngOnInit(): void {
    this.service1.getCompanyUsers().subscribe((data: any) => {
      this.allCompanyUsers = data;
      this.CompanyRequests = this.allCompanyUsers.length
    })
    this.service2.getClientUsers().subscribe((data: any) => {
      this.allClientUsers = data;
      this.ClientRequests = this.allClientUsers.length
    })
    this.service3.getProducts().subscribe((data: any) => {
      this.allProducts = data;
      console.log(data);
      this.ProductsRequests = this.allProducts.length
    });

  }




  showNotification(from, align) {
    const color = Math.floor(Math.random() * 5 + 1);

    switch (color) {
      case 1:
        this.toastr.info(
          '<span data-notify="icon" class="nc-icon nc-bell-55"></span><span data-notify="message">Welcome to <b>Paper Dashboard Angular</b> - a beautiful bootstrap dashboard for every web developer.</span>',
          "",
          {
            timeOut: 4000,
            closeButton: true,
            enableHtml: true,
            toastClass: "alert alert-info alert-with-icon",
            positionClass: "toast-" + from + "-" + align
          }
        );
        break;
      case 2:
        this.toastr.success(
          '<span data-notify="icon" class="nc-icon nc-bell-55"></span><span data-notify="message">Welcome to <b>Paper Dashboard Angular</b> - a beautiful bootstrap dashboard for every web developer.</span>',
          "",
          {
            timeOut: 4000,
            closeButton: true,
            enableHtml: true,
            toastClass: "alert alert-success alert-with-icon",
            positionClass: "toast-" + from + "-" + align
          }
        );
        break;
      case 3:
        this.toastr.warning(
          '<span data-notify="icon" class="nc-icon nc-bell-55"></span><span data-notify="message">Welcome to <b>Paper Dashboard Angular</b> - a beautiful bootstrap dashboard for every web developer.</span>',
          "",
          {
            timeOut: 4000,
            closeButton: true,
            enableHtml: true,
            toastClass: "alert alert-warning alert-with-icon",
            positionClass: "toast-" + from + "-" + align
          }
        );
        break;
      case 4:
        this.toastr.error(
          '<span data-notify="icon" class="nc-icon nc-bell-55"></span><span data-notify="message">Welcome to <b>Paper Dashboard Angular</b> - a beautiful bootstrap dashboard for every web developer.</span>',
          "",
          {
            timeOut: 4000,
            enableHtml: true,
            closeButton: true,
            toastClass: "alert alert-danger alert-with-icon",
            positionClass: "toast-" + from + "-" + align
          }
        );
        break;
      case 5:
        this.toastr.show(
          '<span data-notify="icon" class="nc-icon nc-bell-55"></span><span data-notify="message">Welcome to <b>Paper Dashboard Angular</b> - a beautiful bootstrap dashboard for every web developer.</span>',
          "",
          {
            timeOut: 4000,
            closeButton: true,
            enableHtml: true,
            toastClass: "alert alert-primary alert-with-icon",
            positionClass: "toast-" + from + "-" + align
          }
        );
        break;
      default:
        break;
    }
  }
}
