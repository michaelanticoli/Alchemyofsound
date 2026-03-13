import { useState, useEffect } from "react";
import { projectId, publicAnonKey } from "../utils/supabase/info";

interface ImageFile {
  name: string;
  size: number;
  createdAt: string;
  url?: string;
}

export default function ImageMapper() {
  const [images, setImages] = useState<ImageFile[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `https://${projectId}.supabase.co/functions/v1/make-server-b5eacdbd/images`,
        {
          headers: {
            Authorization: `Bearer ${publicAnonKey}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error("Failed to fetch images");
      }

      const data = await response.json();
      
      // Get signed URLs for each image
      const imagesWithUrls = await Promise.all(
        data.files.map(async (file: ImageFile) => {
          const urlResponse = await fetch(
            `https://${projectId}.supabase.co/functions/v1/make-server-b5eacdbd/images/${encodeURIComponent(file.name)}`,
            {
              headers: {
                Authorization: `Bearer ${publicAnonKey}`,
              },
            }
          );
          const urlData = await urlResponse.json();
          return {
            ...file,
            url: urlData.url,
          };
        })
      );

      setImages(imagesWithUrls);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to load images");
    } finally {
      setLoading(false);
    }
  };

  const personaMapping = {
    "Ang Bocca": ["AngBocca_img1"],
    "Silas Gogh": ["SilasGogh_img1", "SilasGogh_img2", "SilasGogh_img3"],
    "Red Casket Club": ["RedCasketClub_img1", "RedCasketClub_img2", "RedCasketClub_img3"],
    "Brokeback Kerouac": ["BrokebackKerouac_img1", "BrokebackKerouac_img2"],
    "Nadia Bizness": ["NadiaBizness_img1"],
    "Amon Ajari": ["AmonAjari_img1"],
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-black text-white p-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold mb-8">Loading images...</h1>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-black text-white p-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold mb-4">Error</h1>
          <p className="text-red-500">{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-2">Image Mapper</h1>
        <p className="text-white/60 mb-8">
          Match your uploaded images to persona slots. Copy the URLs and paste them into /components/Personae.tsx
        </p>

        <div className="mb-12 p-6 bg-white/5 border border-white/10 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Persona Image Slots</h2>
          {Object.entries(personaMapping).map(([persona, slots]) => (
            <div key={persona} className="mb-4">
              <h3 className="text-emerald-500 font-medium mb-2">{persona}</h3>
              <ul className="list-disc list-inside text-sm text-white/60 ml-4">
                {slots.map((slot) => (
                  <li key={slot}>{slot}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-semibold mb-6">Your Uploaded Images ({images.length})</h2>
        
        {images.length === 0 ? (
          <div className="p-8 bg-white/5 border border-white/10 rounded-lg text-center">
            <p className="text-white/60">No images uploaded yet. Upload via the admin panel.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((image) => (
              <div
                key={image.name}
                className="bg-white/5 border border-white/10 rounded-lg overflow-hidden"
              >
                {image.url && (
                  <img
                    src={image.url}
                    alt={image.name}
                    className="w-full h-48 object-cover"
                  />
                )}
                <div className="p-4">
                  <h3 className="font-mono text-sm mb-2 break-all">{image.name}</h3>
                  <p className="text-xs text-white/40 mb-3">
                    {(image.size / 1024).toFixed(1)} KB
                  </p>
                  <div className="bg-black p-2 rounded border border-white/20">
                    <code className="text-xs text-emerald-500 break-all block">
                      {image.url}
                    </code>
                  </div>
                  <button
                    onClick={() => {
                      navigator.clipboard.writeText(image.url || "");
                      alert("URL copied!");
                    }}
                    className="mt-3 w-full px-3 py-1.5 bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-500 rounded text-sm transition-colors"
                  >
                    Copy URL
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
