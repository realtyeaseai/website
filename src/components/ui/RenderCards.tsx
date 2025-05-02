// components/RenderCards.tsx
import Card from '@/components/ui/Card';

type Item = {
  id?: string | number;
  link: string;
  tag: string;
  title: string;
};

type RenderCardsProps = {
  items: Item[];
};

export default function RenderCards({ items }: RenderCardsProps) {
  return (
    <>
      {items.map((item) => (
        <Card key={item.id || item.title} item={item} />
      ))}
    </>
  );
}
