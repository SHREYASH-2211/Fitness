import { useState, useEffect } from "react";

function AiComponent() {
  const [html, setHtml] = useState("");

  useEffect(() => {
    fetch("/ai.html")
      .then((res) => res.text())
      .then((data) => setHtml(data));
  }, []);

  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}

export default AiComponent;
