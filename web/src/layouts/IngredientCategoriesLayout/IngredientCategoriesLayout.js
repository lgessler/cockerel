import { Link, routes } from '@redwoodjs/router'
import { Toaster } from '@redwoodjs/web/toast'

const IngredientCategoriesLayout = ({ children }) => {
  return (
    <div className="rw-scaffold">
      <Toaster toastOptions={{ className: 'rw-toast', duration: 6000 }} />
      <header className="rw-header">
        <h1 className="rw-heading rw-heading-primary">
          <Link to={routes.ingredientCategories()} className="rw-link">
            IngredientCategories
          </Link>
        </h1>
        <Link
          to={routes.newIngredientCategory()}
          className="rw-button rw-button-green"
        >
          <div className="rw-button-icon">+</div> New IngredientCategory
        </Link>
      </header>
      <main className="rw-main">{children}</main>
    </div>
  )
}

export default IngredientCategoriesLayout
