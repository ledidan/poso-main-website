type PageHeroProps = {
  title: string;
  subtitle?: string;
};

export function PageHero({ title, subtitle }: PageHeroProps) {
  return (
    <section className="page-hero py-16 md:py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-poso-dark mb-4">
            {title}
          </h1>
          {subtitle ? (
            <p className="text-lg md:text-xl text-poso-gray opacity-80">
              {subtitle}
            </p>
          ) : null}
        </div>
      </div>
    </section>
  );
}

