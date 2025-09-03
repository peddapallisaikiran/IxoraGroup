import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import TechnologyPage from './components/TechnologyPage';
import NewsAndMediaPage, { Article } from './components/NewsAndMediaPage';
import ArticleDetailPage from './components/ArticleDetailPage';
import DataCenterPage from './components/DataCenterPage';
import AviationPage from './components/AviationPage';
import CareersPage from './components/CareersPage';
import EducationPage from './components/EducationPage';
import CommercialPage from './components/CommercialPage';
import AccreditationsPage from './components/AccreditationsPage';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);

  const navigate = (page: string, data: any = null) => {
    window.scrollTo(0, 0);
    setCurrentPage(page);
    if (page === 'article-detail') {
      setSelectedArticle(data);
    }
    // Clear selected article when navigating back to the main news page
    if (page === 'news' && data === null) {
      setSelectedArticle(null);
    }
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'technology':
        return <TechnologyPage />;
      case 'data-center':
        return <DataCenterPage />;
      case 'aviation':
        return <AviationPage />;
      case 'education':
        return <EducationPage />;
      case 'commercial':
        return <CommercialPage />;
      case 'careers':
        return <CareersPage navigate={navigate} />;
      case 'news':
        return <NewsAndMediaPage navigate={navigate} />;
      case 'article-detail':
        // Fallback to news list if no article is selected
        return selectedArticle ? <ArticleDetailPage article={selectedArticle} navigate={navigate} /> : <NewsAndMediaPage navigate={navigate} />;
      case 'accreditations':
        return <AccreditationsPage />;
      case 'home':
      default:
        return <HomePage navigate={navigate} />;
    }
  };

  const pagesWithWhiteBg = ['technology', 'news', 'article-detail', 'data-center', 'aviation', 'careers', 'education', 'commercial', 'accreditations'];

  return (
    <div className={`${pagesWithWhiteBg.includes(currentPage) ? 'bg-white' : 'bg-gray-50'} min-h-screen font-sans text-gray-800 overflow-x-hidden`}>
      <Header navigate={navigate} />
      <main>
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
};

export default App;
