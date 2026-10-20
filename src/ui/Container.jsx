export default function Container({ className = "", children }) {
  return (
    <div className={`mx-auto w-full max-w-[1320px] px-[15px] ${className}`}>
      {children}
    </div>
  );
}
