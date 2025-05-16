const TrustedBySection = () => {
  return (
    <section className="border-y bg-transparent py-12">
      <div className="container">
        <h2 className="text-center text-lg font-medium text-[#666666] mb-8">
          Utilizado por milhares de pessoas em todo o Brasil
        </h2>x
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center justify-items-center opacity-70">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <img
              key={i}
              src={`https://via.placeholder.com/120x40?text=Logo+${i}`}
              alt={`Partner logo ${i}`}
              className="h-8 w-auto"
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default TrustedBySection
