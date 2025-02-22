type Props = {
  children: React.ReactNode;
};

export function Backdrop({ children }: Props) {
  return <div className="absolute inset-0 bg-black/50 p-8">{children}</div>;
}
