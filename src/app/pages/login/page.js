"use client"

import Head from "next/head";
import Link from "next/link";
import Brand from "../../components/ui/Brand/Brand";
import Button from "../../components/ui/Button/Button";
import Input from "../../components/ui/Input/Input";

export default function Login() {
  return (
    <>
      <Head>
        <title>Login</title>
      </Head>
      <main className='w-full h-screen flex flex-col items-center justify-center px-4'>
        <div className='max-w-sm w-full text-gray-300'>
          <div className='text-center'>
            <Brand className='mx-auto w-32' />
            <div className='mt-5 space-y-2'>
              <h1 className='text-white text-2xl font-bold sm:text-3xl'>
                Log in to your account
              </h1>
              <p className=''>
                Don't have an account?{" "}
                <Link
                  href='/#pricing'
                  className='font-medium text-purple-500 hover:text-purple-600 duration-150'>
                  Get access
                </Link>
              </p>
            </div>
          </div>
          <form onSubmit={(e) => e.preventDefault()} className='mt-8 space-y-5'>
            <div>
              <label className='font-medium'>Email</label>
              <Input
                type='email'
                required
                className='w-full mt-2 text-gray-300 bg-gray-800 focus:bg-gray-900 focus:border-gray-800'
              />
            </div>
            <div>
              <label className='font-medium'>Password</label>
              <Input
                type='password'
                required
                className='w-full mt-2 text-gray-300 bg-gray-800 focus:bg-gray-900 focus:border-gray-800'
              />
            </div>
            <Button className='w-full text-gray-800 bg-gray-100 hover:bg-gray-200 ring-offset-2 focus:ring rounded-lg'>
              Sign in
            </Button>
          </form>
        </div>
      </main>
    </>
  );
}
