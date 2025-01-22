import Image from "next/image"

interface FeaturedCardProps {
  imageUrl: string
  title?: string
}

export function FeaturedCard({ imageUrl, title }: FeaturedCardProps) {
  return (
    <div className="relative aspect-square w-full overflow-hidden rounded-lg bg-gray-900">
      <Image src={imageUrl || "/placeholder.svg"} alt={title || "Featured content"} fill className="object-cover" />
    </div>
  )
}

