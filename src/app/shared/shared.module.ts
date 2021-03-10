import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MDBBootstrapModule } from "angular-bootstrap-md";
import { AngularFireModule } from "@angular/fire";
import { AngularFireDatabaseModule } from "@angular/fire/database";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { FormsModule, FormBuilder } from "@angular/forms";
import { RouterModule, Router } from "@angular/router";
import { OwlModule } from "ngx-owl-carousel";
import { NgxPaginationModule } from "ngx-pagination";
import { HttpClientModule } from "@angular/common/http";
import { NoAccessComponent } from "./components/no-access/no-access.component";
import { PageNotFoundComponent } from "./components/page-not-found/page-not-found.component";
import { AdminGaurd } from "./services/admin-gaurd";
import { AuthGuard } from "./services/auth_gaurd";
import { AuthService } from "./services/auth.service";
import { UserService } from "./services/user.service";
import { NgxContentLoadingModule } from "ngx-content-loading";
import { CardLoaderComponent } from "./components/card-loader/card-loader.component";
import { DragDropModule } from "@angular/cdk/drag-drop";
import { ScrollingModule } from "@angular/cdk/scrolling";
import { CdkTableModule } from "@angular/cdk/table";
import { CdkTreeModule } from "@angular/cdk/tree";
import { FireBaseConfig } from "./../../environments/firebase.config";
import {QuillModule, QUILL_CONFIG_TOKEN} from 'ngx-quill';
import { FilterByAlertPipe } from './pipes/filter-by-alert.pipe';
import { SherpaGaurd } from "./services/sherpa-guard";

@NgModule({
  imports: [
    CommonModule,
    MDBBootstrapModule.forRoot(),
    AngularFireModule.initializeApp(FireBaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    OwlModule,
    NgxPaginationModule,
    NgxContentLoadingModule,
    QuillModule.forRoot()
  
  ],
  declarations: [
    NoAccessComponent,
    PageNotFoundComponent,
    CardLoaderComponent,
  ],
  exports: [
    FormsModule,
    MDBBootstrapModule,
    AngularFireModule,
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    FormsModule,
    RouterModule,
    OwlModule,
    NgxPaginationModule,
    NoAccessComponent,
    PageNotFoundComponent,
    NgxContentLoadingModule,
    CardLoaderComponent,
    CdkTableModule,
    CdkTreeModule,
    DragDropModule,
    ScrollingModule,
    QuillModule
  ],
  providers: [
    AuthService,
    AuthGuard,
    SherpaGaurd,
    AdminGaurd,
    UserService,
    FormBuilder,
  ],
})
export class SharedModule {}
