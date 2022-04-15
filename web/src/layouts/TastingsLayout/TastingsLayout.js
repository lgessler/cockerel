import { Link, routes } from '@redwoodjs/router'
import { Toaster } from '@redwoodjs/web/toast'

const TastingsLayout = ({ children }) => {
  return (
    <div className="rw-scaffold">
      <Toaster toastOptions={{ className: 'rw-toast', duration: 6000 }} />
      <header className="rw-header">
        <h1 className="rw-heading rw-heading-primary">
          <Link to={routes.tastings()} className="rw-link">
            Tastings
          </Link>
        </h1>
        <Link to={routes.newTasting()} className="rw-button rw-button-green">
          <div className="rw-button-icon">+</div> New Tasting
        </Link>
      </header>
      <main className="rw-main">{children}</main>
    </div>
  )
}

export default TastingsLayout
