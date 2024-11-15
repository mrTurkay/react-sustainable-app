import { useFieldInfo, useTsController } from "@ts-react/form";

type TextFieldProps = {
  className?: string;
  testId?: string;
  type?: "text" | "password" | "email";
};

export function TextField(props: TextFieldProps) {
  const { field, error } = useTsController<string>();
  const { label, placeholder } = useFieldInfo();

  return (
    <div className="form-item">
      <label>{label}</label>
      
      <input
        onChange={(e) => field.onChange(e.target.value)}
        value={field.value ? field.value : ""}
        placeholder={placeholder}
        {...props}
      />

      {error && <span className="error"> {error.errorMessage}</span>}
    </div>
  );
}
