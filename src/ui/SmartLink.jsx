import { Link } from "react-router-dom";

// Internal paths ("/about") use the router; everything else is a normal <a>.
export default function SmartLink({ href = "#", children, ...props }) {
  if (href.startsWith("/")) {
    return (
      <Link to={href} {...props}>
        {children}
      </Link>
    );
  }
  return (
    <a href={href} {...props}>
      {children}
    </a>
  );
}
