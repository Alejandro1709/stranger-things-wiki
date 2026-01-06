interface Props {
  title: string
  description?: string
}

function Header({ title, description }: Props) {
  return (
    <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-6">
        <h1 className="text-4xl md:text-6xl font-bold text-center text-primary tracking-tight">
          {title}
        </h1>
        {description && (
          <p className="text-center text-muted-foreground mt-2 text-sm md:text-base">
            {description}
          </p>
        )}
      </div>
    </header>
  )
}

export default Header
