import { Play, ExternalLink } from 'lucide-react';
import { useState, useEffect } from 'react';

interface YouTubeVideo {
  title: string;
  thumbnail: string;
  videoId: string;
  publishedAt: string;
}

export default function Videos() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [videos, setVideos] = useState<YouTubeVideo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const API_KEY = 'AIzaSyCSq7ORP3G9_-vAr80zqiABOV-r0XKIAgI';
  const CHANNEL_ID = 'UCY4XLjHe5QqTHp2RYnuTuKw';

  useEffect(() => {
    const fetchYouTubeVideos = async () => {
      try {
        setLoading(true);
        // First, get the uploads playlist ID from the channel
        const channelResponse = await fetch(
          `https://www.googleapis.com/youtube/v3/channels?part=contentDetails&id=${CHANNEL_ID}&key=${API_KEY}`
        );
        
        const channelData = await channelResponse.json();
        
        if (!channelData.items || channelData.items.length === 0) {
          throw new Error('Channel not found');
        }

        const uploadsPlaylistId = channelData.items[0].contentDetails.relatedPlaylists.uploads;

        // Then, get the videos from the uploads playlist
        const videosResponse = await fetch(
          `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${uploadsPlaylistId}&maxResults=6&key=${API_KEY}`
        );

        const videosData = await videosResponse.json();

        if (!videosData.items) {
          throw new Error('No videos found');
        }

        const formattedVideos: YouTubeVideo[] = videosData.items.map((item: any) => ({
          title: item.snippet.title,
          thumbnail: item.snippet.thumbnails.high?.url || item.snippet.thumbnails.medium?.url || item.snippet.thumbnails.default?.url,
          videoId: item.snippet.resourceId.videoId,
          publishedAt: item.snippet.publishedAt
        }));

        // Sort by published date (newest first)
        formattedVideos.sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
        
        setVideos(formattedVideos);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch videos');
        console.error('Error fetching YouTube videos:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchYouTubeVideos();
  }, []);

  if (loading) {
    return (
      <section id="videos" className="relative py-20 bg-gradient-to-b from-black via-gray-900 to-black">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
             <h2 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-white">Video</span>
            <span className="text-yellow-400">Hub</span>
          </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Loading videos...
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {[...Array(3)].map((_, index) => (
              <div key={index} className="aspect-video rounded-2xl bg-gray-800 animate-pulse"></div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section id="videos" className="relative py-20 bg-gradient-to-b from-black via-gray-900 to-black">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-4">
              YouTube <span className="text-yellow-400">Highlights</span>
            </h2>
            <p className="text-xl text-red-400 max-w-2xl mx-auto">
              Error: {error}
            </p>
            <p className="text-lg text-gray-400 mt-4">
              Please check your API key and channel ID
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="videos" className="relative py-20 bg-gradient-to-b from-black via-gray-900 to-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-white">Video</span>
            <span className="text-yellow-400">Hub</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Explore our latest videos, tutorials, and behind-the-scenes content
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-12">
          {videos.map((video, index) => (
            <a
              key={video.videoId}
              href={`https://www.youtube.com/watch?v=${video.videoId}`}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group relative aspect-video rounded-2xl overflow-hidden cursor-pointer"
            >
              <img
                src={video.thumbnail}
                alt={video.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div
                className={`absolute inset-0 bg-black/60 flex items-center justify-center transition-all duration-300 ${
                  hoveredIndex === index ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                  <Play className="w-8 h-8 text-black fill-black ml-1" />
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent">
                <h3 className="text-white font-bold text-lg">{video.title}</h3>
              </div>
              <div
                className={`absolute top-4 right-4 transition-all duration-300 ${
                  hoveredIndex === index ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
                }`}
              >
                <div className="w-8 h-8 bg-yellow-400/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-yellow-400">
                  <ExternalLink className="w-4 h-4 text-yellow-400" />
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="text-center">
          <a
            href={`https://www.youtube.com/channel/${CHANNEL_ID}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-bold rounded-full hover:from-yellow-300 hover:to-yellow-400 transition-all duration-300 hover:scale-105"
          >
            <Play size={20} className="fill-current" />
            Watch More on YouTube
          </a>
        </div>
      </div>
    </section>
  );
}