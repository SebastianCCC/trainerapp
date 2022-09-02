const Layout = ({ children }) => {
  return (
    <div className="max-w-mobile">
      <header></header>
      <main>{children}</main>
    </div>
  )
}

export default Layout
