interface DetailItemProps {
  label: string;
  value: string;
}

export const DetailItem = ({ label, value }: DetailItemProps) => {
  return (
    <div className="flex flex-col gap-2 rounded-xl bg-zinc-800/60 p-5">
      <span className="text-sm text-zinc-500">{label}</span>
      <span className="text-lg font-medium text-zinc-200">{value || "—"}</span>
    </div>
  );
};
