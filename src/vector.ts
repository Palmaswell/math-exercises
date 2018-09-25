export interface VectorProps {
  x: number;
  y: number;
  z: number;
}

export interface VectorFactoryProps {
  create(): VectorProps;
  add(): VectorProps;
}


export const Vector = ({ x, y, z }: VectorProps) => ({
  create: (): VectorFactoryProps => ({
    x,
    y,
    z,
    add: ({ x2, y2, z2 }): VectorProps => (
      Object.create({
        x: x2 + x,
        y: y2 + y,
        z: z2 + z
      })
    )
  }),
});

export default Vector;
