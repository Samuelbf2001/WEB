import { useEffect } from 'react';

interface SchemaOrgProps {
  schema: Record<string, unknown>;
}

const SchemaOrg = ({ schema }: SchemaOrgProps) => {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, [schema]);

  return null;
};

export default SchemaOrg;
