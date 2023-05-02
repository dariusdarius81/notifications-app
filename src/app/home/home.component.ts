import { Observable } from 'rxjs';
import { AnnouncementService } from './../services/announcement.service';
import { Component, OnInit } from '@angular/core';
import { Announcement } from '../announcement';
import { Category } from '../category';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  announcements:Announcement[];

  selectedCategory:Category;

  filteredAnnouncements: Announcement[];

  constructor (private AnnouncementService: AnnouncementService) {

  }

  ngOnInit() {
    this.AnnouncementService.serviceCall();
    this.AnnouncementService.getAnnouncements().subscribe(announcements => {
      this.announcements = announcements
      this.filteredAnnouncements = this.announcements;
    });
  }

  filterAnnouncementBasedOnCategory(category:Category) {
    if (!category) {
      this.filteredAnnouncements = this.announcements;
      return;
    }
    this.filteredAnnouncements = this.announcements.filter (a => a.categoryId === category.id);
    console.log("(copil->parinte) (app component->categories component)Am ajuns in app component cu categoria: " + category?.name)
  }

}
