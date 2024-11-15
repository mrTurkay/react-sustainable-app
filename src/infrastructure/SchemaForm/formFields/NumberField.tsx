import { useFieldInfo, useTsController } from "@ts-react/form";

export function NumberField() {
  const {
    field: { onChange, value },
    error,
  } = useTsController<number>();
  const { label, placeholder } = useFieldInfo();

  return (
    <div className="form-item">
      <label>{label}</label>

      <input
        value={value !== undefined ? value + "" : ""}
        placeholder={placeholder}
        onChange={(e) => {
          const value = parseInt(e.target.value);
          if (isNaN(value)) onChange(undefined);
          else onChange(value);
        }}
      />

      {error && <span className="error"> {error.errorMessage}</span>}
    </div>
  );
}
