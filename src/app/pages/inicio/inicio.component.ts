import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SeoService } from '../../services/seo.service';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {

  constructor(private seoService: SeoService) { }

  ngOnInit(): void {
    this.seoService.updateTitle('Panadería Dulce Hogar - Inicio | Pan artesanal y repostería fresca');
    this.seoService.updateMetaTags(
      'En Panadería Dulce Hogar encontrarás pan artesanal, postres frescos y café de calidad. Productos hechos con pasión y tradición para toda la familia.',
      'panadería, pan artesanal, repostería, dulces, pasteles, café, Dulce Hogar, pan fresco',
      'https://tusitio.com/assets/og-panaderia.jpg'
    );
    this.seoService.updateCanonicalUrl('https://tusitio.com/');
  }

}
