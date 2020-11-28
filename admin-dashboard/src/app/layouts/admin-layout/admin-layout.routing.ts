import { Routes } from '@angular/router';

import { ProductsComponent } from '../../pages/dashboard/products.component';
import { UserComponent } from '../../pages/user/user.component';
import { TableComponent } from '../../pages/table/table.component';
import { TypographyComponent } from '../../pages/typography/typography.component';
import { AdminClientsComponent } from '../../pages/icons/admin-clients.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { NotificationsComponent } from '../../pages/notifications/notifications.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'products', component: ProductsComponent },
    { path: 'user', component: UserComponent },
    { path: 'table', component: TableComponent },
    { path: 'typography', component: TypographyComponent },
    { path: 'clients', component: AdminClientsComponent },
    { path: 'maps', component: MapsComponent },
    { path: 'notifications', component: NotificationsComponent },
];
