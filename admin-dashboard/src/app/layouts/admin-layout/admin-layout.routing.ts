import { Routes } from '@angular/router';

import { ProductsComponent } from '../../pages/products/products.component';
import { UserComponent } from '../../pages/user/user.component';
import { TableComponent } from '../../pages/table/table.component';
import { TypographyComponent } from '../../pages/typography/typography.component';
import { AdminClientsComponent } from '../../pages/client/admin-clients.component';
import { CompanyComponent } from '../../pages/company/admin-company.component';
import { NotificationsComponent } from '../../pages/notifications/notifications.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'notifications', component: NotificationsComponent },
    { path: 'products', component: ProductsComponent },
    { path: 'user', component: UserComponent },
    { path: 'table', component: TableComponent },
    { path: 'typography', component: TypographyComponent },
    { path: 'clients', component: AdminClientsComponent },
    { path: 'company', component: CompanyComponent },

];
