import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";
import { NgApexchartsModule } from "ng-apexcharts";
import { AdminDashboardComponent } from "./dashboard.component";
import { SalesRatioComponent } from "./dashboard-components/sales-ratio/sales-ratio.component";
import { FeedsComponent } from "./dashboard-components/feeds/feeds.component";
import { CustomerDetailsComponent } from "./dashboard-components/customer-details/customer-details.component";
import { TopCardsComponent } from "./dashboard-components/top-cards/top-cards.component";
import { BlogCardsComponent } from "./dashboard-components/blog-cards/blog-cards.component";


import {  GridModule } from "@progress/kendo-angular-grid";
import { ButtonsModule } from "@progress/kendo-angular-buttons";
import { InputsModule } from "@progress/kendo-angular-inputs";
import { FoodItemComponent } from './dashboard-components/food-item/food-item.component';



const routes: Routes = [
  {
    path: "",
    data: {
      title: "Dashboard",
      // urls: [{ title: "Dashboard", url: "/dashboard" }, { title: "Dashboard" }],
    },
    component: AdminDashboardComponent,
    
  },
  {
    path: "food-item",
    component : BlogCardsComponent,
  }


];

@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    RouterModule.forChild(routes),
    NgApexchartsModule,
    FormsModule,
    ButtonsModule,
    InputsModule,
    GridModule
  
  ],
  declarations: [
    AdminDashboardComponent,
    SalesRatioComponent,
    FeedsComponent,
    CustomerDetailsComponent,
    TopCardsComponent,
    BlogCardsComponent,
    FoodItemComponent ,

  ],
  bootstrap : [CustomerDetailsComponent]
})
export class DashboardModule {}
