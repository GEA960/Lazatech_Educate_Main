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
    if (id == 'course3'){
      this.alert('Alert', 'This course is currently unavailable')
    }
    if (id == 'course4'){
      this.alert('Alert', 'This course is currently unavailable')
    }
    if (id == 'course5'){
      this.alert('Alert', 'This course is currently unavailable')
    }
    if (id == 'course6'){
      this.alert('Alert', 'This course is currently unavailable')
    }
    if (id == 'course7'){
      this.router.navigate(['/course7'])
    }
    if (id == 'course8'){
      this.router.navigate(['/course8'])
    }
    if (id == 'course9'){
      this.router.navigate(['/course9'])
    }
    if (id == 'course10'){
      this.router.navigate(['/course10'])
    }
    if (id == 'course11'){
      this.router.navigate(['/course11'])
    }
    if (id == 'course12'){
      this.router.navigate(['/course12'])
    }
    if (id == 'course13'){
      this.router.navigate(['/course13'])
    }
    if (id == this.none){
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
