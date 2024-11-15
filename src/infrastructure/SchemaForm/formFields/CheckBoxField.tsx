import { useFieldInfo, useTsController } from "@ts-react/form";

export function CheckBoxField() {
  const {
    field: { onChange, value, name },
  } = useTsController<boolean>();

  const { label } = useFieldInfo();

  return (
    <div>
      <input
        id={name}
        onChange={(e) => onChange(e.target.checked)}
        checked={value ? value : false}
        type="checkbox"
      />
      <label htmlFor={name}>{label}</label>
    </div>
  );
}
