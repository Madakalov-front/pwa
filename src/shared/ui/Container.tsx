type ContainerProps = {
  children: React.ReactNode;
};

export const Container = ({ children }: ContainerProps) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-2xl">
      <div className="mx-auto max-w-7xl px-6 py-16 grid grid-cols-3 gap-2 ">{children}</div>
    </div>
  );
};
