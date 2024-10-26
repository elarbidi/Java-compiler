// app/[param]/page.tsx

import { Metadata } from 'next';
import { FC } from 'react';
import Compiler from '../component/compiler';


// Metadata for SEO
export const metadata: Metadata = {
  title: 'Dynamic Page',
};

interface ParamPageProps {
  params: { param: string };
}

const ParamPage: FC<ParamPageProps> = ({ params }) => {
  const  param  = params.param.split('-').join(" "); // Extract the parameter from the props

  return (
    <div>
      <h1 className="text-4xl font-bold text-center mb-6 text-gray-800">{param}</h1> {/* Display the parameter in the H1 tag */}
      <Compiler />
    </div>
  );
};

// Default export to support dynamic routing
export default ParamPage;
