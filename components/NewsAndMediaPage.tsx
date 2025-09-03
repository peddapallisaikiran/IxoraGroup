import React, { useState } from 'react';
import { PaginationArrowRightIcon } from './icons/PaginationArrowRightIcon';

export interface Article {
  imageSrc: string;
  categories: string[];
  title: string;
  fullTitle?: string;
  description: string;
  author: string;
  date: string;
  authorImage: string;
}

export const allArticles: Article[] = [
  {
    imageSrc: "https://res.cloudinary.com/ddtw77k8l/image/upload/v1756741763/1_Vkf4CIbDcorS9GpV0hJ5qg_etjs2c.webp",
    categories: ["Facilities Management"],
    title: "A Global Spotlight on Charminar — Ixora’s...",
    fullTitle: "A Global Spotlight on Charminar — Ixora’s Magic!",
    description: "How Ixora's magic brought a global spotlight to the iconic Charminar.",
    author: "IxoraGroup Team",
    date: "May 23, 2025",
    authorImage: "https://ui-avatars.com/api/?name=I&background=D4B258&color=fff&size=40",
  },
  {
    imageSrc: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2071&auto=format&fit=crop",
    categories: ["Environmental", "ESG"],
    title: "IxoraGroup India Achieves ISO 50001 Certification",
    fullTitle: "IxoraGroup India Achieves ISO 50001 Certification",
    description: "Through ISO 50001 Energy...",
    author: "IxoraGroup Team",
    date: "19 Jun, 2025",
    authorImage: "https://ui-avatars.com/api/?name=I&background=D4B258&color=fff&size=40",
  },
  {
    imageSrc: "https://images.unsplash.com/photo-1587560699334-cc426240a142?q=80&w=2070&auto=format&fit=crop",
    categories: ["ESG", "Sustainability"],
    title: "Carbon Emissions Dashboard for Retail Spaces: Turning Da...",
    fullTitle: "Carbon Emissions Dashboard for Retail Spaces: Turning Data into Action",
    description: "IxoraGroup Carbon Emission Dashboard for...",
    author: "IxoraGroup Team",
    date: "12 Jun, 2025",
    authorImage: "https://ui-avatars.com/api/?name=I&background=D4B258&color=fff&size=40",
  },
  {
    imageSrc: "https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=2070&auto=format&fit=crop",
    categories: ["Awards", "Retail"],
    title: "Retail Facility Management Success",
    fullTitle: "Retail Facility Management Success",
    description: "Discover how expert retail facility...",
    author: "IxoraGroup Team",
    date: "05 Jun, 2025",
    authorImage: "https://ui-avatars.com/api/?name=I&background=D4B258&color=fff&size=40",
  },
  {
    imageSrc: "https://images.unsplash.com/photo-1570120378033-85b30b4a45a3?q=80&w=2070&auto=format&fit=crop",
    categories: ["Aviation", "Facilities Management"],
    title: "Airport Show 2025, Dubai: What's Next for Aviation?",
    fullTitle: "Airport Show 2025, Dubai: What's Next for Aviation?",
    description: "Explore insights from Airport Show...",
    author: "IxoraGroup Team",
    date: "27 May, 2025",
    authorImage: "https://ui-avatars.com/api/?name=I&background=D4B258&color=fff&size=40",
  },
  {
    imageSrc: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2073&auto=format&fit=crop",
    categories: ["Data Center", "Hard Services"],
    title: "Facility Management in AI-Empowered Data Centres",
    fullTitle: "Facility Management in AI-Empowered Data Centres",
    description: "With the growth of AI in Data Centres...",
    author: "IxoraGroup Team",
    date: "22 May, 2025",
    authorImage: "https://ui-avatars.com/api/?name=I&background=D4B258&color=fff&size=40",
  },
  {
    imageSrc: "https://images.unsplash.com/photo-1542372882-68393f6c3216?q=80&w=1974&auto=format&fit=crop",
    categories: ["Hard Services"],
    title: "Unity: Arthur McKay to operate under IxoraGroup banner",
    fullTitle: "Unity: Arthur McKay to operate under IxoraGroup banner",
    description: "Details on the recent acquisition...",
    author: "IxoraGroup Team",
    date: "10 Jan, 2024",
    authorImage: "https://ui-avatars.com/api/?name=I&background=D4B258&color=fff&size=40",
  },
  {
    imageSrc: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop",
    categories: ["Our People"],
    title: "The Power of Listening: Why our colleague engagement...",
    fullTitle: "The Power of Listening: Why our colleague engagement matters",
    description: "Group-wide colleague survey...",
    author: "Valerie Dale",
    date: "05 Jan, 2024",
    authorImage: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=100&h=100&fit=crop",
  },
  {
    imageSrc: "https://images.unsplash.com/photo-1566275529824-cca6d008f3da?q=80&w=1974&auto=format&fit=crop",
    categories: ["Innovation"],
    title: "IxoraGroup Launches Sunflower Lanyard Scheme in...",
    fullTitle: "IxoraGroup Launches Sunflower Lanyard Scheme in the UK",
    description: "IxoraGroup Launches the globally recognis...",
    author: "DE&I Team",
    date: "04 Jan, 2024",
    authorImage: "https://ui-avatars.com/api/?name=DE&background=a0eade&color=05468E&size=40",
  },
  {
    imageSrc: "https://images.unsplash.com/photo-1619532399870-2c78bcfb55c6?q=80&w=1974&auto=format&fit=crop",
    categories: ["Brand"],
    title: "Unity: Arthur McKay to operate under the IxoraGroup banner",
    fullTitle: "Unity: Arthur McKay to operate under the IxoraGroup banner",
    description: "Further details on the strategic move...",
    author: "Brand Team",
    date: "02 Jan, 2024",
    authorImage: "https://ui-avatars.com/api/?name=B&background=D4B258&color=fff&size=40",
  },
];

