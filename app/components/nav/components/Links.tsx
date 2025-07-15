export const Links = () => {
  return (
    <div className='z-20 flex gap-4 justify-self-end text-primary-100'>
      {links.map((link, idx) => (
        <div key={`link-${idx}`}>{link.name}</div>
      ))}
    </div>
  );
};
const links = [
  {
    name: (
      <p className='font-serif'>
        /Port<em>f</em>folio
      </p>
    ),
    link: '/',
  },
  {
    name: (
      <p className='font-serif'>
        /A<em>b</em>o<em>u</em>t
      </p>
    ),
    link: '/',
  },
  {
    name: (
      <p className='font-serif'>
        /Co<em>n</em>tact
      </p>
    ),
    link: '/',
  },
];
