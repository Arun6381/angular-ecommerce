import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VideoService {
  private apiUrl = 'https://localhost:7217/api/Video'; // Your backend API URL

  constructor(private http:HttpClient) { }
  uploadVideo(videoFile: File): Observable<any> {
    const formData = new FormData();
    formData.append('videoFile', videoFile);

    return this.http.post(`${this.apiUrl}/upload`, formData);
  }
}
