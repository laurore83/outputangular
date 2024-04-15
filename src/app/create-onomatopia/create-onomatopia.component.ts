import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-create-onomatopia',
  templateUrl: './create-onomatopia.component.html',
  styleUrl: './create-onomatopia.component.css',
})
export class CreateOnomatopiaComponent implements OnInit {
  newOnomatopia: string = '';

  @Output()
  sendOnomatopiaToParent: EventEmitter<string> = new EventEmitter();

  createOnomatopia(): void {
    this.sendOnomatopiaToParent.emit(this.newOnomatopia);
    console.log(this.newOnomatopia);
  }

  ngOnInit(): void {}
}
