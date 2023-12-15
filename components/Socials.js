// links
import Link from 'next/link';

// icons
import {
  RiLinkedinFill,
  RiInstagramLine,
  RiGithubFill,
  RiTwitterFill,
} from 'react-icons/ri';

const Socials = () => {
  return (
    <div className='flex items-center gap-x-5 text-lg'>
      <Link href={'https://www.linkedin.com/in/blnt-oral-86a933208/'} className='hover:text-accent transition-all duration-300'>
        <RiLinkedinFill />
      </Link>
      <Link href={'https://twitter.com/Blent72871823'} className='hover:text-accent transition-all duration-300'>
        <RiTwitterFill />
      </Link>
      <Link href={'https://www.instagram.com/enderson919/'} className='hover:text-accent transition-all duration-300'>
        <RiInstagramLine />
      </Link>
      
      <Link href={'https://github.com/bulent017'} className='hover:text-accent transition-all duration-300'>
        <RiGithubFill />
      </Link>
      
    </div>
  );
};

export default Socials;
