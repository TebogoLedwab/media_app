import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { USERS } from "src/app/mock-files";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  user = USERS;
  constructor(private router: Router) {}
  username: String;
  password: String;

  ngOnInit() {}

  // This is for verifying users in the database
  // This guntion must query the database for users and then route to the home page upon succes of login
  login(username, password): void {
    for (let i = 0; i < this.user.length; i++) {
      if (
        this.user[i].username === username &&
        this.user[i].password === password
      ) {
        this.router.navigate(["home"]);
        return;
      }
    }
    alert("Invalid credentials");
  
  }
}
