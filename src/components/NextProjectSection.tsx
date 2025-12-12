import Link from 'next/link';
import Image from 'next/image';

const projects = [
  {
    title: 'How to Patch and Repair Drywall',
    image: '/nextProject.png'
  },
  {
    title: 'How to Build a Retaining Wall',
    image: '/nextProject.png'
  },
  {
    title: 'How to Prep and Paint Kitchen Cabinets',
    image: '/nextProject.png'
  },
  {
    title: 'Create a Border Using Edging Stones',
    image: '/nextProject.png'
  }
];

export default function NextProjectSection() {
  return (
    <section className="bg-white w-full py-12">
      <div className="w-full px-6 md:px-12">
        {/* Titre */}
        <h2 className="text-3xl font-bold mb-8">Find Your Next Project</h2>

        {/* Grille des projets */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project, index) => (
            <Link
              key={index}
              href="#"
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow group"
            >
              {/* Image */}
              <div className="relative h-56">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Titre en dessous */}
              <div className="p-6 bg-white">
                <h3 className="text-xl font-bold text-gray-800 line-clamp-2">
                  {project.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>

        {/* Barre de progression */}
        <div className="mt-8">
          <div className="h-1 bg-gray-200 rounded-full">
            <div className="h-full w-1/4 bg-blue-600 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

