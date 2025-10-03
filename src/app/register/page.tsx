'use client';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import Image from 'next/image';
import { Eye, EyeOff } from 'lucide-react';
import { useState } from 'react';

export default function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  return (
    <div className='register-page flex flex-col items-center justify-center min-h-screen px-4'>
      <Card className='w-full max-w-sm'>
        <CardHeader className='flex items-center gap-2'>
          <Image src='/Logo.svg' alt='Logo' width={32} height={32} priority />
          <h1 className='font-bold text-xl text-neutral-950'>Shirt</h1>
        </CardHeader>
        <CardTitle className=' flex flex-col gap-3 px-6 text-2xl font-bold text-neutral-950'>
          Register
          <CardDescription className=' font-normal gap-3 text-sm/7 text-base-700'>
            Just a few steps away from your next favorite purchase
          </CardDescription>
        </CardTitle>
        <CardContent>
          <form>
            <div className='grid gap-3'>
              <div className='grid gap-2'>
                <Input
                  className='w-full h-12'
                  id='name'
                  type='text'
                  placeholder='Name'
                  required
                />
              </div>
              <div className='grid gap-2'>
                <Input
                  className='w-full h-12'
                  id='number-phone'
                  type='number'
                  placeholder='Number Phone'
                  required
                />
              </div>
              <div className='grid gap-2'>
                <Input
                  className='w-full h-12'
                  id='email'
                  type='email'
                  placeholder='Email'
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className='grid gap-2'>
                <div className='relative'>
                  <Input
                    className='w-full h-12'
                    id='password'
                    type={showPassword ? 'text' : 'password'}
                    placeholder='Password'
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <button
                    type='button'
                    className='absolute right-2 top-1/2 transform -translate-y-1/2'
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <Eye className='text-gray-500' />
                    ) : (
                      <EyeOff className='text-gray-500' />
                    )}
                  </button>
                </div>
              </div>
              <div className='grid gap-2'>
                <div className='relative'>
                  <Input
                    className='w-full h-12'
                    id='confirm-password'
                    type={showConfirmPassword ? 'text' : 'password'}
                    placeholder='Confirm Password'
                    required
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                  <button
                    type='button'
                    className='absolute right-2 top-1/2 transform -translate-y-1/2'
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  >
                    {showConfirmPassword ? (
                      <Eye className='text-gray-500' />
                    ) : (
                      <EyeOff className='text-gray-500' />
                    )}
                  </button>
                </div>
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className='grid gap-2'>
          <Button type='submit' className='w-full h-12 text-sm font-semibold'>
            Submit
          </Button>
          <div className='text-center text-sm text-base-950'>
            Already have an account?{' '}
            <a
              href='/login'
              className='text-sm font-bold text-base-950 underline'
            >
              Log In
            </a>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
