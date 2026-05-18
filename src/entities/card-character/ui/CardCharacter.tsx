import { memo } from "react";

export interface CardCharacterProps {
  name: string;
  image: string;
}

export const CardCharacter = memo(({ name, image }: CardCharacterProps) => {
  return (
    <div className="relative w-full h-96 rounded-2xl overflow-hidden shadow-lg group cursor-pointer">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
        style={{ backgroundImage: `url(${image})` }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/20" />

      {/* Name */}
      <div className="absolute bottom-0 w-full p-4">
        <h3 className="text-white text-xl font-semibold tracking-wide">
          {name}
        </h3>
      </div>
    </div>
  );
});
