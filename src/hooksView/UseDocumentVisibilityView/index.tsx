import { useDocumentVisibility } from "../../hooks";
import { useEffect } from "react";

const Index = () => {
  const documentVisibility = useDocumentVisibility();

  useEffect(() => {
    console.log(`页面此时的状态: ${documentVisibility}`);
  }, [documentVisibility]);

  return <div>页面此时的状态: {documentVisibility}</div>;
};

export default Index;
