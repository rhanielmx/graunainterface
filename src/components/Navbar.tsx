import Link from 'next/link';

export const Navbar = () => {
    return (
        <>
            <nav className='flex items-center flex-wrap bg-gray-400 p-1 container-fluid'>
                <Link href='/'>
                    <a className='inline-flex items-center p-2 mr-2 '>
                        <svg xmlns="http://www.w3.org/2000/svg" className='fill-current text-white h-8 w-8 mr-2' fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path d="M12 14l9-5-9-5-9 5 9 5z" />
                            <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                        </svg>
                        <span className='text-xl text-white font-bold uppercase tracking-wide'>
                            Graúna
                        </span>
                    </a>
                </Link>
                <Link href='/about'>
                    <a className='inline-flex items-center p-2 mr-2'>
                        <span className='text-xl text-white font-bold uppercase tracking-wide'>Sobre</span>
                    </a>
                </Link>
                <Link href='/admin'>
                    <a className='inline-flex items-center p-2 mr-2'>
                        <span className='text-xl text-white font-bold uppercase tracking-wide'>Admin</span>
                    </a>
                </Link>

            </nav>
        </>
    );
};