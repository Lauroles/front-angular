import {Component, Input, OnInit} from '@angular/core';
import {RessourceService} from '../ressource.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-ressource',
  templateUrl: './ressource.component.html',
  styleUrls: ['./ressource.component.css']
})
export class RessourceComponent implements OnInit {

  @Input() ressourceDetails = { firstname: '', lastname: '', email: ''};

  constructor(
    public ressource: RessourceService,
    public router: Router
  ) { }

  ngOnInit() {
  }

  addRessource() {
    this.ressource.createRessource(this.ressourceDetails).subscribe((data: {}) => {
      this.router.navigate(['/ressource']);
    });
  }
}
