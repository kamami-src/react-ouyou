import { useParams, useLocation } from "react-router-dom";

export const UrlParameter = () => {
  const { id, pass } = useParams();
  const { search } = useLocation();
  const query = new URLSearchParams(search);
  return (
    <div>
      <h1>UrlParameterページです</h1>
      <p>idパラメータは {id} です</p>
      <p>passパラメータは {pass} です</p>
      <p>クエリパラメータは {query.get("name")} です</p>
    </div>
  );
};
