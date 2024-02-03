import { Component } from '@angular/core';
import { normalizePath } from '../../lib/stringUtils';
import { readFile } from 'fs';

@Component({
  selector: 'app-read-file-as-content',
  standalone: true,
  imports: [],
  templateUrl: './read-file-as-content.component.html',
  styleUrl: './read-file-as-content.component.scss'
})
export class ReadFileAsContentComponent {

  constructor() { }

  ngOnInit(): void {
  }

  fileContent: string = '';

  onFileChange(filePath: string) {
    this.getFileContent(filePath).then((data) => {
      this.fileContent = data;
    });
  }

  public getFileContent(filePath: string): Promise<string> {
    filePath = normalizePath(filePath);
    return new Promise((resolve, reject) => {
      readFile(filePath, 'utf8', (error: Error, data: string) => {
        if (error) {
          console.warn(`Unable to read file: ${filePath}, error: ${(error)}`);
          reject(error);
          return;
        }
        resolve(data);
      });
    });
  }

}


