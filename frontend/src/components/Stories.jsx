import React, { useState } from 'react';
import { ArrowRight, Clock, BookOpen, Compass, Flame } from 'lucide-react';
import StoryModal from './StoryModal';
import storiesBg from '../assets/stories.png';
import StoriesAtmosphere from './StoriesAtmosphere';

/**
 * Editorial Heritage "Stories of Kashi" Section (Realistic, Human-Made Design)
 * Replaces synthetic cartoon SVGs with grounded editorial typography,
 * genuine photo-journalism cards, and an authentic panoramic riverfront invitation.
 */
export default function Stories({ onOpenStoriesModal }) {
  const [selectedStory, setSelectedStory] = useState(null);

  const storiesList = [
    {
      id: 1,
      title: 'The Perpetual Flame of Manikarnika',
      subtitle: 'Understanding the sacred cosmic fire that has illuminated Varanasi’s riverfront for five millennia without extinguishing.',
      tag: 'Sacred Rituals',
      readTime: '4 min read',
      image: '/images/Golden Hour on the Varanasi Ghats-3.png',
      fullStory: 'In the sacred geography of Kashi, Manikarnika Ghat stands as the eternal epicenter of liberation (Moksha). The sacred fire here, tended by the Dom Raja lineage, has burned continuously across civilizational epochs. It is said that Lord Shiva himself whispers the Taraka Mantra into the ears of departed souls. Our Manikarnika dhoop is crafted using sacred Guggal, Dashang, and floral offerings from this eternal sanctum.'
    },
    {
      id: 2,
      title: 'The Ancient Brass Guilds of Thatheri Bazaar',
      subtitle: 'Inside the narrow labyrinthine stone alleys where generational metalworkers hand-beat solid bell metal into resonant temple bells.',
      tag: 'Artisan Heritage',
      readTime: '6 min read',
      image: '/images/about/varanasi_artisan_brass.jpg',
      fullStory: 'Deep within the medieval chowk of Varanasi lies Thatheri Bazaar, a guild alley resounding with rhythmic hammer strikes. Here, families have practiced the alchemy of Kansa (bell metal) and pure brass for generations. Unlike machine-molded brass, hand-beaten bell brass retains acoustic frequencies that purify ambient spaces. Every diya bearing the Nandi Tales seal is individually forged in these historic workshops.'
    },
    {
      id: 3,
      title: 'Subah-e-Banaras: Dawn Confluence of Sound & Scent',
      subtitle: 'How the sunrise mist over Holy Ganga, ringing conch shells, and burning camphor intertwine to birth Kashi’s morning soul.',
      tag: 'Living Traditions',
      readTime: '5 min read',
      image: '/images/about/kashi_dawn_riverfront.jpg',
      fullStory: 'Long before the golden sun rises above the eastern horizon of the Ganga, the ghats awaken. Temple bells ring in rhythmic cadence, Vedic students chant ancient Suktas at Assi Ghat, and rowers gently glide across the river mist. It is this dawn serenity, fragrant with sacred marigolds, wet river silt, and burning sandalwood, that inspires our Vishwanath and Dawn Serenade incense collections.'
    }
  ];

  const handleOpenStory = (story) => {
    setSelectedStory(story);
  };

  const handleExploreAll = () => {
    if (onOpenStoriesModal) {
      onOpenStoriesModal();
    }
    setSelectedStory(storiesList[0]);
  };

  return (
    <section 
      id="stories" 
      className="stories-section-master"
      style={{
        backgroundImage: `url(${storiesBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center top',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* 1. Upper Chronicles Section (Atmosphere confined strictly here in BACKGROUND) */}
      <div className="stories-upper-chronicles-wrap">
        <StoriesAtmosphere />

        {/* Grounded Editorial Header & Journal Cards (In Foreground: z-index 2) */}
        <div className="container stories-editorial-container">
          <div className="stories-section-header">
            
            <div className="stories-clean-eyebrow">
              <span className="eyebrow-sparkle">✦</span>
              <span>CHRONICLES OF VARANASI</span>
              <span className="eyebrow-sparkle">✦</span>
            </div>

            <h2 className="stories-header-title">
              Where Every River Step <span className="stories-title-highlight">Sings an Eternal Tale</span>
            </h2>

            <p className="stories-header-desc">
              Varanasi is not merely a city; it is a living hymn carved in ancient stone. Follow the sacred curve of the Holy River Ganga through the iconic sanctums that inspire every Nandi Tales offering.
            </p>

            {/* Clean Provenance Badges (No cartoon emojis) */}
            <div className="stories-provenance-pills">
              <span className="clean-prov-pill">
                <span className="prov-dot">•</span> 84 Sacred Ghats
              </span>
              <span className="clean-prov-pill">
                <span className="prov-dot">•</span> The Assi Dawn Serenade
              </span>
              <span className="clean-prov-pill">
                <span className="prov-dot">•</span> Manikarnika Eternal Flame
              </span>
            </div>

          </div>

          {/* Three Editorial Story Journal Cards */}
          <div className="stories-editorial-grid">
            {storiesList.map((story) => (
              <article 
                key={story.id} 
                className="story-journal-card"
                onClick={() => handleOpenStory(story)}
              >
                <div className="journal-card-media">
                  <img 
                    src={story.image} 
                    alt={story.title} 
                    className="journal-card-img"
                    loading="lazy"
                  />
                  <span className="journal-tag-pill">{story.tag}</span>
                </div>

                <div className="journal-card-body">
                  <div className="journal-card-meta">
                    <Clock size={13} className="meta-clock-icon" />
                    <span>{story.readTime}</span>
                  </div>

                  <h3 className="journal-card-title">{story.title}</h3>
                  <p className="journal-card-excerpt">{story.subtitle}</p>

                  <div className="journal-card-action">
                    <span>Read Chronicle</span>
                    <ArrowRight size={14} className="action-arrow" />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>

      {/* 2. Full-Bleed Panorama Canvas (NO lanterns here) */}
      <div className="stories-panoramic-canvas">
        <img 
          src="/images/bgimage.png" 
          alt="Illustrated panoramic watercolor of Varanasi Ghats and Holy Ganga" 
          className="stories-panoramic-bg"
          loading="lazy"
        />

        <div className="stories-left-fade" />

        <div className="stories-panorama-inner">
          <div className="stories-left-content">
            <span className="stories-brand-eyebrow">
              STORIES OF KASHI
            </span>

            <h3 className="stories-banner-heading">
              A city of rituals,<br />lanes and living traditions.
            </h3>

            <p className="stories-banner-desc">
              Explore illustrated stories, places, people and practices that inspire our collections.
            </p>

            <button 
              type="button" 
              className="btn-explore-stories-pill"
              onClick={handleExploreAll}
            >
              <span>EXPLORE ALL CHRONICLES</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>

      {/* Story Detail Modal */}
      {selectedStory && (
        <StoryModal 
          story={selectedStory} 
          onClose={() => setSelectedStory(null)} 
        />
      )}

    </section>
  );
}
