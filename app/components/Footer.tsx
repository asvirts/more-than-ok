import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-gray-50 dark:bg-gray-800 relative">
      <div className="absolute inset-0 bg-[url(/images/tile-grid-black.png)] bg-size-[17px] opacity-20 dark:opacity-10 bg-position-[0_1]" />
      <div className="container relative">
        <div className="flex flex-col items-center py-28 lg:flex-row justify-between">
          <div className="flex flex-col items-center lg:items-start">
            <Image
              src="/logo.png"
              alt="More Than OK logo"
              width={831}
              height={369}
              className="mb-10 h-12 w-auto lg:mb-4"
            />
            <p className="text-gray-500 dark:text-gray-400">Life in Oklahoma and beyond.</p>
          </div>

          <div className="flex flex-col gap-3 items-center justify-center lg:flex-row lg:pl-4">
            <a href="https://andrewvirts.com" className="mx-3 hover:underline font-mono">
              Andrew Virts
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
