import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SeoService } from '../../services/seo.service';

interface Producto {
  id: number;
  nombre: string;
  descripcion: string;
  precio: number;
  imagen: string;
  categoria: string;
}

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss']
})
export class ProductosComponent implements OnInit {
  
  productos: Producto[] = [
    {
      id: 1,
      nombre: 'Pan Artesanal Integral',
      descripcion: 'Pan fresco hecho con harina integral y semillas naturales.',
      precio: 8.50,
      imagen: '/assets/productos/pan-integral.jpg',
      categoria: 'Pan'
    },
    {
      id: 2,
      nombre: 'Baguette Francesa',
      descripcion: 'Tradicional baguette crujiente por fuera y suave por dentro.',
      precio: 5.00,
      imagen: '/assets/productos/baguette.jpg',
      categoria: 'Pan'
    },
    {
      id: 3,
      nombre: 'Croissant de Mantequilla',
      descripcion: 'Delicioso croissant hojaldrado hecho a mano con mantequilla.',
      precio: 6.50,
      imagen: '/assets/productos/croissant.jpg',
      categoria: 'Bollería'
    },
    {
      id: 4,
      nombre: 'Muffin de Chocolate',
      descripcion: 'Muffin esponjoso con trozos de chocolate fundido.',
      precio: 4.50,
      imagen: '/assets/productos/muffin-chocolate.jpg',
      categoria: 'Dulces'
    },
    {
      id: 5,
      nombre: 'Pan de Nuez',
      descripcion: 'Pan dulce con nueces recién horneado para desayunos especiales.',
      precio: 9.00,
      imagen: '/assets/productos/pan-nuez.jpg',
      categoria: 'Pan'
    },
    {
      id: 6,
      nombre: 'Medialuna de Jamón y Queso',
      descripcion: 'Bollería rellena de jamón y queso, ideal para la merienda.',
      precio: 5.50,
      imagen: '/assets/productos/medialuna.jpg',
      categoria: 'Bollería'
    }
  ];

  categorias = ['Todos', 'Pan', 'Bollería', 'Dulces'];
  categoriaSeleccionada = 'Todos';

  constructor(private seoService: SeoService) { }

  ngOnInit(): void {
    this.seoService.updateTitle('Productos - Panadería Artesanal');
    this.seoService.updateMetaTags(
      'Explora nuestro catálogo de panes, bollería y dulces artesanales. Productos frescos y de alta calidad.',
      'panadería, productos, pan, bollería, dulces, artesanal, fresco',
      'https://panaderia.com/assets/og-productos.jpg'
    );
    this.seoService.updateCanonicalUrl('https://panaderia.com/productos');
  }

  filtrarProductos(): Producto[] {
    if (this.categoriaSeleccionada === 'Todos') {
      return this.productos;
    }
    return this.productos.filter(producto => producto.categoria === this.categoriaSeleccionada);
  }

  seleccionarCategoria(categoria: string): void {
    this.categoriaSeleccionada = categoria;
  }

}
