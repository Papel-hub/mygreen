// app/components/AddContactButton.tsx
interface AddContactButtonProps {
  onClick?: () => void;
}

export default function AddContactButton({ onClick }: AddContactButtonProps) {
  return (
    <button 
      onClick={onClick}
      className="w-full py-3 bg-[#042414] hover:bg-green-800 text-white font-bold rounded-xl shadow-md transition-all duration-300 transform hover:scale-[1.01] active:scale-95"
    >
      ADD CONTACT
    </button>
  );
}