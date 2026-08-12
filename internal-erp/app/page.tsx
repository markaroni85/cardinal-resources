'use client'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function InternalRoot() {
  const router = useRouter()
  useEffect(() => { router.replace('/internal/dashboard') }, [router])
  return null
}