export default function Clients() {
  const clients = [
    { name: "Fashion Central", logo: "https://example.com/fashion-central.svg" },
    { name: "Byepix", logo: "https://example.com/byepix.svg" },
    { name: "IFB", logo: "https://example.com/ifb.svg" },
    { name: "Idera", logo: "https://example.com/idera.svg" },
    { name: "Sencha", logo: "https://example.com/sencha.svg" }
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center justify-items-center">
          {clients.map((client) => (
            <div key={client.name} className="flex items-center justify-center">
              <span className="text-xl font-semibold text-gray-600">{client.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}