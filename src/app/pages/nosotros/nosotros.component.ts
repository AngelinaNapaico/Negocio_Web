import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SeoService } from '../../services/seo.service';

@Component({
  selector: 'app-nosotros',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './nosotros.component.html',
  styleUrls: ['./nosotros.component.scss']
})
export class NosotrosComponent implements OnInit {

  constructor(private seoService: SeoService) { }

  ngOnInit(): void {
  this.seoService.updateTitle('Sobre Nosotros - Panadería Artesanal | Historia y Valores');
  this.seoService.updateMetaTags(
    'Conoce la historia de nuestra panadería artesanal, nuestros valores y el equipo que trabaja con pasión para ofrecer pan fresco y delicioso cada día.',
    'panadería, historia, valores, pan artesanal, equipo, tradición, calidad',
    'https://tupanaderia.com/assets/og-nosotros.jpg'
  );
  this.seoService.updateCanonicalUrl('https://tupanaderia.com/nosotros');
}

}
