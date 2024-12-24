import Image from 'next/image'
import Link from 'next/link'
import React from 'react';

interface CardProps {
  id: string;
  title: string;
  category: string;
  price: number;
  imageUrl: string;
  header?: boolean;
}

const Card = ({ id, title, category, price, imageUrl, header }: CardProps) => {
  return (
    <Link href={`/product/${id}`} className="group">
      <div className='w-full max-w-[400px] hover:opacity-90 border transition-all duration-300 p-4'>
        <div className='relative aspect-square w-full mb-2'>
          <Image 
            src={imageUrl} 
            alt={title}
            width={400}
            height={400}
            className="object-fit rounded-sm transition-all duration-300 group-hover:scale-105" 
            priority
          />
        </div>
        
        <div className='flex flex-col gap-1 p-2'>
          <div className='flex justify-between items-start gap-2'>
            {header ? <h3 className='font-medium text-black text-sm group-hover:underline'>{header}</h3> : null}
            <h3 className='font-medium text-black text-sm group-hover:underline'>{title}</h3>
            <span className='text-sm font-medium'>₹ {price.toLocaleString()}</span>
          </div>
          <p className='text-gray-500 text-sm'>{category}</p>
        </div>
      </div>
    </Link>
  )
}

export default Card