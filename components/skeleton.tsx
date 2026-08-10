import { JSX } from "react/jsx-runtime";

export default function Spinner(): JSX.Element {
  return (
    <div className="flex items-center justify-center py-20">
      <div className="w-10 h-10 border-4 border-white/10 border-t-primary rounded-full animate-spin" />
    </div>
  );
}
