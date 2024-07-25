import { FlowerIcon } from '@/assets';
import Image from 'next/image';
import React from 'react';

interface StaffCardProps {
  item: {
    name: string;
    title: string;
    img: string;
  };
}

const StaffCard: React.FC<StaffCardProps> = ({ item }) => {
  const { name, title, img } = item;

  return (
    <div className=' h-full w-80 sm:w-full rounded-lg overflow-hidden hover:-translate-y-1 duration-200'>
      <div className="h-40 w-full overflow-hidden">
        <Image
          src={img}
          alt={name}
          width={400}
          height={400}
          className='h-ful w-full object-cover'
        />
      </div>
      <div className="p-6 h-full bg-[#E3E2E2]"> {/* Added 'bg-white' */}
        <div className="flex relative justify-between items-center">
            <p className="font-semibold text-">{name}</p>
            <div className="absolute top-0 right-0 flex justify-end translate-x-10">
                <FlowerIcon className='flex justify-end' size={60}/>
            </div>
        </div>
        <p className="text-sm text-[#101010]">{title}</p>
      </div>
    </div>
  );
};

export default StaffCard;
