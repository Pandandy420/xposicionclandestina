'use client';

import { supabase } from '@/supabase/client';
import { useEffect, useState } from 'react';

export default function ViewPage({ params }: { params: { token: string } }) {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const { data, error } = await supabase
        .from('obras')
        .select('nombre_archivo')
        .eq('token', params.token)
        .single();

      if (data && data.nombre_archivo) {
        setImageUrl(
          `https://clhfzovovplhzoxwobpw.supabase.co/storage/v1/object/public/artimage/${data.nombre_archivo}`
        );
      } else {
        setError(true);
      }
    }

    fetchData();
  }, [params.token]);

  if (error) {
    return <div className="text-center mt-10 text-red-500">Obra no encontrada</div>;
  }

  return (
    <div className="flex justify-center items-center h-screen bg-black">
      {imageUrl ? (
        <img
          src={imageUrl}
          alt="Obra de arte"
          className="max-w-full max-h-full object-contain border-4 border-white shadow-xl"
        />
      ) : (
        <div className="text-white">Cargando...</div>
      )}
    </div>
  );
}
