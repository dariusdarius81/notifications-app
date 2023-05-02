import { AnnouncementService } from './../services/announcement.service';
import { Component } from '@angular/core';
import { Announcement } from '../announcement';
import { Category } from '../category';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-announcement-form',
  templateUrl: './add-announcement-form.component.html',
  styleUrls: ['./add-announcement-form.component.scss'],
})
export class AddAnnouncementFormComponent {
  title: string;
  author: string;
  imageUrl: string;
  message: string;
  selectedCategory: Category;
  categories: Category[] = [
    {
      id: '1',
      name: 'General',
    },
    {
      id: '2',
      name: 'Course',
    },
    {
      id: '3',
      name: 'Laboratory',
    },
  ];

  constructor(
    private AnnouncementService: AnnouncementService,
    private router: Router
  ) {}

  addAnnouncement() {
    let announcement: Announcement = {
      id: undefined,
      title: this.title,
      author: this.author,
      message: this.message,
      categoryId: this.selectedCategory.id,
      imageUrl: this.imageUrl,
    };
    this.AnnouncementService.addAnnouncement(announcement);
    console.log(announcement);
    this.router.navigateByUrl('') ;
  }
}
