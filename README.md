# Model1

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.1.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

// "@angular/material/prebuilt-themes/indigo-pink.css",
// "node_modules/bootstrap/dist/css/bootstrap.min.css",
              // "node_modules/primeng/resources/themes/saga-blue/theme.css",
              // "node_modules/@progress/kendo-theme-default/dist/all.css",
              // "node_modules/primeng/resources/themes/lara-light-blue/theme.css",
              // "node_modules/primeng/resources/primeng.min.css"


              <div class="card">
    <div class="card-body">
        <!-- title -->
                <h4 class="card-title">Top Selling</h4>
                <h5 class="card-subtitle">Overview of the projects</h5>
            
        <!-- title -->
        <div class="table-responsive bg-white">
            <table class="table align-middle mb-0 bg-white">
                <thead>
                    <tr>
                        <th class="text-dark font-medium fs-4">Team Lead</th>
                        <th class="text-dark font-medium fs-4">Project</th>
                        <th class="text-dark font-medium fs-4">Status</th>
                        <th class="text-dark font-medium fs-4">Budget</th>
                    </tr>
                </thead>
                <tbody>
                    <tr *ngFor='let customer of customers'>
                        <td>
                            <div class="d-flex align-items-center">
                                <!-- <img [src]=customer.image alt="user" width="45" class="rounded-circle"> -->
                                <div class="ms-3">
                                    <h5 class="mb-0 font-medium">{{customer.customerName}}</h5>
                                    <span class="text-muted">{{customer.email}}</span>
                                </div>
                            </div>
                        </td>
                        <td class="fs-4">{{customer.phoneNumber}}</td>
                        <!-- <td>
                            <span class="p-2 bg-{{.status}} rounded-circle d-inline-block ms-3"></span>
                        </td> -->
                        <td>
                            <h5 class="mb-0 fw-normal">2</h5>
                        </td>
                    </tr>              
                </tbody>
            </table>
        </div>
    </div>
    
</div>   

