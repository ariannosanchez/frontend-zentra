import { Component } from '@angular/core';

import { TableModule } from 'primeng/table';


@Component({
  selector: 'app-lead-list',
  imports: [TableModule],
  templateUrl: './lead-list.component.html',
  styleUrl: './lead-list.component.css',
})
export class LeadListComponent {
  leads: any[] = [
    {
      id: '1001',
      date_created: '28/02/2025',
      name: 'Pedro Castillo Asesor Inmobiliario',
      phone: '51974758668',
      adviser: 'Raúl Mendoza',
      status: 'DESCARTADO',
      comment: ''
    },
    {
      id: '1002',
      date_created: '05/01/2025',
      name: 'Luis Fernández Asesor Inmobiliario',
      phone: '51952649326',
      adviser: 'Elena Ríos',
      status: 'DESCARTADO',
      comment: ''
    },
    {
      id: '1003',
      date_created: '13/01/2025',
      name: 'Luis Fernández Asesor Inmobiliario',
      phone: '51958249421',
      adviser: 'Elena Ríos',
      status: 'DESCARTADO',
      comment: ''
    },
    {
      id: '1004',
      date_created: '05/01/2025',
      name: 'Ana Pérez Asesor Inmobiliario',
      phone: '51931721548',
      adviser: 'Jorge Zea',
      status: 'NO CONTESTA',
      comment: ''
    },
    {
      id: '1005',
      date_created: '08/01/2025',
      name: 'María López Asesor Inmobiliario',
      phone: '51905775072',
      adviser: 'Elena Ríos',
      status: 'DESCARTADO',
      comment: ''
    },
    {
      id: '1006',
      date_created: '27/01/2025',
      name: 'Sofía Herrera Asesor Inmobiliario',
      phone: '51907426958',
      adviser: 'Elena Ríos',
      status: 'INTERESADO',
      comment: ''
    },
    {
      id: '1007',
      date_created: '14/01/2025',
      name: 'Pedro Castillo Asesor Inmobiliario',
      phone: '51929068250',
      adviser: 'Jorge Zea',
      status: 'NO CONTESTA',
      comment: ''
    },
    {
      id: '1008',
      date_created: '09/03/2025',
      name: 'Luis Fernández Asesor Inmobiliario',
      phone: '51904844598',
      adviser: 'Andrea Ponce',
      status: 'EN SEGUIMIENTO',
      comment: ''
    },
    {
      id: '1009',
      date_created: '29/01/2025',
      name: 'Pedro Castillo Asesor Inmobiliario',
      phone: '51961077239',
      adviser: 'Jorge Zea',
      status: 'EN SEGUIMIENTO',
      comment: ''
    },
    {
      id: '1010',
      date_created: '09/02/2025',
      name: 'Sofía Herrera Asesor Inmobiliario',
      phone: '51996270000',
      adviser: 'Jorge Zea',
      status: 'EN SEGUIMIENTO',
      comment: ''
    },
    {
      id: '1011',
      date_created: '02/04/2025',
      name: 'Ana Pérez Asesor Inmobiliario',
      phone: '51956264917',
      adviser: 'Andrea Ponce',
      status: 'DESCARTADO',
      comment: ''
    },
    {
      id: '1012',
      date_created: '20/02/2025',
      name: 'Luis Fernández Asesor Inmobiliario',
      phone: '51942615573',
      adviser: 'Andrea Ponce',
      status: 'DESCARTADO',
      comment: ''
    },
    {
      id: '1013',
      date_created: '21/01/2025',
      name: 'Sofía Herrera Asesor Inmobiliario',
      phone: '51953821299',
      adviser: 'Elena Ríos',
      status: 'INTERESADO',
      comment: ''
    },
    {
      id: '1014',
      date_created: '27/02/2025',
      name: 'Ana Pérez Asesor Inmobiliario',
      phone: '51988458546',
      adviser: 'Elena Ríos',
      status: 'INTERESADO',
      comment: ''
    },
    {
      id: '1015',
      date_created: '31/01/2025',
      name: 'Pedro Castillo Asesor Inmobiliario',
      phone: '51924933215',
      adviser: 'Andrea Ponce',
      status: 'NO CONTESTA',
      comment: ''
    },
    {
      id: '1016',
      date_created: '03/03/2025',
      name: 'Sofía Herrera Asesor Inmobiliario',
      phone: '51996481569',
      adviser: 'Elena Ríos',
      status: 'EN SEGUIMIENTO',
      comment: ''
    },
    {
      id: '1017',
      date_created: '16/01/2025',
      name: 'Lex García Asesor Inmobiliario',
      phone: '51929408063',
      adviser: 'Elena Ríos',
      status: 'EN SEGUIMIENTO',
      comment: ''
    },
    {
      id: '1018',
      date_created: '03/01/2025',
      name: 'Sofía Herrera Asesor Inmobiliario',
      phone: '51970943806',
      adviser: 'Raúl Mendoza',
      status: 'DESCARTADO',
      comment: ''
    },
    {
      id: '1019',
      date_created: '13/01/2025',
      name: 'Carlos Ramos Asesor Inmobiliario',
      phone: '51932073689',
      adviser: 'Jorge Zea',
      status: 'NO CONTESTA',
      comment: ''
    }
  ];



}
