import CardDescription from '@/components/shared/card-description';
import HeroImageWithTitle from '@/components/shared/heroImageWithTitle';

const ContactPage = () => {
  return (
    <main className='container'>
      <HeroImageWithTitle title='contact' image='/img/hero/contact.jpg' />
      <div className='second_block container_blocks'>
        <CardDescription title='Opening Hours' />
        <div>Card</div>
        <div>Card</div>
        <CardDescription title='Get in touch' />
      </div>
    </main>
  );
};

export default ContactPage;
