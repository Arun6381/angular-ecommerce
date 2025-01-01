import { Component } from '@angular/core';
import { VideoService } from '../services/video.service';
import { GetvideoService } from '../services/getvideo.service';
import { CommonModule } from '@angular/common';
import { GetallvideoService } from '../services/getallvideo.service';
@Component({
  selector: 'app-video-upload',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './video-upload.component.html',
  styleUrl: './video-upload.component.css'
})
export class VideoUploadComponent {
  videoFile: File | null = null;
  videoBase64: string = '';
  videoContentType: string = '';
  fileName: string = '';
  isVideoUploaded: boolean = false;
  allVideos: any[] = [];
  constructor(private videoService: VideoService,private getvideo:GetvideoService,private getAllVideos :GetallvideoService) {}
 
 
  ngOnInit(): void {
    this.getAllVideoes(); 
  }

  onFileSelect(event: any): void {
    const file = event.target.files[0];
    if (file) {
      this.videoFile = file;
    }
  }

  getAllVideoes(): void {
    this.getAllVideos.getallvideos().subscribe(
      (response: any) => {
        if (Array.isArray(response) && response.length > 0) {
          this.allVideos = response.map((video: any) => {
            const videoBlob = this.base64ToBlob(video.base64Data, video.contentType);
            video.videoUrl = URL.createObjectURL(videoBlob); // Add video URL
            return video;
          });
        }
      },
      (error) => {
        console.error('Error fetching videos:', error);
        alert('Error fetching videos.');
      }
    );
  }

  onUpload(): void {
    if (!this.videoFile) {
      alert('Please select a video file to upload.');
      return;
    }

    this.videoService.uploadVideo(this.videoFile).subscribe(
      (response: any) => {
        console.log('Video uploaded successfully:', response);
        alert('Video uploaded successfully!');
        this.isVideoUploaded = true;
      },
      (error) => {
        console.error('Error uploading video:', error);
        alert('Error uploading video.');
      }
    );
  }

  onPlayVideo(id: number): void {
    this.getvideo.getVideoById(id).subscribe(
      (response: any) => {
        this.videoBase64 = response.Base64Data;  
        this.videoContentType = response.ContentType;  
        this.fileName = response.FileName;  

        const videoBlob = this.base64ToBlob(this.videoBase64, this.videoContentType);
        this.videoBase64 = URL.createObjectURL(videoBlob);  
      },
      (error) => {
        console.error('Error fetching video:', error);
        alert('Error fetching video.');
      }
    );
  }

  base64ToBlob(base64: string, contentType: string): Blob {
    const byteCharacters = atob(base64);  
    const byteArrays = [];

    for (let offset = 0; offset < byteCharacters.length; offset += 512) {
      const slice = byteCharacters.slice(offset, offset + 512);
      const byteNumbers = new Array(slice.length);

      for (let i = 0; i < slice.length; i++) {
        byteNumbers[i] = slice.charCodeAt(i);
      }

      const byteArray = new Uint8Array(byteNumbers);
      byteArrays.push(byteArray);
    }

    return new Blob(byteArrays, { type: contentType });
  }
}