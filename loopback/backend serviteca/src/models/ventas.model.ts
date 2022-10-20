import {Entity, model, property} from '@loopback/repository';

@model()
export class Ventas extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'date',
    required: true,
  })
  fecha_servicios: string;

  @property({
    type: 'number',
    required: true,
  })
  valor_servicios: number;

  @property({
    type: 'number',
    required: true,
  })
  usuarios_id_usuarios: number;

  @property({
    type: 'number',
    required: true,
  })
  servicios_codigo_servicio: number;

  @property({
    type: 'number',
    required: true,
  })
  vehiculo_id_vehiculos: number;


  constructor(data?: Partial<Ventas>) {
    super(data);
  }
}

export interface VentasRelations {
  // describe navigational properties here
}

export type VentasWithRelations = Ventas & VentasRelations;
