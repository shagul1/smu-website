import { FC } from "react";

export interface VideoSectionProps {
  youtubeId: string;
  title: string;
}

const VideoSection: FC<VideoSectionProps> = ({ youtubeId, title }) => (
  <section className="bg-smu-light-gray py-16" aria-label="Campus video">
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold text-smu-blue mb-2 text-center">{title}</h2>
      <p className="text-center text-smu-text mb-8">
        See what life is like on campus in the heart of Dallas.
      </p>

      <div className="relative aspect-video rounded-xl overflow-hidden shadow-lg">
        <iframe
          src={`https://www.youtube.com/embed/${youtubeId}`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 w-full h-full"
        />
      </div>
    </div>
  </section>
);

export default VideoSection;
