import Image from 'next/image';

const HeroImageWithTitle = ({
  image,
  title,
}: {
  image: string;
  title: string;
}) => {
  return (
    <div className='hero_content'>
      <h3 className='hero_title'>{title}</h3>
      <div>
        <Image
          src={image}
          alt='background'
          objectFit='cover'
          layout='fill'
          priority
        />
      </div>
    </div>
  );
};
export default HeroImageWithTitle;
