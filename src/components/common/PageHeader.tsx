interface Props {
  title: string
  description: string
}

function PageHeader({ title, description }: Props) {
  return (
    <div className="text-center space-y-2">
      <h2 className="text-3xl md:text-4xl font-bold text-primary">{title}</h2>
      <p className="text-muted-foreground max-w-2xl mx-auto">{description}</p>
    </div>
  )
}

export default PageHeader
