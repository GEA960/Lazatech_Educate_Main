import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-lazatech-courses',
  templateUrl: './lazatech-courses.page.html',
  styleUrls: ['./lazatech-courses.page.scss'],
})
export class LazatechCoursesPage implements OnInit {

  id: any;
  none: string;
  constructor( private router: Router,
    private auth: AuthService,
    private alertCtrl: AlertController) { }

  ngOnInit() {
  }

  go(id){
    if (id == 'course1'){
      this.router.navigate(['/course1'])
    }
    if (id == 'course2'){
      this.router.navigate(['/course2'])
    }
    else if (id == 'course3'){
      this.alert('Alert', 'This course is currently unavailable')
    }
    else if (id == 'course4'){
      this.alert('Alert', 'This course is currently unavailable')
    }
    else if (id == 'course5'){
      this.alert('Alert', 'This course is currently unavailable')
    }
    else if (id == 'course6'){
      this.alert('Alert', 'This course is currently unavailable')
    }
    else if (id == 'course7'){
      this.alert('Alert', 'This course is currently unavailable')
    }
    else if (id == 'course8'){
      this.alert('Alert', 'This course is currently unavailable')
    }
    else if (id == 'course9'){
      this.alert('Alert', 'This course is currently unavailable')
    }
    else if (id == 'course10'){
      this.alert('Alert', 'This course is currently unavailable')
    }
    else if (id == 'course11'){
      this.alert('Alert', 'This course is currently unavailable')
    }
    else if (id == 'course12'){
      this.alert('Alert', 'This course is currently unavailable')
    }
    else if (id == 'course13'){
      this.alert('Alert', 'This course is currently unavailable')
    }
    else if (id == this.none){
      this.alert('Alert', 'This course is currently unavailable')
    }
  }

  async alert(header, message){
    const alert = await this.alertCtrl.create({
      header: header,
      message: message,
      buttons: ['Ok']
    });
    await alert.present();
  }
}
