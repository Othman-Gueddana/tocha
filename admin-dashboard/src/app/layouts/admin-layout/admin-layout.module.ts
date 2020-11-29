import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AdminLayoutRoutes } from './admin-layout.routing';

import { ProductsComponent } from '../../pages/products/products.component';
import { UserComponent } from '../../pages/user/user.component';
import { TableComponent } from '../../pages/table/table.component';
import { TypographyComponent } from '../../pages/typography/typography.component';
import { AdminClientsComponent } from '../../pages/client/admin-clients.component';
import { CompanyComponent } from '../../pages/company/admin-company.component';
import { NotificationsComponent } from '../../pages/notifications/notifications.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    NgbModule
  ],
  declarations: [
    ProductsComponent,
    UserComponent,
    TableComponent,
    TypographyComponent,
    AdminClientsComponent,
    CompanyComponent,
    NotificationsComponent,
  ]
})

export class AdminLayoutModule { }
