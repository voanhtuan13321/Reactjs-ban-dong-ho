import React from 'react';
import AccordionItem from '../../components/client/AccordionItem';

export default function About() {
  return (
    <>
      <div className="border border-spacing-2 bg-gradient-to-r from-blue-500 via-green-500 to-yellow-500 via-red-500 to-pink-500 via-purple-500 to-indigo-500">
        <h1 className="text-center text-4xl text-white font-bold mt-8 mb-4">About</h1>
      </div>
      <div className='mx-auto p-4 max-w-screen-lg'>
        <div className='mt-10'>
          <p className='text-lg mb-6'>
            # Established in 1987 in New York, Jomashop.com is a genuine watch business that works
            directly with major watch brands to get the most competitive prices. Compared to prices
            at watch stores in Vietnam, we guarantee prices will be 30-90% lower. This is an
            extremely economical choice for watch enthusiasts and lovers.
          </p>
          <p className='text-lg mb-6'>
            # Jomashop.com is in the top 10 most trusted e-commerce websites
            (https://otalliance.org/news-events/press-releases/online-trust-alliance-names-2015-most-trustworthy-ecommerce
            -sites). With more than 20 years of efforts in the watch industry, this is a very
            remarkable assessment. And as a promise, Jomashop Vietnam will also do its best to bring
            such great quality to watch "fans" in Vietnam.
          </p>
          <p className='text-lg mb-6'>
            # With many years of experience distributing Jomashop.com products; Jomashop Vietnam is
            a watch business, not a shipping company, so the products reaching you will be
            guaranteed in the best conditions, without fear of swapping or exchanging goods. In
            addition, you also receive perfect after-sales service, consulting, and warranty from
            us. The products linked on Jomashop.com are available at the US warehouse. The products
            will arrive to you within 2-3 weeks from the time of deposit.
          </p>
        </div>
        <div className='my-20 '>
          <h1 className='border-b-2 pb-3 text-lg font-bold mt-8 mb-4'>Frequently asked questions</h1>
          <div className='mx-auto max-w-screen-lg'>
            <AccordionItem
              title='1. When was Jomashop founded?'
              content='Jomashop.com was founded in 1987.

              Jomashop.vn was established in 2015 and has brought tens of thousands of watch and eyeglass products to brand enthusiasts in Vietnam. With JOMASHOP.VN, the opportunity to access watches and branded goods is easier than ever.'
            />
            <AccordionItem
              title='2. Where do Jomashop.vn products come from?  '
              content='We specialize in distributing products from Jomashop.com, prices are 30-90% lower than the manufacturer prices. If you wish to purchase from another website, please contact us for more details.'
            />
            <AccordionItem
              title='3. Are products distributed by Jomashop genuine? '
              content='Any product distributed by us will receive a GOLDEN COMMITMENT PACKAGE, double compensation if found to be FAKE.'
            />
            <AccordionItem
              title='4. Does Jomashop.vn sell ready-made brands?'
              content='We always have an extremely rich inventory to serve customers who don not want to wait long. Please visit Jomashop.vn Facebook to choose a model'
            />
          </div>
        </div>
      </div>
    </>
  );
}
