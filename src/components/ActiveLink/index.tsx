import { ReactElement, cloneElement } from 'react'
import Link, { LinkProps } from 'next/link'
import { useRouter } from 'next/router'

interface ActiveLinkProps extends LinkProps {
  children: ReactElement // significa que eu recebo apenas um elemento
  activeClass: string
}

export function ActiveLink({ activeClass, children, ...rest }: ActiveLinkProps) {
  const { asPath } = useRouter()

  const className = asPath === rest.href ? activeClass : ''

  return <Link {...rest}>{cloneElement(children, { className })}</Link>
}
