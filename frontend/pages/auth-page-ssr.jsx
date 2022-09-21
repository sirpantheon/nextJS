export default function AuthPageSSR(props) {
  return (
    <div>
      <h1>AuthPageSSR</h1>
      <pre>{JSON.stringify(props, null, 2)}</pre>
    </div>
  );
}