const articlesData = Array.from({ length: 3 }, (_, i) => allArticles.map(a => ({...a, title: `${a.title} ${i > 0 ? `(Page ${i+1})` : ''}`}))).flat();


const NewsAndMediaPage: React.FC<{ navigate: (page: string, data?: any) => void }> = ({ navigate }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 10;
  const totalPages = Math.ceil(articlesData.length / articlesPerPage);

  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticles = articlesData.slice(indexOfFirstArticle, indexOfLastArticle);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const Pagination = () => {
    const pageNumbers = [];
    
    pageNumbers.push(
      <button
        key={1}
        onClick={() => handlePageChange(1)}
        className={`w-10 h-10 rounded-full text-sm font-semibold transition-colors ${currentPage === 1 ? 'bg-[#D4B258] text-white' : 'border border-gray-300 text-gray-500 hover:bg-gray-100'}`}
      >
        1
      </button>
    );

    if (currentPage > 3) {
      pageNumbers.push(<span key="start-ellipsis" className="px-2 text-gray-500">...</span>);
    }
    
    let startPage = Math.max(2, currentPage - 1);
    let endPage = Math.min(totalPages - 1, currentPage + 1);

    if (currentPage <= 3) {
      startPage = 2;
      endPage = Math.min(totalPages - 1, 4);
    }

    if (currentPage >= totalPages - 2) {
      startPage = Math.max(2, totalPages - 3);
      endPage = totalPages - 1;
    }

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(
        <button
          key={i}
          onClick={() => handlePageChange(i)}
          className={`w-10 h-10 rounded-full text-sm font-semibold transition-colors ${currentPage === i ? 'bg-[#D4B258] text-white' : 'border border-gray-300 text-gray-500 hover:bg-gray-100'}`}
        >
          {i}
        </button>
      );
    }

    if (currentPage < totalPages - 2) {
      pageNumbers.push(<span key="end-ellipsis" className="px-2 text-gray-500">...</span>);
    }

    if (totalPages > 1) {
        pageNumbers.push(
            <button
            key={totalPages}
            onClick={() => handlePageChange(totalPages)}
            className={`w-10 h-10 rounded-full text-sm font-semibold transition-colors ${currentPage === totalPages ? 'bg-[#D4B258] text-white' : 'border border-gray-300 text-gray-500 hover:bg-gray-100'}`}
            >
            {totalPages}
            </button>
        );
    }


    return (
        <div className="flex items-center justify-center gap-2">
            {pageNumbers}
            <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="flex items-center gap-2 pl-2 pr-4 py-2 rounded-full text-sm font-semibold border border-gray-300 text-gray-500 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
            >
                Next
                <PaginationArrowRightIcon className="w-4 h-4" />
            </button>
        </div>
    )
  }

  return (
    <div className="p-4 sm:p-6 lg:p-8 space-y-8 md:space-y-12">
      {/* Hero Section */}
      <div 
        className="bg-white rounded-3xl p-6 sm:p-8 lg:p-12 shadow-sm overflow-hidden cursor-pointer group"
        onClick={() => navigate('article-detail', allArticles[0])}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Content Column */}
          <div className="flex flex-col justify-center">
            <p className="font-semibold text-[#D4B258] text-sm mb-4">
              Latest Article
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 !leading-tight tracking-tight group-hover:text-[#D4B258] transition-colors">
              A Global Spotlight on Charminar — Ixora’s Magic!
            </h1>
            <p className="mt-6 text-gray-600">
              How Ixora's magic brought a global spotlight to the iconic Charminar.
              <span className="font-semibold text-[#D4B258] group-hover:underline ml-2">
                Read More
              </span>
            </p>
            <div className="mt-8 flex items-center">
              <img 
                src="https://ui-avatars.com/api/?name=I&background=D4B258&color=fff&size=40" 
                alt="IxoraGroup Team"
                className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-md"
              />
              <div className="ml-4">
                <p className="font-semibold text-gray-800">IxoraGroup Team</p>
                <p className="text-sm text-gray-500">May 23, 2025</p>
              </div>
            </div>
          </div>

          {/* Image Column */}
          <div className="rounded-2xl overflow-hidden -order-1 lg:order-1">
            <img 
              src="https://res.cloudinary.com/ddtw77k8l/image/upload/v1756741763/1_Vkf4CIbDcorS9GpV0hJ5qg_etjs2c.webp"
              alt="A Global Spotlight on Charminar — Ixora’s Magic!"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Articles Grid Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
        {currentArticles.map((article, index) => (
          <article 
            key={`${article.title}-${index}`} 
            className="group flex items-center gap-6 cursor-pointer"
            onClick={() => navigate('article-detail', article)}
          >
            <div className="w-1/3 flex-shrink-0">
              <div className="overflow-hidden rounded-2xl shadow-md">
                <img 
                  src={article.imageSrc} 
                  alt={article.title}
                  className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
            <div className="w-2/3">
              <p className="text-xs font-semibold text-[#D4B258] mb-2">
                {article.categories.join(' | ')}
              </p>
              <h3 className="text-lg font-bold text-gray-800 leading-tight">
                <span className="hover:text-[#D4B258] transition-colors">{article.title}</span>
              </h3>
              <p className="text-sm text-gray-600 mt-1">{article.description}</p>
              <div className="mt-4 flex items-center">
                <img 
                  src={article.authorImage}
                  alt={article.author}
                  className="w-10 h-10 rounded-full object-cover border-2 border-amber-100"
                />
                <div className="ml-3">
                  <p className="font-semibold text-sm text-gray-800">{article.author}</p>
                  <p className="text-xs text-gray-500">{article.date}</p>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Pagination */}
      <div className="pt-8">
        <Pagination />
      </div>
    </div>
  );
};

export default NewsAndMediaPage;