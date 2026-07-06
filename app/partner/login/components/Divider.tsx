export default function Divider() {
  return (
    <div className="relative flex items-center py-2">
      <div className="flex-1 border-t border-gray-200" />

      <span className="mx-4 bg-white px-2 text-sm text-gray-400">
        OR
      </span>

      <div className="flex-1 border-t border-gray-200" />
    </div>
  );
}