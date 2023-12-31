import React from 'react';
import Link from 'next/link';
import Image from 'next/image'; // Don't forget to import Image
import AuthProviders from "./AuthProviders"
import { NavLinks } from "../contants/index"
import Button from "./Button"
import ProfileMenu from "./ProfileMenu"
const Navbar = () => {
  const session = {};
  return (
    <nav className='flexBetween navbar'>
      <div className='flex-1 flexStart gap-10'>
        <Link href='/'>
          <Image
            src='/logo.svg'
            width={116}
            height={43}
            alt='logo'
          />
        </Link>
        <ul className='xl:flex hidden text-small gap-7'>
          {NavLinks.map((link) => (
            <Link href={link.href} key={link.text}>
              {link.text}
            </Link>
          ))}
        </ul>
      </div>
      <div className='flexCenter gap-4'>
        {session? (
          <>
            Userphots

            <Link href="/create-project">
             Sharework
            </Link>
          </>
        ) : (
          <AuthProviders />
        )}
      </div>
    </nav>
  );
};

export default Navbar;