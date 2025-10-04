export default function Footer() {
  return (
    <footer className="bg-gray-50 relative">
      <div className="absolute inset-0 bg-[url(/images/tile-grid-black.png)] bg-size-[17px] opacity-20 bg-position-[0_1]" />
      <div className="container relative">
        <div className="flex flex-col items-center py-28 lg:flex-row justify-between">
          <div>
<h3 className="mb-10 text-center text-4xl font-mono leading-tight tracking-tighter lg:mb-0  lg:pr-4 lg:text-left lg:text-2xl">
            More Than OK
          </h3>
          <p className="text-gray-500">Life in Oklahoma and beyond.</p>
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
