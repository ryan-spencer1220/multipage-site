import { useLocation } from "react-router-dom";

export default function Contact() {
  const queryString = useLocation().search;
  console.log(queryString);

  const queryParams = new URLSearchParams(queryString);
  const name = queryParams.get("name");

  return (
    <div>
      <h2>Contact</h2>
      <h2>Hey {name}, Contact us here...</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
        excepturi facilis minus delectus obcaecati error, laboriosam molestiae
        nobis totam, amet qui quod non nostrum id rem exercitationem maiores,
        repellat dolorem?
      </p>
    </div>
  );
}
