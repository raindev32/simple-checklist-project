import Link from 'next/link'

const Navigation = () => (
    <div>
        <Link href='/'>
            <a>Home </a>
        </Link>
        <Link href='/login'>
            <a>Login </a>
        </Link>
        <Link href='/register'>
            <a>Register </a>
        </Link>
        <Link href='/checklist'>
            <a>Checklist</a>
        </Link>
    </div>
)
export default Navigation