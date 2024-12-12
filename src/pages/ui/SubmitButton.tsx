import { useFormStatus } from "react-dom";

export const SubmitButton = () => {
  const status = useFormStatus();

  return (
    <button
      type="submit"
      disabled={status.pending}
      className="bg-blue-500 text-white p-2 cursor-pointer rounded flex-1 opacity-100 sm:flex-none disabled:bg-gray-500"
    >
      Agregar planeta
    </button>
  );
};
