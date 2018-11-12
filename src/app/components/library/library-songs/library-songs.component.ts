import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../services/api.service';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-library-songs',
  templateUrl: './library-songs.component.html',
  styleUrls: ['./library-songs.component.scss']
})
export class LibrarySongsComponent implements OnInit {

  constructor(
    private apiService: ApiService
  ) {}

  dataSource = [];

  ngOnInit() {
    this.fetchLibrarySongs( 0 );
  }

  fetchLibrarySongs( offset: number ): void {
    this.apiService.fetchLibrarySongs( offset ).subscribe( data => {
      if ( data.length ) {
        this.dataSource = this.dataSource.concat( data );
        this.fetchLibrarySongs( offset + 100 );
      }
    });
  }
}
