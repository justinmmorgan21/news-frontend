
export function Header() {
  return (
    <header>
      <nav className="bg-slate-600 text-slate-200 py-4 px-8 flex items-center fixed top-0 w-full">
        <div className="flex flex-grow h-10 space-x-6" >
          <img src="https://logos-world.net/wp-content/uploads/2020/04/Nike-Logo.png" alt="" className="h-full w-auto object-contain"/>
          <div>Nike</div>
        </div>
        <div className="flex-end space-x-8">
          <a className="hover:bg-slate-500 rounded" href="#">Home</a><a className="hover:bg-slate-500 rounded" href="#">New (Broken)</a>
        </div>
      </nav>
    </header>
  )
}