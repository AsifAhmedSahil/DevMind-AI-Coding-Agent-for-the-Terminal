export function Header() {
  return (
    <box justifyContent="center" alignItems="center">
      <box flexDirection="row" justifyContent="center" gap={1.5} alignItems="center">
        <ascii-font font="tiny" text="Dev" color="gray" />
        <ascii-font font="tiny" text="Mind" />
      </box>
    </box>
  );
};