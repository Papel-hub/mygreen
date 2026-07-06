interface LoadingButtonProps {
  loading: boolean;
  text: string;
}

export default function LoadingButton({
  loading,
  text,
}: LoadingButtonProps) {
  return (
    <button
      type="submit"
      disabled={loading}
      className="
        flex
        h-12
        w-full
        items-center
        justify-center
        rounded-lg
        bg-[#169B62]
        font-semibold
        text-white
        shadow-lg
        shadow-[#169B62]/20
        transition
        hover:bg-[#138856]
        active:scale-[0.98]
        disabled:cursor-not-allowed
        disabled:opacity-70
      "
    >
      {loading ? (
        <>
          <span
            className="
              mr-3
              h-5
              w-5
              animate-spin
              rounded-full
              border-2
              border-white
              border-t-transparent
            "
          />

          Signing in...
        </>
      ) : (
        text
      )}
    </button>
  );
}