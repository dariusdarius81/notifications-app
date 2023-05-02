import { AnnouncementService } from './../services/announcement.service';
import { Announcement } from './../announcement';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-announcement',
  templateUrl: './announcement.component.html',
  styleUrls: ['./announcement.component.scss']
})
export class AnnouncementComponent {
  // schimbare inptus cu anunt

  @Input() id: string;
  @Input() title: string;
  @Input() author: string;
  @Input() message: string;

  // output pentru reimprospatare automata dupa delete

  constructor(private AnnouncementService: AnnouncementService) {}

  deleteAnnouncement(id: string) {
    this.AnnouncementService.deleteAnnouncement(id);
  }
}
