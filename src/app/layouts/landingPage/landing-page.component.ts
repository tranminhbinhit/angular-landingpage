import { Component, OnChanges, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-landing-page",
  templateUrl: "./landing-page.component.html",
  styleUrls: ["./landing-page.component.scss"],
})
export class LandingPageComponent implements OnInit {
  userInfo: any = {};
  // constructor(private userBynService: UserBynService, private authBynService: AuthBynService, private router: Router) {}
  ngOnInit() {
    // this.userBynService.initUserSession();
    // this.userBynService.userInfo$.subscribe((value) => (this.userInfo = value));
  }

  onLogout() {
    // this.authBynService.logoutUser();
    // this.router.navigate(["/auth/sign-in"]);
  }
}
