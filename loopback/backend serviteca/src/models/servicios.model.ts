import {Entity, model, property} from '@loopback/repository';

@model()
export class Servicios extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'string',
    required: true,
  })
  nombre_servicio: string;

  @property({
    type: 'string',
    required: true,
  })
  costo_servicio: string;


  constructor(data?: Partial<Servicios>) {
    super(data);
  }
}

export interface ServiciosRelations {
  // describe navigational properties here
}

export type ServiciosWithRelations = Servicios & ServiciosRelations;
