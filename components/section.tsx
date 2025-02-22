import { Backdrop } from "./backdrop";

type Props = {
  id: string;
  children: React.ReactNode;
  backgroundImage: string;
};

export function Section({ id, children, backgroundImage }: Props) {
  return (
    <div
      id={id}
      style={{ backgroundImage: `url(${backgroundImage})` }}
      className={`relative min-h-screen w-screen bg-cover bg-center`}
    >
      <Backdrop>{children}</Backdrop>
    </div>
  );
}
